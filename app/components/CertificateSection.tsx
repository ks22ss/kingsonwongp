import React from 'react'
import { CertificateData } from '../data/certificates'
import CertificationCard from './common/CertificationCard'

const CertificateSection = () => {
  return (
    <section id="certificate" className='  text-white flex flex-col items-center py-24'>
      <h2 className='text-4xl font-bold '>Certification</h2>
      <p className='text-base mt-4 mb-24'>I always want to possess more knowledge</p>
      <div className='grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 text-black gap-24 text-center'>
        {
          CertificateData.map((certificate) => {
            return <CertificationCard key={certificate.certName} {...certificate}/>
          })
        }
      </div>

    </section>
  )
}

export default CertificateSection