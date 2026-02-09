"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Link from "next/link"

const featuredGigs = [
  {
    id: 1,
    title: "Professional Logo Design",
    description: "I will create a modern, unique logo design for your business or brand",
    price: 120,
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 156,
    freelancer: {
      name: "Alex Morgan",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      level: "Top Rated",
    },
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    description: "I will build a responsive website or web application using React and Node.js",
    price: 450,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 98,
    freelancer: {
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      level: "Top Rated",
    },
  },
  {
    id: 3,
    title: "Custom AI Chatbot Development",
    description: "I will create a custom AI chatbot for your website or application",
    price: 350,
    category: "AI/ML Projects",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813a7942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviews: 72,
    freelancer: {
      name: "Michael Johnson",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      level: "Rising Talent",
    },
  },
  {
    id: 4,
    title: "SEO-Optimized Blog Content",
    description: "I will write engaging, SEO-optimized blog posts and articles for your website",
    price: 80,
    category: "Content Writing",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 124,
    freelancer: {
      name: "Emily Wilson",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
      level: "Top Rated",
    },
  },
  {
    id: 5,
    title: "Professional Voice Over",
    description: "I will provide a professional voice over for your commercial, video, or audiobook",
    price: 150,
    category: "Voiceover Services",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 87,
    freelancer: {
      name: "David Brown",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      level: "Expert",
    },
  },
  {
    id: 6,
    title: "Brand Identity Package",
    description: "Complete brand identity package including logo, business cards, and brand guidelines",
    price: 300,
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1634937916053-2e2c2a4ff5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviews: 63,
    freelancer: {
      name: "Jessica Lee",
      avatar: "https://randomuser.me/api/portraits/women/60.jpg",
      level: "Rising Talent",
    },
  },
]

const FeaturedGigs = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Featured Gigs</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our top-rated services from expert freelancers across various categories.
          </p>
        </div>
        <Link href="/gigs" className="text-primary font-medium hover:underline hidden md:block">
          View All Gigs
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredGigs.map((gig, index) => (
          <motion.div
            key={gig.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={gig.image || "/placeholder.svg"}
                  alt={gig.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge className="absolute top-2 right-2">{gig.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={gig.freelancer.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{gig.freelancer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{gig.freelancer.name}</p>
                    <p className="text-xs text-muted-foreground">{gig.freelancer.level}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{gig.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{gig.description}</p>
                <div className="flex items-center space-x-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-medium">{gig.rating}</span>
                  <span className="text-muted-foreground text-sm">({gig.reviews})</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 border-t flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Starting at</p>
                <p className="text-xl font-bold">${gig.price}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link href="/gigs" className="text-primary font-medium hover:underline">
          View All Gigs
        </Link>
      </div>
    </section>
  )
}

export default FeaturedGigs
