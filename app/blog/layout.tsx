import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <aside className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Blog Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Travel
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Food
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </aside>
      <div className="md:col-span-3">{children}</div>
    </div>
  )
}
