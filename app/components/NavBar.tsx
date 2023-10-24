import React from 'react'
import CallToAction from './common/CallToAction'

const NavBar = () => {
  return (
    <div className=' relative flex flex-row justify-between items-center text-white mt-4 mb-16'>
      <div className='ml-48'>
        <img className='absolute -top-10 left-0' src="/logo.png"/>
        <div className='flex flex-row justify-around items-center gap-8 font-semibold '>
          <a className="cursor-pointer">Tech Stack</a>
          <a className="cursor-pointer">Career</a>
          <a className="cursor-pointer">Certificate</a>
          <a className="cursor-pointer">Portfolio</a>
        </div>

      </div>
      <div>
        <CallToAction text="Get In Touch" />
      </div>
    </div>
  )
}

export default NavBar