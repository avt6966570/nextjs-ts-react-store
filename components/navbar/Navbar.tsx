import Container from '@/components/global/Container'
import Logo from '@/components/navbar/Logo'
import NavSearch from '@/components/navbar/NavSearch'
import CartButton from '@/components/navbar/CartButton'
import DarkMode from '@/components/navbar/DarkMode'
import LinksDropdown from '@/components/navbar/LinksDropdown'
import { Suspense } from 'react'

export default function Navbar() {
    return (
        <nav className="border-b">
            <Container className="flex flex-wrap flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-8">
                <Logo />

                {/* useSearchParams Error - (https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout) */}
                <Suspense>
                    <NavSearch />
                </Suspense>

                <div className="flex items-center gap-x-4">
                    <CartButton />
                    <DarkMode />
                    <LinksDropdown />
                </div>
            </Container>
        </nav>
    )
}
