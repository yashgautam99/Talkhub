import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

function MessageContainer() {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[600px] flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center justify-between">
            <span className="label-text text-white">To:</span>
            <span className="text-white font-bold">Alex Costa</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-900">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p className="text-2xl md:text-4xl">Welcome 😉 Alex Costa</p>
        <p className="text-lg md:text-2xl">Select a chat to start messaging</p>
        <TiMessages className="text-5xl md:text-8xl text-blue-500" />
      </div>
    </div>
  );
};
