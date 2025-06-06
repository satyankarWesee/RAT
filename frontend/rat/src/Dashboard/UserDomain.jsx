import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const UserDomain = () => {

  const rows = [
    { label: "User Login as Domain User", key: "domain_user_login" },
    { label: "Login Password Set", key: "login_password_set" },
    { label: "User Login with F-Pehchaan IDs", key: "fpehchaan_id_login" },
    { label: "Password Complexity Policy Enabled (GPO)", key: "password_complexity_policy_enabled" },
    { label: "Password Expiry Policy Enforced", key: "password_expiry_policy_enforced" },
    { label: "Last Password Change", key: "last_password_change" },
    { label: "Account Lockout Threshold Set", key: "account_lockout_threshold" },
    { label: "Alternative Login Method Disabled", key: "alternative_login_disabled" },
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

export default UserDomain;
