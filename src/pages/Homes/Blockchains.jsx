// import React from "react";
import leftlogos from "../../assets/svg/assets/left-logos.png";
import rightlogos from "../../assets/svg/assets/right-logos.png";
import toplogos from "../../assets/svg/assets/top-logos.png";
import bottomlogos from "../../assets/svg/assets/bottom-logos.png";
import { Link } from "react-router-dom";

const Blockchains = () => {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            {/* <img className="w-full md:hidden" src={leftlogos1} alt="" /> */}
            <img className="w-full md:hidden" src={toplogos} alt="" />
            {/* <img
              className="hidden w-full lg:translate-y-12 md:block"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/integrations/3/left-logos.png"
              alt=""
            /> */}
            <img
              className="hidden w-full lg:translate-y-12 md:block"
              src={leftlogos}
              alt=""
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
              Support 10+ Blockchains
            </h2>
            <p className="mt-6 text-lg font-normal text-gray-200 font-pj">
              AudaXious currently supports over 10 blockchains and several
              wallet integrations. As we continue to expand, more blockchains
              will be integrated.
            </p>
            <div className="relative inline-flex mt-12 group">
              <Link
                to={"/engage-portal"}
                title="App"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all sm:w-auto w-full duration-200 bg-[#79C4EC] font-pj rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-opacity-75"
                role="button"
              >
                {" "}
                Launch App
              </Link>
            </div>
          </div>

          <div>
            <img className="w-full md:hidden" src={bottomlogos} alt="" />
            <img
              className="hidden w-full lg:translate-y-12 md:block"
              src={rightlogos}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blockchains;
