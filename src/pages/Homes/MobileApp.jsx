// import React, { useState } from "react";
import phoneImage from "../../assets/svg/assets/phoneImage.png";
import phoneImage2 from "../../assets/svg/assets/phoneImage2.png";
const MobileApp = () => {
  return (
    <section className="relative overflow-hidden ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center w-full lg:order-2">
            <div className="h-full pt-12 sm:pt-16 lg:py-20 xl:py-32">
              <div className="flex flex-col justify-between flex-1 h-full max-w-md mx-auto text-center lg:text-left lg:max-w-none">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  ADX Engagement App
                </h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-400 lg:text-lg lg:mt-6 lg:leading-8">
                  Download the AudaXious Engage-to-Earn app, where members can
                  seamlessly participate in airdrops, competitions, and
                  contribute to Web3 communities. With the AudaXious app, you
                  will never miss earning opportunities on the platform.
                </p>
                <p className="text-white mt-4 font-normal text-xl">
                  Coming soon on Android and IOS.
                </p>
                <div className="relative w-full px-0 mt-12 -ml-4 sm:-ml-6 lg:hidden">
                  <img className="w-full max-w-xl " src={phoneImage2} alt="" />
                </div>

                <div className="flex flex-col items-center mt-8 space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row sm:justify-center lg:justify-start sm:mt-8">
                  <a
                    href="#"
                    title=""
                    className="transition-all duration-200 hover:-translate-y-1"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="object-cover w-auto h-16"
                      src="https://landingfoliocom.imgix.net/store/collection/saasui/images/application/2/app-store.png"
                      alt=""
                    />
                  </a>

                  <a
                    href="#"
                    title=""
                    className="transition-all duration-200 hover:-translate-y-1"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="object-cover w-auto h-16"
                      src="https://landingfoliocom.imgix.net/store/collection/saasui/images/application/2/play-store.png"
                      alt=""
                    />
                  </a>
                </div>

                <div className="mt-12 sm:mt-16">
                  {/* <p className="text-base font-semibold text-gray-50">
                    Trusted by 50k+ customers
                  </p>
                  <div className="flex items-center justify-center mt-3 space-x-2 lg:justify-start">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-base font-normal text-gray-50">4.4/5</p>
                    <p className="text-base font-normal text-gray-300">•</p>
                    <p className="text-base font-normal text-gray-300">
                      3,841 Reviews
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full px-0 mt-12 -ml-4 sm:-ml-6 ">
            {/* <img className="w-full max-w-xl " src={phoneImage2} alt="" /> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 hidden lg:block lg:-ml-32 xl:ml-0 2xl:-mb-16">
        <img
          className="w-full max-w-xl 2xl:max-w-2xl"
          src={phoneImage}
          alt=""
        />
      </div>
    </section>
  );
};
export default MobileApp;
