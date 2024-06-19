import React from 'react'
import styles from '../style'

const Options = () => {
  return (
    <section className={`${styles.padding} ${styles.marginY} grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 `}>
     
    <h2 className='font-semibold text-blue text-[42px] md:max-w-[100px] w-full'>Why Choosing Us</h2>
     
    
    <div className='flex flex-col gap-5'>
     <h3 className='text-[30px] font-semibold text-blue'>Unmatched Quality</h3>
     <p className='text-textGrey font-normal'>
     Our furniture is crafted from the finest materials, ensuring durability and lasting beauty. Each piece undergoes rigorous quality checks
     </p>
     <div className='flex items-center gap-2'>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short text-gold" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
     </svg>
     <a href="#"><span className='text-gold text-[18px] font-normasl'>More info</span></a>
     </div>
    </div>
    <div className='flex flex-col gap-5'>
     <h3 className='text-[30px] font-semibold text-blue'>Chic Variety</h3>
     <p className='text-textGrey font-normal max-w-[300px]'>
     From modern minimalism to classic elegance, our extensive collection suits every taste and style. Find the perfect fit for your home décor.     </p>
     <div className='flex items-center gap-2'>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short text-gold" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
     </svg>
     <a href="#"><span className='text-gold text-[18px] font-normasl'>More info</span></a>
     </div>
    </div>
    <div className='flex flex-col gap-5'>
     <h3 className='text-[30px] font-semibold text-blue'>Competitive Pricing</h3>
     <p className='text-textGrey font-normal max-w-[300px]'>
     Enjoy premium furniture at competitive prices. Get exceptional value without compromising on style or quality.     </p>
     <div className='flex items-center gap-2'>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short text-gold" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
     </svg>
     <a href="#"><span className='text-gold text-[18px] font-normasl'>More info</span></a>
     </div>
    </div>
      
    </section>
  )
}

export default Options