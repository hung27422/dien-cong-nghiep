"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

// Define the form schema for each category
const webDevelopmentSchema = z.object({
  q1: z.string({
    required_error: "Please select an answer",
  }),
  q2: z.string({
    required_error: "Please select an answer",
  }),
  q3: z.string().min(20, {
    message: "Your answer must be at least 20 characters",
  }),
  codeChallenge: z.string().min(50, {
    message: "Your code solution must be at least 50 characters",
  }),
})

const graphicDesignSchema = z.object({
  q1: z.string({
    required_error: "Please select an answer",
  }),
  q2: z.string({
    required_error: "Please select an answer",
  }),
  q3: z.string().min(20, {
    message: "Your answer must be at least 20 characters",
  }),
  designChallenge: z.string().min(50, {
    message: "Your design explanation must be at least 50 characters",
  }),
})

const aiMlSchema = z.object({
  q1: z.string({
    required_error: "Please select an answer",
  }),
  q2: z.string({
    required_error: "Please select an answer",
  }),
  q3: z.string().min(20, {
    message: "Your answer must be at least 20 characters",
  }),
  mlChallenge: z.string().min(50, {
    message: "Your solution must be at least 50 characters",
  }),
})

const contentWritingSchema = z.object({
  q1: z.string({
    required_error: "Please select an answer",
  }),
  q2: z.string({
    required_error: "Please select an answer",
  }),
  q3: z.string().min(20, {
    message: "Your answer must be at least 20 characters",
  }),
  writingChallenge: z.string().min(100, {
    message: "Your writing sample must be at least 100 characters",
  }),
})

const voiceoverSchema = z.object({
  q1: z.string({
    required_error: "Please select an answer",
  }),
  q2: z.string({
    required_error: "Please select an answer",
  }),
  q3: z.string().min(20, {
    message: "Your answer must be at least 20 characters",
  }),
  voiceoverExperience: z.string().min(50, {
    message: "Your description must be at least 50 characters",
  }),
})

// Test questions for each category
const testQuestions = {
  "web-development": {
    title: "Web Development Skill Test",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    questions: [
      {
        id: "q1",
        question: "Which of the following is NOT a JavaScript framework/library?",
        options: [
          { value: "react", label: "React" },
          { value: "angular", label: "Angular" },
          { value: "django", label: "Django" },
          { value: "vue", label: "Vue" },
        ],
        correctAnswer: "django",
      },
      {
        id: "q2",
        question: "Which HTTP status code represents a successful response?",
        options: [
          { value: "200", label: "200 OK" },
          { value: "404", label: "404 Not Found" },
          { value: "500", label: "500 Internal Server Error" },
          { value: "301", label: "301 Moved Permanently" },
        ],
        correctAnswer: "200",
      },
      {
        id: "q3",
        question: "Explain the difference between server-side rendering and client-side rendering.",
        type: "text",
      },
      {
        id: "codeChallenge",
        question:
          "Code Challenge: Write a JavaScript function that takes an array of numbers and returns the sum of all even numbers in the array.",
        type: "code",
      },
    ],
  },
  "graphic-design": {
    title: "Graphic Design Skill Test",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    questions: [
      {
        id: "q1",
        question: "Which color model is used for digital design?",
        options: [
          { value: "rgb", label: "RGB" },
          { value: "cmyk", label: "CMYK" },
          { value: "hsb", label: "HSB" },
          { value: "pantone", label: "Pantone" },
        ],
        correctAnswer: "rgb",
      },
      {
        id: "q2",
        question: "Which file format is best for logos with transparency?",
        options: [
          { value: "jpg", label: "JPG" },
          { value: "png", label: "PNG" },
          { value: "gif", label: "GIF" },
          { value: "bmp", label: "BMP" },
        ],
        correctAnswer: "png",
      },
      {
        id: "q3",
        question: "Explain the importance of white space in design.",
        type: "text",
      },
      {
        id: "designChallenge",
        question:
          "Design Challenge: Describe how you would approach designing a logo for a tech startup focused on sustainability. Include your process and considerations.",
        type: "text",
      },
    ],
  },
  "ai-ml": {
    title: "AI/ML Skill Test",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813a7942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    questions: [
      {
        id: "q1",
        question: "Which of the following is NOT a type of machine learning?",
        options: [
          { value: "supervised", label: "Supervised Learning" },
          { value: "unsupervised", label: "Unsupervised Learning" },
          { value: "reinforcement", label: "Reinforcement Learning" },
          { value: "deterministic", label: "Deterministic Learning" },
        ],
        correctAnswer: "deterministic",
      },
      {
        id: "q2",
        question: "Which algorithm is commonly used for classification problems?",
        options: [
          { value: "linear-regression", label: "Linear Regression" },
          { value: "random-forest", label: "Random Forest" },
          { value: "k-means", label: "K-means Clustering" },
          { value: "pca", label: "Principal Component Analysis" },
        ],
        correctAnswer: "random-forest",
      },
      {
        id: "q3",
        question: "Explain the difference between bias and variance in machine learning models.",
        type: "text",
      },
      {
        id: "mlChallenge",
        question:
          "ML Challenge: Describe how you would approach a sentiment analysis problem for customer reviews. Include data preprocessing, model selection, and evaluation metrics.",
        type: "text",
      },
    ],
  },
  "content-writing": {
    title: "Content Writing Skill Test",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    questions: [
      {
        id: "q1",
        question: "Which of the following is NOT an important aspect of SEO writing?",
        options: [
          { value: "keywords", label: "Keyword Research" },
          { value: "meta-descriptions", label: "Meta Descriptions" },
          { value: "complex-language", label: "Using Complex Language" },
          { value: "backlinks", label: "Quality Backlinks" },
        ],
        correctAnswer: "complex-language",
      },
      {
        id: "q2",
        question: "What is the ideal length for a blog post title?",
        options: [
          { value: "1-3", label: "1-3 words" },
          { value: "5-10", label: "5-10 words" },
          { value: "15-20", label: "15-20 words" },
          { value: "25+", label: "25+ words" },
        ],
        correctAnswer: "5-10",
      },
      {
        id: "q3",
        question: "Explain the importance of audience research in content writing.",
        type: "text",
      },
      {
        id: "writingChallenge",
        question:
          "Writing Challenge: Write a compelling introduction for a blog post about sustainable living practices that anyone can adopt.",
        type: "text",
      },
    ],
  },
  voiceover: {
    title: "Voiceover Skill Test",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    questions: [
      {
        id: "q1",
        question: "Which of the following is NOT important for voice recording quality?",
        options: [
          { value: "microphone", label: "High-quality Microphone" },
          { value: "room-acoustics", label: "Room Acoustics" },
          { value: "expensive-software", label: "Expensive Software" },
          { value: "pop-filter", label: "Pop Filter" },
        ],
        correctAnswer: "expensive-software",
      },
      {
        id: "q2",
        question: "What is the ideal speaking pace for most commercial voiceovers?",
        options: [
          { value: "slow", label: "Slow (100-120 words per minute)" },
          { value: "moderate", label: "Moderate (140-160 words per minute)" },
          { value: "fast", label: "Fast (180-200 words per minute)" },
          { value: "very-fast", label: "Very Fast (220+ words per minute)" },
        ],
        correctAnswer: "moderate",
      },
      {
        id: "q3",
        question: "Explain the importance of breath control in voiceover work.",
        type: "text",
      },
      {
        id: "voiceoverExperience",
        question:
          "Voiceover Challenge: Describe your experience with different types of voiceover projects and your approach to adapting your voice for different audiences.",
        type: "text",
      },
    ],
  },
}

// AI evaluation function (simulated)
const evaluateWithAI = (category: string, answers: any) => {
  return new Promise<{ score: number; feedback: string; passed: boolean }>((resolve) => {
    // Simulate AI processing time
    setTimeout(() => {
      const questions = testQuestions[category as keyof typeof testQuestions].questions
      let score = 0
      let feedback = ""

      // Check multiple choice questions
      questions.slice(0, 2).forEach((q) => {
        if (answers[q.id] === q.correctAnswer) {
          score += 25
          feedback += `✓ Question ${q.id}: Correct answer.\n`
        } else {
          feedback += `✗ Question ${q.id}: Incorrect answer.\n`
        }
      })

      // Evaluate text answers (simulated)
      const textAnswer = answers.q3
      if (textAnswer && textAnswer.length > 50) {
        score += 25
        feedback += "✓ Your explanation shows good understanding of the concept.\n"
      } else if (textAnswer && textAnswer.length > 20) {
        score += 15
        feedback += "△ Your explanation is acceptable but could be more detailed.\n"
      } else {
        feedback += "✗ Your explanation lacks depth and understanding.\n"
      }

      // Evaluate challenge answer (simulated)
      const challengeKey = Object.keys(answers).find((key) => key.includes("Challenge") || key.includes("Experience"))
      const challengeAnswer = challengeKey ? answers[challengeKey] : ""

      if (challengeAnswer && challengeAnswer.length > 100) {
        score += 25
        feedback += "✓ Your challenge solution demonstrates strong skills in this area.\n"
      } else if (challengeAnswer && challengeAnswer.length > 50) {
        score += 15
        feedback += "△ Your challenge solution shows basic competency but could be improved.\n"
      } else {
        feedback += "✗ Your challenge solution does not meet professional standards.\n"
      }

      const passed = score >= 70

      resolve({
        score,
        feedback,
        passed,
      })
    }, 3000) // Simulate 3 second processing time
  })
}

const SkillVerificationTest = () => {
  const router = useRouter()
  const [category, setCategory] = useState<string>("")
  const [step, setStep] = useState<"select" | "test" | "evaluating" | "results">("select")
  const [testResults, setTestResults] = useState<{
    score: number
    feedback: string
    passed: boolean
  } | null>(null)

  // Create a form based on the selected category
  const form = useForm<z.infer<typeof webDevelopmentSchema>>({
    resolver: zodResolver(
      category === "web-development"
        ? webDevelopmentSchema
        : category === "graphic-design"
          ? graphicDesignSchema
          : category === "ai-ml"
            ? aiMlSchema
            : category === "content-writing"
              ? contentWritingSchema
              : voiceoverSchema,
    ),
    defaultValues: {},
  })

  const handleCategorySelect = (value: string) => {
    setCategory(value)
    setStep("test")
    form.reset()
  }

  const onSubmit = async (values: any) => {
    setStep("evaluating")

    try {
      // Evaluate the test with AI
      const results = await evaluateWithAI(category, values)
      setTestResults(results)
      setStep("results")

      // If passed, show success toast
      if (results.passed) {
        toast({
          title: "Congratulations!",
          description: "You've successfully passed the skill verification test.",
        })
      }
    } catch (error) {
      console.error("Error evaluating test:", error)
      toast({
        title: "Evaluation Error",
        description: "There was an error evaluating your test. Please try again.",
        variant: "destructive",
      })
      setStep("test")
    }
  }

  const renderCategorySelection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Select Your Skill Category</CardTitle>
        <CardDescription>Choose the category that best matches your expertise for verification.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(testQuestions).map(([key, value]) => (
            <Card
              key={key}
              className="cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              onClick={() => handleCategorySelect(key)}
            >
              <div className="h-32 overflow-hidden">
                <img src={value.image || "/placeholder.svg"} alt={value.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 -mt-12 border-4 border-background">
                  {key === "web-development" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  ) : key === "graphic-design" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="13.5" cy="6.5" r=".5" />
                      <circle cx="17.5" cy="10.5" r=".5" />
                      <circle cx="8.5" cy="7.5" r=".5" />
                      <circle cx="6.5" cy="12.5" r=".5" />
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                    </svg>
                  ) : key === "ai-ml" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 2v8" />
                      <path d="M8 6l4-4 4 4" />
                      <circle cx="12" cy="16" r="6" />
                    </svg>
                  ) : key === "content-writing" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Test your knowledge and skills in {key.split("-").join(" ")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  const renderTest = () => {
    const selectedTest = testQuestions[category as keyof typeof testQuestions]

    if (!selectedTest) {
      return <div>Test not found</div>
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>{selectedTest.title}</CardTitle>
          <CardDescription>
            Complete all questions to verify your skills. Your answers will be evaluated by our AI system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {selectedTest.questions.map((question, index) => (
                <FormField
                  key={question.id}
                  control={form.control}
                  name={question.id as any}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        {index + 1}. {question.question}
                      </FormLabel>
                      {question.type === "text" ? (
                        <FormControl>
                          <Textarea
                            placeholder="Enter your answer..."
                            className="min-h-[100px]"
                            value={field.value || ""}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                      ) : question.type === "code" ? (
                        <FormControl>
                          <Textarea
                            placeholder="Write your code here..."
                            className="min-h-[200px] font-mono"
                            value={field.value || ""}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                      ) : (
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            {question.options?.map((option) => (
                              <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={option.value} />
                                </FormControl>
                                <FormLabel className="font-normal">{option.label}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => setStep("select")}>
                  Back to Categories
                </Button>
                <Button type="submit">Submit for Evaluation</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    )
  }

  const renderEvaluating = () => (
    <Card>
      <CardHeader>
        <CardTitle>Evaluating Your Test</CardTitle>
        <CardDescription>Our AI is analyzing your answers. This will take just a moment.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-16 w-16 animate-spin text-primary mb-8" />
        <Progress value={45} className="w-full max-w-md mb-4" />
        <p className="text-muted-foreground">Analyzing responses and evaluating skill level...</p>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt="AI analyzing data"
          className="mt-8 rounded-lg max-w-md w-full opacity-50"
        />
      </CardContent>
    </Card>
  )

  const renderResults = () => {
    if (!testResults) return null

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Test Results</CardTitle>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                testResults.passed
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {testResults.passed ? "Passed" : "Not Passed"}
            </div>
          </div>
          <CardDescription>
            {testResults.passed
              ? "Congratulations! You've successfully verified your skills."
              : "You didn't meet the passing criteria. Review the feedback and try again."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">{testResults.score}%</span>
              </div>
              <svg className="h-32 w-32" viewBox="0 0 100 100">
                <circle
                  className="text-muted stroke-current"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className={`${
                    testResults.passed ? "text-green-500" : "text-red-500"
                  } stroke-current transform -rotate-90 origin-center`}
                  strokeWidth="10"
                  strokeDasharray={`${testResults.score * 2.51} 251`}
                  strokeLinecap="round"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>
            </div>
            <p className="mt-4 text-center text-muted-foreground">
              Passing score: 70% | Your score: {testResults.score}%
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              {testResults.passed ? (
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
              )}
              AI Feedback
            </h3>
            <div className="bg-muted p-4 rounded-md">
              <pre className="whitespace-pre-wrap text-sm">{testResults.feedback}</pre>
            </div>
          </div>

          {testResults.passed ? (
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Verification Badge Awarded
              </h3>
              <p className="text-green-700 dark:text-green-300 mt-2">
                Your profile has been updated with a verified badge in {category.split("-").join(" ")}. This will
                increase your visibility to clients and improve your chances of getting hired.
              </p>
              <div className="mt-4">
                <img
                  src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Verification badge"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          ) : (
            <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-400 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Try Again
              </h3>
              <p className="text-amber-700 dark:text-amber-300 mt-2">
                You can retake the test after 7 days. Use this time to improve your skills based on the feedback
                provided.
              </p>
              <div className="mt-4">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Study and improve"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={() => setStep("select")}>
              Take Another Test
            </Button>
            <Button onClick={() => router.push("/")}>Return to Dashboard</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      {step === "select" && renderCategorySelection()}
      {step === "test" && renderTest()}
      {step === "evaluating" && renderEvaluating()}
      {step === "results" && renderResults()}
    </>
  )
}

export default SkillVerificationTest
