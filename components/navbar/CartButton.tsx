import { Button } from '@/components/ui/button'
import { LuShoppingCart } from 'react-icons/lu'
import Link from 'next/link'
import { fetchCartItems } from '@/utils/actions'

export default async function CartButton() {
    const numItemsInCart = await fetchCartItems()

    return (
        <Button
            asChild
            variant="outline"
            size="icon"
            className="flex justify-center items-center relative"
        >
            <Link href="/cart">
                <LuShoppingCart />
                <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full w-6 h-6 flex justify-center items-center text-xs">
                    {numItemsInCart}
                </span>
            </Link>
        </Button>
    )
}
