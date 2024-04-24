import React, { useState } from "react";
import { Wallet, Lock, Unlock, BuyCrypto } from "iconsax-react";
import ConnectWallet from "./ConnectWallet";
import {
  useConnect,
  useAccount,
  useDisconnect,
  useSendTransaction,
} from "wagmi";
import { parseEther } from "viem";

import contractABI from "../../config/wagmi/contract.json";
// import { useEthersSigner } from "ethers";

import { writeContract, readContract } from "@wagmi/core";

import { config } from "../../config/wagmi/Wagmi";

const BuyCard = () => {
  const [round, setRound] = useState("public");
  const [openWalletOptions, setOpenWalletOptions] = useState(false);
  const { isConnected, address } = useAccount();
  const { data: hash, sendTransaction } = useSendTransaction();

  // const contractAddress = "0xc41c5d9A5Ee169Aaa607BFb2649Da6bDBC20D025";
  const contractAddress = "0x361Dfe9E413A684f1677742Da2BA9311ec35D70D";

  const abi = contractABI.Chai.abi;

  console.log("constract abi ", abi);

  function handleOpen() {
    setOpenWalletOptions(true);
  }
  function handleClose() {
    setOpenWalletOptions(false);
  }

  async function handleWrite() {
    const result = await writeContract(config, {
      // value: parseEther("0.1"),
      abi,
      address: contractAddress,
      functionName: "buyChai",
      args: ["TestAccount", "My second successful test", "1"],
    });

    // await writeContract(config, {
    //   value: parseEther("0.01"),
    // });
  }

  async function handleRead() {
    const result = await readContract(config, {
      abi,
      address: contractAddress,
      functionName: "getMemos",
    });
    console.log("the memos", result);
  }

  return (
    <>
      <ConnectWallet open={openWalletOptions} onHandleClose={handleClose} />
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-4xl">
              Participate in ADX Token Sale
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center max-w-xl mx-auto mt-12">
            <div className="  px-4 sm:px-0">
              <div className="block text-base  transition-all duration-200 border-transparent rounded-full p-1 bg-gray-100">
                <div className="block text-base  transition-all duration-200 border-transparent rounded-full bg-gray-400">
                  <button
                    className={`px-6 py-3 rounded-full font-semibold  ${
                      round === "public"
                        ? "text-white bg-blue-700 "
                        : "text-black "
                    } `}
                    onClick={() => setRound("public")}
                  >
                    Public Sale
                  </button>{" "}
                  <button
                    className={`px-6 py-3 rounded-full font-semibold  ${
                      round === "seed"
                        ? "text-white bg-blue-700 "
                        : "text-black "
                    } `}
                    onClick={() => setRound("seed")}
                  >
                    Seed Sale
                  </button>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200  rounded-md sm:ml-4 sm:mt-0 sm:w-auto ">
              {round === "public" && "1 USDT = 20 ADX"}
              {round === "seed" && "1 USDT = 40 ADX"}
            </div>
          </div>

          <div className="max-w-xl mx-auto mt-12">
            <div className="flex flex-col items-center px-4 sm:px-0  sm:flex-row sm:justify-center">
              <div className="flex flex-row  w-full sm:w-fit  ">
                <div className="flex-1 flex-col w-full min-w-0 sm:px-0">
                  <label className="sr-only"></label>
                  <input
                    type="text"
                    name="Quantity"
                    placeholder="Enter Quantity"
                    className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-l-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                    required
                  />
                </div>
                <select
                  id="currency-select"
                  className="bg-gray-300 px-2 rounded-r-md font-semibold focus:border-none"
                >
                  <option value="USDT" selected>
                    USDT
                  </option>
                  <option value="BUSD">BUSD</option>
                </select>
              </div>

              {!isConnected ? (
                <button
                  className="inline-flex w-full text-center gap-1 min-w-[187px] items-center justify-center px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-indigo-700 focus:bg-indigo-700"
                  onClick={handleOpen}
                >
                  <Wallet size="24" color="#FFFFFF" />
                  <span> Connect Wallet</span>
                </button>
              ) : (
                <button
                  className="inline-flex w-full text-center gap-1 min-w-[187px] items-center justify-center px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-indigo-700 focus:bg-indigo-700"
                  // onClick={() =>
                  //   sendTransaction({
                  //     to: "0x53e9e213e0CeAe81154798d79c510331947D4E0d",
                  //     value: parseEther("0.05"),
                  //   })
                  // }
                  onClick={handleWrite}
                >
                  <BuyCrypto size="24" color="#FFFFFF" />
                  <span> Buy ADX</span>
                </button>
              )}
            </div>
          </div>

          {round === "public" && (
            <div className="flex items-center justify-center px-8 mt-8 sm:px-0">
              <Unlock size="18" color="#37d67a" variant="Bold" />
              <span className="ml-2 text-sm text-gray-400">
                {" "}
                This round has no lockup period, 100% distributed at TGE
              </span>
            </div>
          )}

          {round === "seed" && (
            <div className="flex items-center justify-center px-8 mt-8 sm:px-0">
              <Lock size="18" color="#FF0000" variant="Bold" />
              <span className="ml-2 text-sm text-gray-400">
                {" "}
                This round has 6 months lockup, click here to see distribution
                schedule{" "}
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BuyCard;
