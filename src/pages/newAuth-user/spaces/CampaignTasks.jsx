import { ReactComponent as Information } from "../../../assets/svg/dashboardSvg/info.svg";
import { ReactComponent as Required } from "../../../assets/svg/dashboardSvg/required.svg";
import { ReactComponent as Cancel } from "../../../assets/svg/dashboardSvg/cancel3.svg";
import { ReactComponent as AddIcon } from "../../../assets/svg/dashboardSvg/add.svg";
import { ReactComponent as Checked } from "../../../assets/svg/dashboardSvg/markicon.svg";
import Button from "../../../widget/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";
import { useInputNumber } from "../../../hooks/useInput";
import { spaceActions } from "../../../store/spaceSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Homes/Loading";
import { createTask } from "../../../store/spaceActions";

const checkPointValidity = (point) => {
  return point > 0;
};

// share, post, like, repost, follow, join
const CampaignTasks = ({ spaceDetail, setShowCampaignTask }) => {
  const checkWebsiteValidity = (url) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };
  const TASKSBAR = [
    {
      title: "Join Space",
      actions: "join",
      media: `audaxious`,
      image: "/tweetImages/audaxious.svg",
    },
    {
      title: "Follow tweeter",
      actions: "follow",
      media: "twitter",
      image: "/tweetImages/tweeter.svg",
    },
    {
      title: "Like tweet",
      actions: "like",
      media: "twitter",
      image: "/tweetImages/like.svg",
    },
    {
      title: "Repost tweet",
      actions: "repost",
      media: "twitter",
      image: "/tweetImages/tweeter.svg",
    },
    {
      title: "Share tweet",
      actions: "share",
      media: "twitter",
      image: "/tweetImages/tweeter.svg",
    },
    {
      title: "Like tweet",
      actions: "post",
      media: "twitter",
      image: "/tweetImages/tweeter.svg",
    },
    // {
    //   actions: "join",
    //   media: "telegram",
    //   image: "/tweetImages/telegram.svg",
    // },
  ];
  const [tasks, setTasks] = useState([]);
  const [taskError, setTaskError] = useState(null);
  const [selectedTask, setSelectedTask] = useState([]);
  const [selectedTaskError, setSelectedTaskError] = useState(null);
  const [url, setUrl] = useState([]);
  const [isTaskAdded, setIsTaskAdded] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.space.loading);
  const campaignId = useSelector((state) => state.space.campaignId);
  const {
    onChangeValueHandler: pointOnchange,
    reset: resetPoint,
    value: point,
    onBlurHandler: pointOnBlur,
    valueIsInvalid: pointInvalid,
  } = useInputNumber(checkPointValidity, 50);

  const handleTaskClick = (task) => {
    // Check if the task is "Join Space"
    if (task.actions === "join") {
      const taskExists = selectedTask.some((t) => t.actions === task.actions);
      if (taskExists) {
        toast.error("Join Space task already selected");
        return;
      }
      const newTask = {
        action: "join",
        media: `audaxious`,
        url: spaceDetail.uuid,
      };
      setTasks([...tasks, newTask]);
    }

    setSelectedTask((prev) => [...prev, task]);
  };

  const handleInputChange = (e, index) => {
    const newTaskUrls = [...url];
    newTaskUrls[index] = e.target.value;
    setUrl(newTaskUrls);

    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          url: e.target.value,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const addTaskClickHandler = (task, media, url, index) => {
    if (!checkWebsiteValidity(url)) {
      toast.error("Enter a valid url");
      return;
    }
    if (isTaskAdded[index]) {
      return;
    }

    const newTask = {
      action: task,
      media,
      url: url,
    };
    setTasks([...tasks, newTask]);
    setIsTaskAdded((prev) => {
      const updatedIsTaskAdded = [...prev];
      updatedIsTaskAdded[index] = true;
      return updatedIsTaskAdded;
    });
  };

  const removeTaskClickHandler = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

    const updatedSelectedTasks = [...selectedTask];
    updatedSelectedTasks.splice(index, 1);
    setSelectedTask(updatedSelectedTasks);

    setIsTaskAdded((prev) => {
      const updatedIsTaskAdded = [...prev];
      updatedIsTaskAdded.splice(index, 1);
      return updatedIsTaskAdded;
    });

    const newUrls = [...url];
    newUrls.splice(index, 1);
    setUrl(newUrls);
  };

  const submitTaskHandler = async (e) => {
    e.preventDefault();
    if (selectedTask.length < 1) {
      setSelectedTaskError(true);
      return;
    }

    if (tasks.length < 1) {
      setTaskError(true);
      return;
    }
    const data = {
      tasks,
      points: +point,
    };

    dispatch(spaceActions.setLoading(true));

    // createTask = (campaignId, campaignTask)
    try {
      const result = await dispatch(createTask(campaignId, data));

      toast.success(result.message);
      dispatch(spaceActions.setCampaignCreated(result.success));
      dispatch(spaceActions.setLoading(false));
      dispatch(spaceActions.setOpenCampaignModal(false));
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
      setShowCampaignTask(true);
    }
  };
  return (
    <div className="bg-[#060B12] relative py-[2rem] rounded-md w-[100%] min-w-[15rem] lg:w-[50rem] xl:w-[50rem] 2xl:w-[65rem] px-[1rem] lg:px-[3rem] text-[#E8E8E8]r">
      {loading && (
        <div className="">
          <Loading />
        </div>
      )}
      <div className="flex flex-col gap-[1.5rem] md:gap-[2.56rem]">
        <div className="flex items-center gap-[1rem] px-[1rem]">
          <span title="Create Campaign">
            <Information />
          </span>
          <p className="text-[#E8E8E8] font-Poppins text-[1.25rem] font-[275] normal">
            Campaign tasks
          </p>
        </div>

        <form
          onSubmit={submitTaskHandler}
          className="flex flex-col gap-[1.88rem] px-[1rem] md:px-[3rem] 2xl:px-[4.5rem]"
        >
          <div className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[275] flex gap-[0.4rem]">
            <p>Select task type</p>
            <span>
              <Required />
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
            {TASKSBAR.map((task, index) => (
              <div
                key={index}
                onClick={() => handleTaskClick(task)}
                className="cursor-pointer py-[0.56rem] px-[1rem] rounded-md border-[1px] border-[#295D7C4D] border-opacity-[30%] flex items-center justify-between"
              >
                <span>
                  <img src={task.image} alt="" className="w-[1rem] h-[1rem]" />
                </span>
                <p className="text-[0.7rem] md:text-[0.9rem] font-Poppins font-[300] text-[#D3D3D3] whitespace-nowrap">
                  {task.actions}
                </p>
                <span>
                  <AddIcon />
                </span>
              </div>
            ))}
          </div>
          <div>
            {selectedTask.length < 1 && (
              <div>
                {selectedTaskError && (
                  <p className="text-[#b40e0e] text-center text-[0.75rem] font-[600] font-Poppins">
                    {"Please select task"}
                  </p>
                )}
                <p className=" font-Poppins text-[1.02rem] text-[#707171]">
                  No Tasks Selected
                </p>
                <p className="font-Poppins text-[#707171] text-[0.9rem]">
                  Select tasks from the top to begin
                </p>
              </div>
            )}
            {selectedTask && selectedTask.length > 0 && (
              <div className="flex gap-[4rem] md:gap-[6rem] 2xl:gap-[6.5rem] text-[#FFF]">
                <div className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[275] flex gap-[0.4rem]">
                  <p>Select task type</p>
                  <span>
                    <Required />
                  </span>
                </div>
                <div className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[275] flex gap-[0.4rem]">
                  <p>link</p>
                  <span>
                    <Required />
                  </span>
                </div>
              </div>
            )}

            {selectedTask.map((task, index) => {
              if (task.actions === "join") {
                return (
                  <div className="flex gap-2 md:gap-5 my-5" key={index}>
                    <div
                      // onBlur={() =>
                      //   addTaskClickHandler(
                      //     task.actions,
                      //     task.media,
                      //     url[index],
                      //     index
                      //   )
                      // }
                      onClick={() =>
                        addTaskClickHandler(
                          task.actions,
                          task.media,
                          `${spaceDetail.uuid}`,
                          index
                        )
                      }
                      className={clsx(
                        "cursor-pointer py-[0.56rem] w-[15rem] px-[1rem] rounded-md flex items-center justify-between border-[2px] border-[#D1E8F4] border-opacity-30 bg-[#09141A]"
                        //   isTaskAdded[index]
                        //     ? "border-[2px] border-[#D1E8F4] border-opacity-30 bg-[#09141A]"
                        //     : "border-[1px] border-[#295D7C4D] border-opacity-[30%]"
                      )}
                    >
                      <span>
                        <img
                          src={task.image}
                          alt=""
                          className="w-[1rem] h-[1rem]"
                        />
                      </span>
                      <p className="text-[0.7rem] md:text-[0.9rem] font-Poppins font-[300] text-[#D3D3D3] whitespace-nowrap">
                        {task.actions}
                      </p>
                      {/* {!isTaskAdded[index] ? (
                        <span>
                          <AddIcon />
                        </span>
                      ) : ( */}
                      <span>
                        <Checked />
                      </span>
                      {/* )} */}
                    </div>
                    <div className="relative w-[100%]">
                      <input
                        type="text"
                        name={`${spaceDetail.uuid}`}
                        id="name"
                        value={spaceDetail.uuid || ""}
                        // defaultValue={spaceDetail.uuid}
                        // onClick={() =>
                        //   addTaskClickHandler(
                        //     task.actions,
                        //     task.media,
                        //     url[index],
                        //     index
                        //   )
                        // }
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder={spaceDetail.uuid}
                        disabled
                        className="cursor-not-allowed disabled:bg-[#0A1017] bg-transparent text-[#FFF] outline-none md:pr-[3rem] placeholder:text-[#A5A5A5] w-[100%] font-[275] bg-[#081017] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md px-[1rem] py-[0.62rem] text-[0.75rem] font-Poppins"
                        required
                      />
                      <span
                        onClick={() => removeTaskClickHandler(index)}
                        className="absolute right-3 top-3 md:top-3 text-[0.7rem] md:text-[0.875rem] font-Poppins font-[300] text-[#79C4EC]"
                      >
                        <Cancel />
                      </span>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="flex gap-2 md:gap-5 my-5" key={index}>
                    <div
                      onClick={() =>
                        addTaskClickHandler(
                          task.actions,
                          task.media,
                          url[index],
                          index
                        )
                      }
                      className={clsx(
                        "cursor-pointer py-[0.56rem] w-[15rem] px-[1rem] rounded-md flex items-center justify-between",
                        isTaskAdded[index]
                          ? "border-[2px] border-[#D1E8F4] border-opacity-30 bg-[#09141A]"
                          : "border-[1px] border-[#295D7C4D] border-opacity-[30%]"
                      )}
                    >
                      <span>
                        <img
                          src={task.image}
                          alt=""
                          className="w-[1rem] h-[1rem]"
                        />
                      </span>
                      <p className="text-[0.7rem] md:text-[0.9rem] font-Poppins font-[300] text-[#D3D3D3] whitespace-nowrap">
                        {task.actions}
                      </p>
                      {!isTaskAdded[index] ? (
                        <span>
                          <AddIcon />
                        </span>
                      ) : (
                        <span>
                          <Checked />
                        </span>
                      )}
                    </div>
                    <div className="relative w-[100%]">
                      <input
                        type="text"
                        name={`name${index}`}
                        id="name"
                        onBlur={() =>
                          addTaskClickHandler(
                            task.actions,
                            task.media,
                            url[index],
                            index
                          )
                        }
                        onChange={(e) => handleInputChange(e, index)}
                        value={url[index] || ""}
                        // defaultValue={""}
                        placeholder="Enter your campaign title"
                        className="bg-[#0A1017] text-[#FFF] outline-none md:pr-[3rem] placeholder:text-[#A5A5A5] w-[100%] font-[275] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md px-[1rem] py-[0.62rem] text-[0.75rem] font-Poppins"
                        required
                      />
                      <span
                        onClick={() => removeTaskClickHandler(index)}
                        className="absolute right-3 top-3 md:top-3 text-[0.7rem] md:text-[0.875rem] font-Poppins font-[300] text-[#79C4EC]"
                      >
                        <Cancel />
                      </span>
                    </div>
                  </div>
                );
              }
            })}
            {taskError && (
              <p className="text-[#b40e0e] text-center text-[0.75rem] font-[600] font-Poppins">
                {"Please add task"}
              </p>
            )}
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-start gap-[0.6rem] w-[100%]">
              <label
                htmlFor="point"
                className="font-Poppins text-[#F0894F] text-[0.75rem] font-[275] flex gap-[0.4rem]"
              >
                <p>Enter Points to be earned (XP)</p>
                <span>
                  <Required />
                </span>
              </label>

              <input
                required
                type="number"
                name="point"
                id="point"
                value={point}
                onChange={pointOnchange}
                onBlur={pointOnBlur}
                placeholder="Enter your campaign title"
                className="text-[#FFF] px-[1rem] outline-none placeholder:text-[#A5A5A5] font-[275] bg-[#09141A] border-[#F0894F] border-[0.75px] rounded-md py-[0.62rem] text-[0.75rem] font-Poppins"
              />
              {pointInvalid && (
                <p className="text-[#b40e0e] text-end text-[0.75rem] font-[600] font-Poppins">
                  {"Enter valid point format"}
                </p>
              )}
            </div>
            <div className="flex gap-5 items-center text-[#FFF] mt-[2rem] md:mt-[1.5rem]">
              <Button type={"button"}>Save Draft</Button>
              <Button type={"submit"}>Lunch</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignTasks;
