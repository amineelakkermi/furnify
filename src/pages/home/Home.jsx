import React from 'react'
import { Experience1, HeroSection, Options, Products, Testimonial } from '../../components'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Experience1 />
      {/* <Options /> */}
      <Products />
      <Testimonial />
    </div>
  )
}

export default Home