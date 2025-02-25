import { faker } from '@faker-js/faker'
import FormInput from '@/components/form/FormInput'
import PriceInput from '@/components/form/PriceInput'
import ImageInput from '@/components/form/ImageInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import CheckBoxInput from '@/components/form/CheckBoxInput'
import { SubmitButton } from '@/components/form/Buttons'
import { createProductAction } from '@/utils/actions'
import FormContainer from '@/components/form/FormContainer'

export default function CreateProductPage() {
    const name = faker.commerce.productName()
    const company = faker.company.name()
    const description = faker.lorem.paragraph({ min: 10, max: 12 })

    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold capitalize">Создать товар</h1>
            <div className="border p-8 rounded-md">
                <FormContainer action={createProductAction}>
                    <div className="grid gap-4 md:grid-cols-2">
                        <FormInput
                            type="text"
                            name="name"
                            label="product name"
                            defaultValue={name}
                        />
                        <FormInput
                            type="text"
                            name="company"
                            label="company"
                            defaultValue={company}
                        />
                        <PriceInput />
                        <ImageInput />
                    </div>

                    <TextAreaInput
                        name="description"
                        labelText="product description"
                        defaultValue={description}
                    />

                    <div className="mt-6">
                        <CheckBoxInput name="featured" label="featured" />
                    </div>

                    <SubmitButton text="create product" className="mt-8" />
                </FormContainer>
            </div>
        </section>
    )
}
