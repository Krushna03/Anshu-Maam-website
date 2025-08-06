import { Flower2 } from 'lucide-react'

export default function TwentyOneDaysMindfull() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight">
              21 day<br />
              mindfulness<br />
              journey
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-8 font-light">
              Find your calm.<br />
              Reconnect with<br />
              yourself.
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-base lg:text-lg">
                Join us for a 21-day guided mindfulness experience designed to help you build simple, lasting habits for inner peace, mental clarity, and emotional balance.
              </p>
              <p className="text-base lg:text-lg">
                Each day offers gentle prompts, reflections, and practices you can integrate into real life—no matter how busy you are.
              </p>
              <p className="text-base lg:text-lg">
                Perfect for beginners and seasoned seekers alike, this journey is your space to slow down, tune in, and show up more intentionally.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden shadow-lg max-w-md">
              <img
                src="/images/mindfulness-person.png"
                alt="Person with arms raised holding a red heart, practicing mindfulness"
                width={400}
                height={500}
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-12 text-center">
            You will learn
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Flower2 className="w-8 h-8 text-pink-500" />
              </div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Release stress and anxiety through breath and presence
              </p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Flower2 className="w-8 h-8 text-pink-500" />
              </div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Cultivate focus and intentionality in daily life
              </p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Flower2 className="w-8 h-8 text-pink-500" />
              </div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Create emotional space to respond, not react
              </p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Flower2 className="w-8 h-8 text-pink-500" />
              </div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Build a sustainable habit of self-care and awareness
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
