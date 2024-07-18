import React from "react";

function Message() {
  return (
    <div className="flex items-start justify-end chat chat-end">
      <div className="flex flex-col items-end">
        <div className="chat-bubble bg-blue-500 text-white p-2 rounded-lg max-w-md">
          Hi, how are you?
        </div>
        <div className="chat-footer opacity-50 text-xs flex items-center mt-1 gap-1">
          12:45
        </div>
      </div>
      <div className="chat-img avatar ml-2">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Message;
