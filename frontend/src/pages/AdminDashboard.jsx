import React, { useEffect, useState } from "react";
import { getAllApplication } from "../api/api";

const AdminDashboard = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    const res = await getAllApplication();
    setApps(res);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Applications</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              {/* <th className="px-4 py-3">Sno</th> */}
              <th className="px-4 py-3">Startup</th>
              <th className="px-4 py-3">Sector</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {apps?.map((app) => (
              <tr
                key={app.applicationID}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 text-gray-500">
                  {app.basicInfo?.startupName}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {app.startupOverview?.sector}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {app.system?.dealScore}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {app.system?.status}
                </td>

                <td className="px-4 py-3">
                  <button
                    className="text-white  border px-2 bg-blue-500 cursor-pointer rounded"
                    onClick={() =>
                      (window.location.href = `/dashboard/${app.applicationID}`)
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
