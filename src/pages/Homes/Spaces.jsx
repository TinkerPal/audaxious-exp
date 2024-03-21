import { NavLink } from "react-router-dom";
import { SPACES } from "../../utils/postApi";
import { ReactComponent as Group } from "../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../assets/svg/dashboardSvg/discords.svg";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useSelector } from "react-redux";

const Spaces = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const controls = useAnimation();
  const spaceArray = useSelector((state) => state.space.space);

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
    <div className="pb-[5rem] overflow-hidden relative">
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
          {spaceArray &&
            [...spaceArray, ...spaceArray].map((space, index) => (
              <NavLink to={`/spaces/${space.uuid}`} key={index}>
                <div className="px-[0.5rem] md:px-[1.5rem] pt-[0.75rem] w-[20rem] hover:border-[3px] pb-[0.75rem] border-[#2A3C46] border border-opacity-[80%] bg-ElipseBg bg-no-repeat bg-cover rounded-[16px] cursor-pointer">
                  <div className="flex flex-col gap-[0.75rem]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[0.5rem]">
                        {!space.src && (
                          <div className="w-[3rem] h-[3rem] rounded-full bg-slate-200 flex items-center justify-center text-[2rem] text-[#2A3C46]">
                            {space.title.slice(0, 1)}
                          </div>
                        )}
                        {space.src && (
                          <img
                            src={space.src}
                            alt={space.title.slice(0, 7)}
                            width="100"
                            height={"100"}
                            className="w-[4rem] h-[4rem] object-cover rounded-full"
                          />
                        )}
                        <span className="text-[1rem] text-[#FFF] font-[400]">
                          {space.title}
                        </span>{" "}
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
