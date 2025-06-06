import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Table = ({ rows = [] }) => {
    const { ip } = useParams();
    console.log("this is the ip", ip)

    const ipDetails = useSelector(state => state.ip_data.data);
  
    // Filter the single item
    const system = ipDetails;
    console.log("this is my system", system)
    return (
        <div>
            <table className="w-full text-left border border-gray-300 shadow-md rounded-lg overflow-hidden overflow-y-auto">
                <thead className="bg-blue-100">
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-300">Description</th>
                        <th className="px-6 py-3 border-b border-gray-300">Information</th>
                        <th className="px-6 py-3 border-b border-gray-300">Ideas</th>
                        <th className="px-6 py-3 border-b border-gray-300">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white text-gray-700">
                    {rows.map(({ label, key }) => (
                        <tr key={key}>
                            <td style={{ fontWeight: "bold" }}>{label}</td>
                            <td>{system[key] || "-"}</td>
                            <td>{"Idea #1"}</td>
                            <td>
                                {system[key] ? (
                                    <span style={{ color: "green", fontWeight: "bold" }}>● Completed</span>
                                ) : (
                                    <span style={{ color: "red", fontWeight: "bold" }}>● Pending</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Table;
