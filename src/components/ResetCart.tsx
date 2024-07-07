import { resetCart } from '@/store/nextslice'
import React from 'react'
import { useDispatch } from 'react-redux'

function ResetCart() {
    const handleReset=()=>{
        const confirmReset = window.confirm('Are you sure you want to reset the cart?')
        if(confirmReset){
            dispatch(resetCart())
        }
    }
    const dispatch = useDispatch()
  return (
    <button className='border-2 text-white p-1 mt-2 rounded-lg text-lg bg-gray-400 border-transparent px-2 hover:border-white cursor:pointer duration-300 hover:bg-red-500' onClick={handleReset}>
        Reset Cart
    </button>
  )
}

export default ResetCart
