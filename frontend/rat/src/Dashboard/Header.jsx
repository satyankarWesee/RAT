import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className='flex flex-row space-x-5'>
              <div className="relative w-4/5">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <IoSearchSharp />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-400 w-full rounded-lg pl-8 pr-3 py-1 focus:outline-none text-lg"
                />
              </div>
      
              <div className="flex space-x-4">
                <div className="flex items-center px-4 border-r border-gray-300">
                  <span className="text-3xl text-gray-600 cursor-pointer">
                    <MdOutlineSettings />
                  </span>
                </div>
      
                <div className="flex items-center space-x-3">
                  <img
                    src="/user.jpeg"
                    alt="User"
                    className="h-10 w-10 rounded-full border border-gray-400 object-cover"
                  />
                  <span className="text-lg font-medium text-gray-700">Kartik</span>
                </div>
              </div>
      
      
            </div>
    </div>
  )
}

export default Header
