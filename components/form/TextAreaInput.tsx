import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type TextAreaInputProps = {
    name: string
    labelText?: string
    defaultValue?: string
}

export default function TextAreaInput({
    name,
    labelText,
    defaultValue,
}: TextAreaInputProps) {
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">
                {labelText || name}
            </Label>
            <Textarea
                id={name}
                name={name}
                rows={5}
                defaultValue={defaultValue}
                required
                className="leading-loose"
            />
        </div>
    )
}
