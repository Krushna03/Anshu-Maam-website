import { Link } from "react-router-dom"
import { ArrowRight, Youtube, Linkedin, Instagram, Facebook, Twitter, Sparkles } from "lucide-react"

const socialIcons = [
  { icon: Youtube, color: "bg-[#FF0000]", hoverColor: "hover:bg-[#CC0000]", href: "#" },
  { icon: Linkedin, color: "bg-[#0A66C2]", hoverColor: "hover:bg-[#004182]", href: "#" },
  { icon: Instagram, color: "bg-[#E4405F]", hoverColor: "hover:bg-[#C13584]", href: "#" },
  { icon: Facebook, color: "bg-[#1877F2]", hoverColor: "hover:bg-[#166FE5]", href: "#" },
  { icon: Twitter, color: "bg-[#1DA1F2]", hoverColor: "hover:bg-[#1A91DA]", href: "#" },
]


export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-pink-50/30 min-h-screen w-full py-12">
      
      <div className=" w-full px-4 sm:px-16 flex">
        
        <div className="w-[60%] flex flex-col justify-start space-y-8">
          <div className="space-y-6 p-8">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#AA6B87]/10 to-[#cd85ad]/10 rounded-full border border-[#AA6B87]/20">
                <Sparkles className="w-4 h-4 text-[#AA6B87]" />
                <p className="font-semibold tracking-wide text-[#AA6B87] uppercase text-sm">
                  15+ Years of Spreading Joy Globally
                </p>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-[53px] font-serif font-bold text-gray-700 leading-tight">
                  <div className="mb-3 transform transition-transform duration-300">
                    Laughter Yoga Expert
                  </div>
                  <div className="mb-3 transform transition-transform duration-300">
                    Happiness Coach
                  </div>
                  <div className="mb-4 transform transition-transform duration-300">
                    Mindfulness Facilitator
                  </div>
                  <div className="inline-block bg-gradient-to-r from-[#cd85ad] to-[#AA6B87] text-white px-4 py-2 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
                    Founder, Laugh to Lead
                  </div>
                </h1>
              </div>

              <div className="relative">
                <p className="text-lg lg:text-xl italic text-[#866286] font-medium leading-relaxed max-w-2xl">
                  "Joy is not a luxury; it's a tool for resilience, connection, and transformation"
                </p>
                <div className="absolute -left-4 -top-2 text-4xl text-[#cd85ad]/20 font-serif">"</div>
              </div>

            <div className="flex flex-col gap-4">
              <Link
                  to="#"
                  className="inline-flex items-center gap-3 text-xl font-semibold text-[#8B5A7A] hover:text-[#cd85ad] group transition-all duration-300"
                >
                  <span className="relative">
                    ALL Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#cd85ad] to-[#AA6B87] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <div className="mt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                  {socialIcons.map((social, index) => (
                    <Link
                      key={index}
                      to={social.href}
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${social.color} ${social.hoverColor} text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
            </div>
          </div>
        </div>
        
        <div className="w-[40%] flex justify-start">
          <img
            src="/ab-1-removebg.png"
            alt="Woman in pink blazer"
            className="mx-auto h-[90vh] overflow-hidden rounded-lg object-cover object-center sm:w-full lg:order-last mr-13"
            priority 
          />
        </div>
      </div>
    </section>
  )
}
