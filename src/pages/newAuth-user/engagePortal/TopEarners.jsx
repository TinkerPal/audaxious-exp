import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { ReactComponent as Eth } from "../../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Bnb } from "../../../assets/svg/dashboardSvg/bnb.svg";
import { TOPEARNERS } from "../../../utils/postApi";
import clsx from "clsx";
const TopEarners = () => {
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
    <div className="overflow-hidden relative">
      <motion.div
        className="py-[1.47rem] flex flex-col items-center cursor-grabbing"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex left-0"
          drag="x"
          style={{ x: xTranslation }}
          ref={ref}
          animate={controls}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {[...TOPEARNERS, ...TOPEARNERS].map((earners, index) => (
            <div
              className="flex items-center mx-[2rem] gap-[0.5rem]"
              key={index}
            >
              <img
                src={earners.src}
                width={"100"}
                height={"100"}
                alt=""
                className="w-[30px] h-[30px] object-cover border rounded-full"
              />
              <span className="text-[#E8E8E8] text-[0.5rem] md:text-[0.85rem] font-Poppins font-[300]">
                {earners.name}
              </span>
              <span className="text-neutral-500 font-Poppins font-[300] text-[0.5rem] md:text-[0.75rem]">
                earned
              </span>
              <span
                className={clsx(
                  "whitespace-nowrap text-[0.5rem] md:text-[0.8rem]",
                  earners.coin.eth ? "text-[#F04086]" : "text-[#E1D356]"
                )}
              >
                {earners.coin.eth
                  ? `${earners.coin.eth} ETH`
                  : `${earners.coin.btc} BNB`}
              </span>
              <span>{earners.coin.eth ? <Eth /> : <Bnb />}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TopEarners;
