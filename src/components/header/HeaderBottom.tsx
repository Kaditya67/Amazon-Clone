import React from 'react';
import {LuMenu} from 'react-icons/lu';

export default function HeaderBottom() {
  return (
    <div className='w-full h-16 bg-amazon_light text-sm text-lightText px-4 flex items-center'>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'><LuMenu/>All</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Todays Deals</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Amazon MiniTv</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Best Sellers</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Mobiles</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Customer Service</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Electronics</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>New Releases</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Home & Kitchen</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Fashion</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Amazon Pay</p>
      <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-500 text-amazon_yellow cursor-pointer duration-300'>Sign Out</p>
    </div>
  )
}
