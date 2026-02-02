// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import Login from "../pages/Login";

// function Navbar() {
//   const [open, setOpen] = useState(false);
//     const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const location = useLocation();

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

//   // ✅ AUTO-CLOSE SIDEBAR WHEN ROUTE CHANGES
//   useEffect(() => {
//     closeSidebar();
//   }, [location.pathname]);

//   return (
//     <>
//       {/* Mobile overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={closeSidebar}
//         />
//       )}

//   // open logout modal
//   const openLogoutModal = () => {
//     setShowLogoutModal(true);
//   };

//   // close modal
//   const closeLogoutModal = () => {
//     setShowLogoutModal(false);
//   };

//   // confirm logout
//   const confirmLogout = () => {
//     // ✅ remove auth data here
//     localStorage.clear(); // or localStorage.removeItem("token")

//     setShowLogoutModal(false);
//     navigate("/login"); // go to login page
//   };

//   return (
//     <>
//       {/* ✅ Blur ALL page when modal open */}
//       <div className={showLogoutModal ? "blur-sm pointer-events-none select-none" : ""}>
//         {/* Mobile overlay */}
//         {open && (
//           <div
//             className="fixed inset-0 bg-black/40 z-40 md:hidden"
//             onClick={closeSidebar}
//           />
//         )}

//       <nav className="flex justify-between items-center h-16 w-full px-4 bg-white  relative z-50">
//         {/* Hamburger */}
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
//               <NavLink to="/logoutpopup">
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
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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

  // ✅ open logout modal
  const openLogoutModal = () => setShowLogoutModal(true);

  // ✅ close logout modal
  const closeLogoutModal = () => setShowLogoutModal(false);

  // ✅ confirm logout
  const confirmLogout = () => {
    // remove auth data
    localStorage.clear(); // or localStorage.removeItem("token")

    setShowLogoutModal(false);
    navigate("/login"); // go to login page
  };

  return (
    <>
      {/* ✅ Blur background when modal is open */}
      <div
        className={
          showLogoutModal ? "blur-sm pointer-events-none select-none" : ""
        }
      >
        {/* Mobile overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={closeSidebar}
          />
        )}

        <nav className="flex justify-between items-center h-16 w-full px-4 bg-white relative z-50">
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
                {/* ✅ No NavLink here. Just open modal */}
                <li
                  onClick={openLogoutModal}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <i className="fa-solid fa-right-from-bracket text-red-600"></i>
                  Logout
                </li>
              </ul>
            </details>
          </div>
        </nav>
      </div>

      {/* ✅ Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-[92%] max-w-sm p-6">
            <h2 className="text-lg font-bold text-gray-800">Logout</h2>
            <p className="text-sm text-gray-600 mt-2 font-semibold">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={closeLogoutModal}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                NO
              </button>

              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
