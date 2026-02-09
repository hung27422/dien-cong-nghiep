"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const gigs = [
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
  {
    id: 7,
    title: "Mobile App Development",
    description: "I will develop a custom mobile app for iOS and Android using React Native",
    price: 600,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 92,
    freelancer: {
      name: "Ryan Park",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      level: "Expert",
    },
  },
  {
    id: 8,
    title: "Data Analysis and Visualization",
    description: "I will analyze your data and create insightful visualizations and reports",
    price: 250,
    category: "AI/ML Projects",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 76,
    freelancer: {
      name: "Olivia Martinez",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      level: "Top Rated",
    },
  },
  {
    id: 9,
    title: "Social Media Marketing",
    description: "I will create and manage your social media marketing campaigns for maximum engagement",
    price: 200,
    category: "Content Writing",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    reviews: 58,
    freelancer: {
      name: "Thomas Wright",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
      level: "Rising Talent",
    },
  },
]

const GigListing = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recommended")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-muted-foreground">
            Showing <span className="font-medium">{gigs.length}</span> results
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rating</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className={cn("rounded-none", viewMode === "grid" && "bg-muted")}
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("rounded-none", viewMode === "list" && "bg-muted")}
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gigs.map((gig) => (
            <Card
              key={gig.id}
              className="h-full overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1"
            >
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
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {gigs.map((gig) => (
            <Card key={gig.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/4 h-48 md:h-auto overflow-hidden">
                  <img
                    src={gig.image || "/placeholder.svg"}
                    alt={gig.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-2 right-2">{gig.category}</Badge>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={gig.freelancer.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{gig.freelancer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{gig.freelancer.name}</p>
                      <p className="text-xs text-muted-foreground">{gig.freelancer.level}</p>
                    </div>
                    <div className="ml-auto flex items-center space-x-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-medium">{gig.rating}</span>
                      <span className="text-muted-foreground text-sm">({gig.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{gig.title}</h3>
                  <p className="text-muted-foreground mb-4">{gig.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting at</p>
                      <p className="text-xl font-bold">${gig.price}</p>
                    </div>
                    <Button>View Details</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="mx-2">
          Previous
        </Button>
        <Button variant="outline" className="mx-2 bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline" className="mx-2">
          2
        </Button>
        <Button variant="outline" className="mx-2">
          3
        </Button>
        <Button variant="outline" className="mx-2">
          Next
        </Button>
      </div>
    </div>
  )
}

export default GigListing
