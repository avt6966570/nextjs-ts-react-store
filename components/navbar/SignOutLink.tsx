'use client'
import { useToast } from '@/components/ui/use-toast'
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function SignOutLink() {
    const { toast } = useToast()

    const handleLogout = () => {
        toast({ description: 'Logging Out...' })
    }

    return (
        <SignOutButton>
            <Link href="/" className="w-full text-left" onClick={handleLogout}>
                Выход
            </Link>
        </SignOutButton>
    )
}
