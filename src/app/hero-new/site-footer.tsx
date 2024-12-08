import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-muted mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">MTL LOGISTICS</p>
              <p className="text-sm text-muted-foreground">Phone: 0247776168</p>
              <p className="text-sm text-muted-foreground">Email: info@worldlogistics.com</p>
            </div>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Policy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Warranty Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Working Hours</h3>
            <p className="text-sm text-muted-foreground">Monday - Sunday: 8:00 AM-17:30 PM</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Payment Support</h3>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-background rounded p-2 flex items-center justify-center">
                  <div className="w-12 h-8 bg-muted/50 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright 2024 © GEMADEPT</p>
        </div>
      </div>
    </footer>
  )
}

