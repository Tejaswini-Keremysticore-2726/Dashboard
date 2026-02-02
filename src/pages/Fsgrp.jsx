
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";

function Fsgrp() {
  return (
    <>
      <div className="flex justify-end gap-5">
        <button>
          <FilterListIcon />
        </button>
        <button className="bg-red-800 text-white rounded-lg w-[30px] h-[30px]">
          <AddIcon />
        </button>
      </div>

      {/* ✅ TABLE SCROLL WRAPPER */}
      <div className="w-full mt-5 overflow-x-auto">
        <table className="w-full border-0 border-gray-100 border-separate border-spacing-0 text-black rounded-lg">
          <thead className="bg-[#f8ebec]">
            <tr className="uppercase text-[10px] whitespace-nowrap">
              <th className="border border-gray-300 p-2 text-left w-[150px]">
                Financial Status
              </th>
              <th className="border border-gray-300 p-2 text-left w-[120px]">
                FS Group Name
              </th>
              <th className="border border-gray-300 p-2 text-left">
                FS ROC Group Name
              </th>
              <th className="border border-gray-300 p-2 w-[100px]">
                Short Name
              </th>
              <th className="border border-gray-300 p-2 w-[60px]">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {[
              { id: 1, fs: "fsgrp1", roc: "inc", short: "fsgrp" },
              { id: 2, fs: "fsgrp2", roc: "inc", short: "fsgrp2" },
              { id: 3, fs: "NEW", roc: "inc", short: "NNN" },
              { id: 4, fs: "001", roc: "inc", short: "001" },
            ].map((row) => (
              <tr key={row.id} className="hover:bg-gray-100 whitespace-nowrap">
                <td className="border border-gray-300 p-2">{row.id}</td>
                <td className="border border-gray-300 p-2">{row.fs}</td>
                <td className="border border-gray-300 p-2">{row.roc}</td>
                <td className="border border-gray-300 p-2">{row.short}</td>
                <td className="border border-gray-300 p-2">
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

export default Fsgrp;
