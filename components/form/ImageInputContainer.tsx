'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import FormContainer from './FormContainer'
import ImageInput from './ImageInput'
import { SubmitButton } from './Buttons'
import { type actionFunction } from '@/utils/types'

type ImageInputContainerProps = {
    name: string
    image: string
    action: actionFunction
    text: string
    children?: React.ReactNode
}

export default function ImageInputContainer(props: ImageInputContainerProps) {
    const { name, image, action, text } = props
    const [isUpdateFormVisible, setUpdateFormVisible] = useState(false)

    return (
        <div className="mb-8">
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="mb-4 rounded-md object-cover w-[200px] h-[200px]"
            />

            <Button
                variant="outline"
                size="sm"
                onClick={() => setUpdateFormVisible((prev) => !prev)}
            >
                {text}
            </Button>
            {isUpdateFormVisible && (
                <div className="max-w-md mt-4">
                    <FormContainer action={action}>
                        {props.children}
                        <ImageInput />
                        <SubmitButton size="sm" />
                    </FormContainer>
                </div>
            )}
        </div>
    )
}
