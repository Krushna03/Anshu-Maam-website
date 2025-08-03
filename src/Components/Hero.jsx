import React from "react";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-20 py-12 md:py-20 flex justify-center bg-white font-comfortaa">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        
        {/* Left Text Section */}
        <div className="w-full md:w-[55%] space-y-7 text-center md:text-left sm:py-16">
          <h1 className="text-3xl md:text-[52px] font-semibold tracking-tight leading-tight">
            When we laugh together,
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              we grow together.
            </span>
          </h1>
          <p className="text-base md:text-xl font-semibold text-gray-900">
            Experience the gentle, joyful power of laughter-led transformation.
          </p>
          <p className="uppercase tracking-wider text-black font-bold text-sm md:text-base">
            15+ Years of Experience
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium px-12 py-3 rounded-full text-base md:text-lg shadow-md hover:opacity-90 transition">
            Join A Session
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[45%] flex justify-center relative">
          <div className="relative w-[90%] sm:w-[400px] md:w-[500px] lg:w-[550px] 
            h-[350px] sm:h-[400px] md:h-[440px] lg:h-[470px] 
            rounded-[50%_0_50%_0] bg-gradient-to-b from-[#fdd1e34e] to-[#fb2a8bac] shadow-2xl overflow-hidden">

            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-pink-400/80 to-transparent z-30"></div>

            <div className="relative flex justify-center items-center">
              <img
                src="/hero-img.png"
                alt="Profile"
                className="h-full object-contain mx-auto mt-[-30px] scale-[1.2] md:scale-[1.40]"
              />
            </div>

            <div className="absolute inset-0 bg-white/10 z-0"></div>
          </div>

          <div className="hidden md:block absolute top-2 left-0 md:right-[calc(100%-30px)] w-6 h-6 md:w-10 md:h-10 bg-[#e778b4] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
