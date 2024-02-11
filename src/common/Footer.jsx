import { Link, NavLink } from "react-router-dom";

import Audaxios from "./Logo";

import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "../assets/svg/ig.svg";
import { ReactComponent as X } from "../assets/svg/x.svg";
import { ReactComponent as In } from "../assets/svg/linkedIn.svg";
import { ReactComponent as Github } from "../assets/svg/github.svg";
import { ReactComponent as Cmc } from "../assets/svg/cmc.svg";
import { ReactComponent as Telegram } from "../assets/svg/tg.svg";
import { ReactComponent as Medium } from "../assets/svg/medium.svg";
import { ReactComponent as Discord } from "../assets/svg/discord.svg";
import { ReactComponent as Greater } from "../assets/svg/greater.svg";

function Footer(props) {
  return (
    <div className="pl-10 pr-10 relative w-full text-white font-Poppins">
      <div className="pb-7 pt-14">
        <div className="flex flex-col md:flex-row flex-wrap mb-16 gap-x-24 md:gap-x-20 gap-y-8 items-center md:items-start">
          <div className="md:mr-32" style={{ maxWidth: 400 }}>
            <div className="mx-[4rem] md:mx-[0rem]">
              <Audaxios />
            </div>
            <p className="text-[14px] md:leading-[21.63px] font-light md:mt-3 mt-2">
              making access to web 3.0 simple...
              {/* <br className="hidden md:block" /> and incentivize active members */}
            </p>
          </div>

          {GROUP_LINKS.map((group, key) => (
            <div key={key} className="hidden md:block">
              <h6 className="mb-6 text-[20px] leading-[30px] font-medium uppercase">
                {group.name}
              </h6>
              {group.links.map((link, key) => (
                <div
                  key={key}
                  className="mb-4 text-[#71757D] text-[16px] leading-[24px] font-light"
                >
                  <NavLink {...link} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col self-start md:hidden">
          <div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-[1rem] text-[#939697] leading-[30px] font-medium uppercase font-Raleway">
                {"Product"}
              </p>
              <div className="py-3">
                <Greater />
              </div>
            </div>
            {/* links */}
          </div>
          <div className="">
            <Link
              className={`flex items-center cursor-pointer text-[#D1CBCB] py-2 hover:text-white`}
              to={"/"}
            >
              <span className="text-[15px] font-light font-Poppins">
                {"Features"}
              </span>
            </Link>
            <Link
              className={`flex items-center cursor-pointer text-[#D1CBCB] py-2 hover:text-white`}
              to={"#"}
            >
              <span className="text-[15px] font-light font-Poppins">
                {"Solution"}
              </span>
            </Link>
            <Link
              className={`flex items-center cursor-pointer text-[#D1CBCB] py-2 hover:text-white`}
              to={"#"}
            >
              <span className="text-[15px] font-light font-Poppins">
                {"Pricing"}
              </span>
            </Link>
          </div>

          {/* resources */}

          <div className="mt-5">
            <div className="flex justify-between items-center mb-3">
              <p className="text-[1rem] text-[#939697] leading-[30px] font-medium uppercase font-Raleway">
                {"Resources"}
              </p>
              <div className="py-3">
                <Greater />
              </div>
            </div>
            {/* links */}
          </div>
          <div className="">
            <Link
              className={`flex items-center cursor-pointer text-[#D1CBCB] py-2 hover:text-white`}
              to={"#"}
            >
              <span className="text-[15px] font-light font-Poppins">
                {"FAQ'S"}
              </span>
            </Link>
            <Link
              className={`flex items-center cursor-pointer text-[#D1CBCB] py-2 hover:text-white`}
              to={"#"}
            >
              <span className="text-[15px] font-light font-Poppins">
                {"Documentation"}
              </span>
            </Link>
            <Link
              className={`flex items-center cursor-pointer text-[#D1CBCB] py-2 hover:text-white`}
              to={"#"}
            >
              <span className="text-[15px] font-light font-Poppins">
                {"Apps"}
              </span>
            </Link>
          </div>

          {/* company */}

          <div className="mt-5">
            <div className="flex justify-between items-center mb-3">
              <p className="text-[1rem] text-[#939697] leading-[30px] font-medium uppercase font-Raleway">
                {"Company"}
              </p>
              <div className="py-3">
                <Greater />
              </div>
            </div>
            {/* links */}
          </div>
          <div className="">
            <Link
              className={`flex items-center cursor-pointer text-[#D1CBCB] py-2 hover:text-white`}
              to={"#"}
            >
              <span className="text-[15px] font-light font-Poppins">
                {"About us"}
              </span>
            </Link>
            <Link
              className={`flex items-center cursor-pointer text-[#D1CBCB] py-2 hover:text-white`}
              to={"#"}
            >
              <span className="text-[15px] font-light font-Poppins">
                {"News"}
              </span>
            </Link>
            <Link
              className={`flex items-center cursor-pointer text-[#D1CBCB] py-2 hover:text-white`}
              to={"#"}
            >
              <span className="text-[15px] font-light font-Poppins">
                {"Blog"}
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex border-t-[1px] border-[#71757D] flex pt-[30px] pb-[40]">
          <p className="text-[#4F5259] md:flex-1 text-left font-medium font-Raleway text-[14px] text-center">
            © 2023 AudaXious. | All rights reserved
          </p>
          <div className="flex items-center gap-4 md:ml-auto">
            <a
              href="https://twitter.com/AudaXious3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X />
            </a>

            <a
              href="https://t.me/audaxious"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram />
            </a>

            <Discord />

            <a
              href="https://coinmarketcap.com/community/profile/AudaXious/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Cmc />
            </a>

            <a
              href="https://github.com/AudaXious"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
          {/* <div className="flex flex-wrap items-center justify-center gap-2 pt-5 md:pt-5">
            <p className="text-[#4F5259] md:flex-1 text-left font-medium font-Raleway text-[14px]">
              © 2023 AudaXious. | All rights reserved
            </p>
            <div className="flex items-center gap-4 md:ml-auto">
              <a
                href="https://twitter.com/AudaXious3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X />
              </a>

              <a
                href="https://t.me/audaxious"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Telegram />
              </a>

             
              <Discord />

              <a
                href="https://coinmarketcap.com/community/profile/AudaXious/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Cmc />
              </a>

              

              <a
                href="https://github.com/AudaXious"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </div>
          </div> */}
        </div>

        {/* Mobile Version  */}
        <div className="block md:hidden">
          <div className="flex flex-wrap items-center justify-center gap-2 pt-7">
            <div className="flex items-center gap-8">
              <Facebook />
              <Instagram />
              <a
                href="https://twitter.com/AudaXious3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X />
              </a>
              <In />
            </div>
            <div className="border-t-[1px] border-[#71757D]  mt-4">
              <p className="text-[#4F5259] font-medium font-Raleway text-[14px] mt-4">
                © 2023 HackCity, Inc. | All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const GROUP_LINKS = [
  {
    name: "product",
    links: [
      { children: "features", to: "/" },
      { children: "solution", to: "/" },
      { children: "pricing", to: "/" },
    ],
  },
  {
    name: "resources",
    links: [
      { children: "FAQ's", to: "/" },
      { children: "documentation", to: "/" },
      { children: "apps", to: "/" },
    ],
  },
  {
    name: "company",
    links: [
      { children: "about us", to: "/" },
      { children: "news", to: "/" },
      { children: "blog", to: "/" },
    ],
  },
];
