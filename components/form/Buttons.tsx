'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SignInButton } from '@clerk/nextjs'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { LuSquarePen, LuTrash2 } from 'react-icons/lu'

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
    className?: string
    text?: string
    size?: btnSize
}

export const SubmitButton = ({
    className = '',
    text = 'отправить',
    size = 'lg',
}: SubmitButtonProps) => {
    const { pending } = useFormStatus()
    return (
        <Button
            type="submit"
            disabled={pending}
            size={size}
            className={cn('capitalize', className)}
        >
            {pending ? (
                <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Подождите...
                </>
            ) : (
                text
            )}
        </Button>
    )
}

type actionType = 'edit' | 'delete'
export const IconButton = ({ actionType }: { actionType: actionType }) => {
    const { pending } = useFormStatus()

    const renderIcon = () => {
        switch (actionType) {
            case 'edit':
                return <LuSquarePen />
            case 'delete':
                return <LuTrash2 />
            default:
                const never: never = actionType
                throw new Error(`unknown action type - ${never}!`)
        }
    }

    return (
        <Button type="submit" size="icon" variant="link" className="p-2 cursor-pointer">
            {pending ? <ReloadIcon className="animate-spin" /> : renderIcon()}
        </Button>
    )
}

export const CardSignInButton = () => {
    return (
        <SignInButton mode="modal">
            <Button
                asChild
                type="button"
                size="icon"
                variant="outline"
                className="p-2 cursor-pointer"
            >
                <FaRegHeart />
            </Button>
        </SignInButton>
    )
}

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
    const { pending } = useFormStatus()
    return (
        <Button
            type="submit"
            size="icon"
            variant="outline"
            className="p-2 cursor-pointer"
        >
            {pending ? (
                <ReloadIcon className="animate-spin" />
            ) : isFavorite ? (
                <FaHeart />
            ) : (
                <FaRegHeart />
            )}
        </Button>
    )
}

export const ProductSignInButton = () => {
    return (
        <SignInButton mode="modal">
            <Button type="button" variant="default" className="mt-8">
                Please Sign In
            </Button>
        </SignInButton>
    )
}
