import React from 'react'
import { BookOpen, Users, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card"

const Services = () => {
  return (
    <div className="container px-4 md:px-6 py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="max-w-[900px] text-slate-300 md:text-lg">
            We offer a comprehensive range of educational services designed to meet diverse learning needs.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-3">
        {[
          {
            icon: <BookOpen className="h-10 w-10 text-blue-400" />,
            title: "Online Courses",
            description: "Self-paced learning with interactive content, quizzes, and assignments.",
            points: [
              "Video lectures and tutorials",
              "Interactive exercises",
              "Progress tracking",
              "Certificate of completion"
            ]
          },
          {
            icon: <Users className="h-10 w-10 text-blue-400" />,
            title: "Live Sessions",
            description: "Real-time interaction with instructors and fellow students.",
            points: [
              "Live webinars and workshops",
              "Q&A sessions",
              "Group discussions",
              "Recorded sessions"
            ]
          },
          {
            icon: <Target className="h-10 w-10 text-blue-400" />,
            title: "Personalized Learning",
            description: "Customized learning paths based on your goals and skill level.",
            points: [
              "Skill assessments",
              "Adaptive learning paths",
              "One-on-one mentoring",
              "Performance analytics"
            ]
          }
        ].map((service, idx) => (
          <Card key={idx} className="bg-slate-800 border border-slate-700 shadow-md text-white hover:shadow-blue-500/20 transition duration-300">
            <CardHeader className="space-y-3">
              {service.icon}
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-slate-400">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                {service.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Services
