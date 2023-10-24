import React from 'react'
interface Props {
  text: string
}
const CallToAction: React.FC<Props> = ({text}) => {
  return (
    <button className='px-6 py-3 bg-primary text-white font-bold rounded-lg'>
      {text}
    </button>
  )
}

export default CallToAction