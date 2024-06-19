import React from 'react'
import { salon } from '../assets'
import styles, { layout } from '../style'

const HeroSection = () => {
  return (
    <section className={`HeroSection ${layout.section} flex md:justify-end justify-center items-center`}>
    <div className={`${styles.paddingX}`}>
    <div className='bg-beige flex flex-col gap-3 max-w-[700px] md:h-[400px] h-auto  md:px-16 px-4 py-8'>
        <p className='font-medium'>Explore Our Exlusive Offers</p>
        <h1 className={`${styles.title} md:tex text-gold`}>Discover Our New Collection</h1>
        <p className='font-medium'>Discover the Perfect Pieces to Elevate Your Home's Style</p>
        <button className={`buy-now bg-gold w-[200px] h-[70px] my-5 `}><a href="#products" className='text-white font-semibold'>Buy Now</a></button>
      </div>
    </div>
    
    </section>
  )
}

export default HeroSection