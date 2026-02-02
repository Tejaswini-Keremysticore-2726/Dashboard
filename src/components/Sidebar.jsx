// import React from "react";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div
//       className="w-60 border-r border-gray-300 h-screen bg-[#f9f9f9] p-3"
//       id="sidebar"
//     >
//       <div className="flex gap-2 font-bold px-8 items-center p-1">
//         <img src="/logo.png" alt="logo" className="h-10 w-10" />
//         <h1 className="uppercase text-[20px] font-bold">Mysticore</h1>
//       </div>

//       <ul className="space-y-3 p-3">
//         <Link to="/">
//           <li className="mb-2 mt-5 rounded cursor-pointer hover:bg-black hover:text-white flex gap-2 p-2 items-center font-semibold">
//             <i className="fa-solid fa-table-cells-large"></i>
//             Dashboard
//           </li>
//         </Link>

//         <li className="rounded font-semibold">
//           <details className="group">
//             <summary className="list-none cursor-pointer rounded flex items-center justify-between p-2 hover:bg-black hover:text-white">
//               <span className="flex items-center gap-2">
//                 <i className="fa-solid fa-database"></i>
//                 Leads
//               </span>
//               <i className="fa-solid fa-chevron-down transition-transform duration-200 group-open:rotate-180"></i>
//             </summary>

//             <ul className="ml-6 mt-1 w-full bg-white text-black rounded shadow-md">
//               <Link to="leadtable">
//                 <li className="p-2 hover:bg-gray-200 cursor-pointer">
//                   New Lead
//                 </li>
//               </Link>
//             </ul>
//           </details>
//         </li>

//         <li>
//           <NavLink
//             to="/calendar"
//             className={({ isActive }) =>
//               `rounded cursor-pointer flex gap-2 p-2 items-center font-semibold
//                hover:bg-black hover:text-white
//                ${isActive ? "bg-black text-white" : ""}`
//             }
//           >
//             <i className="fa-regular fa-calendar"></i>
//             Calendar
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      id="sidebar"
      className="
        w-60 border-r border-gray-300 h-screen bg-[#f9f9f9] p-3

        fixed top-0 left-0 z-50
        transform -translate-x-full transition-transform duration-300

        md:static md:translate-x-0
      "
    >
      <div className="flex gap-2 font-bold px-8 items-center p-1">
        <img src="/logo.png" alt="logo" className="h-10 w-10" />
        <h1 className="uppercase text-[20px] font-bold">Mysticore</h1>
      </div>

      <ul className="space-y-3 p-3">
        <Link to="/">
          <li className="mb-2 mt-5 rounded cursor-pointer hover:bg-black hover:text-white flex gap-2 p-2 items-center font-semibold">
            <i className="fa-solid fa-table-cells-large"></i>
            Dashboard
          </li>
        </Link>

        <li className="rounded font-semibold">
          <details className="group">
            <summary className="list-none cursor-pointer rounded flex items-center justify-between p-2 hover:bg-black hover:text-white">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-database"></i>
                Leads
              </span>
              <i className="fa-solid fa-chevron-down transition-transform duration-200 group-open:rotate-180"></i>
            </summary>

            <ul className="ml-6 mt-1 w-full bg-white text-black rounded shadow-md">
              <Link to="leadtable">
                <li className="p-2 hover:bg-gray-200 cursor-pointer">
                  New Lead
                </li>
              </Link>
            </ul>
          </details>
        </li>

        <li>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `rounded cursor-pointer flex gap-2 p-2 items-center font-semibold 
               hover:bg-black hover:text-white
               ${isActive ? "bg-black text-white" : ""}`
            }
          >
            <i className="fa-regular fa-calendar"></i>
            Calendar
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
