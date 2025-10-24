import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Lightbulb, Users, Rocket, MapPin, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Perla, Arkansas
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              The New Black American{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Silicon Valley
              </span>
            </h1>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              Nestled in Hot Spring County, Arkansas, Perla is reimagining its future as a thriving hub for
              Black innovation, technology, and entrepreneurship. Join us in building the next great American tech ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-main.jpg"
              alt="Modern tech campus in Perla, Arkansas with diverse professionals collaborating"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">257</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">42%</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Black American</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">0.96</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Square Miles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">∞</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Potential</div>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Vision Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Tomorrow, Today
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Perla is more than a place—it's a movement to create wealth, opportunity, and legacy
            for Black technologists and entrepreneurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-blue-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl">Innovation Hub</CardTitle>
              <CardDescription className="text-base">
                Through our partnership with Lewis Prep and cutting-edge programs like $LETTA cryptocurrency education,
                we're creating spaces for Black founders, developers, and creators to build groundbreaking companies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/innovation-hub.jpg"
                  alt="Black entrepreneurs working in modern tech incubator space"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-purple-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-2xl">Community First</CardTitle>
              <CardDescription className="text-base">
                Building a tight-knit community that supports, mentors, and uplifts each other through collaboration and shared success.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/community-first.jpg"
                  alt="Diverse Black professionals mentoring and collaborating in co-working space"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-500 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-950 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl">Economic Growth</CardTitle>
              <CardDescription className="text-base">
                Transforming Perla into a destination for investment, talent, and opportunity that creates generational wealth.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/economic-growth.jpg"
                  alt="Black business professionals celebrating success and economic growth"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lewis Prep Featured Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            Educational Innovation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lewis Prep: A Transformative Partnership
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Through our partnership with Letta K Lewis Preparatory School, Perla is establishing itself as
            an educational innovation hub - combining academic excellence, cutting-edge technology education,
            and inclusive learning programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/lewis-prep-campus.jpg"
              alt="Lewis Preparatory School campus with students engaged in technology education"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/lewis-prep-logo.png"
                alt="Lewis Prep Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <h3 className="text-3xl font-bold">
                Pioneering the Future of Education
              </h3>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Named after pioneering educator Letta K Lewis, this partnership brings world-class educational
              innovation to Perla. Through Lewis Prep's year-round programs that blend traditional excellence
              with cutting-edge technology, we're preparing the next generation of leaders and establishing
              Perla as a premier destination for educational excellence.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">$LETTA Cryptocurrency</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Revolutionary educational finance model teaching students real-world blockchain technology
                    and financial literacy while funding scholarships through community investment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">LIFT Program</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Learning Innovation & Future Technology initiative supporting students with Neurofibromatosis (NF)
                    through adaptive tech, AI assistants, and comprehensive accessibility services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Year-Round Excellence</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Continuous learning model ensuring students stay engaged and ahead, with programs in academics,
                    athletics, technology development, and entrepreneurship.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto" variant="outline">
              Explore Lewis Prep
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$500K+</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Annual Parent Savings</div>
            <div className="text-xs text-zinc-500 mt-1">Through $LETTA system</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$400K+</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Scholarship Funding</div>
            <div className="text-xs text-zinc-500 mt-1">Community-backed awards</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Financial Literacy</div>
            <div className="text-xs text-zinc-500 mt-1">Real-world crypto education</div>
          </div>
        </div>
      </section>

      {/* About Perla Section */}
      <section className="bg-zinc-100 dark:bg-zinc-900 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/arkansas-landscape.jpg"
                alt="Beautiful Arkansas countryside landscape near Hot Spring County"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Rooted in History, <br />
                Focused on the Future
              </h2>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Located in northeastern Hot Spring County near Malvern, Perla has a rich history
                and a resilient community. After experiencing population growth from 115 residents
                in 2000 to 257 today, we're ready for our next chapter.
              </p>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                With convenient access via U.S. Route 67 and a strong sense of community identity,
                Perla is perfectly positioned to become a beacon of Black excellence in technology
                and innovation.
              </p>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-800 rounded-xl">
                <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Our Commitment</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    We're committed to creating an inclusive ecosystem where Black entrepreneurs,
                    technologists, and innovators can thrive, build wealth, and create lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Be Part of History?
          </h2>

          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Whether you're a founder, investor, developer, or dreamer—there's a place for you in Perla.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Join the Movement
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl mb-2">City of Perla</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Building the future of Black innovation in Arkansas
              </p>
            </div>

            <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Invest
              </a>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-zinc-500">
            © 2025 City of Perla, Arkansas. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
