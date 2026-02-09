import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Introduction } from '../components/Introduction'
import { RouteComparison } from '../components/RouteComparison'
import { Community } from '../components/Community'
import { Leaderboard } from '../components/Leaderboard'
import { Footer } from '../components/Footer'

export default function HomePage() {
  return (
  <div className="min-h-screen bg-background text-text font-sans antialiased">
      <Navbar />
      <Hero />
      <Introduction />
      <RouteComparison />
      <Community />
      <Leaderboard />
      <Footer />
    </div>
  )
}
