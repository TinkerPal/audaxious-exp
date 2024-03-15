import React from "react";
import forProjects1 from "../../assets/svg/assets/forProjects1.svg";
import forProjects2 from "../../assets/svg/assets/forProjects2.svg";
import comm from "../../assets/svg/assets/comm.svg";
import AITool from "../../assets/svg/assets/AITool.svg";
import multisender from "../../assets/svg/assets/multisender.svg";
import airdroper from "../../assets/svg/assets/airdroper.svg";
import exporter from "../../assets/svg/assets/exporter.svg";

export default function Web3Projects() {
  return (
    <section className="py-20  sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-[#79C4EC] uppercase">
            Trusted by 30+ projects
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Features for Web3 Projects
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-0 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={comm}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  Community Quality Engagement
                </h3>
                <p className="mt-3 text-base text-white">
                  Harness the power of community-driven marketing to expand your
                  product's reach and adoption by over 10 times
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-blue-600 w-9 h-9"
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
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  Customize Campaigns With Ease
                </h3>
                <p className="mt-3 text-base text-white">
                  With our no-code, engagement features, projects can customize
                  campaigns, tailoring them to their specific needs and
                  objectives.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={AITool}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  AI Creatives
                </h3>
                <p className="mt-3 text-base text-white">
                  Use Audaxious AI creative tools to create compelling and
                  engaging posts about your project and its features
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 ">
            <img className="w-auto h-[500px] z-10" src={forProjects1} alt="" />
          </div>
        </div>

        <div className="grid items-center grid-cols-1 mt-0 gap-y-10 lg:grid-cols-5 sm:mt-16 gap-x-4">
          <div className="lg:col-span-3 hidden sm:block">
            <img className="w-auto h-[500px] z-10" src={forProjects2} alt="" />
          </div>
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={airdroper}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  Intuitive Airdrop Feature
                </h3>
                <p className="mt-3 text-base text-white">
                  Seamless airdrops feature that allows you to automate the
                  airdrop process, also with social media whitelisting
                  capability
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={multisender}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  Multi-chain Multisender Feature
                </h3>
                <p className="mt-3 text-base text-white">
                  Equiped with a multisender feature that supports over 10
                  blockchains and is constantly expanding its support.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                className="object-cover w-auto h-[36px] "
                src={exporter}
                alt=""
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-[#79C4EC]">
                  Import/Export Campaigns Data
                </h3>
                <p className="mt-3 text-base text-white">
                  Import or export campaign data with ease. This allow projects
                  to import or export comminity data or campaign results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
