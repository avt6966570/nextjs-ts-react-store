import Comment from '@/components/reviews/Comment'
import Rating from '@/components/reviews/Rating'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

type ReviewCardProps = {
    reviewInfo: {
        comment: string
        rating: number
        image: string
        name: string
        productId: string
    }
    children?: React.ReactNode
}

export default function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
    return (
        <Card className="relative">
            <CardHeader>
                <div className="flex items-center">
                    <Image
                        src={reviewInfo.image}
                        alt={reviewInfo.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-sm font-bold capitalize mb-1">
                            {reviewInfo.productId ? (
                                <Link href={`/products/${reviewInfo.productId}`}>
                                    {reviewInfo.name}
                                </Link>
                            ) : (
                                <>{reviewInfo.name}</>
                            )}
                        </h3>
                        <Rating rating={reviewInfo.rating} />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Comment comment={reviewInfo.comment} />
            </CardContent>
            <div className="absolute top-3 right-3">{children}</div>
        </Card>
    )
}
