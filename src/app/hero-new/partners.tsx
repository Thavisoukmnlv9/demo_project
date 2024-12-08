import Image from "next/image"
import { Card, CardContent } from "@/theme/element"

export function Partners() {
  const partners = [
    { name: "ABC Company", logo: "/partner1.webp" },
    { name: "DEF Group", logo: "/partner2.webp" },
    { name: "GHI Company", logo: "/partner3.webp" },
    { name: "JKL Company", logo: "/partner4.webp" },
    { name: "MNO Group", logo: "/partner5.webp" },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {partners.map((partner) => (
          <Card key={partner.name} className="border-0 shadow-sm hover:shadow transition-shadow">
            <CardContent className="flex items-center justify-center p-6">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

