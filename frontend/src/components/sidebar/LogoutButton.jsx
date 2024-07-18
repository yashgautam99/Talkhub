import React from "react";
import { IoMdLogOut } from "react-icons/io";

function LogoutButton() {
  return (
    <div className="mt-auto flex items-center justify-center p-4">
      <button
        className="btn btn-circle bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300 ease-in-out transform hover:scale-110"
        title="Logout"
      >
        <IoMdLogOut className="w-6 h-6" />
      </button>
    </div>
  );
}

export default LogoutButton;
