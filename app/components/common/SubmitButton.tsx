'use client'

import React from 'react'
interface Props {
  text: string,
  callback: () => void
}
const SubmitButton: React.FC<Props> = ({text, callback}) => {
  return (
    <button 
    type='button'
    onClick={callback}
    className='px-4 py-2 md:px-6 md:py-3 bg-primary text-white font-bold rounded-lg text-sm md:text-lg'>
      {text}
    </button>
  )
}

export default SubmitButton