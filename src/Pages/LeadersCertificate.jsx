import { ChevronRight } from 'lucide-react';

export default function LeadersCertificate() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen px-4 py-12 sm:px-6 md:p-12">
      {/* Header & Image Section */}
      <div className="flex flex-col lg:flex-row sm:gap-8 mb-6 sm:mb-16">
        {/* Text Block */}
        <div className="flex-1">
          <h1 className="px-4 sm:px-0 text-3xl sm:text-5xl font-comfortaa font-bold text-gray-900 leading-[1.5] tracking-wide">
            Laughter Yoga
            <p className="sm:mt-2">Leaders</p>
            <p className="sm:mt-2">Certification</p>
          </h1>

          <div className="mt-5 sm:mt-20 mb-8 sm:mb-12 max-w-md">
            <p className="p-6 bg-[#FFF6EE] text-base sm:text-lg font-medium text-gray-700 leading-relaxed rounded-xl font-poppins">
              Ready to bring laughter, joy, and well-being into the world? Through laughter yoga, you’ll learn the art of leading a joyful movement that transforms lives, builds connections, and creates healthier, happier communities.
              <br /><br />
              Developed by Dr. Madan Kataria, laughter yoga combines unconditional laughter with yogic breathing to boost physical, mental, and emotional well-being.
              <br /><br />
              This certification equips you with the tools, techniques, and confidence to lead laughter yoga sessions in any setting.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-[700px] lg:mt-20 mb-20 sm:mb-0">
          <div className="relative rounded-2xl overflow-hidden p-5 bg-[#FFF6EE]">
            <img
              src="/leaders-certificate.png"
              alt="Laughter yoga certification participants"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8">
        {/* Learning Section */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-5xl font-comfortaa font-bold text-center text-gray-900 mb-12">
            In just two days, you'll learn
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'The science and benefits of laughter yoga',
                img: '/lc-1.jpg',
              },
              {
                title: 'How to create laughter exercises',
                img: '/lc-2.jpg',
              },
              {
                title: 'How to engage and energize groups',
                img: '/lc-3.jpg',
              },
              {
                title: 'How to build community through laughter',
                img: '/lc-4.jpg',
              },
            ].map(({ title, img }, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-md group"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-[#fea0cf52] bg-opacity-30 flex items-end justify-center p-5">
                  <p className="text-white sm:text-xl font-bold text-center bg-pink-400 px-[6px] py-1 sm:px-[10px] sm:py-[2px] rounded-lg">
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-5xl font-comfortaa font-bold text-center text-gray-900 mb-10">
            You'll walk away with
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              'A Laughter Yoga Leader Certificate (internationally accredited)',
              'The skills to lead laughter yoga sessions, activities, wellness spaces, and more',
              'A chance to join a global community of joy leaders',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <ChevronRight className="w-7 h-7 text-pink-500 mt-1 flex-shrink-0" />
                <p className="text-base sm:text-lg font-medium text-gray-800 font-poppins leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Target Audience */}
        <section>
          <p className="max-w-3xl mx-auto text-center text-lg sm:text-xl lg:text-2xl font-poppins text-gray-700 leading-relaxed">
            Perfect for coaches, facilitators, HR professionals, teachers, and anyone who believes in the power of laughter.
          </p>
        </section>
      </main>
    </div>
  );
}
