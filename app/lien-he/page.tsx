import type { Metadata } from "next"
import FreelancerRegistration from "@/components/freelancer-registration"
import ComingSoonTest from "@/components/coming-soon-test"

export const metadata: Metadata = {
  title: "Become a Freelancer - SkillHub",
  description: "Register as a freelancer and showcase your skills to clients worldwide",
}

export default function RegisterFreelancerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col space-y-4 mb-8 text-center">
          <h1 className="text-3xl font-bold">Become a Freelancer</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of skilled professionals and start earning by doing what you love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <FreelancerRegistration />
          <ComingSoonTest />
        </div>
      </div>
    </div>
  )
}
