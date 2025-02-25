import {
    fetchAdminProductDetails,
    updateProductAction,
    updateProductImageAction,
} from '@/utils/actions'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import PriceInput from '@/components/form/PriceInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import { SubmitButton } from '@/components/form/Buttons'
import CheckBoxInput from '@/components/form/CheckBoxInput'
import ImageInputContainer from '@/components/form/ImageInputContainer'

export default async function EditProductPage({ params }: { params: { id: string } }) {
    const { id } = params
    const product = await fetchAdminProductDetails(id)
    const { name, company, description, featured, price, image } = product

    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold capitalize">изменить товар</h1>
            {/* IMAGE INPUT CONTAINER */}
            <ImageInputContainer
                name={name}
                image={image}
                text="update image"
                action={updateProductImageAction}
            >
                <input type="hidden" name="id" value={id} />
                <input type="hidden" name="url" value={image} />
            </ImageInputContainer>
            <FormContainer action={updateProductAction}>
                <div className="grid gap-4 md:grid-cols-2">
                    <input type="hidden" name="id" value={id} />
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
                    <PriceInput defaultValue={price} />
                </div>

                <TextAreaInput
                    name="description"
                    labelText="product description"
                    defaultValue={description}
                />

                <div className="mt-6">
                    <CheckBoxInput
                        name="featured"
                        label="featured"
                        defaultChecked={featured}
                    />
                </div>

                <SubmitButton text="update product" className="mt-8" />
            </FormContainer>
        </section>
    )
}
