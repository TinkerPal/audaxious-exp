export const POST = [
  {
    id: "p1",
    userName: "AudaXious",
    title: "Massive ADX Airdrop",
    profilePicture: "/tweetImages/audaxious.svg",
    participants: 4000,
    time: "2",
    coin: { bnb: "10" },
    tasks: "4",
    tweet: {
      description:
        "🚀 AudaXious Engage-to-Earn platform is going live and we will be rewarding early members and adopters of our platform with ADX token. To participate, please complete the listed tasks.",
      images: [],
    },
    repost: false,
    like: false,
    comment: false,
    follow: false,
  },
  {
    id: "p2",
    userName: "Community",
    participants: 3000,
    title: "Community Launch Airdrop",
    time: "2",
    coin: { eth: "65" },
    profilePicture: "/tweetImages/profilePic1.svg",
    tasks: "7",
    tweet: {
      description:
        "1000 USDT airdrop to 100 most active AudaXious Community members. To qualify for the draw, pleace complete the listed tasks",
      images: [],
    },
    repost: false,
    like: false,
    comment: false,
    follow: false,
  },
  {
    id: "p3",
    participants: 5000,
    userName: "AudaXious",
    profilePicture: "/tweetImages/profilePic2.svg",
    time: "2",
    title: "Audaxious Launch",
    tweet: {
      description:
        "🚀 AudaXious Engage-to-Earn platform is going live and we will be rewarding early members and adopters of our platform with ADX token. To participate, please complete the listed tasks.",
      images: [],
    },
    repost: false,
    like: false,
    comment: false,
    follow: false,
    coin: { bnb: "6" },
    tasks: "3",
  },
  {
    id: "p4",
    participants: 500,
    userName: "AudaXious",
    title: "5,000,000 ADX Airdrop",
    profilePicture: "/tweetImages/profilePic3.svg",
    time: "2",
    tweet: {
      description:
        "🚀 AudaXious Engage-to-Earn platform is going live and we will be rewarding early members and adopters of our platform with ADX token. To participate, please complete the listed tasks.",
      images: [],
    },
    repost: false,
    like: false,
    comment: false,
    follow: false,
    coin: { bnb: "4" },
    tasks: "7",
  },
  {
    id: "p5",
    participants: 8000,
    userName: "AudaXious",
    title: "Audaxious Launch",
    profilePicture: "/tweetImages/profilePic4.svg",
    time: "2",
    tweet: {
      description:
        "🚀 AudaXious Engage-to-Earn platform is going live and we will be rewarding early members and adopters of our platform with ADX token. To participate, please complete the listed tasks.",
      images: ["/tweetImages/nft.svg", "/tweetImages/nft2.svg"],
    },
    repost: false,
    like: false,
    comment: false,
    follow: false,
    coin: { eth: "65" },
    tasks: "7",
  },
  {
    id: "p6",
    participants: 10000,
    userName: "Community",
    title: "community Launch",
    profilePicture: "/tweetImages/audaxious.svg",
    time: "2",
    tweet: {
      description:
        "🚀 Bitcoin is undoubtedly the future of finance! With its growing popularity, experts predict that by 2025, this digital currency will revolutionize our economic landscape #holder #Cryptocurrency",
      images: ["/tweetImages/avatar.svg", "/tweetImages/cycling.svg"],
    },
    repost: false,
    like: false,
    comment: false,
    follow: false,
    coin: { eth: "65" },
    tasks: "7",
  },
  {
    id: "p7",
    participants: 3000,
    title: "Audaxious Launch",
    userName: "AudaXious",
    profilePicture: "/tweetImages/audaxious.svg",
    time: "2",
    tweet: {
      description:
        "🚀 Bitcoin is undoubtedly the future of finance! With its growing popularity, experts predict that by 2025, this digital currency will revolutionize our economic landscape #holder #Cryptocurrency",
      images: ["/tweetImages/avatar.svg", "/tweetImages/cycling.svg"],
    },
    repost: false,
    like: false,
    comment: false,
    follow: false,
    coin: { eth: "65" },
    tasks: "7",
  },
  {
    id: "p8",
    participants: 9000,
    userName: "AudaXious",
    title: "Audaxious Launch",
    profilePicture: "/tweetImages/audaxious.svg",
    time: "2",
    tweet: {
      description:
        "🚀 Bitcoin is undoubtedly the future of finance! With its growing popularity, experts predict that by 2025, this digital currency will revolutionize our economic landscape #holder #Cryptocurrency",
      images: ["/tweetImages/avatar.svg", "/tweetImages/cycling.svg"],
    },
    repost: false,
    like: false,
    comment: false,
    follow: false,
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

// spaces

export const SPACES = [
  {
    id: "s1",
    userName: "Afrobeats Web 3.0",
    src: "/tweetImages/profilePic1.svg",
    engagement: 200,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s2",
    userName: "Audaxious",
    src: "/tweetImages/audaxious.svg",
    engagement: 2000,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s3",
    userName: "NFT",
    src: "/tweetImages/profilePic2.svg",
    engagement: 200,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s4",
    userName: "Skillbit",
    src: "/tweetImages/profilePic3.svg",
    engagement: 100,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s5",
    userName: "Pension BTC",
    src: "/tweetImages/profilePic4.svg",
    engagement: 200,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s6",
    userName: "Afrobeats Web 3.0",
    src: "/tweetImages/profilePic1.svg",
    engagement: 200,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s7",
    userName: "Afrobeats",
    src: "/tweetImages/profilePic4.svg",
    engagement: 200,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s8",
    userName: "Afrobeats Web 3.0",
    src: "/tweetImages/profilePic1.svg",
    engagement: 200,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s9",
    userName: "Afrobeats Web 3.0",
    src: "/tweetImages/profilePic1.svg",
    engagement: 200,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s10",
    userName: "Afrobeats Web 3.0",
    src: "/tweetImages/profilePic1.svg",
    engagement: 200,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
  {
    id: "s11",
    userName: "Afrobeats Web 3.0",
    src: "/tweetImages/profilePic1.svg",
    engagement: 200,
    description: `Griffin AI Protocol is designed to bring the power of AI
    to the vast world of web3. It is an innovative trans media
    development studio`,
  },
];

export const TWITTERPOST = [
  {
    description: `🚀 AudaXious Engage-to-Earn platform is going live and we will be rewarding early members and adopters of our platform with ADX token. To participate, please complete the listed tasks.`,

    point: 7,
    task: 10,
  },
  {
    description: `🚀 Bitcoin is undoubtedly the future of finance! With its growing popularity, experts predict that by 2025, this digital currency will revolutionize our economic landscape #holder #Cryptocurrency`,
    imageUpload: ["/tweetImages/avatar.svg", "/tweetImages/cycling.svg"],
    point: 20,
    task: 10,
  },
  {
    description: `🚀 AudaXious Engage-to-Earn platform is going live and we will be rewarding early members and adopters of our platform with ADX token. To participate, please complete the listed tasks.`,

    point: 7,
    task: 10,
  },
  {
    description: `🚀 AudaXious Engage-to-Earn platform is going live and we will be rewarding early members and adopters of our platform with ADX token. To participate, please complete the listed tasks.`,
    imageUpload: ["/tweetImages/avatar.svg", "/tweetImages/cycling.svg"],
    point: 7,
    task: 10,
  },
  {
    description: `🚀 AudaXious Engage-to-Earn platform is going live and we will be rewarding early members and adopters of our platform with ADX token. To participate, please complete the listed tasks.`,

    point: 7,
    task: 10,
  },
  {
    description: `🚀 AudaXious Engage-to-Earn platform is going live and we will be rewarding early members and adopters of our platform with ADX token. To participate, please complete the listed tasks.`,

    point: 7,
    task: 10,
  },
  {
    description: `Hello Everyone, I am a fourth-year student of archi  at the Federal University of Technology Owerri. For this semester, we are tasked with a mass housing project with eco-friendliness objectives.`,
    imageUpload: ["/tweetImages/nft.svg", "/tweetImages/nft2.svg"],
    point: 10,
    task: 5,
  },
];
