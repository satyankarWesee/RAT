import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const Remote = () => {

  const rows = [
    { label: "Remote Logging Disabled", key: "remote_logging_disabled" },
    { label: "RDP Ports Open", key: "rdp_ports_open" },
    { label: "RDP Brute Force Protection Enabled (GPO/EDR)", key: "rdp_brute_force_protection_enabled" },
    { label: "SSH Status", key: "ssh_status" },
    { label: "Telnet Status", key: "telnet_status" },
  ];

  return (
    <div className="p-6">
      <div className="my-6">
        <div className='flex flex-row justify-between'>
          <h2 className="text-3xl font-semibold text-gray-800">System Information</h2>
          <span className='text-2xl'><IoFilterSharp /></span>
        </div>

        <div className='mt-6'>
          <Table rows={rows}></Table>
        </div>
      </div>
    </div>
  );
};

export default Remote;
