import { Dialog } from "@headlessui/react";
import { ReactComponent as Cancel } from "../../../assets/svg/dashboardSvg/cancel2.svg";
import { ReactComponent as Metamask } from "../../../assets/svg/dashboardSvg/metamask.svg";
import { ReactComponent as Wallet } from "../../../assets/svg/dashboardSvg/walletConnect.svg";
import { ReactComponent as Coinbase } from "../../../assets/svg/dashboardSvg/coinbase.svg";

const SignInWithWallet = ({ open, onClose }) => {
  return (
    <div className="container">
      <Dialog
        as="div"
        className={`relative z-[807]`}
        open={open}
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-75" />
        <div className="fixed inset-0 z-[300] overflow-y-auto">
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
                  <button className="border border-[#8AADC2] hover:bg-[#162530] hover:border-[2px] px-[1.81rem] py-[0.75rem] rounded-[16px] w-[90%] md:w-[26rem] flex items-center gap-[1rem]">
                    <span>
                      <Metamask />
                    </span>
                    <span className="text-[#E8E8E8] font-Poppins text-[1.125rem] font-[300]">
                      Metamask
                    </span>
                  </button>
                  <button className="border border-[#8AADC2] hover:bg-[#162530] hover:border-[2px] px-[1.81rem] py-[0.75rem] rounded-[16px] w-[90%] md:w-[26rem] flex items-center gap-[1rem]">
                    <span>
                      <Wallet />
                    </span>
                    <span className="text-[#E8E8E8] font-Poppins text-[1.125rem] font-[300]">
                      walletconnect
                    </span>
                  </button>
                  <button className="border border-[#8AADC2] hover:bg-[#162530] hover:border-[2px] px-[1.81rem] py-[0.75rem] rounded-[16px] w-[90%] md:w-[26rem] flex items-center gap-[1rem]">
                    <span>
                      <Coinbase />
                    </span>
                    <span className="text-[#E8E8E8] font-Poppins text-[1.125rem] font-[300]">
                      Coinbase
                    </span>
                  </button>
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
