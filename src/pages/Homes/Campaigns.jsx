import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { POST } from "../../utils/postApi";
import { ReactComponent as Clock } from "../../assets/svg/dashboardSvg/clock.svg";
import { ReactComponent as Bnb } from "../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Task } from "../../assets/svg/task.svg";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { ReactComponent as Group } from "../../assets/svg/dashboardSvg/group.svg";
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
                  "w-[20rem] border-[1px] border-gray-700 border-opacity-50 cursor-pointer  rounded-[16px] py-[2px]"
                )}
              >
                <div className="flex justify-between px-[0.94rem] pt-[0.62rem]">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-row space-x-2">
                      <button className=" flex items-center gap-1 border-[1px] border-[#2A3C46] border-opacity-[80%] px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] text-[#87cece] rounded-[26px]">
                        <span>
                          <Task />
                        </span>
                        <span className="whitespace-nowrap"> 10</span>
                      </button>
                      <button
                        className={clsx(
                          "flex items-center mt-[0px] gap-1 border-[1px] border-opacity-[50%] px-[9px] py-[6px] font-Poppins text-[0.8rem] font-[300] text-[#C556E1] rounded-[26px]",
                          post.coin.eth
                            ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                            : "bg-[#EEEFA2] bg-opacity-[10%] text-[#E1D356] border-[#C0D925] border-opacity-[50%]"
                        )}
                      >
                        <span className="whitespace-nowrap flex">
                          {post.coin.eth
                            ? `${post.coin.eth} ETH`
                            : `${post.coin.bnb} BNB`}
                        </span>
                      </button>
                    </div>
                    <span className="text-[#929192] font-[500] text-[0.625rem] whitespace-nowrap">
                      {"12 Days left"}
                    </span>
                  </div>
                </div>
                <div className="h-[2px] bg-gray-800 bg-opacity-50 my-[0.62rem] mx-[0.94rem]"></div>

                <div className="text-neutral-400 flex gap-[1.25rem] px-[1rem] justify-between items-center">
                  <div className="flex flex-col gap-[0.3rem]">
                    <p className="text-[#E8E8E8] uppercase font-Poppins font-[400] leading-[150%]">
                      {post.title.slice(0, 20)}
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.3rem] rounded-[40px] py-[0.2rem] px-[0.5rem] border-[#314048] border-opacity-[40%] border-[1px]">
                    <span>
                      <Group />
                    </span>
                    <span className="h-[1.5rem] w-[1px] bg-[#314048]"></span>
                    <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                      10k
                    </span>
                  </div>
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
