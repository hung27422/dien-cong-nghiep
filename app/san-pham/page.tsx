import type { Metadata } from "next"
import GigListing from "@/components/gig-listing"
import GigFilters from "@/components/gig-filters"

export const metadata: Metadata = {
  title: "Gigs - SkillHub",
  description: "Browse through our diverse range of freelancer gigs",
}

export default function GigsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Browse Gigs</h1>
        <p className="text-muted-foreground">
          Find the perfect freelancer for your project from our wide selection of professional gigs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <GigFilters />
        </div>
        <div className="lg:col-span-3">
          <GigListing />
        </div>
      </div>
    </div>
  )
}
