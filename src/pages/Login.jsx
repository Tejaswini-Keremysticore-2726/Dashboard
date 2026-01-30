import React from "react";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-100">
        <div className="flex flex-col justify-center items-center h-[245px]">
          <div className="flex gap-5 items-center font-bold text-3xl mb-10">
            <img
              src="../../public/logo.png"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <span>Mysticore</span>
          </div>
          <div className="bg-white p-10 w-[397px] rounded-lg shadow">
            <div className="flex flex-col gap-2">
              <h2 className="text-left mb-3 font-bold">
                Login to your account
              </h2>

              <input
                type="email"
                name="email"
                placeholder="abc@gmail.com"
                className="border border-gray-300 px-3 p-2 rounded-lg"
              />

              <div className="flex justify-between items-center border border-gray-300 px-3 p-2 rounded-lg w-full">
                <input
                  type="password"
                  // className="border border-gray-300 px-3 p-2 rounded-lg w-full"
                  placeholder="password"
                />
                <button>
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
              <div>
               <NavLink to="/">
                 <button className="bg-red-700 text-white font-semibold rounded px-2 py-1 text-xs shadow hover:bg-red-900">
                  <code>Log In</code>
                </button>
               </NavLink>
                {/* <p>
              Already have an Account ?
              <Link to="/login" className="text-blue-400">
                Login
              </Link>
            </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
