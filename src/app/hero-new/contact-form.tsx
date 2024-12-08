import { Textarea, Input, Card, CardContent, CardHeader, CardTitle, Button  } from "@/theme/element"

export function ContactForm() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/70" placeholder="Full Name" />
          <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/70" type="tel" placeholder="Phone Number" />
          <Textarea
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70 min-h-[120px]"
            placeholder="Your Message"
          />
          <Button className="w-full bg-white text-blue-600 hover:bg-white/90" size="lg">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

