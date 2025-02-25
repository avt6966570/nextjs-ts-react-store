'use client'
import { CardSubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import { toggleFavoriteAction } from '@/utils/actions'
import { usePathname } from 'next/navigation'

export default function FavoriteToggleForm({
    productId,
    favoriteId,
}: {
    productId: string
    favoriteId: string | null
}) {
    const pathname = usePathname()

    const toggleAction = toggleFavoriteAction.bind(null, {
        productId,
        favoriteId,
        pathname,
    })

    return (
        <FormContainer action={toggleAction}>
            <CardSubmitButton isFavorite={favoriteId ? true : false} />
        </FormContainer>
    )
}
