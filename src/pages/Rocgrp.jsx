import React from 'react'

function Rocgrp() {
  return (
    <>
    
    <table className="border-0 border-gray-100 border-separate  border-spacing-0 text-black w-full mt-5 rounded-lg overflow-hidden">
        <thead className="bg-[#f8ebec]">
          <tr className="uppercase text-[10px]">
            <th className="border border-gray-300 p-2 text-left w-[150px]">
              Financial Status
            </th>
            <th className="border border-gray-300 p-2 text-left w-[280px]">
              fs roc group name
            </th>
            
            <th className="border border-gray-300 p-2 text-left">debit code</th>
            <th className="border border-gray-300 p-2 text-left">credit code</th>
            <th className="border border-gray-300 p-2 w-[50px]">Action</th>
          </tr>
        </thead>

        <tbody className="bg-white uppercase">
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-2">p/l-Income</td>
            <td className="border border-gray-300 p-2">INC</td>
           
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2"></td>
            {/* <td className="border border-gray-300 p-2">string</td> */}
            <td className="border border-gray-300 p-2">
              <img src="../../public/eye.png" alt="" className="mx-auto" />
            </td>
          </tr>

          
        </tbody>
      </table>
    </>
  )
}

export default Rocgrp