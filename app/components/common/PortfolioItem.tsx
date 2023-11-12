import React from 'react'
import Tag from './Tag'
import { PortfolioItemProps } from '@/app/interfaces/Portfolio'



const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  problems,
  image,
  tags,
  solutions
}) => {
  return (
    <div className='flex flex-col justify-between bg-white text-black 
    ounded-2xl w-full min-h-[520px] shadow-[0_0px_40px_-15px]
     shadow-white p-8
     hover:shadow-primary hover:shadow-[0_0px_120px_-30px] transition-all hover:-translate-y-1
     '>
      
      <div className='pb-4'>
        <div className='flex flex-row flex-wrap gap-2'>
          {tags.map((tag) => {
            return <Tag key={tag} text={tag}/>
          })}
        </div>

        <h3 className='text-2xl text-primary font-semibold'>{title}</h3>
      </div>



      <div className=''>
        <h4 className='text-lg font-bold'>
        Problems
        </h4>
        <p className='' style={{whiteSpace: 'pre-line'}}>{problems}</p>
      </div>
 
      <div className='flex justify-center'>
        <img src={image} alt={title}/>
      </div>
      
      <div className=''>
        <h4 className=' text-lg font-bold'>
        Solutions
        </h4>
        <p className='' style={{whiteSpace: 'pre-line'}}>{solutions}</p>
      </div>

    </div>
  )
}

export default PortfolioItem