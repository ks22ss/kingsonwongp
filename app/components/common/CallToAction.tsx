import React from 'react'
interface Props {
  text: string,
  link: string
}
const CallToAction: React.FC<Props> = ({text, link}) => {
  return (
    <a 
    href={link}
    className='px-4 py-2 md:px-6 md:py-3 bg-primary text-white font-bold rounded-lg text-sm md:text-lg'>
      {text}
    </a>
  )
}

export default CallToAction