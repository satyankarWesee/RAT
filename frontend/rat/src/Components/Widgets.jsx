import React, { useEffect, useState } from 'react';
import { FaComputer } from "react-icons/fa6";
import { RiFilter3Fill } from "react-icons/ri";
import axios from 'axios';


const Widgets = () => {
  const [ips, setIps] = useState([]);

  const getIP = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/remote-tools'); // Your API here
      console.log(response.data);
      setIps(response.data)
    } catch (error) {
      console.error('Error fetching IPs:', error);
    }
  };

  useEffect(() => {
    getIP();
  }, []);

  return (
    <div>

      <div className='flex flex-row justify-between p-4'>
        <span className='text-2xl font-medium'>Widgets</span>
        <span className='text-2xl font-medium'><RiFilter3Fill /></span>
      </div>


      <div className='space-x-2 block flex flex-row p-5'>

        {ips.map((item) => (
          <div
            key={item.id}
            className={`border border-gray-700 w-96 rounded-xl block flex flex-row gap-8 p-2 ${item.status === "red" ? "bg-[#f8d7da]" :
                item.status === "green" ? "bg-[#d4edda]" :
                  "bg-[#f0f0f0]" // default fallback color
              }`}
          >
            <div>
              <FaComputer size={90} />
            </div>
            <div className="w-full space-y-2">
              <h2>{item.os_name}</h2>
              {/* <p className="border border-x-5"></p> */}
              <hr className="border-t border-gray-400" />

              <span>{item.ip_address}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Widgets;
