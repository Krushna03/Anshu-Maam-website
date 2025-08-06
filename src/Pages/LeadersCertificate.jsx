import { ChevronRight } from 'lucide-react'

export default function LeadersCertificate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 lg:px-8 py-8">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
          Laughter Yoga<br />
          Leaders<br />
          Certification
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/laughter-yoga-group.png"
                alt="Group of laughter yoga certification participants"
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
                Ready to bring laughter, joy, and well-being into the world? Through laughter yoga, you'll learn the art of leading a joyful movement that transforms lives, builds connections, and creates healthier, happier communities.
              </p>
              <p className="text-base lg:text-lg">
                Developed by Dr. Madan Kataria, laughter yoga combines unconditional laughter with yogic breathing to boost physical, mental, and emotional well-being.
              </p>
              <p className="text-base lg:text-lg">
                This certification equips you with the tools, techniques, and confidence to lead laughter yoga sessions in any setting.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-8 text-center">
            In just two days, you'll learn
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Learning the science of laughter yoga"
                width={300}
                height={200}
                className="w-full h-32 lg:h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-sm lg:text-base font-medium text-center px-4">
                  The science and benefits of laughter yoga
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Creating laughter exercises"
                width={300}
                height={200}
                className="w-full h-32 lg:h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-sm lg:text-base font-medium text-center px-4">
                  How to create laughter exercises
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Engaging and energizing groups"
                width={300}
                height={200}
                className="w-full h-32 lg:h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-sm lg:text-base font-medium text-center px-4">
                  How to engage and energize groups
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Building community through laughter"
                width={300}
                height={200}
                className="w-full h-32 lg:h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-sm lg:text-base font-medium text-center px-4">
                  How to build community through laughter
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-8 text-center">
            You'll walk away with
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <ChevronRight className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
              <p className="text-base lg:text-lg text-gray-700">
                A Laughter Yoga Leader Certificate (internationally accredited)
              </p>
            </div>
            <div className="flex items-start gap-4">
              <ChevronRight className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
              <p className="text-base lg:text-lg text-gray-700">
                The skills to lead laughter yoga sessions, activities, wellness spaces, and more
              </p>
            </div>
            <div className="flex items-start gap-4">
              <ChevronRight className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
              <p className="text-base lg:text-lg text-gray-700">
                A chance to join a global community of joy leaders
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Perfect for coaches, facilitators, HR professionals, teachers, and anyone who believes in the power of laughter.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
