import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { fetchAllProducts } from '@/utils/actions'
import { LuLayoutGrid, LuLayoutList, LuList } from 'react-icons/lu'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'

export default async function ProductsContainer({
    layout,
    search,
}: {
    layout: string
    search: string
}) {
    const products = await fetchAllProducts({ search })
    const totalProducts = products.length
    const searchTerm = search ? `&search=${search}` : ''

    return (
        <>
            {/* HEADER */}
            <section>
                <div className="flex justify-between items-center">
                    <h4 className="font-medium text-lg">
                        {totalProducts} товар{totalProducts > 1 && 'ов'}
                    </h4>
                    <div className="flex gap-x-4">
                        <Button
                            asChild
                            size="icon"
                            variant={layout === 'grid' ? 'default' : 'ghost'}
                        >
                            <Link href={`/products?layout=grid${searchTerm}`}>
                                <LuLayoutGrid />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="icon"
                            variant={layout === 'list' ? 'default' : 'ghost'}
                        >
                            <Link href={`/products?layout=list${searchTerm}`}>
                                <LuList />
                            </Link>
                        </Button>
                    </div>
                </div>
                <Separator className="mt-4" />
            </section>
            {/* PRODUCTS */}
            <div>
                {totalProducts === 0 ? (
                    <h5 className="text-2xl mt-16">
                        Сожалеем, в поиске товары не найдены...
                    </h5>
                ) : layout === 'grid' ? (
                    <ProductsGrid products={products} />
                ) : (
                    <ProductsList products={products} />
                )}
            </div>
        </>
    )
}
