import React from "react";

function Logoutpopup() {
  return (
    <>
      <div className="w-full h-screen bg-[rgba(0,0,0,0.5)]">
        <div className="w-[500px] h-[500px] p-5  bg-gray-500">
          <span>LogOut</span>
          <p>Are you sure you want to logout?</p>
        </div>
        <div className="flex justify-end">
          <button>NO</button>
          <button>YES</button>
        </div>
      </div>
    </>
  );
}

export default Logoutpopup;
