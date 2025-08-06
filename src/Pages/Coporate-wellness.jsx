import React from 'react';
import { Crown } from 'lucide-react';

export default function CorporateWellness() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen px-4 py-12 sm:px-6 md:p-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row sm:gap-8 lg:gap-10 mb-6 sm:mb-10">
        {/* Text Block */}
        <div className="flex-1">
        <h1 className="px-4 sm:px-0 text-3xl sm:text-5xl font-comfortaa font-bold text-gray-900 tracking-wide">
          Laughter Yoga
          <p className='sm:mt-2'>for Corporate</p> 
          <p className='sm:mt-2'>Wellness</p>
        </h1>



          <div className="mt-5 sm:mt-20 mb-8 sm:mb-12 max-w-md">
            <p className="p-6 bg-[#FFF6EE] text-base sm:text-lg font-medium text-gray-700 leading-relaxed rounded-xl font-poppins">
              Boost employee morale, reduce workplace stress, and strengthen team connections with our corporate Laughter Yoga sessions. These unique sessions blend laughter therapy, mindfulness techniques, and team-building exercises to create a positive, energizing workplace culture that enhances overall productivity.
              <br /><br />*
              Whether it's a virtual meeting, an in-corporate workshop, or a wellness retreat, these sessions create shared space for joy, connection, and mental clarity. It's not just an activity—it’s a wellness reset for your team.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-[750px] lg:mt-20 mb-20 sm:mb-0">
          <div className="relative rounded-2xl overflow-hidden p-5 bg-[#FFF6EE]">
            <img
              src="/corporate-wellness.png"
              alt="Corporate team engaged in laughter yoga session in office environment"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* What you'll experience section */}
      <div className="mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-comfortaa font-bold text-gray-900 mb-10 text-center">
          What you’ll experience
        </h2>

        <div className="max-w-72 sm:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 lg:gap-12">
          {[
            'Improves team bonding and communication',
            'Reduces workplace stress and anxiety',
            'Boosts creativity and focus',
            'Enhances emotional resilience',
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
        <p className="text-lg sm:text-xl lg:text-2xl font-poppins text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Corporate teams, HR wellness initiatives, leadership programs, and employee engagement events.
        </p>
      </div>
    </div>
  );
}
