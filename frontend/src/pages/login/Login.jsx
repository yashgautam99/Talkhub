import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen 0">
      <div className="w-full max-w-sm p-6 bg-white backdrop-filter backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Login <span className="text-blue-600">Talkhub</span>
        </h1>
        <form className="space-y-6">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10 bg-transparent text-gray-700 placeholder-gray-500 border-gray-300"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full h-10 bg-transparent text-gray-700 placeholder-gray-500 border-gray-300"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline text-gray-600 hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-primary btn-sm mt-4">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
