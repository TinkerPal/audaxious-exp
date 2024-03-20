import React, { useState } from "react";
import Audaxious from "../../assets/svg/assets/AudaxiousLogofinal.svg";
import { Link } from "react-router-dom";
// import AudaxiousShort from "../assets/AudaxiousLogoShort.svg";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <header className="py-4 fixed top-0 w-full bg-[#060B12] z-50 gradient-border">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex flex-row space-x-3 items-center">
            <a
              href="#"
              title=""
              className="flex rounded outline-none  focus:ring-gray-900 focus:ring-offset-2"
            >
              <img className="w-auto h-4 z-10" src={Audaxious} alt="" />
            </a>{" "}
          </div>

          <div className="flex lg:hidden z-10">
            <button
              type="button"
              className="text-[#79C4EC]"
              onClick={toggleExpanded}
              aria-expanded={expanded}
            >
              <span>
                {expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>

          <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16 ">
            {/* Menu items */}
            <Link
              to={"/engage-portal"}
              title=""
              className="text-base font-medium text-gray-100 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Campaigns
            </Link>
            <Link
              to={"/spaces"}
              title=""
              className="text-base font-medium text-gray-100 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Spaces
            </Link>
            <a
              href="https://docs.audaxious.com/"
              title="Documentation"
              className="text-base font-medium text-gray-100 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Documentation
            </a>
          </div>

          <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
            {/* Other menu items */}
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-200 transition-all duration-200 border-2 border-[#79C4EC] sm:w-auto sm:mt-0 rounded-xl font-pj  hover:text-opacity-75 hover:border-opacity-75  "
              role="button"
            >
              ADX token
            </a>
            <Link
              to={"/engage-portal"}
              title="Engagement portal"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-black transition-all duration-200 bg-[#79C4EC] border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Launch App
            </Link>
          </div>
        </div>

        <nav style={{ display: expanded ? "block" : "none" }}>
          <div className="px-1 py-8 ">
            <div className="grid gap-y-7 z-10">
              {/* Expanded navigation links */}
              <Link
                to={"/engage-portal"}
                title=""
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-100 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 "
              >
                {" "}
                Campaigns
              </Link>
              <Link
                to={"/spaces"}
                title=""
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-100 transition-all duration-200 rounded-xl hover:bg-gray-50 font-pj focus:ring-1 "
              >
                {" "}
                Spaces
              </Link>
              <a
                href="#"
                title=""
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-100 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Documentation
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-200 transition-all duration-200 border-2 border-[#79C4EC] sm:w-auto sm:mt-0 rounded-xl font-pj  hover:text-opacity-75 hover:border-opacity-75  "
                role="button"
              >
                ADX token
              </a>
              <Link
                to={"/engage-portal"}
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-black transition-all duration-200 bg-[#79C4EC] border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Launch App
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
