import Hero from "@/components/hero"
import FeaturedGigs from "@/components/featured-gigs"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Categories from "@/components/categories"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Categories />
      <FeaturedGigs />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
