import type { Metadata } from "next"
import PostJobForm from "@/components/post-job-form"

export const metadata: Metadata = {
  title: "Post a Job - SkillHub",
  description: "Post a job and find the perfect freelancer for your project",
}

export default function PostJobPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col space-y-4 mb-8">
          <h1 className="text-3xl font-bold">Post a Job</h1>
          <p className="text-muted-foreground">
            Fill out the form below to post a job and find the perfect freelancer for your project.
          </p>
        </div>

        <PostJobForm />
      </div>
    </div>
  )
}
