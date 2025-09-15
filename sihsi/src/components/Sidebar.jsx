import React from 'react'
import { assets } from '../assets/assets'
const Sidebar = () => {
  return (
    <div className='bg-[#E4FFE5] py-30 flex flex-col items-center w-105 gap-15 h-screen'>
      <div className='flex flex-col items-center'>
        <img src={assets.man} className='w-20 h-20 rounded-full' />
        <p className='text-[30px]'>Saksham Garg</p>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-5 hover:bg-[#D3FCB7] px-17 py-2 rounded-xl'>
            <img src={assets.ai_graph} className='w-8 h-8'/>
            <p className='text-[25px]'>AI Trends</p>
        </div>
        <div className='flex gap-5 hover:bg-[#D3FCB7] px-17 py-2 rounded-xl'>
            <img src={assets.box} className='w-8 h-8'/>
            <p className='text-[25px]'>My Orders</p>
        </div>
        <div className='flex gap-5 hover:bg-[#D3FCB7] px-17 py-2 rounded-xl'>
            <img src={assets.cart} className='w-8 h-8'/>
            <p className='text-[25px]'>My products</p>
        </div>
        <div className='flex gap-5 hover:bg-[#D3FCB7] px-17 py-2 rounded-xl'>
            <img src={assets.package_plus} className='w-8 h-8'/>
            <p className='text-[25px]'>Add Product</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
