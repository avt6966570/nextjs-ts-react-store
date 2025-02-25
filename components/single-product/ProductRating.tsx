import { fetchProductRating } from '@/utils/actions'
import { FaStar } from 'react-icons/fa'

export default async function ProductRating({ productId }: { productId: string }) {
    // todo
    const { rating, count } = await fetchProductRating(productId)
    const countValue = `(${count}) отзывов`
    const className = `flex gap-1 items-center text-md mt-1 mb-4`

    return (
        <span className={className}>
            <FaStar className="w-3 h-3" />
            {rating} {countValue}
        </span>
    )
}
