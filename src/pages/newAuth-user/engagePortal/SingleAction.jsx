import { ReactComponent as Retweet } from "../../../assets/svg/dashboardSvg/secondRetweet.svg";
import { ReactComponent as Check } from "../../../assets/svg/dashboardSvg/checkMark.svg";
import { ReactComponent as Love } from "../../../assets/svg/dashboardSvg/love.svg";
import { ReactComponent as Tweet } from "../../../assets/svg/dashboardSvg/tweeter.svg";
import { ReactComponent as FlexLine } from "../../../assets/svg/dashboardSvg/flexLine.svg";

//Types can be repost, like, qoute, follow

export default function SingleAction({
  // handleAction,

  action,
  task,
  children,
  handleAction,
  processing = false,
  taskStatus,
  index,
  selectedIndex,
}) {
  return (
    <>
      <div
        onClick={() => handleAction(action, task, index)}
        className="cursor-pointer select-none flex justify-between py-[0.5rem] px-[1.3rem] items-center bg-[#0C131B] rounded-[8px]"
      >
        <div className="flex items-center gap-4">
          <span>
            {task.action === "follow" && <Tweet />}
            {task.action === "like" && <Love />}
            {task.action === "repost" && <Retweet />}
            {task.action === "join" && <Retweet />}
          </span>
          <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1rem] xl:[1.25rem] normal-case text-[#E8E8E8]">
            {children}
          </span>
        </div>
        {taskStatus[index] === "incomplete" && (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 28 28"
              fill="none"
              className={
                processing && selectedIndex.includes(index)
                  ? "animate-spin"
                  : ""
              }
            >
              <path
                d="M25.866 15.8C24.9974 21.5736 20.0156 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2C18.9207 2 23.1498 4.96183 25.0015 9.2"
                stroke="#707171"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 9.19922H25.28C25.6777 9.19922 26 8.87686 26 8.47922V3.19922"
                stroke="#707171"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}

        {taskStatus[index] === "complete" && (
          <span>
            <Check />
          </span>
        )}
      </div>

      {true && <FlexLine />}
    </>
  );
}
