import { MapPin, Phone, Mail } from "lucide-react"
import React from "react"

import { useState } from "react"

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreeToPrivacy: false,
  })

  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target).checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log("Newsletter signup:", newsletterEmail)
  }

  return (
    <>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold font-comfortaa text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-2xl font-medium font-poppins text-gray-700 mb-2">Connection begins with conversation.</p>
            <p className="text-2xl font-medium font-poppins text-gray-700">{"Drop us a message and let's grow together."}</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes up 2/3 of the space */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-orange-50 border border-orange-200 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-6 py-4 bg-orange-50 border border-orange-200 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="px-6 py-4 bg-orange-50 border border-orange-200 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={8}
                    className="w-full px-6 py-4 bg-orange-50 border border-orange-200 rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-center justify-center space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToPrivacy"
                    id="privacy"
                    checked={formData.agreeToPrivacy}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-pink-500 border-2 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <label htmlFor="privacy" className="font-poppins text-gray-700">
                    I Acknowledge And Agree To The <span className="underline cursor-pointer">Privacy Policy</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-200 shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Newsletter Signup - Takes up 1/3 of the space */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-10 text-white h-fit">
                <h3 className="text-2xl font-bold mb-4">Our Newsletter</h3>
                <p className="text-pink-100 mb-10 leading-relaxed">
                  Subscribe to get our the latest tips, insights, practices on laughter, yoga — straight to your inbox.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="space-y-5">
                  <input
                    type="email"
                    placeholder="Email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-6 py-3 bg-pink-400 bg-opacity-50 border border-pink-300 rounded-full text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-8 max-w-6xl mx-auto">
        {/* Location Card */}
        <div className="flex-1 bg-pink-200 rounded-3xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-gray-700 font-medium">Dubai, UAE</p>
            <p className="text-gray-700 font-medium">Mumbai, India</p>
          </div>
        </div>

        {/* Phone Card */}
        <div className="flex-1 bg-pink-200 rounded-3xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-gray-700 font-medium">+97 1509052882 (Dubai)</p>
            <p className="text-gray-700 font-medium">+91 9769207468 (India)</p>
          </div>
        </div>

        {/* Email Card */}
        <div className="flex-1 bg-pink-200 rounded-3xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Anju.d.shahani@gmail.com</p>
          </div>
        </div>

        
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Photo Frame */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer frame with rounded corners */}
              <div className="bg-pink-100 p-6 rounded-3xl shadow-lg">
                {/* Inner photo container */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Anju Shahani with arms raised in front of knowledge expansion backdrop"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Branding */}
          <div className="text-center lg:text-left space-y-6">
            {/* Logo/Initials */}
            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-black leading-none">AS</h1>
              <h2 className="text-4xl font-light text-pink-500 tracking-wide">ANJU SHAHANI</h2>
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <p className="text-xl text-gray-600 leading-relaxed">Professional Coach, Laughter Yoga Expert,</p>
              <p className="text-xl text-gray-600 leading-relaxed">Human Connection Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </>

    
  )
}
