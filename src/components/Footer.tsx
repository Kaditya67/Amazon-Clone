import React from 'react'
import logo from '../images/logo.png'
import Image from "next/image";

export default function Footer() {
  return (
    <div className='w-full h-20 bg-amazon_light text-gray-400 flex items-center justify-center gap-2'>
        <Image src={logo} alt="logo" className='w-24'/>
        <p className='text-sm mb-2'>All rights reserved {""}
        <a className='hover:text-white hover:underline decoration-[1px] cursor-pointer duration-250' href='https://twitter.com/AdityaOjha'>@AdityaOjha</a></p>
    </div>
  )
}
