'use client'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

export default function CheckoutPage() {
    const searchParams = useSearchParams()
    const orderId = searchParams.get('orderId')
    const cartId = searchParams.get('cartId')

    const fetchClientSecret = useCallback(async () => {
        // Create a Checkout Session
        const response = await axios.post('/api/payment', {
            orderId: orderId,
            cartId: cartId,
        })
        return response.data.clientSecret
    }, [])

    const options = { fetchClientSecret }

    return (
        <div id="checkout">
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}
