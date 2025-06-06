import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const ScreenSaver = () => {

  const rows = [
    { label: "Screensaver Enabled with Password", key: "screensaver_password_enabled" },
    { label: "Clean Desktop Policy Implemented", key: "clean_desktop_policy_implemented" },
    { label: "Screen Timeout Limit", key: "screen_timeout_limit" },
    { label: "Custom Screensaver Path", key: "custom_screensaver_path" },
    { label: "Drives present", key: "drives_present" },
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

export default ScreenSaver;
