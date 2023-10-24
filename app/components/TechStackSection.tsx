import React from 'react'

const TechStackSection = () => {
  return (
    <section className='flex flex-col justify-center items-center text-white my-16'>
      <div className='flex flex-col py-8'>
        <h2 className='text-4xl font-bold text-center'>Tech Stack</h2>
        <p className='text-center mt-4'>Here are the technologies that I have been working with recently</p>
      </div>
      <div className=' flex justify-center'>
        <img className='w-9/12' src='/techstack.png' alt='techstack'/>
      </div>
    </section>
  )
}

export default TechStackSection