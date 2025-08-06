import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'
import OfferingsSection from '../Components/OfferingSection'
import EventCard from '../Components/EventCard'
import VoiceOfJoy from '../Components/VoiceOfJoy'
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
      </main>
    </>
  )
}

export default Home