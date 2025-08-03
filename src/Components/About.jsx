import React from "react";

const About = () => {
  return (
    <section className="mb-20 w-full px-4 sm:px-20 py-16 bg-white font-comfortaa relative overflow-hidden">
      {/* Faded Background Text */}
      <h2 className="absolute -top-4 left-0 w-full text-center text-[52px] sm:text-[90px] text-pink-100 z-0 tracking-wider select-none font-poppins font-extrabold">
        ONE WORLD FAMILY
      </h2>

      <div className="relative top-20 z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-20">
        {/* Left Image with Arch Border */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative bg-[#fdf8f5] border-[3px] border-[#a4a2a1] rounded-t-[200px] rounded-b-[10px] p-7 shadow-md m-4">
            <div className="overflow-hidden rounded-t-[180px] rounded-b-[6px] w-[260px] sm:w-[400px] md:w-[340px] aspect-[3/4] bg-white">
              <img
                src="/anju-about.jpg"
                alt="Anju"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-2/3 space-y-5 text-center md:text-left">
          <h3 className="text-3xl sm:text-6xl font-extrabold text-black">About Me</h3>
          <p className="text-[#492a29] font-poppins font-semibold text-base sm:text-xl">
          • Laughter Yoga Expert • Human Connection Enthusiast
          </p>
          <p className="text-[#492a29] font-poppins font-medium text-sm sm:text-xl leading-relaxed md:w-[90%]">
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
