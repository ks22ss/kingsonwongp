'use client'
import React from 'react'
import CallToAction from './common/CallToAction'

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <>

    <div className=' relative flex flex-row justify-between items-center text-white mt-4 mb-16 pr-4'>
      <div className='ml-48'>
      <a className='fixed block top-5 left-6 cursor-pointer  z-20 sm:hidden' onClick={() => setShowMenu(prev => !prev)}>
        <img className='' src="/menu.png" width={30} height={30}/>
      </a>

      <img className='hidden sm:block absolute -top-10 left-4' src="/logo.png"/>
      <div className='hidden md:flex flex-row justify-around items-center gap-8 font-semibold '>
        <a href='#tech-stack' className="cursor-pointer">Tech Stack</a>
        <a href='#career' className="cursor-pointer">Career</a>
        <a href='#certificate' className="cursor-pointer">Certificate</a>
        <a href='#portfolio' className="cursor-pointer">Portfolio</a>
      </div>

      </div>
      <div>
        <CallToAction text="Get In Touch" link='https://api.whatsapp.com/send?phone=56282670' />
      </div>
    </div>
    

      <>
        <div onClick={() => setShowMenu(false)} className={`bg-white opacity-50 fixed top-0 left-0 h-screen w-full z-20 transition-all ${showMenu?" ":"-translate-x-full"}`}>
        </div>
        <div className={`bg-white w-8/12 z-30 h-screen fixed top-0 left-0 transition-all ${showMenu? " ":"-translate-x-full"} shadow-sm shadow-white
        flex flex-col justify-between`}>
          <div className='flex flex-row justify-between px-4'>
            <img src="logo.png" alt="logo.png" className='w-[24px] h-[24px]'/>
            <a className='cursor-pointer translate-y-4' onClick={() => setShowMenu(false)}>
              <img src="cross.png" alt="cross.png" className='w-[24px] h-[24px]' />
            </a>

          </div>
          <div className='flex flex-col items-center justify-center gap-8  text-xl font-semibold'>
            <a onClick={() => setShowMenu(false)} href='#tech-stack' className="cursor-pointer">Tech Stack</a>
            <a onClick={() => setShowMenu(false)} href='#career' className="cursor-pointer">Career</a>
            <a onClick={() => setShowMenu(false)} href='#certificate' className="cursor-pointer">Certificate</a>
            <a onClick={() => setShowMenu(false)} href='#portfolio' className="cursor-pointer">Portfolio</a>
          </div>
          <div className='bottom-0 left-0 grid grid-rows-1 grid-cols-3 w-full py-4 text-center '>
            <a onClick={() => setShowMenu(false)} href='https://github.com/ks22ss' className="cursor-pointer border-t-2 border-gray-300 p-2">GitHub</a>
            <a onClick={() => setShowMenu(false)} href='https://www.linkedin.com/in/kingson-wong-2b1651255' className="cursor-pointer border-l-2 border-r-2 border-t-2 border-gray-300 p-2">Linkedin</a>
            <a onClick={() => setShowMenu(false)} href='#contact' className="cursor-pointer border-t-2 border-gray-300 p-2">Contact Me</a>
          </div>
        </div>
      </>
      

  

    </>
  )
}

export default NavBar