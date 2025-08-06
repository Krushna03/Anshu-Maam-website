import { Crown } from 'lucide-react'

export default function CorporateWellness() {
  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Laughter Yoga<br />
          for Corporate<br />
          Wellness
        </h1>
      </div>

      {/* Hero Image */}
      <div className="px-6 mb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/images/corporate-team.png"
            alt="Corporate team engaged in laughter yoga session in office environment"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Description Text */}
      <div className="px-6 mb-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          Boost employee morale, reduce workplace stress, and strengthen team connections with our corporate Laughter Yoga sessions. This innovative approach combines guided laughter exercises, team-building activities, and stress-relief techniques. These sessions combine laughter therapy, mindfulness techniques, and team-building exercises to create a positive, energizing workplace culture that enhances overall productivity.

          Whether it's a virtual team meeting, in-corporate workshop, or wellness retreat, our fun sessions creates a shared space for joy, connection, and mental clarity. It's not just an activity, it's a reset for your team's energy and wellness.
        </p>
      </div>

      {/* Benefits section */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Benefits
        </h2>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Top row */}
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Crown className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-sm text-gray-700 leading-tight">
              Improves team bonding and communication
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Crown className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-sm text-gray-700 leading-tight">
              Reduces workplace stress and anxiety
            </p>
          </div>
          
          {/* Bottom row */}
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Crown className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-sm text-gray-700 leading-tight">
              Boosts creativity and focus
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <Crown className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-sm text-gray-700 leading-tight">
              Enhances emotional resilience
            </p>
          </div>
        </div>
      </div>

      {/* Ideal for section */}
      <div className="px-6 pb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Ideal for
        </h2>
        <p className="text-sm text-gray-700 text-center leading-relaxed">
          corporate teams, HR wellness initiatives, leadership programs, and employee engagement events.
        </p>
      </div>
    </div>
  )
}
