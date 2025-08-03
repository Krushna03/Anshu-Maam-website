import React from 'react';
import { GiMeditation, GiLotus, GiSleepingBag } from 'react-icons/gi';
import { FaLaughBeam } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Meditation',
    icon: <GiMeditation className="text-[#9C375E]" size={28} />,
  },
  {
    title: 'Guided Meditation',
    icon: <GiLotus className="text-[#9C375E]" size={28} />,
  },
  {
    title: 'Yoga Nidra',
    icon: <GiSleepingBag className="text-[#9C375E]" size={28} />,
  },
  {
    title: 'Laughter Yoga Training (Leader Certification)',
    icon: <FaLaughBeam className="text-[#9C375E]" size={28} />,
  },
];

const Services = () => {
  return (
    <section className="bg-[#FAF7F6] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-[#333333] mb-4 flex items-center justify-center gap-2">
          <Sparkles className="text-[#9C375E]" size={24} /> Services
        </h2>
        <div className="h-1 w-20 bg-[#9C375E] rounded mx-auto mb-10"></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white shadow-sm border-l-4 border-[#9C375E] rounded-md px-5 py-4 transition-transform hover:scale-[1.02]"
            >
              {service.icon}
              <span className="text-lg text-[#444] font-medium text-left">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
