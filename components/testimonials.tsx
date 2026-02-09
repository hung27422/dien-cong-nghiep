"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "SkillHub transformed how I find freelance work. The platform is intuitive, clients are professional, and the verification process ensures only qualified freelancers are accepted.",
    name: "Jessica Miller",
    role: "Graphic Designer",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 2,
    content:
      "As a business owner, finding reliable freelancers was always a challenge until I discovered SkillHub. The quality of work and professionalism has been consistently excellent.",
    name: "Robert Chen",
    role: "Startup Founder",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 3,
    content:
      "The verification process on SkillHub ensures that I'm working with true professionals. I've completed multiple projects through the platform and have been impressed every time.",
    name: "Michael Johnson",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: 4,
    content:
      "SkillHub has been a game-changer for my freelance career. The platform connects me with high-quality clients and projects that align perfectly with my skills and interests.",
    name: "Sarah Thompson",
    role: "Web Developer",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    id: 5,
    content:
      "I've hired multiple freelancers through SkillHub for various projects, and the experience has been seamless. The quality of talent on this platform is unmatched.",
    name: "David Wilson",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
  },
]

const Testimonials = () => {
  const [mounted, setMounted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  const handlePrevious = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [])

  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from freelancers and clients who have found success on our platform.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -top-12 -left-12 text-primary opacity-20">
          <Quote size={80} />
        </div>

        <div className="relative overflow-hidden h-[300px] md:h-[250px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-6 text-center">
                  <p className="text-xl mb-6 italic">"{testimonials[current].content}"</p>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-16 w-16 mb-4">
                      <AvatarImage src={testimonials[current].avatar || "/placeholder.svg"} />
                      <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                      <p className="text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 px-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
