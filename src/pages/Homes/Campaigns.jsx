import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { ReactComponent as Task } from "../../assets/svg/task.svg";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { ReactComponent as Group } from "../../assets/svg/dashboardSvg/group.svg";
import { useSelector } from "react-redux";
const Campaigns = () => {
  const POST = useSelector((state) => state.campaign.campaign);
  const FAST_DURATION = 25;
  const SLOW_DURATION = 500;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(-0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 10;

    console.log("Campaigns", xTranslation.get());

    if (mustFinish) {
      controls = animate(xTranslation, [finalPosition, xTranslation.get()], {
        ease: "linear",
        duration: (1 - xTranslation.get() / finalPosition) * duration,
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [finalPosition, 0], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width, mustFinish]);
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
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {POST &&
            [...POST, ...POST, ...POST, ...POST, ...POST].map((post, index) => (
              <NavLink key={index} to={`/engage-portal/${post.id}`}>
                <div
                  id={post.id}
                  className={clsx(
                    "w-[20rem] border-[1px] border-[#2A3C46] border-opacity-80 cursor-pointer bg-ElipseBg   rounded-[16px] py-[2px]"
                  )}
                >
                  <div className="flex justify-between px-[0.94rem] pt-[0.62rem]">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-row space-x-2">
                        <button className=" flex items-center gap-1 border-[1px] border-[#2A3C46] border-opacity-[80%] px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem]  text-[#87cece] rounded-[26px]">
                          <span>
                            <Task />
                          </span>
                          <span className="whitespace-nowrap"> 10</span>
                        </button>
                        <button className="bg-[#13161E] flex items-center gap-1 border-[1px] text-[#C556E1]/80 rounded-[26px] bg-[#C556E1]/5  border-[#C556E1]/20 px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] ">
                          <span className="whitespace-nowrap flex">
                            Earn |{" "}
                            {
                              post.points

                              // ? `${post.coin.eth} ETH`
                              // : `${post.coin.bnb} BNB`
                            }
                          </span>
                          {/* <span>
                        <Task />
                      </span> */}
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
                      <p className="text-[1rem] text-[#FFF] ">
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
