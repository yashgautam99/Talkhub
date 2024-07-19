import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-full block w-full p-3 pr-10 bg-gray-700 border-gray-300 shadow-md focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-300 ease-in-out"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pr-4 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
