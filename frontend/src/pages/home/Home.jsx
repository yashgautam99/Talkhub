import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <header className="w-80 p-4 bg-blue-700 text-white text-center shadow-lg rounded-full mb-5">
        <h1 className="text-4xl font-bold tracking-wide">Talkhub</h1>
      </header>
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-900 bg-clip-padding flex-grow">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};
export default Home;
