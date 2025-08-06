import { MapPin, Phone, Mail } from "lucide-react"
import React, { useState } from "react"

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
      [name]: type === "checkbox" ? e.target.checked : value,
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
      <div className="overflow-x-hidden min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-comfortaa text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg sm:text-xl font-medium font-poppins text-gray-700 mb-2">Connection begins with conversation.</p>
            <p className="text-lg sm:text-xl font-medium font-poppins text-gray-700">Drop us a message and let's grow together.</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-orange-50 border border-orange-200 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-orange-50 border border-orange-200 rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                />

                <div className="flex items-start gap-3 text-sm">
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

                <div className="text-center sm:text-left">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-200 shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Newsletter</h3>
                <p className="text-pink-100 mb-8 leading-relaxed text-sm sm:text-base">
                  Subscribe to get the latest tips, insights, and practices on laughter, yoga — straight to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-5 py-3 bg-pink-400 bg-opacity-50 border border-pink-300 rounded-full text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
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

      <div className="flex flex-col md:flex-row gap-6 p-6 sm:p-8 max-w-6xl mx-auto">
        {/* Location Card */}
        <div className="flex-1 bg-pink-200 rounded-3xl p-6 sm:p-8 text-center">
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
        <div className="flex-1 bg-pink-200 rounded-3xl p-6 sm:p-8 text-center">
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
        <div className="flex-1 bg-pink-200 rounded-3xl p-6 sm:p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-gray-700 font-medium break-all">Anju.d.shahani@gmail.com</p>
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 px-4 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="w-full md:w-[540px] flex justify-center md:justify-start">
          <div className="relative bg-[#FFF6EE] border-[3px] border-[#a4a2a1] rounded-t-[280px] p-4 sm:p-6 shadow-md w-full max-w-[400px] sm:max-w-[75%] md:max-w-full">
            <div className="overflow-hidden rounded-t-[280px] rounded-b-[8px] w-full h-[360px] sm:h-[480px] bg-white">
              <img
                src="/c-1.png"
                alt="Anju Shahani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center md:text-left space-y-4 w-full max-w-sm">
          <img
            src="/logo.png"
            alt="AS Logo"
            className="w-48 sm:w-72 mx-auto md:ml-10"
          />
          <p className="text-gray-700 sm:text-[17px] font-semibold text-center leading-relaxed font-poppins">
            Professional Coach, Laughter Yoga Expert,<br />
            Human Connection Enthusiast
          </p>
        </div>
      </section>
    </>
  )
}