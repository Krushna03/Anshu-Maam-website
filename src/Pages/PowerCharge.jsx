import { Heart } from 'lucide-react'

export default function PowerCharge() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 lg:px-8 py-8">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">PowerCharge</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/group-activity.png"
                alt="Group of people doing outdoor activities at sunset"
                width={600}
                height={400}
                className="w-full h-64 lg:h-80 object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-base lg:text-lg">
                Feeling drained, distracted, or disconnected? It's time for a reset. PowerCharge is designed to help you reconnect with yourself and others, boost your energy, release stress, and recharge your mindset, all through practical, fun activities.
              </p>
              <p className="text-base lg:text-lg">
                This session blends stress-busting exercises, mindfully practices, and joyful group activities that leave you feeling refreshed and re-energized.
              </p>
              <p className="text-base lg:text-lg">
                Whether you're leading a team or navigating personal challenges, PowerCharge gives you the tools to show up as your most vibrant, present self.
              </p>
            </div>
          </div>
        </div>

        {/* What's inside Section */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-8 text-center">What's inside</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Small Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/group-activity.png"
                  alt="Group activity session"
                  width={300}
                  height={200}
                  className="w-48 lg:w-64 h-32 lg:h-40 object-cover"
                />
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-pink-500 mt-1 fill-current flex-shrink-0" />
                <p className="text-base lg:text-lg text-gray-700">Guided stress-release techniques and movement</p>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-pink-500 mt-1 fill-current flex-shrink-0" />
                <p className="text-base lg:text-lg text-gray-700">Mindfulness tools for clarity and calm</p>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-pink-500 mt-1 fill-current flex-shrink-0" />
                <p className="text-base lg:text-lg text-gray-700">Laughter and group-based energizers</p>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-pink-500 mt-1 fill-current flex-shrink-0" />
                <p className="text-base lg:text-lg text-gray-700">Emotional well-being practices you can use daily</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-12 text-center">Benefits</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-pink-500 rounded-full"></div>
              </div>
              <p className="text-sm lg:text-base text-gray-600 leading-tight">Instant energy boost and mental clarity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-pink-500 rounded-full"></div>
              </div>
              <p className="text-sm lg:text-base text-gray-600 leading-tight">Holistic stress management</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-pink-500 rounded-full"></div>
              </div>
              <p className="text-sm lg:text-base text-gray-600 leading-tight">Enhanced focus and meditation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-pink-500 rounded-full"></div>
              </div>
              <p className="text-sm lg:text-base text-gray-600 leading-tight">A feel-good experience that lasts beyond the session</p>
            </div>
          </div>
        </section>

        {/* Ideal for Section */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 text-center">Ideal for</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base lg:text-lg text-gray-600 text-center leading-relaxed">
              Corporate wellness programs, team retreats, educator programs, or anyone looking to kickstart their day with purpose and positivity.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
