import React from 'react'
import { CareerPaths } from '../data/career'
import CareerPathCard from './common/CareerPathCard'

const CareerSection = () => {
  return (
    <div id="career" className='text-white flex flex-col items-center py-24'>
      <h2 className='text-4xl font-bold pb-36'>My Career Journey</h2>
      <div className='grid grid-rows-10 grid-cols-1 md:grid-rows-4 md:grid-cols-3 gap-32 md:gap-72 text-sm md:text-base '>
        {CareerPaths.map((path) => {
          return <CareerPathCard key={path.eventText} {...path}/>
        })}
      </div>
    </div>
  )
}

export default CareerSection