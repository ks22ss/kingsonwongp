import { CareerPathCardProps } from '@/app/interfaces/Career'
import React from 'react'

const CareerPathCard:React.FC<CareerPathCardProps> = ({seqId, eventText, emoji, position, hlineRule}) => {
  return (
    <div className={`relative flex flex-col items-center max-w-[200px] text-center order-[${seqId}]`}>
      <p className={`absolute pb-2 w-48 ${position}`}>
        {eventText}
      </p>
      {emoji && <>
        <div className=' rounded-full bg-white w-[50px] h-[50px] shadow-white shadow-[0_0px_60px_-15px]'></div>
        
        <hr className={hlineRule}/>
      </>
      }
      
    </div>
  )
}

export default CareerPathCard