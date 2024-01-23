import React from "react";
import Modal from "./Modal";

const LogOutModal = ({ isOpen, onClose, onClick }) => {
  return (
    <Modal open={isOpen} onClose={onClose} heading="Logout Confirmation">
      <div className="space-y-3">
        <p className="text-white font-Bricolage_Grotesque text-[17px]">
          Are you sure you want to log out?
        </p>
        <div className="flex items-center gap-6 pt-8">
          <button
            onClick={onClick}
            className="bg-[#0071e3] shadow-2xl p-3 px-8 text-white rounded-md font-semibold"
          >
            Logout
          </button>
          <button
            onClick={onClose}
            className="text-[#0071e3] p-3 px-8 rounded-md bg-transparent border-[1px] hover:bg-black duration-150 border-solid border-[#0071e3] transition-all ease-in-out"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
