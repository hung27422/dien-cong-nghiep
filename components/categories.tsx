"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brush, Code, Brain, FileText, Mic } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Graphic Design",
    icon: <Brush className="h-6 w-6" />,
    description: "Logo creation, banner design, brand identity",
    color: "bg-pink-500/10 text-pink-500",
    href: "/gigs?category=graphic-design",
  },
  {
    id: 2,
    name: "Web Development",
    icon: <Code className="h-6 w-6" />,
    description: "Website design and development, front-end, back-end services",
    color: "bg-primary/10 text-primary",
    href: "/gigs?category=web-development",
  },
  {
    id: 3,
    name: "AI/ML Projects",
    icon: <Brain className="h-6 w-6" />,
    description: "Custom AI models, data analysis, machine learning solutions",
    color: "bg-purple-500/10 text-purple-500",
    href: "/gigs?category=ai-ml",
  },
  {
    id: 4,
    name: "Content Writing",
    icon: <FileText className="h-6 w-6" />,
    description: "Article writing, blog posts, SEO optimization",
    color: "bg-green-500/10 text-green-500",
    href: "/gigs?category=content-writing",
  },
  {
    id: 5,
    name: "Voiceover Services",
    icon: <Mic className="h-6 w-6" />,
    description: "Professional voiceovers for commercials, audiobooks, etc.",
    color: "bg-orange-500/10 text-orange-500",
    href: "/gigs?category=voiceover",
  },
]

const Categories = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Explore Categories</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse through our diverse range of categories and find the perfect freelancer for your project needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={category.href} className="block h-full">
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`${category.color} p-3 rounded-full w-fit mb-4`}>{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{category.description}</p>
                  <div className="text-sm font-medium text-primary">Explore {category.name}</div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Categories
