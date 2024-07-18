import React from "react";

function Conversation() {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-900 dark:text-gray-200">
              Alex Costa
            </p>
            <span className="text-xl">😒</span>
          </div>
        </div>
      </div>
      <div className="divider my-0"></div>
    </>
  );
}

export default Conversation;
