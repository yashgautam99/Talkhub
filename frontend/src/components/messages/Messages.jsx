import React from "react";
import Message from "./Message";

function Messages() {
  return (
    <div className="flex-1 p-2 overflow-auto bg-white dark:bg-gray-900 rounded-lg shadow-inner">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
