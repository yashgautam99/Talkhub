import React from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="flex sm:h-[550px] md:h-[650px] rounded-lg overflow-hidden bg-clip-padding">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
