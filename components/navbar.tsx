import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header style={{ backgroundColor: 'green' }} className="text-primary-foreground py-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          MockSite
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/blog">Blog</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/reviews">Reviews</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
