import FavoriteToggleButton from '@/components/products/FavoriteToggleButton'
import { Card, CardContent } from '@/components/ui/card'
import { formatCurrency } from '@/utils/format'
import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsGrid({ products }: { products: Product[] }) {
    return (
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
                const { id: productId, name, price, image } = product
                const dollarsAmount = formatCurrency(price)
                return (
                    <article key={productId} className="relative group">
                        <Link href={`/products/${productId}`}>
                            <Card className="group-hover:shadow-xl transition-shadow duration-500">
                                <CardContent className="p-4">
                                    {/* image */}
                                    <div className="relative h-64 md:h-48 rounded overflow-hidden">
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill
                                            priority
                                            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                                            className="rounded w-full object-cover group-hover:scale-110 transform transition-transform duration-500"
                                        />
                                    </div>
                                    {/* info */}
                                    <div className="mt-4 text-center">
                                        <h2 className="text-lg capitalize">{name}</h2>
                                        <p className="mt-2 text-muted-foreground">
                                            {dollarsAmount}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <div className="absolute top-7 right-7 z-5">
                            <FavoriteToggleButton productId={productId} />
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
