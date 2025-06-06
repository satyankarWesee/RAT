import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const AntiVirus = () => {

  const rows = [
    { label: "Antivirus Installed", key: "antivirus_installed" },
    { label: "Antivirus Updated (Date of Last Update)", key: "antivirus_updated_date" },
    { label: "AV Activated On", key: "av_activated_on" },
    { label: "AV Expiring On", key: "av_expiring_on" },
    { label: "AV Firewall Enabled", key: "av_firewall_enabled" },
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

export default AntiVirus;
