import React from "react";

const OfferingsSection = () => {
  const offerings = [
    {
      title: "Laughter Yoga for",
      subtitle: "Personal Wellness",
    },
    {
      title: "Laughter Yoga for",
      subtitle: "Corporate Wellness",
    },
    {
      title: "Powercharge",
      subtitle: "",
    },
    {
      title: "Laughter Yoga",
      subtitle: "Leaders Certification",
    },
    {
      title: "21 day mindfulness",
      subtitle: "journey",
    },
  ];

  return (
    <div className="bg-[#FFF6EE] px-6 py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-[27px] md:text-6xl text-[#1f1f1f] mb-4 sm:mb-8">
          Joyful Practices Designed <br /> for Real-Life Transformation
        </h2>
        <p className="sm:text-xl text-[#0c0c0c] mb-4 max-w-6xl">
          Experience personalized laughter yoga sessions, workshops, and coaching that
          support emotional healing, stress relief, and meaningful human connection—no matter where you are on your journey.
        </p>
        <hr className="border-[#000000] my-8 mb-14" />

        {/* Offerings List */}
        <div className="space-y-12">
          {offerings.map((item, idx) => (
            <div key={idx} className="w-full px-2">
              <div className="text-left">
                <p className="relative sm:left-[33%] text-2xl md:text-5xl text-[#1f1f1f] leading-tight mb-3">
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="relative sm:left-[33%] text-2xl md:text-5xl text-[#1f1f1f] leading-tight">
                    {item.subtitle}
                  </p>
                )}
                <div className="flex sm:justify-end mt-6">
                  <hr className="w-2/3 border-b border-[#090909]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
