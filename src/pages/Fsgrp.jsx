import React from "react";

function Fsgrp() {
  return (
    <>
      <table className="border-0 border-gray-100 border-separate  border-spacing-0 text-black w-full mt-5 rounded-lg overflow-hidden">
        <thead className="bg-[#f8ebec]">
          <tr className="uppercase text-[10px]">
            <th className="border border-gray-300 p-2 text-left w-[150px]">
              Financial Status
            </th>
            <th className="border border-gray-300 p-2 text-left w-[120px]">
              FS Group Name
            </th>

            <th className="border border-gray-300 p-2 text-left">
              fs roc group name
            </th>

            <th className="border border-gray-300 p-2 w-[50px]">shortname</th>
            <th className="border border-gray-300 p-2 w-[50px]">Action</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">fsgrp1</td>
            <td className="border border-gray-300 p-2">inc</td>
            <td className="border border-gray-300 p-2">fsgrp</td>

            <td className="border border-gray-300 p-2">
              <img src="../../public/eye.png" alt="" className="mx-auto" />
            </td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-2">2</td>
            <td className="border border-gray-300 p-2">fsgrp2</td>
            <td className="border border-gray-300 p-2">inc</td>
            <td className="border border-gray-300 p-2">fsgrp2</td>

            <td className="border border-gray-300 p-2">
              <img src="../../public/eye.png" alt="" className="mx-auto" />
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">NEW</td>
            <td className="border border-gray-300 p-2">inc</td>
            <td className="border border-gray-300 p-2">NNN</td>

            <td className="border border-gray-300 p-2">
              <img src="../../public/eye.png" alt="" className="mx-auto" />
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-2">0</td>
            <td className="border border-gray-300 p-2">001</td>
            <td className="border border-gray-300 p-2">inc</td>
            <td className="border border-gray-300 p-2">001</td>

            <td className="border border-gray-300 p-2">
              <img src="../../public/eye.png" alt="" className="mx-auto" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Fsgrp;
