import React from 'react'
import Tag from './Tag'

interface PortfolioItemProps {
  title: string
  problems: string
  image: string
  tags: string[]
  solutions: string
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  problems,
  image,
  tags,
  solutions
}) => {
  return (
    <div className='bg-white text-black rounded-2xl w-full min-h-[520px] shadow-[0_0px_40px_-15px] shadow-white p-8'>
      <div className='py-1'>
      {tags.map((tag) => {
        return <Tag key={tag} text={tag}/>
      })}
      </div>

      <h3 className='text-2xl text-primary font-semibold'>{title}</h3>
      <h4 className='pt-4 text-lg font-bold'>
      Problems
      </h4>
      <p className='' style={{whiteSpace: 'pre-line'}}>{problems}</p>
      <div className='flex justify-center'>
        <img src={image} alt={title}/>
      </div>

      <h4 className='pt-4 text-lg font-bold'>
      Solutions
      </h4>
      <p className='' style={{whiteSpace: 'pre-line'}}>{solutions}</p>
    </div>
  )
}

export default PortfolioItem