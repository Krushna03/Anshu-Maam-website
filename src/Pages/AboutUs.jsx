import React from "react";

const AboutUs = () => {
  return (
    <div className="overflow-x-hidden md:max-w-7xl mx-auto px-4 sm:px-6 py-12 text-gray-800 space-y-28">
      {/* About Section */}
      <section className="space-y-12">
        <h2 className="text-4xl sm:text-6xl font-comfortaa">About</h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image Left */}
          <div className="w-full md:w-1/2">
            <img
              src="/ab-1.png"
              alt="Anju Shahani"
              className="rounded-lg shadow-md w-full max-h-[550px] object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="w-full md:w-1/2 space-y-6 mt-6 md:mt-0">
            <div className="text-sm sm:text-xl uppercase font-semibold leading-loose text-gray-900 tracking-wider font-poppins">
              Professional Coach <br />
              Laughter Yoga Expert <br />
              Human Connection Enthusiast <br />
              UAE Workplace Happiness Ambassador
            </div>
            <p className="bg-[#FFF6EE] p-6 text-sm sm:text-lg leading-relaxed font-poppins shadow-md">
              I’m Anju Shahani, and my life’s work is rooted in a single,
              powerful belief: joy is not a luxury; it’s a tool for resilience,
              connection, and transformation. Having lived and worked in Mumbai,
              Hong Kong, London, Moscow, Kuwait, and Dubai, I’ve experienced
              firsthand how change shapes us. These multicultural chapters of my
              life have gifted me a deep appreciation for the beauty of human
              connection, no matter where you are or who you’re with. They’ve
              also instilled in me the philosophy I live by:{" "}
              <span className="font-semibold italic">
                “Change is the only constant.”
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-10 pt-12">
        <h2 className="text-4xl font-bold sm:text-5xl font-comfortaa">
          Know My Experience
        </h2>

        <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
          {/* Image Right */}
          <div className="w-full md:w-1/2">
            <img
              src="/ab-2.jpg"
              alt="Experience"
              className="rounded-lg shadow-md w-full max-h-[550px] object-cover"
            />
          </div>

          {/* Text Left */}
          <div className="w-full md:w-1/2 space-y-6 mt-6 md:mt-0 font-poppins">
            <p className="text-sm sm:text-xl uppercase font-semibold leading-loose text-gray-900 tracking-wider">
              Every session I lead — whether for teams, schools, or individuals —
              is designed to balance science with soul, and blend tools with trust.
            </p>
            <div className="bg-[#FFF6EE] p-4 space-y-3 shadow-lg text-sm sm:text-base">
              <p>
                I’m a certified Laughter Yoga Expert and proud Ambassador of Dr. Madan Kataria’s Laughter Yoga University, where I’ve spent over 15 years bringing science-backed joy to individuals and organizations across the globe. From C-suite boardrooms to student workshops, I’ve led thousands through Laughter Yoga, mindfulness sessions, and PowerCharge Coaching, creating safe spaces where well-being, creativity, and emotional release can thrive.
              </p>
              <p>
                Since 2011, I’ve trained and certified over 100 Laughter Yoga Leaders, spreading the ripple effect of joy and resilience. In 2019, my curiosity about human connection led me to become a Senior Certified Professional Coach with the Coach Transformation Academy. And when the world stood still during the pandemic, I stepped forward, earning my certification in Happiness and Mindfulness Coaching from the Berkeley School of Well-Being, California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laugh to Lead Section */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold sm:text-5xl font-comfortaa">
          About Laugh to Lead
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image Left */}
          <div className="w-full md:w-3/5">
            <img
              src="/ab-3.jpg"
              alt="Laugh to Lead"
              className="rounded-lg shadow-md w-full max-h-[550px] object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="w-full md:w-1/2 text-base sm:text-lg space-y-5 mt-6 md:mt-0 font-poppins">
            <p>
              Today, my journey has come full circle with Laugh to Lead, a leadership and wellness program for those who want to build stronger teams, manage stress with intention, and lead with emotional intelligence and joy. It’s a culmination of everything I’ve learned about people, presence, and performance.
            </p>
            <p>
              Whether you're a team leader, a coach, or simply someone looking to bring more meaning and laughter into your life, this work is for you.
              I’m deeply grateful to do what I love every day, and to witness, again and again, how laughter truly is a universal language.
            </p>
            <p className="mt-3 font-semibold">
              My motto is simple: <span className="font-bold">One World Family.</span>
            </p>
            <p className="text-[#594141] rounded-lg font-semibold">
              Because when we laugh together, we grow together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
