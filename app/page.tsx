import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto py-8">
      <HeroSection />

      <section className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Service One</CardTitle>
              <CardDescription>Description for service one.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Service Two</CardTitle>
              <CardDescription>Description for service two.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our second service offers tailored solutions to meet your unique needs, ensuring efficiency and excellence in every project.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Service Three</CardTitle>
              <CardDescription>Description for service three.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
