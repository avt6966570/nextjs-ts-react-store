import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
import { NextResponse, type NextRequest } from 'next/server'
import db from '@/utils/db'

export const POST = async (req: NextRequest) => {
    // get url origin
    const requestHeaders = new Headers(req.headers)
    const origin = requestHeaders.get('origin')

    // get order & cart id
    const { orderId, cartId } = await req.json()

    // get order
    const order = await db.order.findUnique({
        where: {
            id: orderId,
        },
    })

    // get cart with products
    const cart = await db.cart.findUnique({
        where: {
            id: cartId,
        },
        include: {
            cartItems: {
                include: {
                    product: true,
                },
            },
        },
    })

    if (!order || !cart) {
        return Response.json(null, {
            status: 404,
            statusText: 'Not found',
        })
    }

    // prepare line_items for Stripe
    const line_items = cart.cartItems.map((item) => {
        return {
            quantity: item.amount,
            price_data: {
                currency: 'rub',
                product_data: {
                    name: item.product.name,
                    images: [item.product.image],
                },
                unit_amount: item.product.price * 100, // price in cents
            },
        }
    })

    // + tax
    line_items.push({
        quantity: 1,
        price_data: {
            currency: 'rub',
            product_data: {
                name: 'Tax',
                images: [],
            },
            unit_amount: cart.tax * 100, // price in cents
        },
    })

    // + shipping
    line_items.push({
        quantity: 1,
        price_data: {
            currency: 'rub',
            product_data: {
                name: 'Shipping',
                images: [],
            },
            unit_amount: cart.shipping * 100, // price in cents
        },
    })

    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            ui_mode: 'embedded',
            line_items: line_items,
            return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
            metadata: { orderId, cartId },
        })

        return Response.json({ clientSecret: session.client_secret })
    } catch (error) {
        console.log(error)
        return Response.json(null, {
            status: 500,
            statusText: 'Internal server error',
        })
    }
}
