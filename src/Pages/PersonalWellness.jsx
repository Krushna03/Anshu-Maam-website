import React from 'react'
import { Crown } from 'lucide-react'

export default function PersonalWellness() {
  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Laughter Yoga<br />
          for Personal<br />
          Wellness
        </h1>
      </div>

      {/* Hero Image */}
      <div className="px-6 mb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/images/laughter-yoga-group.png"
            alt="Group of people practicing laughter yoga outdoors"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Description Text */}
      <div className="px-6 mb-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          Recharge your mind and body with a personal Laughter Yoga session, a unique blend of guided laughter exercises, deep breathing, and mindfulness-based movement. This therapeutic practice doesn't rely on humor or jokes—you don't need to worry to be equipped with dry, silly material. It is a powerful tool for emotional release and stress relief, helping you reconnect with joy. Perfect for individuals seeking natural stress relief, mood elevation, and an energizing self-care ritual.
        </p>
      </div>

      {/* What you'll experience section */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          What you'll experience
        </h2>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Top row */}
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Crown className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-sm text-gray-700 leading-tight">
              Playful movement and laughter techniques
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Crown className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-sm text-gray-700 leading-tight">
              Breathwork for relaxation and clarity
            </p>
          </div>
          
          {/* Bottom row */}
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Crown className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-sm text-gray-700 leading-tight">
              A safe space to release emotional blocks
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Crown className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-sm text-gray-700 leading-tight">
              Increased energy, positivity, and self-connection
            </p>
          </div>
        </div>
      </div>

      {/* Ideal for section */}
      <div className="px-6 pb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Ideal for
        </h2>
        <p className="text-sm text-gray-700 text-center leading-relaxed">
          individuals, wellness enthusiasts, coaches, educators, and anyone ready to bring more joy into daily life.
        </p>
      </div>
    </div>
  )
}