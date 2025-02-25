import { CardSignInButton } from '@/components/form/Buttons'
import FavoriteToggleForm from '@/components/products/FavoriteToggleForm'
import { fetchFavoriteId } from '@/utils/actions'
import { auth } from '@clerk/nextjs/server'

export default async function FavoriteToggleButton({ productId }: { productId: string }) {
    const { userId } = auth()
    if (!userId) return <CardSignInButton />

    const favoriteId = await fetchFavoriteId({ productId })
    return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />
}
