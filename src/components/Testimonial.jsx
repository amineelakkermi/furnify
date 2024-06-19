import React from 'react'
import styles from '../style'
import { feedBack } from '../data/Data'


const Testimonial = () => {
  return (
    <section className={`min-h-[100vh] bg-white center flex-col gap-10   ${styles.padding}`}>
    <span className='text-bold text-[32px]'>Testimonials</span>
    <h1 className={`${styles.title} text-center text-blue`}>Our Clients Reviews</h1>
   
     <div className='flex center gap-10'>
     {
      /*
     <div className='cursor-pointer arrow-right w-[60px] h-[60px] rounded-full bg-white center'>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
     </svg>
     </div> */
     }
   
     <div className='flex flex-wrap grid xs:grid-cols-1 md:grid-cols-2  gap-16 mt-10'>
    {
      feedBack.map((item , index) => (
        <div className='feedback-div flex justify-center items-end relative md:w-[100%] w-[90%] h-[450px] p-6 rounded-[20px]'>
        <div className='center w-[100%]  flex-col gap-3 bg-white p-4 rounded-[20px]'>
          <div className='user-div w-[100px] h-[100px] rounded-full'>
          <img src={item.img} alt="Personn" className='w-[100%] h-[100%]' />
          </div>
          <h3 className='text-blue text-[22px] font-semibold'>{item.name}</h3>
          <p className='text-center'>{item.text}</p>
          <div className='flex mt-3 items-center gap-1'>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
          </div>
        </div>
     </div>
      ))
    }
    </div>

    {/*
     <div className='cursor-pointer w-[60px] h-[60px] rounded-full bg-white center'>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
     </svg>
    </div>
    */
    }
    
     </div>
   
    </section>
  )
}

export default Testimonial