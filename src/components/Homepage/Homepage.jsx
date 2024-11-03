import React from 'react'
import CallToAction from '../CallToAction/Hero'
import Chicago from '../Chicago/Chicago'
import Specials from '../Specials/Specials'
import CoustomerSay from '../CustomersSay/CustomersSay'

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