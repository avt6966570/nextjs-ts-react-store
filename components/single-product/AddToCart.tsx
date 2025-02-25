'use client'
import { ProductSignInButton, SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import SelectProductAmount, {
    Mode,
} from '@/components/single-product/SelectProductAmount'
import { addToCartAction } from '@/utils/actions'
import { useAuth } from '@clerk/nextjs'
import { useState } from 'react'

export default function AddToCart({ productId }: { productId: string }) {
    const { userId } = useAuth()
    const [amount, setAmount] = useState(1)

    return (
        <div className="mt-4">
            <SelectProductAmount
                mode={Mode.SingleProduct}
                amount={amount}
                setAmount={setAmount}
            />
            {userId ? (
                <FormContainer action={addToCartAction}>
                    <input type="hidden" name="productId" value={productId} />
                    <input type="hidden" name="amount" value={amount} />
                    <SubmitButton text="В корзину" size="default" className="mt-8" />
                </FormContainer>
            ) : (
                <ProductSignInButton />
            )}
        </div>
    )
}
