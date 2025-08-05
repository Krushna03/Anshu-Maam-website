import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import CallToAction from '../Components/CallToAction'

const ProjectLayout = () => {

  return (
    <>
      <Header />
        <Outlet />
        <CallToAction />
      <Footer />
    </>
  )
}

export default ProjectLayout