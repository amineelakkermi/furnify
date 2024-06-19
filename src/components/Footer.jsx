import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={`bg-greyBg flex md:flex-row flex-col  md:justify-between justify-center md:items-start items-center ${styles.padding}`}>

    <div className='flex  flex-col gap-2 md:mt-0 mt-10'>
    <h1 className="text-[38px] text-blue font-semibold text-green md:text-start text-center " >Furnify</h1>
    <p className='text-textGrey max-w-[390px] md:text-start text-center'>
    Transforming spaces with high-quality, stylish, and affordable furniture.
    Choose Furnify for sustainable designs and exceptional customer service.
    </p>
    </div> 

    <div className='flex md:flex-row flex-col  justify-between md:gap-[80px] gap-[50px] md:mt-0 mt-10 '>
    
      <ul className='flex flex-col gap-3 md:text-start text-center'>
       <li><h3 className='text-blue text-[20px] font-semibold'>Services</h3></li>
       <li><a href="#" className='text-textGrey text-[16px]'>Email Marketing</a></li>
       <li><a href="#" className='text-textGrey'>Campaign</a></li>
       <li><a href="#" className='text-textGrey'>Branding</a></li>
      </ul>
      <ul className='flex flex-col gap-3 md:text-start text-center'>
      <li><h3 className='text-blue text-[20px] font-semibold'>Furniture</h3></li>
      <li><a href="#" className='text-textGrey'>Chair</a></li>
       <li><a href="#" className='text-textGrey'>Beds</a></li>
       <li><a href="#" className='text-textGrey'>All</a></li>
      </ul>
      <ul className='flex flex-col gap-3 md:text-start text-center'>
      <li><h3 className='text-blue text-[20px] font-semibold'>Follow Us</h3></li>
      <li><a href="#" className='text-textGrey'>Email Marketing</a></li>
       <li><a href="#" className='text-textGrey'>Campaign</a></li>
       <li><a href="#" className='text-textGrey'>Branding</a></li>
      </ul>
    
    </div>    


     

     
    
    </div>
  )
}

export default Footer