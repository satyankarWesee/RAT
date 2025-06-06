import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const Browser = () => {

  const rows = [
    { label: "Latest Version of Browser Installed", key: "latest_browser_version_installed" },
    { label: "Auto Saving of Passwords in Web Browser Disabled", key: "browser_password_autosave_disabled" },
    { label: "Auto Saving of History in Web Browser Disabled", key: "browser_history_autosave_disabled" },
    { label: "Browsing Activity of Social Networking Sites", key: "social_media_browsing" },
    { label: "List of Installed Add-ons", key: "installed_addons_list" },
    { label: "Password Autofill Disabled", key: "password_autofill_disabled" },
    { label: "Cookie Retention Settings", key: "cookie_retention_settings" },
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

export default Browser;
