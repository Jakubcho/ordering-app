import React from 'react'
import Image from 'next/image';
import Right from '../icons/Right';

const Hero = () => {
  return (
  <section className='hero md:mt-4'>
    <div className='py-8 md:py-12'>
      <h1 className='text-4xl font-semibold '>Everythin<br /> is better<br/> with a&nbsp;
        <span className='text-primary'>
          Pizza
        </span>
      </h1>
      <p className='my-6 text-gray-500 text-sm'>
          Everythin is better with a Pizza Everythin is better with a Pizza Everythin is better with a Pizza
      </p>
      <div className='flex gap-4 text-sm'>
        <button className='flex justify-center items-center gap-2 uppercase bg-primary text-white px-4 py-2 rounded-full'>
          Order now
          <Right/>
        </button>
        <button className='flex border-0 items-center gap-2 py-2 text-gray-600 font-semibold'>
          Learn more
          <Right/>
        </button>
      </div>
    </div>
    <div className='relative hidden md:block'>
      <Image src={'/pizza.png'} alt={'pizza'} layout={'fill'}
          objectFit={'contain'}
      />
    </div>
  </section>
  )

}

export default Hero

