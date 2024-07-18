import React from "react";
import Conversation from "./Conversation";

function Conversations() {
  return (
    <div className="py-2 flex flex-col overflow-auto space-y-2 bg-white dark:bg-gray-800 shadow-inner rounded-lg p-4 t">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
}

export default Conversations;
