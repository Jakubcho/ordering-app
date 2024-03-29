"use client"
import React from 'react'
import { useState } from 'react';
import Link from "next/link";
import {signIn} from "next-auth/react";

const RegisterPage = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev){
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body:JSON.stringify({email, password}),
      headers:{'Content-Type':'application/json'},
    });
    if(response.ok){
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl'>
        Register
      </h1>
      {userCreated && (
        <div className='my-4 text-center'>
          User created.<br /> Now you can {' '} <Link href={'/login'}>Login &raquo;</Link>
        </div>
      )}
      {error && (
        <div className='my-4 text-center'>
          Error<br /> Please try leater
        </div>
      )}
      <form className='block max-w-sm mx-auto' onSubmit={handleFormSubmit}>
        <input type="email" value={email} placeholder='email'
          onChange={ev => setEmail(ev.target.value)} disabled={creatingUser} />
        <input type="password" value={password}
          onChange={ev => setPassword(ev.target.value)} placeholder='password'
          disabled={creatingUser} />
        <button type="submit" disabled={creatingUser} >Register</button>
        <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div>
        <button
          onClick={() => signIn('google', {callbackUrl:'/'})}
          className='flex gap-4 justify-center'>
          <img src={'/google-logo.png'} alt={''} width={24} height={24}/>
          Login with google</button>
        <div className='text-center my-4 text-gray-500 border-t pt-4'>
          Existing account?{' '}
          <Link className='underline' href={'/login'}>Login here</Link>
        </div>
      </form>
    </section>
  )
}

export default RegisterPage;