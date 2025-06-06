import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const UserAccount = () => {

  const rows = [
    { label: "Users with Admin Privileges", key: "admin_privilege_users" },
    { label: "In-Built Administrator Account Disabled", key: "inbuilt_admin_account_disabled" },
    { label: "Guest Account Disabled", key: "guest_account_disabled" },
    { label: "Admin Account Used", key: "admin_account_used" },
    { label: "Date of Last Admin Account Used", key: "last_admin_account_used" },
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

export default UserAccount;
