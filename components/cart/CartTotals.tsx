import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import { Card, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatCurrency } from '@/utils/format'
import { Cart } from '@prisma/client'
import { createOrderAction } from '@/utils/actions'

export default function CartTotals({ cart }: { cart: Cart }) {
    const { orderTotal, shipping, tax, cartTotal } = cart
    return (
        <div>
            <Card className="p-8">
                <CartTotalRow label="Сумма" amount={cartTotal} />
                <CartTotalRow label="Доставка" amount={shipping} />
                <CartTotalRow label="Налог" amount={tax} />
                <CardTitle className="mt-8">
                    <CartTotalRow label="Итого" amount={orderTotal} lastRow />
                </CardTitle>
            </Card>
            <FormContainer action={createOrderAction}>
                <SubmitButton text="Отправить заказ" className="w-full mt-8" />
            </FormContainer>
        </div>
    )
}

const CartTotalRow = ({
    label,
    amount,
    lastRow,
}: {
    label: string
    amount: number
    lastRow?: boolean
}) => {
    return (
        <>
            <p className="flex justify-between text-sm">
                <span>{label}</span>
                <span>{formatCurrency(amount)}</span>
            </p>
            {lastRow ? null : <Separator className="my-2" />}
        </>
    )
}
