import { NavLink } from "react-router-dom";
import { SPACES } from "../../utils/postApi";
import { ReactComponent as Group } from "../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../assets/svg/dashboardSvg/discords.svg";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const Spaces = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const finalPosition = -width / 2 - 8;
    controls.start({
      x: [0, finalPosition],
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
      x: [0, -width / 2 - 8],
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
    <div className="pb-[15rem] overflow-hidden relative">
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
          {SPACES &&
            [...SPACES, ...SPACES].map((space, index) => (
              <NavLink to={`/spaces/${space.id}`} key={index}>
                <div className="px-[0.5rem] md:px-[1.5rem] pt-[0.75rem] w-[28rem] hover:border-[3px] pb-[1.25rem] border-[#2A3C46] border border-opacity-[80%] bg-ElipseBg bg-no-repeat bg-cover rounded-[16px] cursor-pointer">
                  <div className="flex flex-col gap-[0.75rem]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[0.5rem]">
                        <img
                          src={space.src}
                          alt={space.userName.slice(0, 7)}
                          width="100"
                          height={"100"}
                          className="w-[4rem] h-[4rem] object-cover rounded-full"
                        />
                        <span className="text-[1rem] text-[#FFF] font-[400]">
                          {space.userName}
                        </span>{" "}
                      </div>
                      <button className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                        Join
                      </button>
                    </div>
                    <div className="py-[0.62rem]">
                      <p className="font-Poppins text-[#A5A5A5] text-[0.75rem] font-[400] leading-[140%]">
                        {space.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-[0.3rem] px-[0.3rem] rounded-[40px] py-[0.4rem] border-[#314048] border-opacity-[40%] border-[1px]">
                        <span>
                          <Group />
                        </span>
                        <span className="h-[1.5rem] w-[1px] bg-[#314048]"></span>
                        <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                          {space.engagement}k
                        </span>
                      </div>
                      <div className="flex gap-[0.3rem] items-center">
                        <span>
                          <World />
                        </span>
                        <span className="h-[2.4rem] w-[1px] bg-[#314048]"></span>
                        <span>
                          <Retweets />
                        </span>
                        <span className="h-[2.4rem] w-[1px] bg-[#314048]"></span>
                        <span>
                          <Discords />
                        </span>
                      </div>
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

export default Spaces;
