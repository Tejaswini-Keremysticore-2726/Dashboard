

import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";

function Usertable() {
  return (
    <>
      <div className="flex justify-end gap-5">
        <button type="button">
          <FilterListIcon />
        </button>
        <button
          type="button"
          className="bg-red-800 text-white rounded-lg w-[30px] h-[30px]"
        >
          <AddIcon />
        </button>
      </div>

      {/* ✅ TABLE SCROLL WRAPPER (same like Fsgrp) */}
      <div className="w-full mt-5 overflow-x-auto">
        <table className="min-w-max w-full border-0 border-gray-100 border-separate border-spacing-0 text-black rounded-lg">
          <thead className="bg-[#f8ebec]">
            <tr className="uppercase text-[10px] whitespace-nowrap">
              <th className="border border-gray-300 p-2 text-left w-[150px]">
                Account Name
              </th>
              <th className="border border-gray-300 p-2 text-left w-[280px]">
                Unique Identification no.
              </th>
              <th className="border border-gray-300 p-2 text-left">Type</th>
              <th className="border border-gray-300 p-2 text-left">Group</th>
              <th className="border border-gray-300 p-2 text-left">Status</th>
              <th className="border border-gray-300 p-2 w-[60px]">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="hover:bg-gray-100 whitespace-nowrap">
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2">
                  {/* ✅ Vite public image path */}
                  <img src="/eye.png" alt="" className="mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Usertable;
