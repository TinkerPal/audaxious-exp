export const POST = [
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
  {
    id: "p8",
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

export const getTweetById = (id) => {
  const tweet = POST.find((item) => item.id === id);
  return tweet;
};

export const TOPEARNERS = [
  {
    id: "t1",
    name: "Blessing",
    coin: { eth: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t2",
    name: "JacobNFT",
    coin: { btc: "0.10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t3",
    name: "Adams",
    coin: { eth: "0.0010" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t4",
    name: "Osazuwa",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t5",
    name: "Ofunameh",
    coin: { btc: "100" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t6",
    name: "Love",
    coin: { eth: "50" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t7",
    name: "Ahmed",
    coin: { eth: "30" },
    src: "/tweetImages/cycling.svg",
  },
  {
    id: "t8",
    name: "Habibat",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t9",
    name: "OdogwuBTC",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t10",
    name: "OdogwuBTC",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t11",
    name: "OdogwuBTC",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t12",
    name: "OdogwuBTC",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t13",
    name: "OdogwuBTC",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t14",
    name: "OdogwuBTC",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t15",
    name: "OdogwuBTC",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t16",
    name: "OdogwuBTC",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
  {
    id: "t17",
    name: "OdogwuBTC",
    coin: { btc: "10" },
    src: "/tweetImages/avatar.svg",
  },
];
