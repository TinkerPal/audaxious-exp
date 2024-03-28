// import React, { useState } from "react";

// import Audaxious from "../assets/AudaxiousLogofinal.svg";
import Engagement from "../../assets/svg/assets/EngagementPortal.svg";
import background from "../../assets/svg/assets/background.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="overflow-x-hidden pt-16 2xl:pt-32  ">
      <div className="absolute inset-0 z-0">
        <img className="object-cover w-full h-full " src={background} alt="" />
      </div>

      <section className="pt-12  sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-200 font-inter">
              Welcome to the future of engagement
            </h1>

            <p className="mt-5 text-4xl font-bold leading-tight  sm:leading-tight sm:text-4xl lg:text-5xl lg:leading-tight font-pj  bg-gradient-to-b from-[#4D5CDD] to-[#79C4EC] bg-clip-text text-transparent ">
              {/* Grok Alien is Here to Take Over */}
              AI Enhanced Decentralized Engagement Protocol
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#4ED5C2] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link
                to={"/engage-portal"}
                title="App"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-[#79C4EC] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                {" "}
                Get Started
              </Link>

              <a
                href="https://docs.audaxious.com/"
                title=""
                className="relative inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-200 transition-all duration-200 border-2 border-[#79C4EC] sm:w-auto sm:mt-0 rounded-xl font-pj  hover:text-opacity-75 hover:border-opacity-75   "
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </div>

            <p className="mt-8 text-base text-gray-200 font-inter">
              Earn, win rewards, and airdrops by engaging, creating quality
              contents, and contributing to web3 communities.
            </p>
          </div>
        </div>

        <div className="py-12 ">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 "></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <img className="transform scale-95" src={Engagement} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              className="absolute inset-0 w-full h-full object-cover animate-bright-dark"
              src={Alien}
              alt=""
            />
            <img
              className="absolute inset-0 w-full h-full object-cover animate-dark-bright"
              src={Alien}
              alt=""
            />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
