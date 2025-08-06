import React from 'react';
import { Flower2 } from 'lucide-react';

export default function TwentyOneDaysMindfull() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen px-4 py-12 sm:px-6 md:p-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row sm:gap-8 lg:gap-8 mb-6 sm:mb-10">
        {/* Text Block */}
        <div className="flex-1">
          <h1 className="px-4 sm:px-0 text-3xl sm:text-5xl font-comfortaa font-bold text-gray-900 leading-[1.5] tracking-wide">
            21 Day
            <p className="mt-2">Mindfulness</p>
            <p className="mt-2">Journey</p>
          </h1>

          <h1 className='px-4 sm:px-0 text-xl mt-4 sm:mt-8 font-poppins font-medium'>
            Find your calm. 
            <p>Reconnect with yourself.</p>
          </h1>

          <div className="mt-5 sm:mt-20 mb-8 sm:mb-12 max-w-  ">
            <p className="p-6 bg-[#FFF6EE] text-base sm:text-lg font-medium text-gray-700 leading-relaxed rounded-xl font-poppins">
              Find your calm. Reconnect with yourself.
              <br /><br />
              Join us for a 21-day guided mindfulness experience designed to help you build simple, lasting habits for inner peace, mental clarity, and emotional balance.
              <br /><br />
              Each day offers gentle prompts, reflections, and practices you can integrate into real life—no matter how busy you are. Perfect for beginners and seasoned seekers alike, this journey is your space to slow down, tune in, and show up more intentionally.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-[680px] lg:mt-20 mb-20 sm:mb-0">
          <div className="relative rounded-2xl overflow-hidden p-5 bg-[#FFF6EE]">
            <img
              src="/21-dmj.png"
              alt="Person practicing mindfulness"
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
            />
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
            'Release stress and anxiety through breath and presence',
            'Cultivate focus and intentionality in daily life',
            'Create emotional space to respond, not react',
            'Build a sustainable habit of self-care and awareness',
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
    </div>
  );
}
