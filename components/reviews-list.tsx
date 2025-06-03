import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    author: "Sarah L.",
    rating: 5,
    comment: "Absolutely love this website! The content is engaging and very informative. Highly recommend!",
  },
  {
    id: 2,
    author: "Mark T.",
    rating: 4,
    comment: "Great resource for tech articles. Some minor UI improvements could be made, but overall excellent.",
  },
  {
    id: 3,
    author: "Emily R.",
    rating: 5,
    comment:
      "The blog posts are incredibly well-written and easy to understand. A must-read for anyone interested in web dev.",
  },
  {
    id: 4,
    author: "David C.",
    rating: 3,
    comment: "Decent content, but I wish there were more frequent updates. Looking forward to new articles!",
  },
  {
    id: 5,
    author: "Jessica M.",
    rating: 5,
    comment: "Fantastic user experience and valuable insights. This site has become my go-to for industry news.",
  },
]

export function ReviewsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardHeader>
            <CardTitle>{review.author}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-gray-300" />
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="italic">"{review.comment}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
