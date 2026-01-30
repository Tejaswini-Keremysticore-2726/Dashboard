import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Leadtable from "../components/Leadtable";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";





function Userroletable() {
  return (
    <>
<div className="flex justify-end gap-5">
    <button ><FilterListIcon /></button>
<button className="bg-red-800 text-white rounded-lg w-[30px] h-[30px]"><AddIcon /></button>
</div>

      <table className="border-0 border-gray-100 border-separate  border-spacing-0 text-black w-full mt-5 rounded-lg overflow-hidden">
        <thead className="bg-[#f8ebec]">
          <tr className="uppercase">
            <th className="border border-gray-300 p-2 text-left"> User Role</th>
            <th className="border border-gray-300 p-2 w-[200px]">Action</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">
              <img src="../../public/eye.png" alt="" className="mx-auto" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Userroletable;
