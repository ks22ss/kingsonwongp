import Image from 'next/image'
import CallToAction from '../components/common/CallToAction'

export default function Home() {
  return (
    <main className='h-full mb-auto'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl text-white pb-12'>Thankyou for your submission.</h1>
        <CallToAction text='Back to Home' link='/'/>
      </div>
    </main>
  )
}
