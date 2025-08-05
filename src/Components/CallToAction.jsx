import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full bg-[#FED2E840] px-4 sm:px-8 py-20 sm:py-28 font-comfortaa">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-4xl px-2 sm:px-0 font-semibold text-[#1f1f1f]">
            Ready to Rediscover the Joy of Laughter?
          </h2>
          <p className="text-lg sm:text-2xl text-[#1f1f1f] mx-12 sm:mx-0 mt-3 ">
            Join our next session and feel the shift.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Filled Button */}
          <button className="px-6 py-2 text-white rounded-full text-sm sm:text-xl font-medium bg-gradient-to-r from-[#ff4ec0] to-[#8e2de2] hover:opacity-90 transition">
            Book A Session
          </button>

          {/* Outlined Gradient Border Button */}
          <button className="px-6 py-2 rounded-full text-sm sm:text-xl font-semibold bg-white text-[#ff4ec0] border-2 border-transparent relative group">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff4ec0] to-[#8e2de2] group-hover:opacity-20 opacity-10"></span>
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ff4ec0] to-[#8e2de2]">
              Talk To Us
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
