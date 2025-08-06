import React from 'react';
import { Heart } from 'lucide-react';

export default function PowerCharge() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen px-4 py-12 sm:px-6 md:p-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row sm:gap-8 lg:gap-10 mb-6 sm:mb-10">
        {/* Text Block */}
        <div className="flex-1">
          <h1 className="px-4 sm:px-0 text-3xl sm:text-5xl font-comfortaa font-bold text-gray-900 leading-[1.5] tracking-wide">
            PowerCharge 
            <p className='sm:mt-2'>for Inner</p>
            <p className='sm:mt-2'>Recharge</p>
          </h1>

          <div className="mt-5 sm:mt-20 mb-8 sm:mb-12 max-w-md">
            <p className="p-6 bg-[#FFF6EE] text-base sm:text-lg font-medium text-gray-700 leading-relaxed rounded-xl font-poppins">
              Feeling drained, distracted, or disconnected? PowerCharge is your reset button. It’s designed to help you reconnect with yourself and others, boost energy, release stress, and recharge your mindset—all through practical, playful group activities.
              <br /><br />
              Whether you're leading a team or navigating personal challenges, this session helps you show up as your most vibrant, present self.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-[750px] lg:mt-20 mb-20 sm:mb-0">
          <div className="relative rounded-2xl overflow-hidden p-5 bg-[#FFF6EE]">
            <img
              src="/powercharge.png"
              alt="Group of people doing outdoor activities at sunset"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* What's inside section */}
      <div className="mb-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-comfortaa font-bold text-gray-900 mb-10 text-center">
          What’s inside
        </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden w-full">
              <img
                src="/sl-3.jpg"
                alt="People participating in a group activity"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-6">
              {[
                'Guided stress-release techniques and movement',
                'Mindfulness tools for clarity and calm',
                'Laughter and group-based energizers',
                'Emotional well-being practices you can use daily',
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-pink-500 fill-pink-500 flex-shrink-0" />
                  <p className="text-base sm:text-xl   font-poppins font-medium text-gray-800 leading-snug">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* Benefits Section */}
      <div className="mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-comfortaa font-bold text-gray-900 mb-10 text-center">
          Benefits
        </h2>

        <div className="max-w-72 sm:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 lg:gap-12">
          {[
            'Instant energy boost and mental clarity',
            'Holistic stress management',
            'Enhanced focus and meditation',
            'A feel-good experience that lasts beyond the session',
          ].map((text, index) => (
            <div
              key={index}
              className="bg-pink-50 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 flex flex-col items-center justify-center text-center shadow-sm"
            >
              <img src="lotus.png" alt="" className="w-10 h-10 mb-4" />
              <p className="text-sm sm:text-base font-poppins font-medium text-gray-800 leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ideal for section */}
      <div className="text-center px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-comfortaa font-bold text-gray-900 mb-6">
          Ideal for
        </h2>
        <p className="text-base sm:text-xl lg:text-2xl font-poppins text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Corporate wellness programs, team retreats, educator programs, or anyone looking to kickstart their day with purpose and positivity.
        </p>
      </div>
    </div>
  );
}
