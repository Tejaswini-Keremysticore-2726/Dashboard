

import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16 w-full px-4">
      <button className="h-10 w-12 flex items-center justify-center font-bold">
        <i className="fa-solid fa-bars"></i>
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
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
              <i className="fa-solid fa-right-from-bracket text-red-600"></i>
              Logout
            </li>
          </ul>
        </details>
      </div>
    </nav>
  );
}

export default Navbar;
