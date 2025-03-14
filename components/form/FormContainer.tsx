'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { actionFunction } from '@/utils/types'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

const initialState = {
    message: '',
}

export default function FormContainer({
    action,
    children,
}: {
    action: actionFunction
    children: React.ReactNode
}) {
    const [state, formAction] = useFormState(action, initialState)
    const { toast } = useToast()

    useEffect(() => {
        if (state.message) {
            toast({ description: state.message })
        }
    }, [state])

    return <form action={formAction}>{children}</form>
}
