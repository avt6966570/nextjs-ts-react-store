import SectionTitle from '@/components/global/SectionTitle'
import ProductsGrid from '@/components/products/ProductsGrid'
import { fetchUserFavorites } from '@/utils/actions'

export default async function FavoritesPage() {
    const favorites = await fetchUserFavorites()

    return favorites.length ? (
        <>
            <SectionTitle text="Ваше избранное" />
            <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
        </>
    ) : (
        <SectionTitle text="У вас еще нет избранных товаров..." />
    )
}
