  import React from 'react'
  import { assets } from '../assets/assets'
  import { NavLink } from 'react-router-dom'
  const Sidebar = () => {
    return (
      <div className='bg-[#E4FFE5] py-15 flex flex-col items-center w-85 gap-15 h-screen'>
        <div className='flex flex-col items-center gap-2'>
          <img src={assets.man} className='w-13 h-13 rounded-full' />
          <p className='text-[19px]'>Saksham Garg</p>
        </div>
        <div className='flex flex-col gap-2'>
          <NavLink to="/aipred" className={({ isActive }) =>`flex gap-4 px-13 py-2 rounded-xl  hover:bg-[#D3FCB7] ${isActive ? "bg-[#D3FCB7]" : "bg-[#E4FFE5]"} outline-none items-center`}>
              <img src={assets.ai_graph} className='w-5 h-5'/>
              <p className='text-[17px]'>AI Trends</p>
          </NavLink>
          <NavLink to="/myorders" className={({ isActive }) =>`flex gap-4 px-13 py-2 rounded-xl hover:bg-[#D3FCB7] ${isActive ? "bg-[#D3FCB7]" : "bg-[#E4FFE5]"} outline-none items-center`}>
              <img src={assets.box} className='w-5 h-5'/>
              <p className='text-[17px]'>My Orders</p>
          </NavLink>
          <NavLink to="/myproducts" className={({ isActive }) =>`flex gap-4 px-13 py-2 rounded-xl hover:bg-[#D3FCB7] ${isActive ? "bg-[#D3FCB7]" : "bg-[#E4FFE5]"} outline-none items-center`}>
              <img src={assets.cart} className='w-5 h-5'/>
              <p className='text-[17px]'>My products</p>
          </NavLink>
          <NavLink to="/addproduct" className={({ isActive }) =>`flex gap-4 px-13 py-2 rounded-xl hover:bg-[#D3FCB7] ${isActive ? "bg-[#D3FCB7]" : "bg-[#E4FFE5]"} outline-none items-center`}>
              <img src={assets.package_plus} className='w-5 h-5'/>
              <p className='text-[17px]'>Add Product</p>
          </NavLink>
        </div>
      </div>
    )
  }

  export default Sidebar
