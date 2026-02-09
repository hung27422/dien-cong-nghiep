"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, FileCheck, CreditCard, CheckCircle } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Find the Perfect Freelancer",
    description:
      "Browse through our diverse categories and find the freelancer that matches your project requirements.",
    icon: <Search className="h-8 w-8" />,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Review Proposals",
    description: "Receive detailed proposals from interested freelancers and select the best fit for your project.",
    icon: <FileCheck className="h-8 w-8" />,
    color: "bg-green-500/10 text-green-500",
  },
  {
    id: 3,
    title: "Secure Payment",
    description:
      "Make secure payments through our platform. Funds are only released when you're satisfied with the work.",
    icon: <CreditCard className="h-8 w-8" />,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    id: 4,
    title: "Get Quality Work",
    description: "Receive high-quality work from skilled professionals and provide feedback on completion.",
    icon: <CheckCircle className="h-8 w-8" />,
    color: "bg-orange-500/10 text-orange-500",
  },
]

const HowItWorks = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="container mx-auto px-4 py-12 bg-muted/50 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How SkillHub Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our streamlined process makes it easy to find and work with talented freelancers for your projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative"
          >
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 right-0 w-full h-0.5 bg-border z-0 translate-x-1/2">
                <div className="absolute top-1/2 right-0 h-2 w-2 rounded-full bg-primary -translate-y-1/2"></div>
              </div>
            )}
            <div className="bg-background rounded-lg p-6 shadow-sm relative z-10 h-full">
              <div className={`${step.color} p-4 rounded-full w-fit mb-4 flex items-center justify-center`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-sm mr-2">
                  {step.id}
                </span>
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
