import React from 'react';
import { ProductProps } from '../../type';
import Image from 'next/image';
import { HiShoppingCart } from 'react-icons/hi';
import { FaHeart } from 'react-icons/fa';
import FormattedPrice from './FormatedPrice';
import { addToCart, addToFavourite } from '@/store/nextslice';
import { useDispatch } from 'react-redux';


interface ProductsProps {
  prodData: ProductProps[];
}

const Products: React.FC<ProductsProps> = ({ prodData }) => {
  const dispatch = useDispatch();   
  return (
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
      {prodData.map(({ id, title, price, description, category, image }: ProductProps) => (
        <div key={id} className='w-full bg-white text-black p-4 border-gray-300 rounded-lg group overflow-hidden flex flex-col'>
          <div className='w-full h-[320px] relative'>
            <Image 
              className='w-full h-full object-cover transform scale-90 group-hover:scale-105 transition-transform duration-300'
              src={image}
              alt={title}
              width={300}
              height={300} 
            />
            <div className="w-12 h-12 absolute bottom-20 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
              <span
              onClick={() => dispatch(
                addToCart({ id, title, price, description, category, image , quantity: 1 })
              )}
              className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                <HiShoppingCart />
              </span>
              <span
              onClick={() => dispatch(
                addToFavourite({ id, title, price, description, category, image })
              )} 
              className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                <FaHeart />
              </span>
            </div>
          </div>
          <hr className='border-gray-300' />
          <div className='px-4 py-3 flex flex-col gap-1 flex-grow'>
            <p className='text-xs text-gray-500 tracking-wide'>{category}</p>
            <p className='text-base font-medium'>{title}</p>
            <p className='items-center flex'>
              <span className='text-amazon_blue font-semibold'>
                <FormattedPrice price={price * 100} />
              </span>
            </p>
            <p className='text-xs text-gray-500 text-justify flex-grow overflow-hidden overflow-ellipsis'>{description.substring(0, 100)}...</p>
            <button onClick={() => dispatch(
              addToCart({ id, title, price, description, category, image , quantity: 1 })
            )} 
            className='w-full py-1 bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-auto'>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
