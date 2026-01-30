// import React from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// import { NavLink, Outlet } from "react-router-dom";

// function Leadtable() {
//   const activeClass = ({ isActive }) =>
// `border-none
//     ${
//         isActive
//       ? "border border-red-700 text-red-700"
//       : "border border-transparent hover:border-red-700";
//     }`;

//   return (
//     <>
//       <span className="text-2xl font-bold">User</span>

//       <div className="flex gap-5 mt-5 text-[18px] font-semibold w-full bg-[#f9f9f9] p-2 rounded">
//         <NavLink to="/leadtable" className={activeClass}>
//            <div className="w-[120px] text-center p-1 rounded-lg">User</div>
//         </NavLink>

//         <NavLink to="userroletable" className={activeClass}>
//           <div className="w-[120px] text-center p-1 rounded-lg">User Role</div>
//         </NavLink>
//       </div>

//       {/* Optional: if you make nested routes under leadtable */}
//       <Outlet />
//     </>
//   );
// }

// export default Leadtable;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Leadtable() {
  const activeClass = ({ isActive }) =>
    `border rounded-lg ${
      isActive
        ? "border-red-700 text-red-700"
        : "border-transparent hover:border-red-700"
    }`;

  return (
    <>
      <span className="text-2xl font-bold">User</span>

      <div className="flex gap-5 mt-5 text-[18px] font-semibold w-full bg-[#f9f9f9] p-2 rounded">
        {/* ✅ default tab for /leadtable */}
        <NavLink to="/leadtable" end className={activeClass}>
          <div className="w-[120px] text-center p-1">User</div>
        </NavLink>

        {/* ✅ child tab for /leadtable/userroletable */}
        <NavLink to="userroletable" className={activeClass}>
          <div className="w-[120px] text-center p-1">User Role</div>
        </NavLink>
      </div>

      <div className="mt-6">
        <Outlet />
      </div>
    </>
  );
}

export default Leadtable;
