import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({ open, onClose, heading, children, className }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-10 ${className}`}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          show={true | false}
        >
          <div className="fixed inset-0 transition-opacity bg-backdrop" />
        </Transition.Child>

        <div className="fixed inset-0 z-30 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded-lg shadow-xl bg-dark-400 sm:my-8 sm:w-full sm:max-w-xl sm:p-6 text-dark-50">
                {heading && (
                  <div className="pb-5 text-left">
                    <h3 className="text-lg mt-16 md:mt-0 font-medium text-[#ffffffdf]">
                      {heading}
                    </h3>
                  </div>
                )}
                <button
                  onClick={onClose}
                  className="absolute text-white transition-colors top-6 right-6 hover:text-dark-100"
                >
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                <div className={heading ? "mt-5" : "mt-12"}>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
