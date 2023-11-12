import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center bg-[#D9D9D9] px-12 mt-auto'>
        <div className='flex flex-row justify-around items-center gap-8 font-semibold py-8'>
          <a href='#tech-stack' className="cursor-pointer">Tech Stack</a>
          <a href='#career' className="cursor-pointer">Career</a>
          <a href='#certificate' className="cursor-pointer">Certificate</a>
          <a href='#portfolio' className="cursor-pointer">Portfolio</a>
        </div>
        <hr className='border-gray-400 border-[1px] w-full'/>
        <p className='py-4'>Kingson Wong@2023</p>
    </footer>
  )
}

export default Footer