import React, { useEffect, useState } from 'react';
import { FaComputer } from "react-icons/fa6";
import { RiFilter3Fill } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Widgets = () => {

  const navigate = useNavigate();
  const[ips,setIps]=useState([])


 const getIP=async()=>{
  const response=await axios.get('http://192.168.100.201:8000/system-ips/')
  setIps(response.data)
 }
 useEffect(()=>{
    getIP()
 },[])


  return (
    <div>
      <div className='flex flex-row justify-between p-4'>
        <span className='text-2xl font-medium'>Widgets</span>
        <span className='text-2xl font-medium'><RiFilter3Fill /></span>
      </div>

      <div className='flex flex-row gap-14 p-2'>
        <div>hello</div>
        <div className='flex flex-row flex-wrap gap-4'>
          {ips.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/sidebar/${item.ip_address}`)}
              className={`cursor-pointer border border-gray-700 w-80 rounded-xl flex flex-row gap-8 p-2`}
            >
              <div><FaComputer size={90} /></div>
              <div className="w-full space-y-2">
                <hr className="border-t border-gray-400" />
                <span>{item.ip_address}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Widgets;
