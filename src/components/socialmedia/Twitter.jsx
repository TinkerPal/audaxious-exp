import { ReactComponent as ProfilePicture } from "../../assets/svg/dashboardSvg/profilePic.svg";
import { ReactComponent as MessageIcon } from "../../assets/svg/dashboardSvg/message.svg";
import { ReactComponent as RetweenIcon } from "../../assets/svg/dashboardSvg/retweet.svg";
import { ReactComponent as Like } from "../../assets/svg/dashboardSvg/like.svg";
import { ReactComponent as Friends } from "../../assets/svg/dashboardSvg/friendsPlus.svg";
import clsx from "clsx";

const POST = [
  {
    id: "p1",
    userName: "justmylife_222",
    time: "2",
    coin: { bnb: "10" },
    tasks: "4",
    tweet: {
      description:
        "🚀 Hello Everyone, I am a fourth-year student of archi at the Federal University of Technology Owerri. For this semester, we are tasked with a mass housing project with eco-friendliness objectives. Please, if anyone has any resources that might be helpful, thank you!",
      images: [],
    },
    repost: "125",
    like: "1200",
    quote: "10",
  },
  {
    id: "p2",
    userName: "justmylife_222",
    time: "2",
    coin: { eth: "65" },
    tasks: "7",
    tweet: {
      description:
        "🚀 Hello Everyone, I am a fourth-year student of archi at the Federal University of Technology Owerri. For this semester, we are tasked with a mass housing project with eco-friendliness objectives. Please, if anyone has any resources that might be helpful, thank you!",
      images: [],
    },
    repost: "125",
    like: "1200",
    quote: "10",
  },
  {
    id: "p3",
    userName: "justmylife_222",
    time: "2",
    tweet: {
      description:
        "🚀 Hello Everyone, I am a fourth-year student of archi at the Federal University of Technology Owerri. For this semester, we are tasked with a mass housing project with eco-friendliness objectives. Please, if anyone has any resources that might be helpful, thank you!",
      images: [],
    },
    repost: "125",
    like: "1200",
    quote: "10",
    coin: { bnb: "6" },
    tasks: "3",
  },
  {
    id: "p4",
    userName: "justmylife_222",
    time: "2",
    tweet: {
      description:
        "🚀 Hello Everyone, I am a fourth-year student of archi at the Federal University of Technology Owerri. For this semester, we are tasked with a mass housing project with eco-friendliness objectives. Please, if anyone has any resources that might be helpful, thank you!",
      images: [],
    },
    repost: "125",
    like: "1200",
    quote: "10",
    coin: { bnb: "4" },
    tasks: "7",
  },
  {
    id: "p5",
    userName: "justmylife_222",
    time: "2",
    tweet: {
      description: "🚀 Bitcoin is undoubtedly the Show more",
      images: ["/tweetImages/avatar.svg", "/tweetImages/cycling.svg"],
    },
    repost: "125",
    like: "1200",
    quote: "10",
    coin: { eth: "65" },
    tasks: "7",
  },
  {
    id: "p5",
    userName: "justmylife_222",
    time: "2",
    tweet: {
      description: "🚀 Bitcoin is undoubtedly the Show more",
      images: ["/tweetImages/avatar.svg", "/tweetImages/cycling.svg"],
    },
    repost: "125",
    like: "1200",
    quote: "10",
    coin: { eth: "65" },
    tasks: "7",
  },
  {
    id: "p6",
    userName: "justmylife_222",
    time: "2",
    tweet: {
      description: "🚀 Bitcoin is undoubtedly the Show more",
      images: ["/tweetImages/avatar.svg", "/tweetImages/cycling.svg"],
    },
    repost: "125",
    like: "1200",
    quote: "10",
    coin: { eth: "65" },
    tasks: "7",
  },
  {
    id: "p7",
    userName: "justmylife_222",
    time: "2",
    tweet: {
      description: "🚀 Bitcoin is undoubtedly the Show more",
      images: ["/tweetImages/avatar.svg", "/tweetImages/cycling.svg"],
    },
    repost: "125",
    like: "1200",
    quote: "10",
    coin: { eth: "65" },
    tasks: "7",
  },
];

const Twitter = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-[1.25rem] gap-x-[2rem] pt-[2rem] pl-[0rem] max-h-[390px] overflow-y-auto">
      {POST.map((post) => (
        <div
          key={post.id}
          className="border-[#314048] border-[0.5px] rounded-[20px] bg-heroCustom bg-no-repeat bg-cover"
        >
          <div className="flex justify-between mx-[0.81rem] mt-[0.9rem]">
            <div className="flex items-center gap-[0.75rem]">
              <button className="bg-[#152A39] border-[1px] border-[#5a8686] px-[9px] py-[6px] font-Poppins text-[0.6rem] font-[300] text-[#87cece] rounded-[26px]">
                Tasks | {post.tasks}/10
              </button>
              <button
                className={clsx(
                  "border-[1px] px-[9px] py-[6px] font-Poppins text-[0.6rem] font-[300] text-[#C556E1] rounded-[26px]",
                  post.coin.eth
                    ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                    : "bg-[#2C2C2C] text-[#E1D356] border-[#708026]"
                )}
              >
                engage to earn |{" "}
                {post.coin.eth
                  ? `${post.coin.eth} ETH`
                  : `${post.coin.bnb} BNB`}
              </button>
            </div>
          </div>
          <div className="h-[1px] bg-[#2A3C46] my-[1rem]"></div>
          <div className="relative pb-[13px] px-[1rem]">
            <div className="text-neutral-400 flex flex-col gap-[13px]">
              <div className="flex items-center gap-3">
                <div>
                  <ProfilePicture />
                </div>

                <span>@{post.userName}</span>
                <span className="text-[#929192] font-[500] text-[0.67rem]">
                  {"Dec 13, 7:44 PM"}
                </span>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <div className="w-[100%] flex flex-col gap-[1rem]">
                  <p className="text-[0.95rem]">{post.tweet?.description}</p>
                  {post && post.tweet && post.tweet.images.length > 0 && (
                    <div className="flex gap-[8px] mb-[30px]">
                      {post.tweet.images.map((image) => (
                        <div
                          key={image}
                          className="h-[4rem] w-[10rem] bg-white rounded-[8px] object-cover"
                        >
                          <img
                            src={image}
                            width={"400"}
                            height={"400"}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                    // <div className="flex flex-wrap gap-[8px] mb-[30px]">
                    //   <div className="h-[4rem] w-[10rem] bg-white rounded-[8px] object-cover">
                    //     <img
                    //       src="/tweetImages/cycling.svg"
                    //       width={"400"}
                    //       height={"400"}
                    //       alt="cyling"
                    //     />
                    //   </div>
                    //   <div className="h-[4rem] w-[10rem] bg-white rounded-[8px]">
                    //     <img
                    //       src="/tweetImages/avatar.svg"
                    //       width={"400"}
                    //       height={"400"}
                    //       alt="avatar"
                    //     />
                    //   </div>
                    // </div>
                  )}
                </div>
                <div className="flex items-baseline">
                  <div className="flex justify-between gap-1">
                    <div className="flex gap-[0.4rem]">
                      <span>
                        <MessageIcon />
                      </span>
                      <span>{post.quote}</span>
                    </div>
                    <div className="flex gap-[0.4rem]">
                      <span>
                        <RetweenIcon />
                      </span>
                      <span>{post.repost}</span>
                    </div>
                    <div className="flex gap-[0.4rem]">
                      <span>
                        <Like />
                      </span>
                      <span>{post.like}</span>
                    </div>
                    <div className="">
                      <span>
                        <Friends />
                      </span>
                    </div>
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
