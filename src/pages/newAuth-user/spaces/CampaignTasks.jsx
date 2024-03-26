import { ReactComponent as Information } from "../../../assets/svg/dashboardSvg/info.svg";
import { ReactComponent as Required } from "../../../assets/svg/dashboardSvg/required.svg";
import { ReactComponent as Cancel } from "../../../assets/svg/dashboardSvg/cancel3.svg";
import { ReactComponent as AddIcon } from "../../../assets/svg/dashboardSvg/add.svg";
import { ReactComponent as Checked } from "../../../assets/svg/dashboardSvg/markicon.svg";
import Button from "../../../widget/Button";
import { useState } from "react";
import { toast } from "react-toastify";

const CampaignTasks = () => {
  const TASKSBAR = [
    { actions: "Follow Space", image: "/tweetImages/audaxious.svg" },
    { actions: "Follow twitter", image: "/tweetImages/tweeter.svg" },
    { actions: "Like tweet", image: "/tweetImages/like.svg" },
    { actions: "Repost tweet", image: "/tweetImages/tweeter.svg" },
    { actions: "Quote tweet", image: "/tweetImages/tweeter.svg" },
    { actions: "Join telegram", image: "/tweetImages/telegram.svg" },
  ];
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);
  const [url, setUrl] = useState("");
  const [isTaskAdded, setIsTaskAdded] = useState([]);

  // console.log(selectedTask);
  console.log(tasks);

  // console.log(url);

  const handleInputChange = (index, e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };
  const removeTaskClickHandler = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const addTaskClickHandler = (task, url, index) => {
    // Check if the URL already exists in any of the tasks
    const urlExists = tasks.some((task) => task.url === url);

    if (!urlExists) {
      const newTask = {
        action: task,
        url: url,
      };
      setTasks([...tasks, newTask]);
      setIsTaskAdded((prev) => {
        const updatedIsTaskAdded = [...prev];
        updatedIsTaskAdded[index] = true;
        return updatedIsTaskAdded;
      });
    } else {
      toast.error("URL already exists in tasks array");
    }
  };

  // console.log(selectedTask);
  const handleTaskClick = (task) => {
    setSelectedTask((prev) => [...prev, task]);
  };
  return (
    <div className="bg-[#060B12] relative py-[2rem] rounded-md w-[100%] min-w-[15rem] lg:w-[50rem] xl:w-[50rem] 2xl:w-[65rem] px-[1rem] lg:px-[3rem] text-[#E8E8E8]r">
      <div className="flex flex-col gap-[1.5rem] md:gap-[2.56rem]">
        <div className="flex items-center gap-[1rem] px-[1rem]">
          <span title="Create Campaign">
            <Information />
          </span>
          <p className="text-[#E8E8E8] font-Poppins text-[1.25rem] font-[275] normal">
            Campaign tasks
          </p>
        </div>
        <div className="flex flex-col gap-[1.88rem] px-[1rem] md:px-[3rem] 2xl:px-[4.5rem]">
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
              console.log(task);
              return (
                <div className="flex gap-2 md:gap-5 my-5" key={index}>
                  <div
                    onClick={() =>
                      addTaskClickHandler(task.actions, url, index)
                    }
                    className="cursor-pointer py-[0.56rem] w-[15rem] px-[1rem] rounded-md border-[1px] border-[#295D7C4D] border-opacity-[30%] flex items-center justify-between"
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
                      required
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => handleInputChange(index, e)}
                      //   value={title}
                      //   onChange={titleOnchange}
                      //   onBlur={titleOnBlur}
                      placeholder="Enter your campaign title"
                      className="bg-transparent text-[#FFF] outline-none md:pr-[3rem] placeholder:text-[#A5A5A5] w-[100%] font-[275] bg-[#081017] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md px-[1rem] py-[0.62rem] text-[0.75rem] font-Poppins"
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
            })}
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
                type="text"
                name="point"
                id="point"
                //   value={title}
                //   onChange={titleOnchange}
                //   onBlur={titleOnBlur}
                placeholder="Enter your campaign title"
                className="text-[#FFF] px-[1rem] outline-none placeholder:text-[#A5A5A5] font-[275] bg-[#09141A] border-[#F0894F] border-[0.75px] rounded-md py-[0.62rem] text-[0.75rem] font-Poppins"
              />
            </div>
            <div className="flex gap-5 items-center text-[#FFF] mt-[2rem] md:mt-[1.5rem]">
              <Button>Save Draft</Button>
              <Button>Lunch</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignTasks;
