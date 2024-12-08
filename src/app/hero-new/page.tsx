import Link from "next/link"
import Image from "next/image"
import { Search } from "./search"
import { Button, Card, CardContent } from "@/theme/element"
import { MarketNews } from "./market-news"
import { Partners } from "./partners"
import { ContactForm } from "./contact-form"
import { SiteFooter } from "./site-footer"
import { Menu } from 'lucide-react'

const products = [
  { name: "Electronics", image: "/electronic2.jpg" },
  { name: "Agricultural Products", image: "/Agricultural.jpeg" },
  { name: "Auto Parts", image: "/autoParts.jpeg" },
]
const linke = [
  {
    name: "original",
    href: "/",
  },
  {
    name: "new design",
    href: "/hero-new",
  },
]
export default function HeroNew() {
  return (
    <div>
      <div>
        <nav className="flex">
          {linke.map((linke) => (
            <Link
              key={linke.name}
              href={linke.href}
              className="underline-offset-4 hover:underline gap-x-3 mx-3"
            >
              {linke.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <header className="border-b">
          <nav className="container mx-auto flex h-16 items-center px-4">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-xl font-bold">MTL Logistics</span>
            </Link>
            <div className="hidden md:flex flex-1 items-center space-x-4">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/catalog" className="text-sm font-medium">
                Product Catalog
              </Link>
              <Link href="/news" className="text-sm font-medium">
                Market News
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About Us
              </Link>
              <Link href="/support" className="text-sm font-medium">
                Customer Service
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact Us
              </Link>
            </div>
            <Search className="ml-auto w-[200px] hidden sm:block" />
            <Button variant="ghost" size="icon" className="ml-auto md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </nav>
        </header>

        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Sidebar */}
            <aside className="md:col-span-3">
              <nav className="space-y-2">
                {[
                  "Electronics",
                  "Cars and Spare Parts",
                  "Interior",
                  "Chemicals",
                  "Machinery and Equipment",
                  "Textile",
                  "Food and Drinks",
                ].map((category) => (
                  <Link
                    key={category}
                    href={`#`}
                    className="block rounded-lg border p-3 hover:bg-accent"
                  >
                    {category}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="md:col-span-9 space-y-6">
              {/* Featured Categories */}
              <section>
                <h2 className="mb-4 text-2xl font-bold">Featured Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((category) => (
                    <Card key={category.name}>
                      <CardContent className="p-4">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={300}
                          height={200}
                          className="mb-4 rounded-lg w-full h-auto"
                        />
                        <h3 className="mb-2 text-lg font-semibold">{category.name}</h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Quality products from verified suppliers
                        </p>
                        <Button variant="outline" size="sm">
                          See more
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Featured Products */}
              <section>
                <h2 className="mb-4 text-2xl font-bold">Featured Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    'Smartphone XYZ',
                    'ABC washing machine',
                    'Special yoghurt drink',
                    'Imported fruit',
                    'XYZ car',
                  ].map((product) => (
                    <Card key={product} className="overflow-hidden">
                      <CardContent className="p-2">
                        <Image
                          src={"/product2.jpeg"}
                          alt={product}
                          width={150}
                          height={150}
                          className="mb-2 rounded-lg w-full h-auto"
                        />
                        <h3 className="text-sm font-medium">{product}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Products on Sale */}
              <section>
                <h2 className="mb-4 text-2xl font-bold">Products on Sale</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    'Sapporo Full Body Massage Chair',
                    'Philips HD9216 Air Fryer',
                    'Panasonic Blender',
                    'DeLonghi EC685 coffee maker',
                    'Electrolux Z1230 Vacuum Cleaner',
                  ].map((product) => (
                    <Card key={product} className="overflow-hidden">
                      <CardContent className="p-2">
                        <Image
                          src={"/electronic.jpg"}
                          alt={product}
                          width={150}
                          height={150}
                          className="mb-2 rounded-lg w-full h-auto"
                        />
                        <h3 className="text-sm font-medium">{product}</h3>
                        <p className="text-sm text-red-500">Special Offer</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
        <main className="container mx-auto px-4 py-6 space-y-12">
          <MarketNews />
          <Partners />
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 bg-gray-50 p-2">
            <div className="h-[400px] rounded-lg bg-muted" />
            <ContactForm />
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>

  )
}

