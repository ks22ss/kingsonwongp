'use client'

import React from 'react'
import CallToAction from './common/CallToAction'
import SubmitButton from './common/SubmitButton'
import { useRouter } from 'next/navigation'
import * as Yup from 'yup';
import { ValidationError } from 'yup';
import { createHubSpotContact } from '../util/crm'

const GetInTouchSection = () => {

  const [data, setData] = React.useState({
    firstname: '',
    phone: '',
    email: '',
    hs_content_membership_notes: ''
  })

  const [errors, setErrors] = React.useState({
    firstname: '',
    phone: '',
    email: '',
    hs_content_membership_notes: ''
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // yup schema define
  const schema = Yup.object().shape({
    firstname: Yup.string().required('Name is required'),
    phone: Yup.number().required('Phone is required'),
    email: Yup.string().required('Email is required'),
    hs_content_membership_notes: Yup.string().nullable(),
  });
  
  const router = useRouter()

  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    await schema.validate(data, { abortEarly: false }).catch((err: ValidationError) => {
      err.inner.forEach((e) => {
        const path: string = e.path as string;
        setErrors(prev => ({...prev, [path]: e.message}))
      })
      return;
    }).then(async () => {
        // if no error
        const allFieldsEmpty = Object.values(errors).every(value => value === '');
        if (allFieldsEmpty) {
          const res = await createHubSpotContact(data);
          if(res){
            router.push('/thankyou');
          } else {
            alert('Something went wrong, please try again later');
          }
        }
    }).finally(() => {
      setIsSubmitting(false);
    });
    



  }
  return (
    <section id="contact" className='flex flex-col items-center text-white py-24 px-4 sm:px-24'>
      <h2 className='text-3xl font-bold'>GET IN TOUCH</h2>
      <div className='grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-[1fr,2fr]  md:gap-24 lg:gap-32 my-16'>
        <div className='flex flex-col items-start'>
          <p className='text-base mb-4'>
            Feel free to get in touch with me, 
            I am always open to discussing new projects, ideas or opportunities to be part of your vision  
          </p>
          <div className=' mb-4'>
            <p className='font-bold'>Email</p>
            <p>kingson22.work@gmail.com</p>
          </div>
          <div className=' mb-4'>
            <p  className='font-bold'>Work Phone</p>
            <p>852 5628 2670</p>
          </div>
          <div className=' mb-4'>
            <p  className='font-bold'>GitHub</p>
            <a  target="_blank" className='text-secondary' href='https://github.com/ks22ss'>https://github.com/ks22ss</a>
          </div>
          <div className=' mb-4'>
            <p  className='font-bold'>LinkedIn</p>
            <a  target="_blank" className='text-secondary' href='www.linkedin.com/in/kingson-wong-2b1651255'>www.linkedin.com/in/kingson-wong-2b1651255</a>
          </div>
        </div>
        <form className='grid grid-cols-2 grid-rows-7 gap-12 text-black'>
          <input className='order-1 rounded-lg p-4' 
            placeholder={'Name '+ (errors.firstname ? "("+errors.firstname+")" : '') }
            name='firstname' 
            type='text' 
            value={data.firstname} 
            onChange={(e) => setData(prev => ({...prev, [e.target.name]:e.target.value }))} 
        />
        
          <input 
            className='order-2 rounded-lg p-4' 
            placeholder={'Phone '+ (errors.phone ? "("+errors.phone+")" : '') } 
            name='phone' 
            type='text'
            value={data.phone} 
            onChange={(e) => setData(prev => ({...prev, [e.target.name]:e.target.value }))}  
          />
          <input 
            className='order-3 col-span-2 rounded-lg p-4' 
            placeholder={'Email '+ (errors.email ? "("+errors.email+")" : '') } 
            name='email' 
            type='email' 
            value={data.email} 
            onChange={(e) => setData(prev => ({...prev, [e.target.name]:e.target.value }))}  
          />
          <textarea 
            className='order-4 col-span-2 row-span-3 rounded-lg p-4 resize-none' 
            placeholder='Your Message' 
            name='hs_content_membership_notes'  
            onChange={(e) => setData(prev => ({...prev, [e.target.name]:e.target.value }))}  
            />
          <div className='order-5'>
            <SubmitButton text={isSubmitting ? 'Loading...': "Send Message"} callback={handleFormSubmit}/>
          </div>
          
        </form>
      </div>
    </section>
  )
}

export default GetInTouchSection