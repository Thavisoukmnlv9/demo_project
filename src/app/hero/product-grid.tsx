import { Card, CardContent } from "@/theme/element"
import Image from "next/image"
import Link from "next/link"

interface Product {
    name: string
    image: string
    category: string
}

export function FeaturedGrid() {
    const featuredProducts: Product[] = [
        { name: "Smartphone XYZ", image: "/electronic.jpg", category: "Electronics" },
        { name: "Smart Appliance", image: "/electronic.jpg", category: "Appliances" },
        { name: "Special Product", image: "/electronic.jpg", category: "Featured" },
        { name: "Imported Fruit", image: "/electronic.jpg", category: "Food" },
        { name: "XYZ Device", image: "/electronic.jpg", category: "Electronics" },
    ]

    return (
        <section className="space-y-4 bg-blue-500">
            <h2 className="text-2xl font-bold text-center text-white">FEATURED PRODUCTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {featuredProducts.map((product, index) => (
                    <Link key={index} href="#" className="block">
                        <Card className="h-full hover:shadow-lg transition-shadow  border-none">
                            <CardContent className="p-4">
                                <div className="aspect-square relative mb-3">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                                    <p className="text-xs text-muted-foreground">{product.category}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    )
}


export function ProductGrid() {
    
    const saleProducts: Product[] = [
        { name: "Sapporo Full Body Massage Chair", image: "/electronics.jpeg", category: "Wellness" },
        { name: "Philips HD9216 Air Fryer", image: "/electronics.jpeg", category: "Appliances" },
        { name: "Panasonic Blender", image: "/electronics.jpeg", category: "Appliances" },
        { name: "DeLonghi ECAM Coffee Maker", image: "/electronics.jpeg", category: "Appliances" },
        { name: "Electrolux 2120 Vacuum Cleaner", image: "/electronics.jpeg", category: "Appliances" },
    ]

    return (
        <section className="space-y-4 bg-blue-500">
            <h2 className="text-2xl font-bold text-center text-white">PRODUCTS ON SALE</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {saleProducts.map((product, index) => (
                    <Link key={index} href="#" className="block">
                        <Card className="h-full hover:shadow-lg transition-shadow border-none">
                            <CardContent className="p-4">
                                <div className="aspect-square relative mb-3">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                                    <p className="text-xs text-muted-foreground">{product.category}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    )
}
