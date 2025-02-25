import SectionTitle from '@/components/global/SectionTitle'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { fetchUserOrders } from '@/utils/actions'
import { formatCurrency, formatDate } from '@/utils/format'

export default async function OrdersPage() {
    const orders = await fetchUserOrders()
    return (
        <>
            <SectionTitle text="Ваши заказы" />
            <div>
                <Table>
                    <TableCaption>Ваши заказы : {orders.length}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Товаров</TableHead>
                            <TableHead>Общая сумма</TableHead>
                            <TableHead>Налог</TableHead>
                            <TableHead>Доставка</TableHead>
                            <TableHead>Дата</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => {
                            const { id, products, orderTotal, tax, shipping, createdAt } =
                                order
                            return (
                                <TableRow key={id}>
                                    <TableCell>{products}</TableCell>
                                    <TableCell>{formatCurrency(orderTotal)}</TableCell>
                                    <TableCell>{formatCurrency(tax)}</TableCell>
                                    <TableCell>{formatCurrency(shipping)}</TableCell>
                                    <TableCell>{formatDate(createdAt)}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}
