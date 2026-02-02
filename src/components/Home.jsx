// import React from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";

// function Home() {
//   return (
//     <div className="flex">
//       <Sidebar />

//       <div className="flex-1">
//         <Navbar />

//         {/* MAIN SECTION (below navbar) */}
//         <div className="p-6">
//           <Outlet />
//         </div>
//       </div>
//       <main style={{ flex: 1 }}>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Navbar />

        {/* MAIN SECTION (below navbar) */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
