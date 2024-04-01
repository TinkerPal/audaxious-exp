import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useSelector } from "react-redux";

const Spaces = () => {
  const spaceArray = useSelector((state) => state.space.space);
  const FAST_DURATION = 25;
  const SLOW_DURATION = 500;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 10;

    console.log("Spaces", xTranslation.get());

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
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
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {spaceArray &&
            [
              ...spaceArray,
              ...spaceArray,
              ...spaceArray,
              ...spaceArray,
              ...spaceArray,
              ...spaceArray,
              ...spaceArray,
              ...spaceArray,
              ...spaceArray,
              ...spaceArray,
            ].map((space, index) => (
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
