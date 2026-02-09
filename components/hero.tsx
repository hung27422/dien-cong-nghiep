"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Where <span className="text-primary">Skills</span> Meet{" "}
              <span className="text-primary">Opportunities</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              SkillHub connects talented freelancers with clients looking for expert services. Find the perfect match
              for your project or showcase your skills to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/gigs">Find Freelancers</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/register-freelancer">Become a Freelancer</Link>
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                Trusted by 10,000+ clients and 50,000+ freelancers worldwide
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Freelancers collaborating"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-background/80 backdrop-blur-md rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">4.9</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Highly Rated Freelancers</h3>
                      <p className="text-sm text-muted-foreground">Join thousands of satisfied clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-background rounded-lg shadow-lg p-4 max-w-[200px]">
              <div className="text-sm font-medium">Top Categories</div>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Graphic Design
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                  AI/ML Projects
                </li>
              </ul>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  +
                </div>
                <div>
                  <div className="text-sm font-medium">New Projects Daily</div>
                  <div className="text-xs text-muted-foreground">500+ new opportunities</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
