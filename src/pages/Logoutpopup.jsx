import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

function Logoutpopup() {
  return (
    <>
      <div className="h-screen flex justify-center items-center w-full bg-white/30 backdrop:blur-3xl z-20">
        <div className="w-[500px] h-[120px] rounded-lg bg-white shadow-2xl absolute">
          <div>
            <span className="text-2xl font-bold p-2">LogOut</span>
            <p className="font-semibold p-2">
              Are you sure you want to logout?
            </p>
          </div>
          <div className="flex  justify-end gap-6">
            <button className="border border-black w-[45px] h-[35px] rounded-lg border border-gray-300 ">
              NO
            </button>

            <Link to="/login">
              <button className=" rounded-lg w-[45px] h-[35px] bg-[#af0d15] text-white font-semibold mr-5">
                YES
              </button>
            </Link>
            {/* <button className=" rounded-lg w-[45px] h-[35px] bg-[#af0d15] text-white font-semibold mr-5">
            YES
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Logoutpopup;
