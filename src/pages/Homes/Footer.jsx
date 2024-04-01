// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Audaxious from "../../assets/svg/assets/AudaxiousLogofinal.svg";

const Footer = () => {
  return (
    <section className="py-10  sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-5 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="flex-shrink-0 flex flex-row space-x-3 items-center">
              <a
                href="#"
                title=""
                className="flex rounded outline-none  focus:ring-gray-900 focus:ring-offset-2"
              >
                <img className="w-auto h-6 z-10" src={Audaxious} alt="" />
              </a>{" "}
            </div>

            <p className="text-base leading-relaxed text-gray-200 mt-7">
              AudaXious - Earn, win rewards, and airdrops by engaging, creating
              quality contents, and contributing to web3 communities.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="https://twitter.com/AudaXious3"
                  title="x"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/audaxious"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-[14px] h-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4621_12711)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.6343 13.0634C10.1077 15.1879 11.9627 16.7812 13.1994 17.8435C14.1148 18.6297 15.4877 19.809 17.3184 21.3814C17.5463 21.582 17.863 21.6478 18.152 21.5546C18.441 21.4614 18.6596 21.223 18.7274 20.927L22.7784 3.45397C22.8498 3.1425 22.7429 2.8171 22.5008 2.6086C22.2586 2.4001 21.9209 2.34274 21.6235 2.45958L1.74677 10.2683C1.39097 10.4081 1.16981 10.7656 1.20359 11.1464C1.23736 11.5271 1.51799 11.8401 1.89284 11.9151L7.6343 13.0634Z"
                        stroke="white"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.63379 13.0633L22.2931 2.47607"
                        stroke="white"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.4703 17.3196L9.10463 20.6852C8.85822 20.9316 8.48763 21.0054 8.16567 20.872C7.84371 20.7386 7.63379 20.4245 7.63379 20.076V13.0635"
                        stroke="white"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4621_12711">
                        <rect
                          width="24"
                          height="21.6"
                          fill="white"
                          transform="translate(0 1.19995)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://discord.gg/MAXzr3Za"
                  title="Discord"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-[15px] h-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6695 4.61882C19.6634 4.60695 19.6532 4.59764 19.6409 4.59257C18.2112 3.93665 16.7026 3.46892 15.1526 3.2011C15.1386 3.19848 15.124 3.20037 15.1111 3.2065C15.0981 3.21262 15.0874 3.22267 15.0805 3.23522C14.8751 3.60808 14.6886 3.99107 14.5218 4.38272C12.851 4.1291 11.1516 4.1291 9.4808 4.38272C9.31287 3.99007 9.12339 3.60699 8.91324 3.23522C8.90603 3.22295 8.8953 3.21313 8.88243 3.20704C8.86956 3.20095 8.85515 3.19888 8.84109 3.2011C7.29098 3.46836 5.78223 3.93612 4.35279 4.59261C4.34056 4.5978 4.33023 4.60666 4.32324 4.61796C1.46465 8.88689 0.681579 13.0508 1.06573 17.1632C1.06681 17.1733 1.06991 17.1831 1.07483 17.1919C1.07976 17.2008 1.08642 17.2086 1.09442 17.2148C2.75895 18.4473 4.62074 19.388 6.60035 19.9969C6.6143 20.0011 6.62918 20.0009 6.64301 19.9964C6.65684 19.9918 6.66895 19.9832 6.67772 19.9715C7.10289 19.393 7.47963 18.7804 7.8041 18.14C7.80856 18.1312 7.81111 18.1215 7.81157 18.1117C7.81204 18.1019 7.81041 18.092 7.8068 18.0829C7.80319 18.0737 7.79768 18.0654 7.79063 18.0585C7.78358 18.0516 7.77515 18.0463 7.76589 18.0429C7.1718 17.8156 6.59665 17.5416 6.04584 17.2234C6.03584 17.2176 6.02743 17.2093 6.02137 17.1994C6.01531 17.1895 6.01179 17.1783 6.0111 17.1667C6.01042 17.1551 6.01259 17.1435 6.01744 17.133C6.02229 17.1224 6.02966 17.1132 6.0389 17.1062C6.15448 17.0196 6.27013 16.9295 6.38049 16.8386C6.3903 16.8305 6.40216 16.8253 6.41475 16.8236C6.42734 16.8219 6.44015 16.8238 6.45174 16.829C10.0603 18.4759 13.9671 18.4759 17.533 16.829C17.5446 16.8234 17.5576 16.8213 17.5703 16.8229C17.5831 16.8244 17.5952 16.8296 17.6051 16.8377C17.7155 16.9287 17.8312 17.0196 17.9476 17.1062C17.9569 17.1132 17.9643 17.1223 17.9692 17.1328C17.9742 17.1433 17.9764 17.1549 17.9758 17.1664C17.9752 17.178 17.9718 17.1893 17.9658 17.1992C17.9598 17.2092 17.9515 17.2175 17.9415 17.2234C17.392 17.5443 16.8163 17.8181 16.2206 18.0421C16.2114 18.0456 16.203 18.051 16.196 18.058C16.189 18.065 16.1835 18.0734 16.18 18.0826C16.1764 18.0919 16.1749 18.1018 16.1754 18.1116C16.176 18.1215 16.1786 18.1312 16.1831 18.14C16.513 18.7769 16.8892 19.3887 17.3087 19.9705C17.3172 19.9825 17.3292 19.9914 17.3431 19.9961C17.357 20.0008 17.372 20.0011 17.386 19.9968C19.3692 19.39 21.2342 18.4491 22.9009 17.2148C22.909 17.2089 22.9157 17.2013 22.9207 17.1926C22.9256 17.1838 22.9286 17.1741 22.9295 17.1641C23.3894 12.4097 22.1596 8.27991 19.6695 4.61882ZM8.34302 14.6592C7.25657 14.6592 6.36137 13.6622 6.36137 12.4378C6.36137 11.2133 7.2392 10.2162 8.34302 10.2162C9.45545 10.2162 10.342 11.222 10.3246 12.4377C10.3246 13.6622 9.44675 14.6592 8.34302 14.6592ZM15.6698 14.6592C14.5834 14.6592 13.6882 13.6622 13.6882 12.4378C13.6882 11.2133 14.566 10.2162 15.6698 10.2162C16.7823 10.2162 17.6688 11.222 17.6514 12.4377C17.6514 13.6622 16.7823 14.6592 15.6698 14.6592Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AudaXious"
                  title="github"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-[#79C4EC] uppercase">
              AudaXious
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to={"/discover"}
                  title="discover"
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Discover
                </Link>
              </li>
              <li>
                <Link
                  to={"/spaces"}
                  title="spaces"
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Spaces
                </Link>
              </li>

              <li>
                <Link
                  to={"/engage-portal"}
                  title="Engage Portal"
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Campaigns
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  AI Creative
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-[#79C4EC] uppercase">
              Documentation
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Getting Started
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Creating Space
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Campaign Participation
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-[#79C4EC] uppercase">
              Support
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Invite Code Request
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <Link
                  href="#"
                  title=""
                  className="flex text-base text-gray-200 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>

              <div className="relative inline-flex mt-12 group">
                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-[#79C4EC] font-pj rounded-xl focus:outline-none focus:ring-2 "
                  role="button"
                >
                  {" "}
                  Subscribe
                </a>
              </div>
            </form>
          </div> */}
        </div>

        <hr className="mt-16 mb-10 border-[#79C4EC]" />

        <p className="text-sm text-center text-gray-400">
          {new Date().getFullYear()}, All Rights Reserved by AudaXious
        </p>
      </div>
    </section>
  );
};
export default Footer;
