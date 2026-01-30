import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Leadtable from '../components/Leadtable'

function Usertable() {
  return (
    <>
<table className="border-0 border-gray-100 border-separate  border-spacing-0 text-black w-full mt-20 rounded-lg overflow-hidden">
        <thead className="bg-[#f8ebec]">
          <tr className="uppercase">
            <th className="border border-gray-300 p-2">Employee Name</th>
            <th className="border border-gray-300 p-2">User Name</th>
            <th className="border border-gray-300 p-2">Mobile No.</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">
              <img src="../../public/eye.png" alt="" className="mx-auto" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Usertable