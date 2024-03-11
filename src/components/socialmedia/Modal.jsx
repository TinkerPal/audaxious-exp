import React from "react";
import { Dialog } from "@headlessui/react";

const Modal = ({ children, onClose, open }) => {
  return (
    <div className="container">
      <Dialog
        as="div"
        className={`relative z-[800]`}
        open={open}
        onClose={() => {}}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-75"
          onClick={onClose}
        />
        <div className="fixed inset-0 z-[300] overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="">{children}</Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
