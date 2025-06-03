import React from 'react'
import { AiFillDashboard } from "react-icons/ai";

const DashBoard = () => {

    const menuItems = [
        'Dashboard',
        'System Information',
        'Operating system bootup',
        'Antivirus Information',
        'Remote Login',
        'Browser and savings of password',
        'Whitelisted/non whitelisted software',
        'Network connection',
        'User Account Privileges',
        'Domain User information',
        'Desktop and screensaver',
        'Usage of Removable media and data storage',
    ];

    return (
        <div>
            <div className='flex flex-row'>
                <div className='bg-blue-800 w-80 h-screen p-4 overflow-y-auto'>
                    {/* Header */}
                    <div className='flex items-center space-x-3 mb-6'>
                        <img src="/logo-left.png" alt="Logo" className='h-10 w-10 object-contain' />
                        <span className='font-semibold text-2xl text-white whitespace-nowrap'>
                            Remote Audit Tool
                        </span>
                    </div>

                    {/* Menu Items */}
                    <nav className='text-white'>
                        <ul className='space-y-2'>
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className='flex items-center space-x-3 p-2 rounded-md hover:bg-gray-300 hover:rounded-lg cursor-pointer transition-colors '
                                >
                                    <AiFillDashboard className='text-xl' />
                                    <span className='text-lg'>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>


                </div>

                <div>
                    <h2>hello</h2> 
                </div>
            </div>
        </div>
    )
}

export default DashBoard
