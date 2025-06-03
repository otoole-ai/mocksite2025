import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-bold text-center md:text-left">Our Blog</h1>
      <BlogList />
    </section>
  )
}
