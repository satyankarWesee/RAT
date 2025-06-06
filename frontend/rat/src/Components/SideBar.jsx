import React, { useEffect, useState } from 'react'
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
import DashBoard from '../Dashboard/DashBoard';
import SysInfo from '../Dashboard/SysInfo';
import Osb from '../Dashboard/Osb';
import AntiVirus from '../Dashboard/AntiVirus'
import Browser from '../Dashboard/Browser'
import Media from '../Dashboard/Media'
import NetworkConnection from '../Dashboard/NetworkConnection'
import Remote from '../Dashboard/Remote'
import ScreenSaver from '../Dashboard/ScreenSaver'
import Software from '../Dashboard/Software'
import UserAccount from '../Dashboard/UserAccount'
import UserDomain from '../Dashboard/UserDomain'
import { Link, Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIPData } from '../Redux/Slices/ipSlice';
import Header from '../Dashboard/Header';
import axios from 'axios';


const SideBar = () => {
  const dispatch = useDispatch();
  const [ipdata, setIpData] = useState()
  const { ip } = useParams()

  const ipDetails = useSelector(state => state.ip_data.data);
  console.log("here are details::", ipDetails)


  useEffect(() => {
    if (ipDetails.length === 0) {
      axios.get(`http://192.168.100.201:8000/system-ips/${ip}`)
        .then((res) => {
          dispatch(setIpData(res.data))
        })
        .catch(err => console.error("error fetching api", err))
    }
  }, [dispatch, ipDetails.length])

  const [activeTab, setActiveTab] = useState('DashBoard')

  const menuItems = [
    { label: 'Dashboard', key: 'Dashboard', icon: <AiFillDashboard /> },
    { label: 'System Information', key: 'SysInfo', icon: <FaComputer /> },
    { label: 'Operating system bootup', key: 'Osb', icon: <FaAssistiveListeningSystems /> },
    { label: 'Antivirus Information', key: 'AntiVirus', icon: <FaShieldVirus /> },
    { label: 'Remote Login', key: 'Remote', icon: <PiHandTapBold /> },
    { label: 'Browser and savings of password', key: 'Browser', icon: <FaEyeSlash /> },
    { label: 'Whitelisted/non whitelisted software', key: 'Software', icon: <BsUsbDriveFill /> },
    { label: 'Network Connection', key: 'NetworkConnection', icon: <IoGitNetworkOutline /> },
    { label: 'User Account Privileges', key: 'UserAccount', icon: <PiUserCirclePlusFill /> },
    { label: 'Domain User Information', key: 'UserDomain', icon: <BsInfoCircleFill /> },
    { label: 'Desktop and screensaver', key: 'ScreenSaver', icon: <IoDesktopOutline /> },
    { label: 'Usage of Removable media and data storage', key: 'Media', icon: <LuDownload /> }

  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashBoard />;
      case 'SysInfo':
        return <SysInfo />;
      case 'Osb':
        return <Osb />;
      case 'AntiVirus':
        return <AntiVirus />;
      case 'Remote':
        return <Remote />;
      case 'Browser':
        return <Browser />;
      case 'Software':
        return <Software />;
      case 'NetworkConnection':
        return <NetworkConnection />;
      case 'UserAccount':
        return <UserAccount />;
      case 'UserDomain':
        return <UserDomain />;
      case 'ScreenSaver':
        return <ScreenSaver />;
      case 'Media':
        return <Media />;

      default:
        return <DashBoard />;
    }
  };



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
                  <div
                    onClick={() => setActiveTab(item.key)}
                    className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-colors ${activeTab === item.key ? 'bg-gray-300 text-black font-semibold' : 'hover:bg-gray-300'
                      }`}
                  >
                    <span className='text-xl'>{item.icon}</span>
                    <span className='text-lg'>{item.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </nav>


        </div>

        <div className='px-6 py-4 flex-grow'>
          <Header />
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  )
}

export default SideBar
