import React from 'react';
import { Sparkles, Heart, Smile, BookOpen, ShieldCheck, CheckCircle } from 'lucide-react';

const certifications = [
  { icon: CheckCircle, label: "Certified Laughter Yoga Leader Trainer" },
  { icon: CheckCircle, label: "Certified Yoga Nidra Instructor" },
  { icon: CheckCircle, label: "Mindfulness Coach" },
  { icon: CheckCircle, label: "Certified Meditation Practitioner" },
  { icon: CheckCircle, label: "Mental Health First Aid Trained" },
];

const AboutSection = () => {
  return (
    <section className="bg-[#F4F1F0] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex- items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-5/12 text-center">
            <div className="rounded-full overflow-hidden border-4 border-[#9C375E] shadow-lg inline-block">
              <img
                src="ab-1-removebg.png"
                alt="Anju Shahani"
                className="w-80 h-80 object-cover rounded-full bg-gray-200"
              />
            </div>
            <h3 className="text-xl mt-4 font-semibold text-[#9C375E]">Anju Shahani</h3>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-7/12">
            <h2 className="text-4xl font-bold text-[#333333] font-serif mb-4 flex items-center gap-2">
              <Sparkles className="text-[#9C375E]" /> About Anju Shahani
            </h2>

            <div className="h-1 w-20 bg-[#9C375E] rounded mb-6"></div>

            <p className="text-lg text-[#555555] leading-relaxed mb-4">
              Anju Shahani is a globally recognized expert in <strong>Laughter Yoga</strong>, 
              <strong> Happiness Coaching</strong>, and <strong>Mindfulness Facilitation</strong>. 
              With over <strong>15 years of experience</strong>, she has transformed lives globally through wellness practices.
            </p>

            <p className="text-lg text-[#555555] leading-relaxed mb-4">
              Her journey started from a personal quest for inner peace amidst life's chaos. 
              Through yoga, mindfulness, and the healing power of laughter, she found her mission: 
              to inspire joy and emotional resilience in others.
            </p>

            <p className="text-lg text-[#555555] leading-relaxed mb-6">
              As the founder of <strong>"Laugh to Lead"</strong>, Anju has trained over 
              <strong> 100+ Laughter Yoga Leaders</strong> and collaborated with diverse organizations to promote mental wellbeing.
            </p>

            {/* Certifications */}
            <h3 className="text-2xl font-bold font-serif text-[#9C375E] mb-4 flex items-center gap-2">
              <ShieldCheck className="text-[#9C375E]" /> Certifications & Accreditations
            </h3>

            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#444] text-base">
                  <cert.icon className="text-[#9C375E] mt-1" size={20} />
                  {cert.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
