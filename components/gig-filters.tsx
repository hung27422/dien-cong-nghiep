"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const categories = [
  { id: "graphic-design", label: "Graphic Design" },
  { id: "web-development", label: "Web Development" },
  { id: "ai-ml", label: "AI/ML Projects" },
  { id: "content-writing", label: "Content Writing" },
  { id: "voiceover", label: "Voiceover Services" },
]

const levels = [
  { id: "any", label: "Any Level" },
  { id: "top-rated", label: "Top Rated" },
  { id: "expert", label: "Expert" },
  { id: "rising-talent", label: "Rising Talent" },
]

const GigFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handleLevelChange = (levelId: string) => {
    setSelectedLevels((prev) => (prev.includes(levelId) ? prev.filter((id) => id !== levelId) : [...prev, levelId]))
  }

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values)
  }

  const handleReset = () => {
    setPriceRange([0, 1000])
    setSelectedCategories([])
    setSelectedLevels([])
  }

  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" size="sm" onClick={handleReset}>
            Reset
          </Button>
        </div>

        <div className="space-y-6">
          <Accordion type="multiple" defaultValue={["category", "price", "level"]}>
            <AccordionItem value="search">
              <AccordionTrigger>Search</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Input placeholder="Search keywords..." />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="category">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => handleCategoryChange(category.id)}
                      />
                      <label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                        {category.label}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="price">
              <AccordionTrigger>Price Range</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Slider
                    defaultValue={priceRange}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                  />
                  <div className="flex justify-between">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="level">
              <AccordionTrigger>Freelancer Level</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <div key={level.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`level-${level.id}`}
                        checked={selectedLevels.includes(level.id)}
                        onCheckedChange={() => handleLevelChange(level.id)}
                      />
                      <label htmlFor={`level-${level.id}`} className="text-sm cursor-pointer">
                        {level.label}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button className="w-full">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default GigFilters
