'use client'

import {
    FirstColumn,
    FourthColumn,
    SecondColumn,
} from '@/components/cart/CartItemColumns'
import ThirdColumn from './ThirdColumn'
import { Card } from '@/components/ui/card'
import { CartItem, CartItemWithProduct } from '@/utils/types'

export default function CartItemsList({
    cartItems,
}: {
    cartItems: CartItemWithProduct[]
}) {
    return (
        <div>
            {cartItems.map((cartItem) => {
                const { id, amount } = cartItem
                const { id: productId, image, name, company, price } = cartItem.product

                return (
                    <Card
                        key={id}
                        className="flex flex-col gap-4 md:flex-row flex-wrap p-6 mb-8"
                    >
                        <FirstColumn image={image} name={name} />
                        <SecondColumn
                            name={name}
                            company={company}
                            productId={productId}
                        />
                        <ThirdColumn id={id} quantity={amount} />
                        <FourthColumn price={price} />
                    </Card>
                )
            })}
        </div>
    )
}
