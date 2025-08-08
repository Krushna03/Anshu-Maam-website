import React from "react";

const About = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-20 py-24 bg-white font-comfortaa relative overflow-hidden">
      {/* Faded Background Text */}
      <h2 className="absolute -top-0 md:-top-8 lg:-top-4 left-0 w-full text-center text-[40px] md:text-[90px] text-pink-100 z-0 tracking-wider  font-poppins font-extrabold py-3 md:py-0 lg:py-5">
        ONE WORLD FAMILY
      </h2>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-16 md:mt-24">
        {/* Left Image with Arch Border */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative bg-[#fdf8f5] border-[3px] border-[#a4a2a1] rounded-t-[200px] rounded-b-[10px] p-5 shadow-md w-[85%] sm:w-[75%] md:w-full max-w-[340px]">
            <div className="overflow-hidden rounded-t-[180px] rounded-b-[6px] aspect-[3/4] w-full bg-white">
              <img
                src="/anju-about.jpg"
                alt="Anju"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-2/3 space-y-5 text-center md:text-left px-2">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black sm:mt-8 lg:mt-0">About Me</h3>
          <p className="text-[#492a29] font-poppins font-semibold text-base sm:text-xl">
            • Laughter Yoga Expert • Human Connection Enthusiast
          </p>
          <p className="text-[#492a29] font-poppins font-medium text-sm sm:text-xl leading-relaxed md:w-[90%] mx-auto md:mx-0">
            I’m Anju—an international coach and certified Laughter Yoga expert on a mission to help people reconnect with joy, resilience, and one another.
            With over 15 years of experience across six countries, I’ve led thousands through powerful sessions blending science, soul, and a whole lot of laughter.
            <br /><br />
            From boardrooms to classrooms, I create spaces where emotional well-being thrives—one breath, one smile, and one breakthrough at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
