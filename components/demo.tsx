import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function ComponentDemo() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold">shadcn/ui Components Demo</h1>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">i</Button>
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Card Component</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content area. You can put any content here.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
              <CardDescription>With different content</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Cards are great for organizing content in a structured way.</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
