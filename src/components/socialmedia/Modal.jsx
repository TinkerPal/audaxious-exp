import React from "react";
import { Dialog } from "@headlessui/react";

const Modal = ({ children, onClose, open }) => {
  return (
    <div className="container">
      <Dialog
        as="div"
        className={`relative z-[3]`}
        open={open}
        onClose={onClose}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-75"
          onClick={onClose}
        />
        <div className="fixed inset-0 z-[4] overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="">{children}</Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
