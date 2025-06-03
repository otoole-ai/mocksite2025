import { ReviewsList } from "@/components/reviews-list"

export default function ReviewsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-4xl font-bold text-center">Customer Reviews</h1>
      <ReviewsList />
    </div>
  )
}
