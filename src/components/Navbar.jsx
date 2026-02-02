// import React from "react";
// import { NavLink } from "react-router-dom";
// import Sidebar from "./Sidebar";

// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center h-16 w-full px-4">
//       <button className="h-10 w-12 flex items-center justify-center font-bold">
//         ☰
//       </button>

//       <div className="shadow border border-gray-300 text-xs font-bold rounded-lg">
//         <details className="group relative">
//           <summary className="list-none cursor-pointer rounded flex items-center justify-between gap-3 px-4 py-2 hover:bg-black hover:text-white">
//             <span className="flex items-center gap-2">
//               <i className="fa-solid fa-user text-[#af0d1f]"></i>
//               Guest user
//             </span>
//             <i className="fa-solid fa-chevron-down transition-transform duration-200 group-open:rotate-180"></i>
//           </summary>

//           <ul className="absolute right-0 mt-2 w-40 rounded bg-white shadow-md border">
//             <NavLink to="/login">
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
//                 <i className="fa-solid fa-right-from-bracket text-red-600"></i>
//                 Logout
//               </li>
//             </NavLink>
//           </ul>
//         </details>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const toggleSidebar = () => {
//     const sidebar = document.getElementById("sidebar");
//     if (!sidebar) return;

//     if (open) {
//       sidebar.classList.add("-translate-x-full");
//       setOpen(false);
//     } else {
//       sidebar.classList.remove("-translate-x-full");
//       setOpen(true);
//     }
//   };

//   const closeSidebar = () => {
//     const sidebar = document.getElementById("sidebar");
//     if (!sidebar) return;

//     sidebar.classList.add("-translate-x-full");
//     setOpen(false);
//   };

//   return (
//     <>
//       {/* Mobile overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={closeSidebar}
//         />
//       )}

//       <nav className="flex justify-between items-center h-16 w-full px-4 bg-white border-b relative z-50">
//         {/* Hamburger: only mobile */}
//         <button
//           onClick={toggleSidebar}
//           className="h-10 w-12 flex items-center justify-center font-bold"
//           aria-label="Open menu"
//         >
//           ☰
//         </button>

//         <div className="shadow border border-gray-300 text-xs font-bold rounded-lg">
//           <details className="group relative">
//             <summary className="list-none cursor-pointer rounded flex items-center justify-between gap-3 px-4 py-2 hover:bg-black hover:text-white">
//               <span className="flex items-center gap-2">
//                 <i className="fa-solid fa-user text-[#af0d1f]"></i>
//                 Guest user
//               </span>
//               <i className="fa-solid fa-chevron-down transition-transform duration-200 group-open:rotate-180"></i>
//             </summary>

//             <ul className="absolute right-0 mt-2 w-40 rounded bg-white shadow-md border">
//               <NavLink to="/login">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
//                   <i className="fa-solid fa-right-from-bracket text-red-600"></i>
//                   Logout
//                 </li>
//               </NavLink>
//             </ul>
//           </details>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    if (open) {
      sidebar.classList.add("-translate-x-full");
      setOpen(false);
    } else {
      sidebar.classList.remove("-translate-x-full");
      setOpen(true);
    }
  };

  const closeSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    sidebar.classList.add("-translate-x-full");
    setOpen(false);
  };

  // ✅ AUTO-CLOSE SIDEBAR WHEN ROUTE CHANGES
  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <nav className="flex justify-between items-center h-16 w-full px-4 bg-white border-b relative z-50">
        {/* Hamburger */}
        <button
          onClick={toggleSidebar}
          className="h-10 w-12 flex items-center justify-center font-bold"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="shadow border border-gray-300 text-xs font-bold rounded-lg">
          <details className="group relative">
            <summary className="list-none cursor-pointer rounded flex items-center justify-between gap-3 px-4 py-2 hover:bg-black hover:text-white">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-user text-[#af0d1f]"></i>
                Guest user
              </span>
              <i className="fa-solid fa-chevron-down transition-transform duration-200 group-open:rotate-180"></i>
            </summary>

            <ul className="absolute right-0 mt-2 w-40 rounded bg-white shadow-md border">
              <NavLink to="/login">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                  <i className="fa-solid fa-right-from-bracket text-red-600"></i>
                  Logout
                </li>
              </NavLink>
            </ul>
          </details>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
