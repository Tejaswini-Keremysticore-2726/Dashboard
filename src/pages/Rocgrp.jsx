// import React from "react";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import AddIcon from "@mui/icons-material/Add";

// function Rocgrp() {
//   return (
//     <>
//       <div className="flex justify-end gap-5">
//         <button>
//           <FilterListIcon />
//         </button>
//         <button className="bg-red-800 text-white rounded-lg w-[30px] h-[30px]">
//           <AddIcon />
//         </button>
//       </div>
//       <table className="border-0 border-gray-100 border-separate  border-spacing-0 text-black w-full mt-5 rounded-lg overflow-hidden">
//         <thead className="bg-[#f8ebec]">
//           <tr className="uppercase text-[10px]">
//             <th className="border border-gray-300 p-2 text-left w-[150px]">
//               Financial Status
//             </th>
//             <th className="border border-gray-300 p-2 text-left w-[280px]">
//               fs roc group name
//             </th>

//             <th className="border border-gray-300 p-2 text-left">debit code</th>
//             <th className="border border-gray-300 p-2 text-left">
//               credit code
//             </th>
//             <th className="border border-gray-300 p-2 w-[50px]">Action</th>
//           </tr>
//         </thead>

//         <tbody className="bg-white uppercase">
//           <tr className="hover:bg-gray-100">
//             <td className="border border-gray-300 p-2">p/l-Income</td>
//             <td className="border border-gray-300 p-2">INC</td>

//             <td className="border border-gray-300 p-2"></td>
//             <td className="border border-gray-300 p-2"></td>
//             {/* <td className="border border-gray-300 p-2">string</td> */}
//             <td className="border border-gray-300 p-2">
//               <img src="../../public/eye.png" alt="" className="mx-auto" />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default Rocgrp;

import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";

function Rocgrp() {
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

      {/* ✅ Only table scrolls */}
      <div className="w-full mt-5 overflow-x-auto">
        <table className="min-w-max w-full border-0 border-gray-100 border-separate border-spacing-0 text-black rounded-lg">
          <thead className="bg-[#f8ebec]">
            <tr className="uppercase text-[10px] whitespace-nowrap">
              <th className="border border-gray-300 p-2 text-left w-[150px]">
                Financial Status
              </th>
              <th className="border border-gray-300 p-2 text-left w-[280px]">
                FS ROC Group Name
              </th>
              <th className="border border-gray-300 p-2 text-left">
                Debit Code
              </th>
              <th className="border border-gray-300 p-2 text-left">
                Credit Code
              </th>
              <th className="border border-gray-300 p-2 w-[60px]">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white uppercase">
            <tr className="hover:bg-gray-100 whitespace-nowrap">
              <td className="border border-gray-300 p-2">p/l-income</td>
              <td className="border border-gray-300 p-2">INC</td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2">
                <img src="/eye.png" alt="view" className="mx-auto h-4 w-4" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Rocgrp;
