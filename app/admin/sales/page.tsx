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
import { fetchAdminOrders } from '@/utils/actions'
import { formatCurrency, formatDate } from '@/utils/format'

export default async function SalesPage() {
    const orders = await fetchAdminOrders()

    return (
        <>
            <SectionTitle text="Ваши заказы" />
            <div>
                <Table>
                    <TableCaption>Всего заказов : {orders.length}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Email</TableHead>
                            <TableHead>Товары</TableHead>
                            <TableHead>Сумма</TableHead>
                            <TableHead>Налог</TableHead>
                            <TableHead>Доставка</TableHead>
                            <TableHead>Дата</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => {
                            const {
                                id,
                                products,
                                orderTotal,
                                tax,
                                shipping,
                                createdAt,
                                email,
                            } = order

                            return (
                                <TableRow key={id}>
                                    <TableCell>{email}</TableCell>
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
