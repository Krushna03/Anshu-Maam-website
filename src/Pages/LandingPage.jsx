import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import Feature from '../Components/Feature'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'

const LandingPage = () => {
  
  return (
    <>  
      <Header />

      <main className=''>
        <Hero />
        
        <section id="about" className="">
          <About />
        </section>

        {/* <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <Services />
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <Feature />
        </section>
        
        <CallToAction />
        <Footer /> */}
      </main>
    </>
  )
}

export default LandingPage