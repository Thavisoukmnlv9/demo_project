/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { FeaturedGrid, ProductGrid } from "./product-grid"
import { Card, CardContent, CardHeader, CardTitle, Input } from "@/theme/element"
import { Facebook, Mail, Phone, Youtube } from 'lucide-react'

const image = 'https://kzmfrais1o50ok8wqnap.lite.vusercontent.net/placeholder.svg'


const products = [
  { name: "Electronics", image: "/electronic2.jpg" },
  { name: "Agricultural Products", image: "/Agricultural.jpeg" },
  { name: "Auto Parts", image: "/autoParts.jpeg" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <Link href="/" className="text-xl font-bold mb-2 sm:mb-0">
              MTL Logistics Logo
            </Link>

            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <input
                type="text"
                placeholder="Enter search keywords"
                className="border w-full sm:w-72 h-9 p-2"
              />
              <button className="w-full sm:w-32 border h-9 px-2 py-1 text-sm">
                Search
              </button>
            </div>

            <div className="text-sm mt-2 sm:mt-0">
              Customer Service Contact Cart Contact
            </div>
          </div>
        </div>
      </header>

      <main className="w-full">
        <div className="text-center pr-16 text-purple-900">
          Home Product Catalog Market News About Us Customer Service and Support Contact Us
        </div>
        <div className="h-52" />
        <div className="text-center text-2xl">import Trade Filed</div>
        <div className="space-y-4">
          <section className="bg-blue-500">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Featured Categories</h2>
            <div className="flex justify-center gap-4">
              {products.map((category) => (
                <div key={category.name} className="border-none w-64 text-center ">
                  <div className="w-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={150}
                      height={150}
                      className="mb-4 rounded w-full"
                    />
                    <div>Browse our selection of {category.name.toLowerCase()}</div>
                  </div>
                  <button className=" flex text-center mx-auto"> See more</button>
                </div>
              ))}
            </div>
          </section>
          <ProductGrid />
          <FeaturedGrid />
          <Page />
        </div>
        <div>
        </div>
      </main>
    </div>
  )
}



function Page() {
  return (
    <div>
      <header className="text-center py-8">
        <h1 className="text-2xl font-bold text-blue-600">TIN TỨC THỊ TRƯỜNG</h1>
      </header>
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold text-center mb-6">ĐỐI TÁC CỦA CHÚNG TÔI</h2>
          <div className="grid grid-cols-5 gap-1 justify-items-center">
            {[1, 2, 3, 4, 5].map((partner) => (
              <div key={partner} className="w-32 h-32 bg-white  flex items-center justify-center border rounded">
                <Image
                  src={`/partner${partner}.webp`}
                  alt={`Partner ${partner}`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Contact Form */}
      <div className="py-12 bg-blue-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-blue-500">
          {/* Left Content */}
          <div className="col-span-2">

          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-to-r from-cyan-500 to-blue-500  border mx-2 rounded-lg text-white">
            <CardHeader>
              <CardTitle className="text-center">LIÊN HỆ CHÚNG TÔI</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input
                  placeholder="Họ và tên"
                  className="bg-white"
                />
                <Input
                  placeholder="Số điện thoại"
                  className="bg-white"
                />
                <textarea
                  placeholder="Nội dung"
                  className="bg-white min-h-[100px] w-full"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg h-10">
                  GỬI THÔNG TIN
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src={image}
              alt="MTL Logistics Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <div className="space-y-2 text-sm">
              <p>Gia trì: Có trụ nhành toàn quốc</p>
              <p>SDT: 0947725405</p>
              <p>Email: info@mtlclogistics.com</p>
              <p>Giấy Phép Đăng Ký Kinh Doanh Số: 0312727427</p>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Về Chúng Tôi</h3>
            <div className="flex gap-2 mb-4">
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-700">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-red-600 hover:text-red-700">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-700">
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Chính Sách</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Chính sách kiểm hàng
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Chính sách thanh toán
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Chính sách vận chuyển
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Chính sách đổi trả hàng & hoàn tiền
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Support */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Hỗ Trợ Thanh Toán</h3>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src={image}
                alt="Payment Method"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src={image}
                alt="Payment Method"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src={image}
                alt="Payment Method"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src={image}
                alt="Payment Method"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src={image}
                alt="Payment Method"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src={image}
                alt="Payment Method"
                width={50}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="mt-8 text-sm">
          <h3 className="font-bold mb-2 uppercase">Giờ Làm Việc</h3>
          <p>Thứ 2 - Chủ Nhật: 8:00 AM - 17:30 PM</p>
          <p>Tư vấn tiếp nhận ngoài giờ hành chính: trừ trường hợp đã liên hệ trước</p>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-center gap-4 mb-4">
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt="Visa"
                width={60}
                height={30}
                className="object-contain"
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">
            Copyright 2024 © OEMADEPT
          </p>
        </div>
      </div>
    </footer>
  )
}


const partners = [
  { name: "ABC Company", logo: "/partner1.webp" },
  { name: "DEF Group", logo: "/partner2.webp" },
  { name: "GHI Company", logo: "/partner3.webp" },
  { name: "JKL Company", logo: "/partner4.webp" },
  { name: "MNO Group", logo: "/partner5.webp" },
]