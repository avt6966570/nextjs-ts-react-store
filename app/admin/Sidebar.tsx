'use client'
import { Button } from '@/components/ui/button'
import { adminLinks } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const pathName = usePathname()

    return (
        <aside>
            {adminLinks.map((link) => {
                const isActivePage = pathName === link.href
                const variant = isActivePage ? 'default' : 'ghost'
                return (
                    <Button
                        asChild
                        variant={variant}
                        className="w-full mb-2 capitalize font-normal justify-start"
                        key={link.href}
                    >
                        <Link href={link.href}>{link.label}</Link>
                    </Button>
                )
            })}
        </aside>
    )
}
