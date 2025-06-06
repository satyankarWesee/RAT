import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const Media = () => {

  const rows = [
    { label: "Any Usage of Unauthorized USB Media", key: "unauthorized_usb_usage" },
    { label: "Auto Run on All Removable Media Disabled", key: "autorun_disabled_removable_media" },
    { label: "CD/DVD Drive Disabled", key: "cd_dvd_drive_disabled" },
    { label: "NoDriveTypeAutoRun Set to 0xFF", key: "nodrivetypeautorun_0xff" },
    { label: ".inf Files Found", key: "inf_files_found" },
    { label: "Official Data Outside SENIC Volume", key: "official_data_outside_senic_volume" },
    { label: "Classified Data in Shared Folder", key: "classified_data_in_shared_folder" },
    { label: "Files found in user", key: "files_found_in_user" },
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

export default Media;
