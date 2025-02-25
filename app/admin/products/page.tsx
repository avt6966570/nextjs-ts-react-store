import { IconButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import EmptyList from '@/components/global/EmptyList'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { deleteProductAction, fetchAdminProducts } from '@/utils/actions'
import { formatCurrency } from '@/utils/format'
import Link from 'next/link'

export default async function AdminProductsPage() {
    const products = await fetchAdminProducts()

    return products.length ? (
        <Table>
            <TableCaption className="capitalize">
                всего товаров {products.length}
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Наименование</TableHead>
                    <TableHead>Производитель</TableHead>
                    <TableHead>Цена</TableHead>
                    <TableHead>Действия</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((item) => {
                    const { id: productId, name, company, price } = item
                    return (
                        <TableRow key={productId}>
                            <TableCell>
                                <Link
                                    href={`/products/${productId}`}
                                    className="underline text-muted-foreground capitalize tracking-wide"
                                >
                                    {name}
                                </Link>
                            </TableCell>
                            <TableCell>{company}</TableCell>
                            <TableCell>{formatCurrency(price)}</TableCell>
                            <TableCell className="flex items-center gap-x-2">
                                <Link href={`/admin/products/${productId}/edit`}>
                                    <IconButton actionType="edit" />
                                </Link>
                                <DeleteProduct productId={productId} />
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    ) : (
        <EmptyList />
    )
}

const DeleteProduct = ({ productId }: { productId: string }) => {
    const deleteProduct = deleteProductAction.bind(null, { productId })
    return (
        <FormContainer action={deleteProduct}>
            <IconButton actionType="delete" />
        </FormContainer>
    )
}
