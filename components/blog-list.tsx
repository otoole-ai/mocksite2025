import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    description: "Exploring the latest trends and technologies shaping the web.",
    date: "May 20, 2024",
    author: "Jane Doe",
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    description: "A comprehensive guide to building efficient React applications with hooks.",
    date: "April 15, 2024",
    author: "John Smith",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which?",
    description: "Understanding the strengths of CSS Grid and Flexbox for modern layouts.",
    date: "March 10, 2024",
    author: "Alice Johnson",
  },
  {
    id: 4,
    title: "Optimizing Next.js Performance",
    description: "Tips and tricks to make your Next.js applications blazing fast.",
    date: "February 28, 2024",
    author: "Bob Williams",
  },
]

export function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              By {post.author} on {post.date}
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href={`/blog/${post.id}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
