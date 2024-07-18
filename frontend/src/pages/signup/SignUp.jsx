import React from "react";
import GenderCheckbox from "./GenderCheckbox";

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 bg-gray-100 backdrop-filter backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">
          Sign Up <span className="text-blue-600">Talkhub</span>
        </h1>
        <form className="space-y-4 md:space-y-6">
          <div>
            <label className="label p-1 md:p-2">
              <span className="text-base label-text text-gray-900">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Alex Costa"
              className="input input-bordered w-full h-10 bg-transparent text-gray-900 placeholder-gray-600 border-gray-300"
            />
          </div>
          <div>
            <label className="label p-1 md:p-2">
              <span className="text-base label-text text-gray-900">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Alexcosta123"
              className="input input-bordered w-full h-10 bg-transparent text-gray-900 placeholder-gray-600 border-gray-300"
            />
          </div>
          <div>
            <label className="label p-1 md:p-2">
              <span className="text-base label-text text-gray-900">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10 bg-transparent text-gray-900 placeholder-gray-600 border-gray-300"
            />
          </div>
          <div>
            <label className="label p-1 md:p-2">
              <span className="text-base label-text text-gray-900">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full h-10 bg-transparent text-gray-900 placeholder-gray-600 border-gray-300"
            />
          </div>
          <GenderCheckbox />
          <a
            className="text-sm hover:underline text-gray-700 hover:text-blue-600 mt-2 md:mt-4 inline-block "
            href="#"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-primary btn-sm mt-2 md:mt-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
