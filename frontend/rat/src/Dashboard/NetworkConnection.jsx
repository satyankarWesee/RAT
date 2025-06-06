import React from 'react';
import { IoFilterSharp } from "react-icons/io5";
import Table from '../Components/Table';

const NetworkConnection = () => {

  const rows = [
    { label: "Connection to Unit LAN", key: "connected_to_unit_lan" },
    { label: "Type of Network Connection", key: "network_connection_type" },
    { label: "Internet Access Detected", key: "internet_access_detected" },
    { label: "NAT / Proxies in Use", key: "nat_proxies_in_use" },
    { label: "Open Outbound Ports", key: "open_outbound_ports" },
    { label: "Cloud Sync Services Disabled", key: "cloud_sync_services_disabled" },
    { label: "Modems Installed", key: "modems_installed" },
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

export default NetworkConnection;
