import EmptyList from '@/components/global/EmptyList'
import SectionTitle from '@/components/global/SectionTitle'
import ProductsGrid from '@/components/products/ProductsGrid'
import { fetchFeaturedProducts } from '@/utils/actions'

export default async function FeaturedProducts() {
    const products = await fetchFeaturedProducts()
    return products.length ? (
        <section className="pt-24">
            <SectionTitle text="Избранное" />
            <ProductsGrid products={products} />
        </section>
    ) : (
        <EmptyList />
    )
}
