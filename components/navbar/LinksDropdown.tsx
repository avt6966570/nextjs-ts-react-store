import SignOutLink from '@/components/navbar/SignOutLink'
import UserIcon from '@/components/navbar/UserIcon'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { links } from '@/utils/links'
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'

import { LuAlignLeft } from 'react-icons/lu'

export default function LinksDropdown() {
    const { userId } = auth()
    const isAdmin = userId === process.env.ADMIN_USER_ID

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-4 max-w-[100px]">
                    <LuAlignLeft className="w-6 h-6" />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
                {/* when user siged out */}
                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode="modal">
                            <button className="w-full text-left">Вход</button>
                        </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignUpButton mode="modal">
                            <button className="w-full text-left">Регистрация</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                {/* when user siged in */}
                <SignedIn>
                    {links.map((link) => {
                        if (link.label === 'адм. панель' && !isAdmin) return null
                        return (
                            <DropdownMenuItem key={link.href}>
                                <Link href={link.href} className="capitalize w-full">
                                    {link.label}
                                </Link>
                            </DropdownMenuItem>
                        )
                    })}

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <SignOutLink />
                    </DropdownMenuItem>
                </SignedIn>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
