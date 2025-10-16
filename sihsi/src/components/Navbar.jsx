import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#235C26] px-40 py-2'>
      <div className='flex items-center gap-1'>
        <img src={assets.logo} className='w-9 h-13' />
        <p className='text-[22px] text-white'>KisanConnect</p>
      </div>
      <div className='flex text-[16px] gap-8 text-white'>
        <p>Home</p>
        <p>My Products</p>
        <p>AI Trends</p>
        <p>My Orders</p>
        <p>Add Product</p>
      </div>
      <div className='flex gap-6 items-center '>
        <div className='flex gap-2 items-center'>
            <img src={assets.flag} className='w-5 h-5' />
            <p className='text-[18px] text-white'>En</p>
        </div>
        <div>
            <img src={assets.man} className='w-6 h-6' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
