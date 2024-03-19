import { Dialog } from "@headlessui/react";
import { ReactComponent as Cancel } from "../../../assets/svg/dashboardSvg/cancel2.svg";
import { ReactComponent as Metamask } from "../../../assets/svg/dashboardSvg/metamask.svg";
import { ReactComponent as Wallet } from "../../../assets/svg/dashboardSvg/walletConnect.svg";
import { ReactComponent as Coinbase } from "../../../assets/svg/dashboardSvg/coinbase.svg";
// import { ReactComponent as WalletConnect } from "../assets/svg/WalletConnect.svg";

import { useConnect, useAccount, useDisconnect } from "wagmi";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";
import { toast } from "react-toastify";
import { loginWithWallet } from "../../../store/authActions";

const SignInWithWallet = ({ open, onClose }) => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { isConnected, address } = useAccount();

  const dispatch = useDispatch();

  const submitHandler = async (value) => {
    dispatch(authAction.setLoading(true));
    // toast.loading("Please wait");
    try {
      const result = await dispatch(loginWithWallet(value));
      dispatch(authAction.setLoading(false));
      toast.success(result.message);
      console.log(result);
    } catch (error) {
      console.log("LOGIN EMAIL ERROR: ", error.response.data.error);
      dispatch(authAction.setLoading(false));
      toast.error(error.response.data.error);
    }
    // if (valueIsInvalid) {
    //   return;
    // } else if (valueIsValid) {
    //   dispatch(loginWithEmail(value));
    //   onVerifyEmail(true);
    // }
  };

  useEffect(() => {
    if (address) {
      submitHandler(address);
    }
  }, [address]);

  return (
    <div className="container ">
      <Dialog
        as="div"
        className={`relative z-[6]`}
        open={open}
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-75" />
        <div className="fixed inset-0 z-[7] overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="text-[#FFF] bg-[#060B12] w-screen min-w-[15rem] md:w-[35rem] xl:w-[37rem] rounded-lg">
              <div className="p-[0.62rem] md:p-[1rem]">
                <div className="flex items-center justify-between">
                  <p className="text-[1.25rem] font-Poppins text-[#E8E8E8] font-[500]">
                    Connect wallet
                  </p>
                  <span onClick={onClose} className="cursor-pointer">
                    <Cancel />
                  </span>
                </div>
                <div className="flex items-center flex-col mt-[1.88rem] gap-[1.25rem]">
                  {connectors.map((connector) => (
                    <button
                      key={connector.id}
                      disabled={!connector.ready}
                      onClick={() => connect({ connector })}
                      // className="rounded-[16px] bg-wallet border-solid border-[2px] custom-border w-full p-4"
                      className="border border-[#8AADC2] hover:bg-[#162530] hover:border-[2px] px-[1.81rem] py-[0.75rem] rounded-[16px] w-[90%] md:w-[26rem] flex items-center gap-[1rem] "
                    >
                      <div className="flex items-center gap-4">
                        {connector.name === "MetaMask" && <Metamask />}
                        {connector.name === "WalletConnect" && <Wallet />}
                        {connector.name === "Coinbase Wallet" && <Coinbase />}
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
                </div>
                <div className="mt-[1.88rem]">
                  <p className="text-[0.75rem] font-Poppins font-[300] leading-[150%]">
                    By connecting a wallet, you agree to Audaxious{" "}
                    <a href="#">
                      <span className="text-[#79C4EC] underline">
                        terms of service
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SignInWithWallet;
