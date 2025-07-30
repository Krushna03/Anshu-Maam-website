import React from 'react'
import { Button } from "@/Components/ui/button"

const CallToAction = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Ready to Start Learning?
            </h2>
            <p className="max-w-[600px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of students who are already transforming their careers with EduLearn.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-sky-600 text-sky-400 bg-gray-700 hover:bg-sky-950 hover:text-white"
            >
              View Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
