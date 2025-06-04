import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold">
          MockSite
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Button asChild variant="ghost" className="text-white hover:bg-white/10 transition duration-300 ease-in-out">
              <Link href="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" className="text-white hover:bg-white/10 transition duration-300 ease-in-out">
              <Link href="/blog">Blog</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" className="text-white hover:bg-white/10 transition duration-300 ease-in-out">
              <Link href="/reviews">Reviews</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
