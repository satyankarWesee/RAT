import React, { useEffect } from 'react';
import { FaComputer } from "react-icons/fa6";
import { RiFilter3Fill } from "react-icons/ri";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIPData } from '../Redux/Slices/ipSlice';
import { useNavigate } from 'react-router-dom';

const Widgets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ips = useSelector(state => state.ip.data);

  useEffect(() => {
    if (ips.length === 0) {
      axios.get('http://192.168.100.201:8000/api/')
        .then((res) => {
          console.log("this is my Fetched data:", res.data);
          dispatch(setIPData(res.data));
        })
        .catch(err => console.error('Error fetching IPs:', err));
    }
  }, [dispatch, ips.length]);

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
              onClick={() => navigate(`/sysinfo/${item.ip_address}`)}
              className={`cursor-pointer border border-gray-700 w-80 rounded-xl flex flex-row gap-8 p-2 ${
                item.status === "red" ? "bg-[#f8d7da]" :
                item.status === "green" ? "bg-[#d4edda]" : "bg-[#f0f0f0]"
              }`}
            >
              <div><FaComputer size={90} /></div>
              <div className="w-full space-y-2">
                <h2>{item.os_name}</h2>
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
