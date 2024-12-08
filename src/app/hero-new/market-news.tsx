import { Card, CardContent, CardHeader, CardTitle } from "@/theme/element"

export function MarketNews() {
  return (
    <section>
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Market News</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Latest updates and insights from the market...
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

