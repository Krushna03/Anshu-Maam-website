import React from 'react'
import { Award, Lightbulb, Zap } from "lucide-react"
import { Card } from "@/Components/ui/card"

const Feature = () => {
  return (
    <div className="container px-4 md:px-6 py-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Platform Features</h2>
          <p className="max-w-[900px] text-slate-400 md:text-xl">
            Discover the powerful features that make learning effective and enjoyable.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center space-y-6">
          {[
            {
              icon: <Lightbulb className="h-6 w-6" />,
              title: "Interactive Learning",
              desc: "Engage with interactive content, simulations, and hands-on exercises.",
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Fast & Reliable",
              desc: "Lightning-fast platform with 99.9% uptime and seamless performance.",
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "Certified Courses",
              desc: "Earn industry-recognized certificates upon course completion.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600 text-white">
                {icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto lg:mx-0">
          {[
            { title: "24/7", subtitle: "Support" },
            { title: "Mobile", subtitle: "Friendly" },
            { title: "AI", subtitle: "Powered" },
            { title: "Cloud", subtitle: "Based" },
          ].map((item, index) => (
            <Card
              key={index}
              className="text-center p-6 bg-slate-900 text-white shadow-lg"
            >
              <div className="text-3xl font-bold text-sky-500">{item.title}</div>
              <div className="text-sm text-slate-400">{item.subtitle}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature
