import React from 'react'
import PortfolioItem from './common/PortfolioItem'
import {PortfolioItems} from '@/app/data/portfolios'

const PortfolioSection = () => {

  return (
    <section id="portfolio" className='flex flex-col justify-center items-center text-white py-24' >
      <div className='flex flex-col py-8'>
        <h2 className='text-4xl font-bold text-center'>Portfolio</h2>
        <p className='text-center mt-4'>Frontend, Backend, Database, ETL, Web3, Business Intellgence</p>
      </div>
      <div className=' flex flex-col justify-center w-full my-8 gap-16'>
        {PortfolioItems.map((item) => {
          return <PortfolioItem key={item.title} {...item}/>
        })}
      </div>
    </section>
  )
}

export default PortfolioSection