import { useState } from "react";
import LogOutModal from "../../components/LogoutModal";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    // logout();
    // navigate(PathConstant.LOGIN);
  };

  return (
    <div className="max-w-[1920px]">
      <div className="py-6">
        {/* Logout button */}
        <button
          className="w-full flex gap-4 transition-all text-[#818282] hover:text-white ml-12"
          onClick={() => setIsOpen(true)}
        >
          <span>{/* <LogOut /> */}</span>
          <span className="md:hidden xl:block">Logout</span>{" "}
        </button>
        <LogOutModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Dashboard;
