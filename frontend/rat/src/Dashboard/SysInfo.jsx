import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const SysInfo = () => {

  const rows = [
    { label: "System Make & Model", key: "system_make_model" },
    { label: "OS Edition", key: "os_edition" },
    { label: "OS Updated (Date of Last Update)", key: "os_updated_date" },
    { label: "Genuine Operating System Installed / Registration No.", key: "genuine_os_installed" },
    { label: "OS License Key", key: "os_license_key" },
    { label: "Multiple Operating Systems Installed", key: "multiple_os_installed" },
    { label: "Firewall Status", key: "firewall_status" },
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

export default SysInfo;
