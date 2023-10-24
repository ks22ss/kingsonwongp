import React from 'react'
import CallToAction from './common/CallToAction'

const HeroSection = () => {
  return (
    <main className='grid grid-cols-2 grid-rows-1 text-white my-16'>
      <div className='relative flex flex-col justify-center pl-16'>
        <p className='text-secondary text-md font-light'>Professional Software Developer</p>
        <p className='text-secondary text-md font-light'>Based in Hong Kong, HK</p>
        <h1 className='text-5xl pb-8 pt-4'>Hello World<br/> I'm <span className='font-bold text-primary'>Kingson Wong</span></h1>
        
        <p className='pb-8 text-md font-base'>
        “ In the realm of lifelong learning, <br/>
        there is always something new to glean.”
        </p>
        <div className='flex flex-row justify-start gap-4'>
          <CallToAction text="Download CV" />
          <a>
            <img src="/linkdein_icon.png" alt="arrow-down"/>
          </a>
        </div>
        <img className='absolute left-6 bottom-24' src="rect_dec.png" alt="rect"/>
        <img className='absolute right-6 bottom-24 rotate-45' src="rect_dec.png" alt="rect"/>
      </div>

      <div className='flex justify-center items-center'>
        <img src='/my_profile_pic.png' alt="my profile pic"/>
      </div>
    </main>
  )
}

export default HeroSection