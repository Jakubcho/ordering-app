"use client";
import React, { useContext, useState } from 'react'
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react';
import { CartContext } from '../AppContext';
import ShoppingCart from '../icons/ShoppingCart';
import Bars2 from '../icons/Bars2';

function AuthLinks({status, userName}){
  if(status==='authenticated'){
    return (
    <>
      <Link href={'/profile'} className='whitespace-nowrap'>
        Witaj, {' '} {userName}
      </Link>
      <button
        onClick={() => signOut({callbackUrl: '/'})}
      className="bg-primary rounded-full text-white px-8 py-2 ">Wyloguj się</button>
    </>
    )
  }
  if(status === 'unauthenticated'){
    return (
    <>
      <Link href={'/login'} className="">Zaloguj się</Link>
      <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2 ">Rejestracja</Link>
    </>
    )
  }
  return (
  <>
    {status === 'unauthenticated' && (
      <>
        <Link href={'/login'} className="">Zaloguj się</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2 ">Rejestracja</Link>
      </>
    )}
  </>

  )
}

const Header = () => {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const {cartProducts} = useContext(CartContext);
  const [mobileNavOpen,setMobileNavOpen] = useState(false);
  if(userName && userName.includes('')){
    userName = userName.split(' ')[0];
  }
  return (
    <header>
      <div
       className='flex items-center md:hidden justify-between'>
        <Link className="text-primary font-semibold text-2xl " href={'/'}>ST PIZZA</Link>
        <div className='flex gap-8 items-center'>
          <Link href={'/cart'} className='relative'>
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className='absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3'>
              {cartProducts.length}
            </span>
            )}
          </Link>
          <button className='p-1 border' onClick={() => {
            setMobileNavOpen(prev=> !prev);
          }}>
            <Bars2/>
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <div className='md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center'
        onClick={() => setMobileNavOpen(false)}>
          <Link href={'/'}>Strona główna</Link>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/#about'}>O nas</Link>
          <Link href={'/#contact'}>Kontakt</Link>
          <AuthLinks status={status} userName={userName}/>
        </div>
      )}
      <div className='hidden md:flex items-center justify-between'>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold" >
        <Link className="text-primary font-semibold text-2xl " href={'/'}>ST PIZZA</Link>
        <Link href={'/'}>Strona główna</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/#about'}>O nas</Link>
        <Link href={'/#contact'}>Kontakt</Link>
      </nav>
      <nav className='flex items-center font-semibold gap-4 text-gray-500'>
        <AuthLinks status={status} userName={userName}/>
        <Link href={'/cart'} className='relative'>
          <ShoppingCart />
          {cartProducts?.length > 0 && (
            <span className='absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3'>
            {cartProducts.length}
          </span>
          )}
        </Link>
      </nav>
      </div>
    </header>
  )
}

export default Header
