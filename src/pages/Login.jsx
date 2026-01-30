import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-100 ">
        <div className="bg-white px-3 py-5">
          <h2 className="text-center mb-3">Signup</h2>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="username"
              placeholder="User name"
              className="border border-gray-300 px-3"
            />

            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              className="border border-gray-300 px-3"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+91 7016XXXXXX"
              className="border border-gray-300 px-3"
            />

            <input
              type="password"
              className="border border-gray-300 px-3"
              placeholder="password"
            />
            <button className="bg-blue-500 text-white py-2 font-semibold rounded">
              Login
            </button>
            <p>
              Already have an Account ?{" "}
              <Link to="/login" className="text-blue-400">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;