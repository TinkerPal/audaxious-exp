import React from "react";
import forUsers1 from "../../assets/svg/assets/forUsers1.svg";
import forUsers2 from "../../assets/svg/assets/forUsers2.svg";
import earn from "../../assets/svg/assets/earn.svg";
import rank from "../../assets/svg/assets/rank.svg";
import raffle from "../../assets/svg/assets/raffle.svg";
import ai2 from "../../assets/svg/assets/ai2.svg";
import market from "../../assets/svg/assets/market.svg";
import reputation from "../../assets/svg/assets/reputation.svg";

export default function Web3Users() {
  return (
    <section className="py-20  sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-[#79C4EC] uppercase">
            10,000+ Active Community Members
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Maximize Earnings By Engaging
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={earn}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  Engage to Earn
                </h3>
                <p className="mt-3 text-base text-white">
                  Engage and contribute to communities, participate in
                  campaignes and earn rewards and airdrops
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={rank}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">Rank</h3>
                <p className="mt-3 text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={raffle}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">Raffle</h3>
                <p className="mt-3 text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <img className="w-auto h-[500px] z-10" src={forUsers1} alt="" />
          </div>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="lg:col-span-3 hidden sm:block">
            <img className="w-auto h-[500px] z-10" src={forUsers2} alt="" />
          </div>
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start">
              <img className="object-cover w-auto h-[36px] " src={ai2} alt="" />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  Simply Copy & Paste
                </h3>
                <p className="mt-3 text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={market}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  Easy to Customize
                </h3>
                <p className="mt-3 text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={reputation}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  Immutable Reputation
                </h3>
                <p className="mt-3 text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
