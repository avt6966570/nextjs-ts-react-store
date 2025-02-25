'use client'
import SelectProductAmount from '@/components/single-product/SelectProductAmount'
import { Mode } from '../single-product/SelectProductAmount'
import { useState } from 'react'
import FormContainer from '@/components/form/FormContainer'
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions'
import { SubmitButton } from '@/components/form/Buttons'
import { useToast } from '@/components/ui/use-toast'

export default function ThirdColumn({ id, quantity }: { id: string; quantity: number }) {
    const { toast } = useToast()
    const [amount, setAmount] = useState(quantity)

    const handleAmountChange = async (value: number) => {
        setIsLoading(true)
        toast({ description: 'Calculating...' })
        const result = await updateCartItemAction({ amount: value, cartItemId: id })
        setAmount(value)
        toast({ description: result.message })
        setIsLoading(false)
    }

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="md:ml-8">
            <SelectProductAmount
                mode={Mode.CartItem}
                amount={amount}
                setAmount={handleAmountChange}
                isLoading={isLoading}
            />
            <FormContainer action={removeCartItemAction}>
                <input type="hidden" name="id" value={id} />
                <SubmitButton size="sm" className="mt-4" text="remove" />
            </FormContainer>
        </div>
    )
}
