import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { POST } from "../../utils/postApi";
import { ReactComponent as Clock } from "../../assets/svg/dashboardSvg/clock.svg";
import { ReactComponent as Bnb } from "../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../assets/svg/dashboardSvg/eth.svg";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
const Campaigns = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const finalPosition = -width / 2 - 8;
    controls.start({
      x: [finalPosition, 0],
      transition: {
        // type: "tween",
        ease: "linear",
        duration: 70,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, width]);

  const handleHoverStart = () => {
    controls.stop();
  };

  const handleHoverEnd = () => {
    controls.start({
      x: [-width / 2 - 8, 0],
      transition: {
        // type: "tween",
        ease: "linear",
        duration: 70,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };
  return (
    <div className="pb-[11rem] md:pb-[15rem] overflow-hidden relative">
      <motion.div
        className="py-[1.47rem] flex flex-col items-center cursor-grabbing"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-8 left-0 overflow-x-hidden absolute"
          drag="x"
          style={{ x: xTranslation }}
          ref={ref}
          animate={controls}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {[...POST, ...POST].map((post, index) => (
            <NavLink key={index} to={`/engage-portal/${post.id}`}>
              <div
                id={post.id}
                className={clsx(
                  "w-[28rem] border-[1px] border-gray-700 border-opacity-50 cursor-pointer bg-[#080e16] rounded-[16px]"
                )}
              >
                <div className="flex justify-between px-[0.94rem] pt-[0.62rem]">
                  <div className="flex items-center gap-[0.75rem] overflow-x-auto">
                    <button className="bg-[#13161E] flex items-center gap-1 border-[1px] border-[#2A3C46] border-opacity-[80%] px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] text-[#87cece] rounded-[26px]">
                      <span>
                        <Clock />
                      </span>
                      <span className="whitespace-nowrap">
                        Tasks | {post.tasks}/10
                      </span>
                    </button>
                    <button
                      className={clsx(
                        "flex items-center gap-1 border-[1px] border-opacity-[50%] px-[9px] py-[6px] font-Poppins text-[0.8rem] font-[300] text-[#C556E1] rounded-[26px]",
                        post.coin.eth
                          ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                          : "bg-[#EEEFA2] bg-opacity-[10%] text-[#E1D356] border-[#C0D925] border-opacity-[50%]"
                      )}
                    >
                      <span className="whitespace-nowrap flex">
                        Earn |{" "}
                        {post.coin.eth
                          ? `${post.coin.eth} ETH`
                          : `${post.coin.bnb} BNB`}
                      </span>
                      <span>{post.coin.eth ? <Eth /> : <Bnb />}</span>
                    </button>
                  </div>
                </div>
                <div className="h-[2px] bg-gray-800 bg-opacity-50 my-[0.62rem] mx-[0.94rem]"></div>

                <div className="text-neutral-400 flex gap-[1.25rem] px-[1rem]">
                  <div className="flex items-center flex-col gap-[0.3rem]">
                    <div>
                      <img
                        src={post?.profilePicture}
                        width="100"
                        height={"100"}
                        className="w-[4rem] h-[3rem] object-cover rounded-[4px]"
                      />
                    </div>

                    <span className="text-[0.75rem] text-[#FFF] font-[400]">
                      {post.userName}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[0.3rem]">
                    <p className="text-[#E8E8E8] uppercase font-Poppins font-[400] leading-[150%]">
                      {post.title.slice(0, 10) + "..."}
                    </p>
                    <p className="text-[0.75rem] 2xl:text-[1rem] text-[#A5A5A5] font-[300] leading-[150%]">
                      {post.tweet?.description.slice(0, 60) + "..."}
                    </p>
                  </div>
                </div>

                <div className="h-[2px] bg-gray-800 bg-opacity-50 my-[0.62rem] mx-[0.94rem]"></div>

                <div className="my-[0.62rem] mx-[0.94rem] flex justify-between items-center">
                  <p className="text-[#FFF] font-Poppins text-[0.75rem] normal font-normal">
                    Participants:{" "}
                    <span className="text-[#1FDF00] font-[600]">
                      +{post.participants}
                    </span>
                  </p>
                  <span className="text-[#929192] font-[500] text-[0.625rem] whitespace-nowrap">
                    {"12 Days left"}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Campaigns;
