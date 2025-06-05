import React from 'react'
import { AiFillDashboard } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { FaShieldVirus } from "react-icons/fa6";
import { PiHandTapBold } from "react-icons/pi";
import { FaEyeSlash } from "react-icons/fa";
import { BsUsbDriveFill } from "react-icons/bs";
import { IoGitNetworkOutline } from "react-icons/io5";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoDesktopOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { Link,Outlet } from 'react-router-dom';
import Header from '../Dashboard/Header';

const SideBar = () => {
    

    const menuItems = [
        {label: 'Dashboard', path: '/dashboard' , icon:<AiFillDashboard/>},
        {label: 'System Information', path: '/sysinfo/:ip', icon:<FaComputer/> },
        {label:'Operating system bootup', path:'/osb',icon:<FaAssistiveListeningSystems/>},
        {label:'Antivirus Information',path:'/antivirus',icon:<FaShieldVirus/>},
        {label:'Remote Login',path:'/remote',icon:<PiHandTapBold/>},
        {label:'Browser and savings of password',path:'/browser', icon:<FaEyeSlash/>},
        {label:'Whitelisted/non whitelisted software',path:'/software', icon:<BsUsbDriveFill/>},
        {label:'Network Connection', path:'/networkconnection', icon:<IoGitNetworkOutline/>},
        {label:'User Account Privileges', path:'/useraccount',icon:<PiUserCirclePlusFill/>},
        {label:'Domain User Information',path:'/userdomain',icon:<BsInfoCircleFill/>},
        {label:'Desktop and screensaver', path:'/screensaver',icon:<IoDesktopOutline/>},
        {label:'Usage of Removable media and data storage', path:'/media',icon:<LuDownload/>}
    ];

    return (
        <div>
            <div className='flex flex-row'>
                <div className='bg-blue-800 w-80 h-screen p-4 overflow-y-auto'>
                    <div className='flex items-center space-x-3 mb-6'>
                        <img src="/logo-left.png" alt="Logo" className='h-10 w-10 object-contain' />
                        <span className='font-semibold text-2xl text-white whitespace-nowrap'>
                            Remote Audit Tool
                        </span>
                    </div>

                    <nav className='text-white'>
                    <ul className='space-y-2'>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className='flex items-center space-x-3 p-2 rounded-md hover:bg-gray-300 hover:rounded-lg cursor-pointer transition-colors'
                                >
                                    <span className='text-xl'>{item.icon}</span>
                                    <span className='text-lg'>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </nav>


                </div>

                <div className='px-6 py-4 flex-grow'>
                <Header />
                <Outlet />
                </div>
            </div>
        </div>
    )
}

export default SideBar
