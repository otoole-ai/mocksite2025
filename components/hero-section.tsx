import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 rounded-lg shadow-lg overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://via.placeholder.com/1000x500?text=Plumber+Image"
          alt="Plumber at work"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">test123</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
            <Link href="/blog">Explore Blog</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-gray-800 hover:bg-white/20">
            <Link href="/reviews">Read Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
