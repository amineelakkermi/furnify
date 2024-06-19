import React from 'react'
import styles, { layout } from '../style'
import { dark } from '../assets'
import { Link } from 'react-router-dom'

const Experience1 = () => {
    return (
        <section className={`${layout.section} min-h-[100vh] gap-16 ${styles.padding} bg-white`}>
         <div className={`${layout.sectionImg}`}>
          <div className='w-[100%] h-[400px] '>
          <img src={dark} alt="dark" className='w-[100%] h-[100%] rounded-[20px]' />
          </div>
         </div>
         <div className={`${layout.sectionInfo}`}>
         <span className='text-gold '>Discover more</span>
         <h2 className={`${styles.title} text-blue font-bold `}>
         Our Story and Experience
         </h2>
        <p className={`${styles.paragraph} mt-5 text-textGrey`}>
        At Furnify, we transform living spaces with high-quality,
         stylish, and affordable furniture. 
         Committed to sustainability and customer satisfaction, we offer diverse designs to suit every taste.
        </p>
       
        <button className={`buy-now flex gap-2 center bg-gold w-[200px] h-[70px] my-10 `}>
        <a  href='#products' className='text-white font-semibold'>Get Started</a>
        </button>
    
         </div>
        </section>
      )
}

export default Experience1