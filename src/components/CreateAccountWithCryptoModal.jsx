import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

import { ReactComponent as WalletConnect } from "../assets/svg/WalletConnect.svg";
import { ReactComponent as Metamask } from "../assets/svg/Metamask.svg";

const CreateAccountWithCryptoModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose} heading="Connect wallet">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="rounded-[16px] bg-wallet border-solid border-[2px] custom-border w-full p-4">
          <div className="flex items-center gap-4">
            <WalletConnect />
            <button className="text-[#E8E8E8] font-Poppins text-[18px] font-normal leading-[25px]">
              Wallet Connect
            </button>
          </div>
        </div>
        <div className="rounded-[16px] border-solid border-[2px] custom-border w-full p-4">
          <div className="flex items-center gap-4">
            <Metamask />
            <button className="text-[#E8E8E8] font-Poppins text-[18px] font-normal leading-[25px]">
              Metamask
            </button>
          </div>
        </div>{" "}
        <div>
          <p className="text-[#FFFFFF] font-Poppins text-[12px] font-light">
            By connecting a wallet, you agree to Audaxious{" "}
            <span className="text-[#79C4EC] underline">
              <Link to="#">terms of service</Link>
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default CreateAccountWithCryptoModal;
