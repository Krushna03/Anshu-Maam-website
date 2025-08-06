import React from 'react';

export default function PersonalWellness() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen px-4 py-12 sm:px-6 md:p-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row sm:gap-8 lg:gap-10 mb-6 sm:mb-10">
        {/* Text Block */}
        <div className="flex-1">
          <h1 className="px-4 sm:px-0 text-3xl sm:text-5xl font-comfortaa font-bold text-gray-900 leading-snug tracking-wide">
            Laughter Yoga <br />
            for Personal <br />
            Wellness
          </h1>

          <div className="mt-5 sm:mt-20 mb-8 sm:mb-12 max-w-md">
            <p className="p-6 bg-[#FFF6EE] text-base sm:text-lg font-medium text-gray-700 leading-relaxed rounded-xl font-poppins">
              Recharge your mind and body with a personal Laughter Yoga session, a unique blend of guided laughter exercises, deep breathing, and mindfulness-based movement. This therapeutic practice doesn't rely on humor or jokes—you don't need to worry to be equipped with dry, silly material. It is a powerful tool for emotional release and stress relief, helping you reconnect with joy. Perfect for individuals seeking natural stress relief, mood elevation, and an energizing self-care ritual.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-[750px] lg:mt-20 mb-20 sm:mb-0">
          <div className="relative rounded-2xl overflow-hidden p-4 bg-[#FFF6EE]">
            <img
              src="/personal-wellness.jpg"
              alt="Group of people practicing laughter yoga outdoors"
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
            'Playful movement and laughter techniques',
            'Breathwork for relaxation and clarity',
            'A safe space to release emotional blocks',
            'Increased energy, positivity, and self-connection',
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
          Individuals, wellness enthusiasts, coaches, educators, and anyone ready to bring more joy into daily life.
        </p>
      </div>
    </div>
  );
}
