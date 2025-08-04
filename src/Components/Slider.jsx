import React, { useState, useRef } from "react";

const slides = [
  {
    image: "/sl-1.jpg",
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
    image: "/sl-2.jpg",
    title: "More Than Just Laughs",
    points: [
      "Activates 'happy' hormones like dopamine & endorphins",
      "Regulates the nervous system",
      "Mimics real laughter—your brain doesn’t know the difference",
      "Proven to improve immunity and emotional health",
    ],
  },
  {
    image: "/sl-3.jpg",
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
  const startX = useRef(null);
  const isDragging = useRef(false);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!startX.current) return;
    const currentX = e.touches[0].clientX;
    const diff = startX.current - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < slides.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
      startX.current = null; // reset to avoid multiple triggers
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < slides.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
    isDragging.current = false;
    startX.current = null;
  };

  return (
    <div
      className="bg-[#ff4ec0] py-8 sm:py-16"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="cursor-pointer flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-28 p-6"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] object-cover rounded-[30px] mb-6 md:mb-0"
                />
                <div className="text-[#702159] max-w-xl">
                  <h2 className="text-[28px] sm:text-5xl font-bold text-[#6d033d] mb-3 sm:mb-8 select-none">
                    {slide.title}
                  </h2>
                  <ul className="space-y-2 sm:text-lg">
                    {slide.points.map((point, idx) => (
                      <li key={idx} className="text-[#6d033d] list-disc list-inside select-none">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mb-4 sm:mb-0 sm:mt-6 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full cursor-pointer transition-all ${
                index === activeIndex
                  ? "bg-[#af005e] w-10 sm:w-14"
                  : "bg-[#f9b7da] w-6 sm:w-8"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
