import React from 'react'
import { BookOpen, Users, Award, GraduationCap } from "lucide-react"

const About = () => {
  return (
    <div className="container px-4 md:px-32 py-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px]">

        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="text-blue-400">EduLearn</span>
            </h2>
            <p className="max-w-[500px] text-slate-300 md:text-lg">
              We are dedicated to making quality education accessible to everyone. Our platform combines
              cutting-edge technology with proven pedagogical methods to create an engaging learning experience.
            </p>
          </div>

          <ul className="grid gap-3 pt-4 text-sm">
            <li className="flex items-center gap-3">
              <Award className="h-5 w-5 text-blue-400" />
              <span>Certified instructors and industry experts</span>
            </li>
            <li className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-400" />
              <span>Community of over 100,000 learners</span>
            </li>
            <li className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-blue-400" />
              <span>500+ courses across multiple disciplines</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Users className="h-8 w-8" />, label: "Students", value: "100K+" },
              { icon: <BookOpen className="h-8 w-8" />, label: "Courses", value: "500+" },
              { icon: <Award className="h-8 w-8" />, label: "Instructors", value: "50+" },
              { icon: <GraduationCap className="h-8 w-8" />, label: "Success Rate", value: "95%" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row lg:gap-2 items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10 text-blue-400">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
