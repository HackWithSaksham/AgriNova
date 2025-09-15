import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#235C26] px-40'>
      <div className='flex items-center gap-1'>
        <img src={assets.logo} className='w-18 h-24' />
        <p className='text-[35px] text-white'>KisanConnect</p>
      </div>
      <div className='flex text-[25px] gap-8 text-white'>
        <p>Home</p>
        <p>My Products</p>
        <p>AI Trends</p>
        <p>My Orders</p>
        <p>Add Product</p>
      </div>
      <div className='flex gap-10 items-center '>
        <div className='flex gap-3 items-center'>
            <img src={assets.flag} className='w-8 h-8' />
            <p className='text-[25px] text-white'>En</p>
        </div>
        <div>
            <img src={assets.man} className='w-8 h-8' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
