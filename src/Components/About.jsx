import React from 'react';
import { Award, Heart, Users, Star, Globe, MapPin, BookOpen, Trophy } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      title: "15+ Years",
      subtitle: "Laughter Yoga Expertise",
      description: "Bringing science-backed joy globally",
      icon: Heart,
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "100+",
      subtitle: "Leaders Certified",
      description: "Trained since 2011",
      icon: Users,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "6 Countries",
      subtitle: "Global Experience",
      description: "Mumbai, Hong Kong, London, Moscow, Kuwait, Dubai",
      icon: Globe,
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "Ambassador",
      subtitle: "UAE Workplace Happiness",
      description: "Official recognition",
      icon: Trophy,
      color: "from-yellow-400 to-orange-400"
    }
  ];

  const certifications = [
    {
      title: "Laughter Yoga Expert",
      organization: "Dr. Madan Kataria's Laughter Yoga University",
      year: "Ambassador",
      icon: Heart,
      description: "Certified expert and proud ambassador"
    },
    {
      title: "Senior Certified Professional Coach",
      organization: "Coach Transformation Academy",
      year: "2019",
      icon: Star,
      description: "Advanced coaching certification"
    },
    {
      title: "Happiness & Mindfulness Coach",
      organization: "Berkeley School of Well-Being, California",
      year: "2020",
      icon: BookOpen,
      description: "Specialized during pandemic"
    },
    {
      title: "PowerCharge Coaching",
      organization: "Certified Practitioner",
      year: "Active",
      icon: Award,
      description: "Performance and wellness coaching"
    }
  ];

  const locations = [
    { city: "Mumbai", country: "India" },
    { city: "Hong Kong", country: "China" },
    { city: "London", country: "UK" },
    { city: "Moscow", country: "Russia" },
    { city: "Kuwait", country: "Kuwait" },
    { city: "Dubai", country: "UAE" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
            <span>UAE WORKPLACE HAPPINESS AMBASSADOR</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Professional Coach, Laughter Yoga Expert,
            <span className="text-pink-500"> Human Connection Enthusiast</span>
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto"></div>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-xl font-medium text-gray-800">
                I'm Anju Shahani, and my life's work is rooted in a single, powerful belief: 
                <span className="text-pink-500 font-semibold"> joy is not a luxury; it's a tool for resilience, connection, and transformation.</span>
              </p>
              
              <p className="text-lg">
                Having lived and worked in Mumbai, Hong Kong, London, Moscow, Kuwait, and Dubai, I've experienced firsthand how change shapes us. These multicultural chapters of my life have gifted me a deep appreciation for the beauty of human connection, no matter where you are or who you're with.
              </p>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border-l-4 border-pink-400">
                <p className="text-gray-700 italic font-medium">
                  "Change is the only constant" - the philosophy I live by.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3807758/pexels-photo-3807758.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Anju Shahani"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl transform -rotate-2 -z-10 opacity-50"></div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:border-pink-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{achievement.title}</h3>
              <p className="text-pink-500 font-semibold mb-2">{achievement.subtitle}</p>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Story */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg">
              I'm a certified Laughter Yoga Expert and proud Ambassador of Dr. Madan Kataria's Laughter Yoga University, where I've spent over 15 years bringing science-backed joy to individuals and organizations across the globe. From C-suite boardrooms to student workshops, I've led thousands through Laughter Yoga, mindfulness sessions, and PowerCharge Coaching, creating safe spaces where well-being, creativity, and emotional release can thrive.
            </p>
            
            <p className="text-lg">
              Since 2011, I've trained and certified over 100 Laughter Yoga Leaders, spreading the ripple effect of joy and resilience. In 2019, my curiosity about human connection led me to become a Senior Certified Professional Coach with the Coach Transformation Academy. And when the world stood still during the pandemic, I stepped forward, earning my certification in Happiness and Mindfulness Coaching from the Berkeley School of Well-Being, California.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-lg font-medium text-gray-800">
                Every session I lead — whether for teams, schools, or individuals — is designed to balance science with soul, and blend tools with trust.
              </p>
            </div>
          </div>
        </div>

        {/* Global Experience Map */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Global Journey</h3>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 flex items-center space-x-3 hover:shadow-md transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-800">{location.city}</p>
                    <p className="text-gray-600 text-sm">{location.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Laugh to Lead Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 lg:p-12 text-white mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">About Laugh to Lead</h3>
            <p className="text-xl mb-6 opacity-90 leading-relaxed">
              Today, my journey has come full circle with Laugh to Lead, a leadership and wellness program for those who want to build stronger teams, manage stress with intention, and lead with emotional intelligence and joy. It's a culmination of everything I've learned about people, presence, and performance.
            </p>
            <p className="text-lg opacity-80">
              Whether you're a team leader, a coach, or simply someone looking to bring more meaning and laughter into your life, this work is for you.
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Certifications & Expertise</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A commitment to continuous learning and professional development across multiple disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group hover:border-pink-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                    <cert.icon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{cert.title}</h4>
                    <p className="text-pink-500 font-medium mb-2">{cert.organization}</p>
                    <p className="text-gray-600 mb-3">{cert.description}</p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              I'm deeply grateful to do what I love every day, and to witness, again and again, how laughter truly is a universal language.
            </p>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
              <p className="text-2xl font-bold text-gray-800 mb-2">My motto is simple:</p>
              <p className="text-3xl font-bold text-pink-500 mb-4">One World Family</p>
              <p className="text-lg text-gray-600 italic">
                Because when we laugh together, we grow together.
              </p>
            </div>
            
            <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-300 mt-8">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;