import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto flex justify-center items-center">
      {!loading ? (
        <button
          className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-full shadow-md transition duration-300 ease-in-out"
          onClick={logout}
        >
          <BiLogOut className="w-6 h-6" />
          <span className="hidden md:inline">Logout</span>
        </button>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
