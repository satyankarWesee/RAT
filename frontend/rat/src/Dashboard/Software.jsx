import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const Software = () => {

  const rows = [
      { label: "SENIC Version", key: "senic_version" },
      { label: "SENIC Guard SD Version", key: "senic_guard_sd_version" },
      { label: "SENIC Admin Installed and Version", key: "senic_admin_installed_version" },
      { label: "SECLORE Client Installed", key: "seclore_client_installed" },
      { label: "SCCM Client Installed", key: "sccm_client_installed" },
      { label: "SECEM Installed", key: "secem_installed" },
      { label: "Non-Whitelisted Software Installed", key: "non_whitelisted_software_installed" },
    
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

export default Software;
