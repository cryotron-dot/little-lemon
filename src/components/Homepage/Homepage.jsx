import React from 'react'
import CallToAction from '../../sections/hero/Hero'
import Chicago from '../../sections/about/About'
import Specials from '../../sections/specials/Specials'
import CoustomerSay from '../../sections/testimonials/Testimonials'

const Homepage = () => {
  return (
    <main>
      <CallToAction />
      <Specials />
      <CoustomerSay />
      <Chicago />
    </main>
  )
}

export default Homepage