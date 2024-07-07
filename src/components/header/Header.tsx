import React from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import cart from '../../images/cart.png'
// Icons
import {CiLocationOn} from 'react-icons/ci';
import {BiCaretDown} from 'react-icons/bi';
import {HiOutlineSearch} from 'react-icons/hi'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { stateProps } from '../../../type';

export default function Header() {
    const dispatch=useDispatch()
    const {productData, favouriteData, userInfo }=useSelector(
        (state:stateProps)=>state.next || {}
    )

  return (
    <div className='w-full h-16 bg-amazon_blue text-lightText sticky top-0 z-50'>
      <div className='justify-between items-center h-full w-full mx-auto inline-flex gap-1 mdl:gap-3 px-4'>

    {/* logo  */}
        <Link href={"/"} className='border border-transparent px-2 hover:border-white cursor:pointer duration-300 items-center justify-center h-[70%]'>
        <Image src={logo} alt="logo" className='w-28 object-cover'/>
        </Link>

    {/* location  */}
        <div className='border border-transparent px-2 hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]'>
        <CiLocationOn size={20} />
            <div className='text-xs'>
                <p>Deliver to</p>
                <p className='text-white font-bold uppercase'>India</p>
            </div>
        </div>

    {/* search  */}
    <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
        <input type="text" placeholder='Search Amazon.in' className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border border-transparent outline-none focus-visible:border-amazon_yellow'/>
        <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex
                items-center justify-center absolute right-0 rounded-md rounded-br-md">
            <HiOutlineSearch/>
        </span>
    </div>

    {/* sign in  */}
    <div className='border border-transparent px-2 hover:border-white cursor:pointer duration-300 items-center justify-center h-[70%]'>
        <p>Hello SignIn</p>
        <p className='text-white font-bold flex item-center'>Account & Lists{" "}
        <span><BiCaretDown/></span>
        </p>
    </div>

    {/* favorites  */}
    <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border
            border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
        <p>Marked</p>
        <p className="=text-white font-bold">& Favorite</p>
        {
            favouriteData ? <span className="absolute text-amazon_yellow text-sm top-0 left-[55px] font-bold">{favouriteData.length}</span> : ''
        }
    </div>

    {/* cart  */}
    <Link href={"/cart"} className=" flex border border-transparent px-2 hover:border-white cursor:pointer duration-300 items-center justify-center h-[70%] relative">
        <Image src={cart} alt="cart" className='w-auto h-8 object-cover cursor-pointer' />
        <p className='text-white font-bold text-ml mt-3'>Cart</p>
        <span className='absolute text-amazon_yellow text-sm top-2 left-[30px] font-bold'>{productData ? productData.length : 0}</span>
    </Link>


      </div>
    </div>
  )
}
