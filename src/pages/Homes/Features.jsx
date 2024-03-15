// import React, { useState } from "react";
// import forUsers1 from "../../assets/svg/assets/forUsers1.svg";
// import forUsers2 from "../../assets/svg/assets/forUsers2.svg";
import earn from "../../assets/svg/assets/earn.svg";
// import rank from "../../assets/svg/assets/rank.svg";
import raffle from "../../assets/svg/assets/raffle.svg";
// import ai2 from "../../assets/svg/assets/ai2.svg";
import market from "../../assets/svg/assets/market.svg";
// import reputation from "../../assets/svg/assets/reputation.svg";
// import forProjects1 from "../../assets/svg/assets/forProjects1.svg";
// import forProjects2 from "../assets/forProjects2.svg";
// import comm from "../assets/comm.svg";
import AITool from "../../assets/svg/assets/AITool.svg";
import multisender from "../../assets/svg/assets/multisender.svg";
import airdroper from "../../assets/svg/assets/airdroper.svg";
import exporter from "../../assets/svg/assets/exporter.svg";
import automate from "../../assets/svg/assets/automate.svg";

const Features = () => {
  return (
    <section className="py-10  sm:py-16 lg:py-24" id="features">
      <div className="max-w-xl mx-auto text-center pb-24">
        <p className="text-sm font-semibold tracking-widest text-[#79C4EC] uppercase">
          Trusted by 30+ projects
        </p>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          Features for Web3 Projects
        </h2>
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="flex-shrink-0 text-[#DCFCE7] w-auto h-[64px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h3 className="mt-8 text-lg font-semibold text-[#79C4EC]">
              Campaign Templates
            </h3>
            <p className="mt-4 text-base text-gray-100">
              With our no-code, engagement features, projects can customize
              campaigns, tailoring them to their specific needs and objectives.
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <img
                className="object-cover w-auto h-[64px] "
                src={AITool}
                alt=""
              />
            </div>

            <h3 className="mt-8 text-lg font-semibold text-[#79C4EC]">
              AI Creatives
            </h3>
            <p className="mt-4 text-base text-gray-100">
              Use Audaxious AI creative tools to create compelling and engaging
              posts about your project and its features
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <img
                className="object-cover w-auto h-[64px] "
                src={automate}
                alt=""
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-[#79C4EC]">
              Content & Campaign Automation
            </h3>
            <p className="mt-4 text-base text-gray-100">
              Automation of posts on social media platforms. Additionally, users
              can automate campaigns, facilitating consistent engagement.
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <img
                className="object-cover w-auto h-[64px] "
                src={airdroper}
                alt=""
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-[#79C4EC]">
              Intuitive Airdrop Feature
            </h3>
            <p className="mt-4 text-base text-gray-100">
              Seamless airdrops feature that allows you to automate the airdrop
              process, also with social media whitelisting capability
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <img
                className="object-cover w-auto h-[64px] "
                src={multisender}
                alt=""
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-[#79C4EC]">
              Multi-chain Multisender
            </h3>
            <p className="mt-4 text-base text-gray-100">
              Equiped with a multisender feature that supports over 10
              blockchains and is constantly expanding its support.
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <img
                className="object-cover w-auto h-[64px] "
                src={exporter}
                alt=""
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-[#79C4EC]">
              Transferable Campaign Data
            </h3>
            <p className="mt-4 text-base text-gray-100">
              Import or export campaign data with ease. This allow projects to
              import or export comminity data or campaign results
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <img
                className="object-cover w-auto h-[64px] "
                src={market}
                alt=""
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-[#79C4EC]">
              Permissionless Market
            </h3>
            <p className="mt-4 text-base text-gray-100">
              Permissionless P2P market that enables users to trustlessly offer
              their services; it utilizes an escrow system and an efficiency
              proof mechanism.
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <img
                className="object-cover w-auto h-[64px] "
                src={raffle}
                alt=""
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-[#79C4EC]">
              Point-Raffle
            </h3>
            <p className="mt-4 text-base text-gray-100">
              Point-based raffle feature where top active members compete for
              significant rewards and airdrops, promoting engagement.
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <img
                className="object-cover w-auto h-[64px] "
                src={earn}
                alt=""
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-[#79C4EC]">
              Engage-to-Earn
            </h3>
            <p className="mt-4 text-base text-gray-100">
              Engage and contribute to web3 communities, also participate in
              campaigns, and earn rewards, and win airdrops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
