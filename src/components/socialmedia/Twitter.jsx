import React from "react";

import { ReactComponent as ProfilePicture } from "../../assets/svg/dashboardSvg/profilePic.svg";
import { ReactComponent as MessageIcon } from "../../assets/svg/dashboardSvg/message.svg";
import { ReactComponent as RetweenIcon } from "../../assets/svg/dashboardSvg/retweet.svg";
import { ReactComponent as Like } from "../../assets/svg/dashboardSvg/like.svg";

const POST = [
  {
    id: "p1",
    userName: "justmylife_222",
    time: "2",
    tweet:
      "Hello Everyone, I am a fourth-year student of archi at the Federal University of Technology Owerri. For this semester, we are tasked with a mass housing project with eco-friendliness objectives. Please, if anyone has any resources that might be helpful, thank you!",
    repost: "125",
    like: "1200",
    quote: "10",
  },
  {
    id: "p2",
    userName: "justmylife_222",
    time: "2",
    tweet:
      "Hello Everyone, I am a fourth-year student of archi at the Federal University of Technology Owerri. For this semester, we are tasked with a mass housing project with eco-friendliness objectives. Please, if anyone has any resources that might be helpful, thank you!",
    repost: "125",
    like: "1200",
    quote: "10",
  },
  {
    id: "p3",
    userName: "justmylife_222",
    time: "2",
    tweet:
      "Hello Everyone, I am a fourth-year student of archi at the Federal University of Technology Owerri. For this semester, we are tasked with a mass housing project with eco-friendliness objectives. Please, if anyone has any resources that might be helpful, thank you!",
    repost: "125",
    like: "1200",
    quote: "10",
  },
  {
    id: "p4",
    userName: "justmylife_222",
    time: "2",
    tweet:
      "Hello Everyone, I am a fourth-year student of archi at the Federal University of Technology Owerri. For this semester, we are tasked with a mass housing project with eco-friendliness objectives. Please, if anyone has any resources that might be helpful, thank you!",
    repost: "125",
    like: "1200",
    quote: "10",
  },
];

const Twitter = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-[2rem] pl-[1.19rem]">
      {POST.map((post) => (
        <div
          key={post.id}
          className="border-[#314048] border-[0.5px] rounded-md"
        >
          <div className="flex justify-between mx-[0.81rem] mt-[0.9rem]">
            <div className="flex items-center gap-[0.75rem]">
              <button className="bg-[#0D2020] border-[1px] border-[#25D986] px-[0.5rem] py-[0.5rem] font-Poppins text-[0.6rem] font-[300] text-[#25D986] rounded-md">
                engage to earn
              </button>
              <button className="bg-[#1C1A28] border-[1px] border-[#C556E1] px-[0.5rem] py-[0.5rem] font-Poppins text-[0.6rem] font-[300] text-[#C556E1] rounded-md">
                Airdrops
              </button>
              <button className="bg-[#0D2027] border-[1px] border-[#7AE7E7] px-[0.5rem] py-[0.5rem] font-Poppins text-[0.6rem] font-[300] text-[#7AE7E7] rounded-md">
                engage to earn
              </button>
            </div>
            <div className="text-neutral-400">...</div>
          </div>
          <div className="h-[1px] bg-[#2A3C46] my-[1rem]"></div>
          <div className="p-[1rem]">
            <div className="text-neutral-400 flex items-start gap-5">
              <div>
                <ProfilePicture />
              </div>

              <div className="flex flex-col gap-[1rem]">
                <div className="flex flex-col">
                  <span>@{post.userName}</span>
                  <span className="text-[#929192] font-[500] text-[0.67rem]">
                    {post.time} seconds ago
                  </span>
                </div>
                <div className="w-[80%]">
                  <p className="text-[0.95rem]">{post.tweet}</p>
                </div>
                <div className="flex gap-[2.64rem]">
                  <div className="flex gap-[0.47rem]">
                    <span>
                      <MessageIcon />
                    </span>
                    <span>{post.quote}</span>
                  </div>
                  <div className="flex gap-[0.47rem]">
                    <span>
                      <RetweenIcon />
                    </span>
                    <span>{post.repost}</span>
                  </div>
                  <div className="flex gap-[0.47rem]">
                    <span>
                      <Like />
                    </span>
                    <span>{post.like}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Twitter;
