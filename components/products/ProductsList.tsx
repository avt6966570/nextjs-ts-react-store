import FavoriteToggleButton from '@/components/products/FavoriteToggleButton'
import { Card, CardContent } from '@/components/ui/card'
import { formatCurrency } from '@/utils/format'
import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <div className="mt-12 grid gap-y-8">
            {products.map((product) => {
                const { id: productId, name, company, price, image } = product
                const dollarsAmount = formatCurrency(price)

                return (
                    <article key={productId} className="relative group">
                        <Link href={`/products/${productId}`}>
                            <Card className="group-hover:shadow-xl transition-shadow duration-500">
                                <CardContent className="p-8 grid md:grid-cols-3">
                                    <div className="relative h-64 md:h-48 md:w-48">
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill
                                            priority
                                            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                                            className="w-full rounded-md object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold capitalize">
                                            {name}
                                        </h2>
                                        <h4 className="text-muted-foreground">
                                            {company}
                                        </h4>
                                    </div>

                                    <p className="text-muted-foreground text-lg justify-self-end">
                                        {dollarsAmount}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                        <div className="absolute bottom-8 right-8 z-5">
                            <FavoriteToggleButton productId={productId} />
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
