import React from "react";

import AudaXiousLogo from "../../assets/svg/assets/AudaxiousLogofinal.svg";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
// import SocialMedia from "./SocialMedia";

const Footer2 = () => {
  return (
    <footer className="py-4  sm:pt-4 lg:pt-4">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between mt-14 lg:mt-24">
          <div>
            <div className="flex-shrink-0 flex flex-row space-x-3 items-center">
              <div className="flex shrink-0 justify-center items-center gap-2">
                <a href="#" title="" className="flex items-center">
                  <img className="w-auto h-6" src={AudaXiousLogo} alt="" />
                </a>
              </div>
            </div>
          </div>

          <ul className="flex items-center justify-center mt-8 space-x-6 sm:mt-12 sm:space-x-16 lg:mt-0">
            <li>
              <Link
                to={"/engage-portal"}
                title="Engage Portal"
                className="text-lg font-medium text-white transition-all duration-200 font-pj "
              >
                {" "}
                Launch App
              </Link>
            </li>

            <li>
              <a
                href="https://docs.audaxious.com/roadmap"
                title="Documentation"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-600"
              >
                {" "}
                Roadmap
              </a>
            </li>

            <li>
              <a
                href="https://docs.audaxious.com/"
                title="Documentation"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-600"
              >
                {" "}
                Docs
              </a>
            </li>

            <li>
              <a
                href="mailto:hello@audaxious.com"
                title="Email us"
                className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-600"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Email Us
              </a>
            </li>
          </ul>
          <SocialMedia />
        </div>

        <hr className="my-8 border-[#79C4EC]" />

        <div className="mt-10 md:flex md:items-center md:justify-between">
          <ul className="flex items-center justify-center space-x-6 md:order-2 md:justify-end">
            <li>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-300 transition-all duration-200 font-pj hover:opacity-70"
              >
                {" "}
                Privacy Policy{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-300 transition-all duration-200 font-pj hover:opacity-70"
              >
                {" "}
                Terms & Conditions{" "}
              </a>
            </li>
          </ul>

          <p className="mt-8 text-base font-normal text-center text-gray-300 md:text-left md:mt-0 md:order-1 font-pj">
            &copy; {new Date().getFullYear()}, All Rights Reserved by AudaXious
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
