import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";





const Login = () => {
  return (
    <div className='bg-blue-800 min-h-screen'>
      <div className='flex flex-row justify-between p-4'>
        <img src="/logo-left.png" alt="logo 1" className='h-24' />
        <img src="/logo-right.png" alt="logo 2" className='h-24' />
      </div>

      <div className='flex justify-center'>
        <p className='text-white font-bold text-4xl'>Welcome to RAT Portal</p>
      </div>

      <div className="flex items-center justify-center my-16">
        <div className="bg-blue-700 bg-opacity-40 p-8 rounded-lg shadow-md w-full max-w-sm text-white">
          <form>
            <p className="text-black text-2xl font-medium mb-4">LOGIN</p>

            <div className="mb-4 relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="email"
                id="email"
                className="w-full pl-10 p-2 rounded-xl bg-white border-2 border-black outline-none focus:border-black"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-4 relative">
              <FaLock  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"/>
              <input
                type="password"
                id="password"
                className="w-full pl-10 p-2 rounded-xl bg-white border-2 border-black outline-none focus:border-black"
                placeholder="Password"
                required
              />
              <FaRegEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer" />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-xl"
            >
              Login
            </button>
          </form>

          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-sm text-gray-300">OR</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <button className="w-full bg-black text-white py-2 rounded-xl">
            Sign Up
          </button>

          <div className="text-sm mt-4">
            <a href="#" className="text-blue-200 hover:underline">Forgot Password?</a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Login
