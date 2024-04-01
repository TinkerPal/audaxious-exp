import React from "react";
import Modal from "./Modal";

const LogOutModal = ({ isOpen, onClose, onClick }) => {
  return (
    <Modal open={isOpen} onClose={onClose} heading="Logout Confirmation">
<<<<<<< HEAD
      <div className="space-y-6 py-6">
        <p className="text-[#808080] font-Poppins text-[15px]">
=======
      <div className="space-y-3">
        <p className="text-white  text-[14px]">
>>>>>>> 2f92983fe1681b0941691038167e1eb1ef248002
          Are you sure you want to log out?
        </p>
        <div className="flex items-center gap-6 pt-8">
          <button
            onClick={onClick}
            className="bg-[#C41910] shadow-2xl p-3 px-8 text-[#E8E8E8] rounded-md font-semibold"
          >
            Logout
          </button>
          <button
            onClick={onClose}
            className="text-[#E8E8E8] p-3 px-8 rounded-md bg-transparent border-[1px] hover:bg-black duration-150 border-solid border-[#2A3C46] transition-all ease-in-out"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
