import React from 'react'
import CallToAction from './common/CallToAction'

const HeroSection = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 text-white my-16'>
      <div className='relative flex flex-col justify-center pl-16'>
        <p className='text-secondary text-xs md:text-md font-light'>Professional Software Developer</p>
        <p className='text-secondary text-xs md:text-md font-light'>Based in Hong Kong, HK</p>
        <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl pb-8 pt-4'>Hello World<br/> I am <span className='font-bold text-primary'>Kingson Wong</span></h1>
        
        <p className='pb-8 text-xs sm:text-sm md:text-md lg:text-lg'>
        “In the realm of lifelong learning, <br/>
        there is always something new to glean.”
        </p>
        <div className='flex flex-row justify-start gap-4'>
          <CallToAction text="Contact Me" link='https://api.whatsapp.com/send?phone=56282670' />
          <a href='www.linkedin.com/in/kingson-wong-2b1651255'>
            <img src="/linkdein_icon.png" alt="arrow-down" className='w-[40px] h-[40x] md:w-[50px] md:h-[50px]'/>
          </a>
        </div>
        <img className='absolute left-6 bottom-24 -z-50' src="rect_dec.png" alt="rect"/>
        <img className='absolute right-6 bottom-24 rotate-45' src="rect_dec.png" alt="rect"/>
      </div>

      <div className='hidden md:flex justify-center items-center'>
        <img src='/my_profile_pic.png' alt="my profile pic" className='w-[600px] h-[600px]'/>
      </div>
    </main>
  )
}

export default HeroSection