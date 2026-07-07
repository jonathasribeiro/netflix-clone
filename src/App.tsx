import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Bell, Play, Search, Sparkles } from 'lucide-react'

const rows = [
  {
    title: 'Trending Now',
    items: ['Arcane', 'Dark Matter', 'The Recruit', '3 Body Problem', 'Fallout', 'Rebel Moon'],
  },
  {
    title: 'Sci-Fi & Tech Drama',
    items: ['Black Mirror', 'Ex Machina', 'Her', 'Westworld', 'Devs', 'Severance'],
  },
  {
    title: 'Because you watched NestJS',
    items: ['The Social Network', 'Startup', 'Silicon Valley', 'Halt and Catch Fire', 'Mr. Robot'],
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black text-netflix">NSTREAM</span>
            <nav className="hidden gap-5 text-sm text-zinc-300 md:flex">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">Series</a>
              <a href="#" className="hover:text-white">Films</a>
              <a href="#" className="hover:text-white">New</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm"><Search className="h-4 w-4" /></Button>
            <Button variant="ghost" size="sm"><Bell className="h-4 w-4" /></Button>
            <Badge>Pro</Badge>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-8">
        <Card className="overflow-hidden border-netflix/30 bg-gradient-to-br from-zinc-900 via-black to-red-950">
          <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div className="space-y-5">
              <Badge className="bg-netflix/20 text-red-200">Featured original</Badge>
              <h1 className="text-4xl font-bold md:text-6xl">Build. Ship. Stream.</h1>
              <p className="max-w-xl text-lg text-zinc-300">
                Modern Netflix-style interface rebuilt with React, TypeScript, Tailwind CSS v4,
                and shadcn-inspired components — a senior frontend showcase.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg"><Play className="mr-2 h-4 w-4" /> Play</Button>
                <Button variant="secondary" size="lg">More info</Button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-300">
                <Sparkles className="h-4 w-4 text-netflix" />
                Stack highlights
              </div>
              <ul className="space-y-3 text-sm text-zinc-200">
                <li>Vite + React 19 + TypeScript</li>
                <li>Tailwind CSS v4 + CVA component variants</li>
                <li>Responsive hero + content rows</li>
                <li>Docker-ready production build</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <main className="mx-auto max-w-7xl space-y-10 px-6 pb-16">
        {rows.map((row) => (
          <section key={row.title}>
            <h2 className="mb-4 text-xl font-semibold">{row.title}</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {row.items.map((item) => (
                <Card key={item} className="group cursor-pointer overflow-hidden transition hover:scale-[1.03] hover:border-netflix/50">
                  <CardContent className="flex aspect-[2/3] items-end bg-gradient-to-t from-black via-zinc-800 to-zinc-700 p-4">
                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="text-xs text-zinc-400 group-hover:text-zinc-200">2024 · HD</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
