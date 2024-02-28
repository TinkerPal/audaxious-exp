import { ReactComponent as Friends } from "../../assets/svg/dashboardSvg/friends.svg";
import { ReactComponent as Activities } from "../../assets/svg/dashboardSvg/activities.svg";
import { ReactComponent as Hamburger } from "../../assets/svg/dashboardSvg/hambuger.svg";
import { ReactComponent as Dropdown } from "../../assets/svg/dashboardSvg/dropdown.svg";
import { ReactComponent as X } from "../../assets/svg/dashboardSvg/x.svg";
import { ReactComponent as Instagram } from "../../assets/svg/dashboardSvg/instagram.svg";
import { ReactComponent as Telegram } from "../../assets/svg/dashboardSvg/telegram.svg";
import { ReactComponent as Facebook } from "../../assets/svg/dashboardSvg/facebook.svg";
import { ReactComponent as Discord } from "../../assets/svg/dashboardSvg/discord.svg";
import Twitter from "../../components/socialmedia/Twitter";
import { useState, useCallback, useRef, useEffect } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { ReactComponent as Eth } from "../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Bnb } from "../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Brick2 } from "../../assets/svg/brickline2.svg";
import { ReactComponent as Brick1 } from "../../assets/svg/brick-line.svg";

import { Dialog, Transition } from "@headlessui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SingleTweetById from "./SingleTweetById";
import { TOPEARNERS } from "../../utils/postApi";

const EngagePortals = () => {
  const [toggle, setToggle] = useState(1);
  const [open, setOpen] = useState(false);
  const [singleTweet, setSingleTweet] = useState();
  const [selectedPostId, setSelectedPostId] = useState(null);
  const singleTweetContainerRef = useRef(null);
  const scrollRef = useRef(null);
  const overlayRef = useRef(null);

  const loadTweetByIdHandler = (id) => {
    setOpen(true);
    setSelectedPostId(id);
    setSingleTweet(id);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.overflowY = "auto";
    }
  }, [selectedPostId]);

  const overlayCancelHandler = () => {
    if (overlayRef.current && event.target === overlayRef.current) {
      setSingleTweet(null);
      setSelectedPostId(null);
    }
  };
  const cancelHandler = () => {
    setOpen(false);
    setSingleTweet(null);
    setSelectedPostId(null);
  };
  const toggleTabHandler = useCallback((id) => {
    setToggle(id);
  }, []);
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };
  const swiperProps = {
    navigation: false,
    modules: [Autoplay, Navigation],
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="" ref={scrollRef}>
      <div className="container">
        {/* testing header */}

        <Dialog
          as="div"
          className={`relative z-[900]`}
          open={open}
          onClose={cancelHandler}
          ref={overlayRef}
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-75"
            onClick={cancelHandler}
          />
          <div className="fixed inset-0 z-[300] overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Dialog.Panel className="">
                <SingleTweetById
                  tweetId={singleTweet}
                  onCancel={cancelHandler}
                  setSelectedPostId={setSelectedPostId}
                />
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>

        {/* testing */}
        {/* {singleTweet && (
          <div
            className="fixed top-0 left-0 overflow-y-auto overflow-x-hidden outline-none focus:outline-none inset-0 z-50 bg-black bg-opacity-75"
            onClick={overlayCancelHandler}
            ref={overlayRef}
          >
            <div className="relative">
              <div className="left-[13%] xl:left-[20%] absolute inset-0 xl:max-w-[1000px] top-[5vh] xl:top-[15vh] z-20">
                <SingleTweetById
                  tweetId={singleTweet}
                  onCancel={cancelHandler}
                  setSelectedPostId={setSelectedPostId}
                />
              </div>
            </div>
          </div>
        )} */}
        <div className="bg-heroCustom bg-no-repeat bg-cover py-[1rem] px-[1rem] rounded-md border-[#314048] flex justify-between border-[0.5px] relative">
          <div className="absolute top-0 left-0 z-5 hidden md:block">
            <Brick1 />
          </div>
          <div className="flex items-center gap-[1rem] relative">
            <div className="hidden md:block">
              <Friends />
            </div>
            <div className="font-Poppins font-normal">
              <p className="text-[0.9rem] md:text-[1.1rem] xl:[1.5rem] text-neutral-300 font-[400] font-Poppins">
                Promote & Engage with Posts
              </p>
              <p className="text-[0.5rem] lg:text-[0.7rem] xl:text-[1rem] font-[275] text-neutral-400 font-Poppins">
                Create, Like , comment, share contents and earn exciting rewards
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <Activities />
          </div>
          <div className="absolute right-0 -bottom-0 z-5 hidden md:block">
            <Brick2 />
          </div>
        </div>

        <div className="mt-[1rem] bg-[#060B12]">
          <div className="px-[0.8rem] md:px-[1.5rem] xl:px-[3.16rem] pt-[0.5rem] border-[#314048] border-[0.5px] flex items-center max-w-[1920px] container overflow-x-auto justify-between rounded-t-md">
            <div className="flex gap-2 xl:gap-5 items-center cursor-pointer">
              <span>
                <Hamburger />
              </span>
              <span className="whitespace-nowrap font-Poppins text-[0.875rem] text-neutral-400">
                All posts
              </span>
              <span>
                <Dropdown />
              </span>
            </div>

            <div className="flex gap-6 xl:gap-3 px-6 pt-[0.6rem] md:pt-[1rem]">
              <div
                className={clsx(
                  "flex flex-col items-center pb-[0.6rem] md:pb-[1rem]",
                  toggle === 1 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(1)}
              >
                <span>
                  <X style={{ fill: toggle === 1 ? "#FFF" : "#A5A5A5" }} />
                </span>
                <span
                  className={clsx(
                    "whitespace-nowrap",
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 1 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  twitter (X)
                </span>
              </div>

              <div
                className={clsx(
                  "flex flex-col items-center pb-[1rem]",
                  toggle === 2 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(2)}
              >
                <span>
                  <Instagram
                    style={{ fill: toggle === 2 ? "#FFF" : "#A5A5A5" }}
                  />
                </span>
                <span
                  className={clsx(
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 2 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  instagram
                </span>
              </div>

              <div
                className={clsx(
                  "flex flex-col items-center pb-[1rem]",
                  toggle === 3 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(3)}
              >
                <span>
                  <Telegram
                    style={{ fill: toggle === 3 ? "#FFF" : "#A5A5A5" }}
                  />
                </span>
                <span
                  className={clsx(
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 3 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  Telegram
                </span>
              </div>

              <div
                className={clsx(
                  "flex flex-col items-center pb-[1rem]",
                  toggle === 4 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(4)}
              >
                <span>
                  <Discord
                    style={{ fill: toggle === 4 ? "#FFF" : "#A5A5A5" }}
                  />
                </span>
                <span
                  className={clsx(
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 4 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  Discord
                </span>
              </div>
              <div
                className={clsx(
                  "flex flex-col items-center pb-[1rem]",
                  toggle === 5 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(5)}
              >
                <span>
                  <Facebook
                    style={{ fill: toggle === 5 ? "#FFF" : "#A5A5A5" }}
                  />
                </span>
                <span
                  className={clsx(
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 5 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  Facebook
                </span>
              </div>
            </div>

            <div>
              <button className="whitespace-nowrap px-[0.5rem] md:px-[1rem] py-[0.3rem] md:py-[0.5rem] bg-[#EBEDED] rounded-sm font-Poppins font-[300] text-[0.6rem] md:text-[0.8rem] text-[#060B12]">
                Promote a post
              </button>
            </div>
          </div>

          {/* grid */}
          <div className="">
            {/* twitter post */}
            <div className={clsx(toggle === 1 ? "block" : "hidden")}>
              <section className="">
                <div className="mt-[1rem] border-[#314048] border-[1px]">
                  <div className="flex">
                    <div className="px-[0.5rem] md:px-[1.62rem] py-[0.6rem] border-[#314048] border-r-[1px] flex items-center">
                      <p className="whitespace-nowrap font-Poppins text-[0.87rem] font-[400] text-[#E8E8E8]">
                        Top Earners
                      </p>
                    </div>
                    <Swiper
                      grabCursor
                      effect="slide"
                      speed={1000}
                      {...swiperProps}
                      ref={swiperRefLocal}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        580: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        1020: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        1240: {
                          slidesPerView: 2,
                          spaceBetween: 3,
                        },
                        1340: {
                          slidesPerView: 3,
                          spaceBetween: 3,
                        },
                        1700: {
                          slidesPerView: 5,
                          spaceBetween: 4,
                        },
                      }}
                    >
                      {TOPEARNERS.map((earners) => (
                        <SwiperSlide
                          key={earners.id}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div
                            className="flex gap-[0.3rem] pl-[0.7rem] md:pl-[1.62rem] py-[0.6rem] items-center"
                            key={earners.id}
                          >
                            <div className="border rounded-full overflow-hidden">
                              <img
                                src={earners.src}
                                width={"100"}
                                height={"100"}
                                alt=""
                                className="w-[30px] h-[30px] object-cover"
                              />
                            </div>
                            <span className="text-[#E8E8E8] text-[0.5rem] md:text-[0.85rem] font-Poppins font-[300]">
                              {earners.name}
                            </span>
                            <span className="text-neutral-500 font-Poppins font-[300] text-[0.5rem] md:text-[0.75rem]">
                              earned
                            </span>
                            <span
                              className={clsx(
                                "whitespace-nowrap text-[0.5rem] md:text-[0.8rem]",
                                earners.coin.eth
                                  ? "text-[#F04086]"
                                  : "text-[#E1D356]"
                              )}
                            >
                              {earners.coin.eth
                                ? `${earners.coin.eth} ETH`
                                : `${earners.coin.btc} BNB`}
                            </span>
                            <span>{earners.coin.eth ? <Eth /> : <Bnb />}</span>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </section>

              <div className="mt-[1rem]">
                <Twitter
                  onLoadTweet={loadTweetByIdHandler}
                  selectedPostId={selectedPostId}
                />
              </div>
            </div>

            <div className={clsx(toggle === 2 ? "block" : "hidden")}>
              <p className="text-white">Instagram tab</p>
            </div>
            <div className={clsx(toggle === 3 ? "block" : "hidden")}>
              <p className="text-white">Telegram tab</p>
            </div>
            <div className={clsx(toggle === 4 ? "block" : "hidden")}>
              <p className="text-white">Discord tab</p>
            </div>
            <div className={clsx(toggle === 5 ? "block" : "hidden")}>
              <p className="text-white">Facebook tab</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagePortals;
