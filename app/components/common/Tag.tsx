import React from 'react'
interface TagProps {
  text: string
}

const Tag:React.FC<TagProps> = ({text}) => {
  return (
    <span className='bg-secondary  rounded-full px-4 py-1 text-sm mr-1'>{text}</span>
  )
}

export default Tag