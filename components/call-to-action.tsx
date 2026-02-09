"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CallToAction = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-xl p-8 md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of freelancers and clients on SkillHub. Whether you're looking to showcase your skills or
              find the perfect talent for your project, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/register-freelancer">Become a Freelancer</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/post-job">Post a Job</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Freelancer working"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-background/80 backdrop-blur-md rounded-lg p-4 shadow-lg">
                  <h3 className="font-semibold text-lg mb-2">Coming Soon: Freelancer Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    Take specialized tests to verify your skills and stand out from the crowd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CallToAction
