import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

function Sidebar() {
  return (
    <div className="flex flex-col h-full p-4 bg-white dark:bg-gray-900 shadow-2xl rounded-xl ">
      <SearchInput />
      <div className="divider my-4 border-t border-gray-200 dark:border-gray-700"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
