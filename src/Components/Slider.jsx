import React, { useState } from "react";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Feel the Shift Instantly",
    points: [
      "Reduces stress & anxiety",
      "Boosts mood and energy levels",
      "Improves breathing and blood flow",
      "Enhances focus and creativity",
      "Builds emotional resilience",
    ],
  },
  {
    image: "/images/slide2.jpg",
    title: "More Than Just Laughs",
    points: [
      "Activates 'happy' hormones like dopamine & endorphins",
      "Regulates the nervous system",
      "Mimics real laughter—your brain doesn’t know the difference",
      "Proven to improve immunity and emotional health",
    ],
  },
  {
    image: "/images/slide3.jpg",
    title: "Come As You Are",
    points: [
      "No poses, no pressure, no perfect flexibility",
      "All ages, backgrounds, and abilities welcome",
      "Fully guided and safe for everyone",
      "Sessions in-person or online",
    ],
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-pink-500 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col md:flex-row items-center bg-pink-500 p-6"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-64 h-64 object-cover rounded-2xl mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-white">
                  <h2 className="text-xl font-semibold mb-4">
                    {slide.title}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-base text-pink-100">
                    {slide.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-2 rounded-full cursor-pointer transition-all ${
                index === activeIndex ? "bg-fuchsia-900 w-6" : "bg-pink-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
