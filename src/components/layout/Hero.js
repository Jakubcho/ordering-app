import React from 'react'
import Image from 'next/image';
import Right from '../icons/Right';
import Link from 'next/link';

const Hero = () => {
  return (
  <section className='hero md:mt-4'>
    <div className='py-8 md:py-12'>
      <h1 className='text-4xl font-semibold '>Witaj w <br />
        <span className='text-primary'>
          PizzaMania
        </span>
      </h1>
      <p className='my-6 text-gray-500 text-sm'>
           Nasze pizze są stworzone z pasją i dbałością o najwyższą jakość składników, a jednocześnie z odrobiną kreatywności, która sprawia, że każdy kawałek to wyjątkowa podróż smakowa. Od klasycznych smaków po unikatowe kombinacje, nasze menu zaspokoi nawet najbardziej wyrafinowane podniebienia.
      </p>
      <div className='flex gap-12 text-sm'>
        <Link href="/menu" className='flex justify-center items-center gap-2  bg-primary text-white px-4 py-2 rounded-full'>
          Zamów teraz
          <Right/>
        </Link>
        <Link href="/#about" className='flex border-0 items-center gap-2 py-2 text-gray-600 font-semibold'>
          O nas
          <Right/>
        </Link>
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

