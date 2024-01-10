import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { useConnect, useAccount, useDisconnect } from "wagmi";

import { ReactComponent as WalletConnect } from "../assets/svg/WalletConnect.svg";
import { ReactComponent as Metamask } from "../assets/svg/Metamask.svg";

const CreateAccountWithCryptoModal = ({ isOpen, onClose }) => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { isConnected } = useAccount();

  return (
    <Modal open={isOpen} onClose={onClose} heading="Connect wallet">
      <div className="flex flex-col justify-center items-center gap-8">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            disabled={!connector.ready}
            onClick={() => connect({ connector })}
            className="rounded-[16px] bg-wallet border-solid border-[2px] custom-border w-full p-4"
          >
            <div className="flex items-center gap-4">
              {connector.name === "MetaMask" && <Metamask />}
              {connector.name === "WalletConnect" && <WalletConnect />}
              <p className="text-[#E8E8E8] font-Poppins text-[18px] font-normal leading-[25px]">
                {connector.name}
                {!connector.ready && " (Unavailable)"}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  " (connecting)"}
              </p>
            </div>
          </button>
        ))}

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
