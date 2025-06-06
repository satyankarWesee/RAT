import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const Osb = () => {

  const rows = [
      { label: "Boot Up Password in BIOS", key: "bootup_password_bios" },
      { label: "Supervisor Password in BIOS Enabled", key: "supervisor_password_bios_enabled" },
      { label: "First Boot Device", key: "first_boot_device" },
      { label: "Booting from Removable Media Disabled", key: "boot_removable_media_disabled" },
      { label: "BIOS Version", key: "bios_version" },
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

export default Osb;
