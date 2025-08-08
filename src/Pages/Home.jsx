import React from 'react'
import Hero from '../Components/Home/Hero'
import About from '../Components/About/About'
import Slider from '../Components/Home/Slider'
import OfferingsSection from '../Components/OfferingSection'
import EventCard from '../Components/EventCard'
import VoiceOfJoy from '../Components/Home/VoiceOfJoy'
import CallToAction from '../Components/CallToAction'

const Home = () => {
  
  return (
    <>  
      <main className='overflow-x-hidden'>
        <Hero />
        
        <section id="about" className="">
          <About />
        </section>
        
        <section id="slider" className="">
          <Slider />
        </section>
        
        <section id="offering" className="">
          <OfferingsSection />
        </section>
        
        <section id="events" className="">
          <EventCard />
        </section>
        
        <section id="voice-of-joy" className="">
          <VoiceOfJoy />
        </section>

        <CallToAction />
      </main>
    </>
  )
}

export default Home