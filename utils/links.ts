type NavLink = {
    href: string
    label: string
}

export const links: NavLink[] = [
    { href: '/', label: 'главная' },
    { href: '/about', label: 'о нас' },
    { href: '/products', label: 'товары' },
    { href: '/favorites', label: 'избранное' },
    { href: '/reviews', label: 'отзывы' },
    { href: '/cart', label: 'корзина' },
    { href: '/orders', label: 'заказы' },
    { href: '/admin/sales', label: 'адм. панель' },
]

export const adminLinks: NavLink[] = [
    { href: '/admin/sales', label: 'все заказы' },
    { href: '/admin/products', label: 'мои товары' },
    { href: '/admin/products/create', label: 'создать товар' },
]
