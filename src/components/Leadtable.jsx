

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Leadtable() {
  const activeClass = ({ isActive }) =>
    `border rounded-lg shrink-0 ${
      isActive
        ? "border-red-700 text-red-700"
        : "border-transparent hover:border-red-700"
    }`;

  return (
    <>
      <span className="text-2xl font-bold">ACCOUNT</span>

      {/* ✅ scroll container */}
      <div className="w-full mt-5 overflow-x-auto">
        {/* ✅ inline-flex so tabs stay in one row */}
        <div className="inline-flex gap-5 text-[18px] font-semibold bg-[#f9f9f9] p-2 rounded whitespace-nowrap">
          <NavLink to="/leadtable" end className={activeClass}>
            <div className="w-[150px] text-center p-1">Account</div>
          </NavLink>

          <NavLink to="AccCategory" className={activeClass}>
            <div className="w-[200px] text-center p-1">Account Category</div>
          </NavLink>

          <NavLink to="Fsgrp" className={activeClass}>
            <div className="w-[150px] text-center p-1">FS Group</div>
          </NavLink>

          <NavLink to="Rocgrp" className={activeClass}>
            <div className="w-[150px] text-center p-1">FS ROC Group</div>
          </NavLink>
        </div>
      </div>

      <div className="mt-6">
        <Outlet />
      </div>
    </>
  );
}

export default Leadtable;
