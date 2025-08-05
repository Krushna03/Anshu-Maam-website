import React, { useRef, useState } from "react";

const videos = [
  "voj-1.mp4",
  "voj-2.mp4",
  "voj-3.mp4",
  "voj-4.mp4",
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
    <section className="w-full bg-white px-4 sm:px-8 py-10 sm:py-20 font-comfortaa">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Left Content */}
        <div className="w-full lg:w-[40%] space-y-6 lg:mt-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-black">
            Hear Voice of Joy
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-bold">
            Real moments. Genuine transformations.
          </p>
          <p className="text-lg sm:text-xl font-bold text-black leading-relaxed lg:pt-8">
            Every session leaves behind more than smiles. Hear how laughter
            yoga has helped others reset and reconnect
          </p>

          {/* Avatars & Stat */}
          <div className="flex items-center gap-4 sm:gap-8 ">
            <div className="flex -space-x-3">
              {["women/1", "women/2", "women/3"].map((user, i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/${user}.jpg`}
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                  alt="avatar"
                />
              ))}
            </div>
            <div>
              <p className="text-[#ff0f83] text-3xl sm:text-4xl font-extrabold leading-tight">
                100+
              </p>
              <p className="text-sm text-gray-600 font-medium">
                Trained Laughter <br /> Yoga Leaders
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-4 sm:mt-6 px-8 py-3 bg-[#ff0f83] text-white font-semibold text-sm sm:text-lg rounded-full">
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
                <div className="relative rounded-[30px] overflow-hidden h-[400px] sm:h-[550px]">
                <video
                  src={`${src}`}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
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
