import { CertificateProps } from '@/app/interfaces/Certificate'
import React from 'react'

const CertificationCard: React.FC<CertificateProps> = ({
  certName,
  organization,
  image,
  link
}) => {
  return (
    <a href={link} target="_blank" className='w-[310px] h-[355px] p-8 rounded-xl
     bg-white shadow-white shadow-[0_0px_40px_-15px] 
     flex flex-col items-center justify-start gap-4
     transition-all hover:shadow-primary hover:shadow-[0_0px_80px_-30px]
     '>
      <img src={image} />
      <p>{organization}</p>
      <h4 className='text-primary font-bold'>{certName}</h4>
    </a>
  )
}

export default CertificationCard