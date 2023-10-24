import React from 'react'
import PortfolioItem from './common/PortfolioItem'

const PortfolioSection = () => {

  const PortfolioItems = [
    {
      title: 'Retailer - Promoters Management System',
      tags: ['FullStack', 'React', 'Spring','Java', 'PostgreSQL', 'AWS'],
      problems:`- Lacking Wholesalers IT Integration
      - Require delivery sales data within day
      - Large amount of promoters off work near 9:00pm - 10:00pm,
        increase server loads
      `,
      solutions:`- Develop an application capable of retrieving daily work data from promoters in real-time. 
      - To ensure optimal server performance and prevent overload, a queue system will be implemented as a buffer, 
             allowing each order to be processed sequentially. While low latency is not a requirement, this approach will effectively manage server load. 
      - Additionally, the application will provide promoters with a user-friendly dashboard, 
            enabling them to perform CRUD (Create, Read, Update, Delete) operations in case of any erroneous submissions.
      `,
      image:"/s1.png"
    }
  ]

  return (
    <section className='flex flex-col justify-center items-center text-white my-16' >
      <div className='flex flex-col py-8'>
        <h2 className='text-4xl font-bold text-center'>Portfolio</h2>
        <p className='text-center mt-4'>Frontend, Backend, Database, ETL, Web3, Business Intellgence</p>
      </div>
      <div className=' flex flex-col justify-center w-full my-8'>
        {PortfolioItems.map((item) => {
          return <PortfolioItem key={item.title} {...item}/>
        })}
      </div>
    </section>
  )
}

export default PortfolioSection