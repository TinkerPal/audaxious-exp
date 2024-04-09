import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { aiCreatieActions } from "../../../store/aiCreativeSlice";
import { ReactComponent as Back } from "../../../assets/svg/dashboardSvg/back.svg";

const AiCreativTab = ({ toggle, toggleHandler }) => {
  const twitterUsername = useSelector(
    (state) => state.authentication.verifyTweet
  );

  const location = useLocation();

  const path = location.pathname;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const TABS = [
    twitterUsername ? `@${twitterUsername}` : `Twitter`,
    // "Instagram",
    // "Telegram",
    // "Discord",
    // "Facebook",
  ];

  const openModal = () => {
    dispatch(aiCreatieActions.setCreatePostModal(true));
  };

  const navigateHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex  flex-row items-center  justify-between gap-[0.5rem] md:gap-[0rem] pt-[1rem] md:pt-[0rem] ">
        <div className="flex justify-between items-center text-[0.7rem] md:text-[1rem] font-Poppins font-[300]">
          <div
            onClick={navigateHandler}
            className={clsx(
              path === "/ai-creatives/ai" || path === "/ai-creatives/manual"
                ? "flex items-center gap-2 py-4 cursor-pointer"
                : "hidden"
            )}
          >
            <span>
              <Back />
            </span>
            <p className=" font-Poppins text-[0.85rem] font-[300]">Back</p>
          </div>
          <div
            className={clsx(
              path === "/ai-creatives/ai" || path === "/ai-creatives/manual"
                ? "hidden"
                : "flex"
            )}
          >
            {TABS.map((tab, index) => {
              return (
                <div
                  // to={`/ai-creatives/${tab.path}`}
                  key={index}
                  onClick={() => toggleHandler(index)}
                  className={clsx(
                    "cursor-pointer py-[1rem] w-[100%] whitespace-nowrap text-center px-[1rem]",
                    toggle === index
                      ? "text-[#79C4EC] bg-[#13161E] border-b-4 border-[#79C4EC]"
                      : "text-[#D3D3D3]"
                  )}
                >
                  <span className="pt-[2rem]">{tab}</span>
                </div>
              );
            })}
          </div>
        </div>{" "}
        <button
          onClick={openModal}
          className="whitespace-nowrap py-[0.25rem] px-[1rem] font-Poppins text-white text-[1rem] font-normal rounded-md  border border-[#79C4EC] opacity-70"
        >
          Create
        </button>
      </div>
      <div className="border border-b-[1px] border-[#07111c] "></div>
    </>
  );
};

export default AiCreativTab;
