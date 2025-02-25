import { IconButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import SectionTitle from '@/components/global/SectionTitle'
import ReviewCard from '@/components/reviews/ReviewCard'
import { deleteReviewAction, fetchProductReviewsByUser } from '@/utils/actions'

export default async function ReviewsPage() {
    const reviews = await fetchProductReviewsByUser()
    return reviews.length ? (
        <>
            <SectionTitle text="Ваши отзывы" />
            <section className="grid md:grid-cols-2 gap-8 mt-4">
                {reviews.map((review) => {
                    const { comment, rating } = review
                    const { id, name, image } = review.product
                    const reviewInfo = { comment, rating, name, image, productId: id }
                    return (
                        <ReviewCard reviewInfo={reviewInfo} key={image}>
                            <DeleteReview reviewId={review.id} />
                        </ReviewCard>
                    )
                })}
            </section>
        </>
    ) : (
        <SectionTitle text="У вас еще нет отзывов" />
    )
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
    const deleteReview = deleteReviewAction.bind(null, { reviewId })
    return (
        <FormContainer action={deleteReview}>
            <IconButton actionType="delete" />
        </FormContainer>
    )
}
