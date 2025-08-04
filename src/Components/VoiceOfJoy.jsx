import React, { useRef, useState } from "react";

const videos = [
  "https://source.unsplash.com/400x600/?person,1",
  "https://source.unsplash.com/400x600/?person,2",
  "https://source.unsplash.com/400x600/?person,3",
  "https://source.unsplash.com/400x600/?person,4",
];

const VoiceOfJoy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef(null);
  const isDragging = useRef(false);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.touches[0].clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < videos.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
      startX.current = null;
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
      if (diff > 0 && activeIndex < videos.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }
    isDragging.current = false;
    startX.current = null;
  };

  return (
    <section className="w-full bg-white px-4 sm:px-8 py-16 font-comfortaa">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Left Content */}
        <div className="w-full lg:w-[40%] space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-black">
            Hear Voice of Joy
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Real moments. Genuine transformations.
          </p>
          <p className="text-lg sm:text-xl text-black leading-relaxed">
            Every session leaves behind more than smiles. Hear how laughter
            yoga has helped others reset and reconnect
          </p>

          {/* Avatars & Stat */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex -space-x-3">
              {["women/1", "women/2", "women/3"].map((user, i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/${user}.jpg`}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="avatar"
                />
              ))}
            </div>
            <div>
              <p className="text-[#ff0f83] text-3xl font-bold leading-tight">
                100+
              </p>
              <p className="text-sm text-gray-600 font-medium">
                Trained Laughter <br /> Yoga Leaders
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-4 sm:mt-6 px-6 py-2 bg-[#ff0f83] text-white font-semibold text-sm sm:text-base rounded-full">
            Watch More
          </button>
        </div>

        {/* Right Slider*/}
        <div
          className="w-full lg:w-[60%] overflow-hidden relative px-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ transform: `translateX(-${activeIndex * 92}%)` }} 
          >
            {videos.map((src, idx) => (
              <div
                key={idx}
                className="w-[92%] shrink-0"
              >
                <div className="relative rounded-[30px] overflow-hidden h-[360px]">
                  <img
                    src={src}
                    alt={`video-${idx}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 bg-white bg-opacity-60 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {videos.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "bg-[#ff0f83] w-6" : "bg-[#f3c2d6] w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceOfJoy;
