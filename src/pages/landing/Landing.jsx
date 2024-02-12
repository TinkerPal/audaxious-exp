import pathConstant from "../../routes/pathConstant";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import { ReactComponent as Left } from "../../assets/svg/edgeL.svg";
import { ReactComponent as LeftMobile } from "../../assets/svg/edgeMobileL.svg";
import { ReactComponent as Right } from "../../assets/svg/edgeR.svg";
import { ReactComponent as RightMobile } from "../../assets/svg/edgeRmobile.svg";
import { ReactComponent as Dashboard } from "../../assets/svg/dashboardHome.svg";
import { ReactComponent as People } from "../../assets/svg/family.svg";
import { ReactComponent as Ai } from "../../assets/svg/aiChat.svg";
import { ReactComponent as Chart } from "../../assets/svg/adoptionChart.svg";
import { ReactComponent as Airdrop } from "../../assets/svg/airDropMulti.svg";
import { ReactComponent as Chip } from "../../assets/svg/chip.svg";
import { ReactComponent as Chip2 } from "../../assets/svg/chip2.svg";
import { ReactComponent as Earnings } from "../../assets/svg/earnings.svg";
import { ReactComponent as Bag } from "../../assets/svg/dollarbag.svg";
import { ReactComponent as Reward } from "../../assets/svg/reward.svg";
import { ReactComponent as Content } from "../../assets/svg/createContent.svg";
import { ReactComponent as Build } from "../../assets/svg/buildConnect.svg";
import { ReactComponent as Schedule } from "../../assets/svg/schedule.svg";
import { ReactComponent as Trustees } from "../../assets/svg/trustees.svg";
import { ReactComponent as Network1 } from "../../assets/svg/network1.svg";
import { ReactComponent as Network2 } from "../../assets/svg/network2.svg";
import { ReactComponent as Apple } from "../../assets/svg/buttonApple.svg";
import { ReactComponent as Play } from "../../assets/svg/buttonPlay.svg";
import { ReactComponent as LineBtw } from "../../assets/svg/linePhone.svg";
import { ReactComponent as Dollar } from "../../assets/svg/dollar.svg";
import { ReactComponent as Dot } from "../../assets/svg/dots.svg";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>A DeSo platform where active members are rewarded </title>
        <meta name="description" content="" />
        <link rel="canonical" href={pathConstant.LANDING} />
      </Helmet>
      <Container>
        <section className="bg-homeScreen bg-no-repeat bg-contain">
          <div>
            <div className="flex flex-col justify-items-center container">
              <div className="border-[1.5px] border-[#383B42] rounded-sm mt-[2.5rem] mx-auto py-[6px] px-[16px] bg-[#2C2D30]">
                <p className="text-neutral-400 font-[300] font-Poppins text-[0.875rem]">
                  Welcome to the future of engagement
                </p>
              </div>
              <div className="mt-[4rem] md:mt-[5rem] lg:mt-[10rem] flex flex-col justify-center gap-[0.6rem] p-[0.65rem]">
                <div className="text-3.5xl font-normal">
                  <p className="leading-[124%] text-center text-[1.36rem] md:text-[2.5rem] xl:text-[3.5rem] font-[400] font-Poppins bg-gradient-to-l from-pink-400 to-blue-400 bg-clip-text text-transparent normal">
                    <span className="bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">
                      Providing
                    </span>{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                      web
                    </span>{" "}
                    3.0 benefits
                    <br />{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                      through
                    </span>{" "}
                    social networks
                  </p>
                </div>
                <div className="mt-[1rem] mb-[3rem]">
                  <p className="text-center font-Poppins text-[1rem] md:text-[1.5rem] text-[#91A9BA] font-[275] leading-normal normal">
                    Seamlessly connecting millions of social network users to
                    web3 and its benefits.
                    <br /> With AI and Web3, AudaXious offers projects an
                    optimal way to incentivize
                    <br /> members, grow communities, and enhance adoption
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* remember responsiveness for mobile */}
          <div className="container">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center">
                <div className="hidden md:block mt-[0rem]">
                  <Left />
                </div>
                <div className="block md:hidden mt-[0rem]">
                  <LeftMobile />
                </div>
                <div className="mt-[-0.7rem] md:mt-[-1rem] px-[1rem] md:px-[2rem]">
                  <button
                    style={{ whiteSpace: "nowrap" }}
                    className="rounded-sm bg-[#EBEDED] px-[0.5rem] md:px-[0.7rem] py-[0.5rem] md:py-[0.5rem] font-Poppins text-[1rem] font-[400] text-[#060B12] leading-[140%]"
                  >
                    Create Account
                  </button>
                </div>
                <div className="hidden md:block mt-[0rem]">
                  <Right />
                </div>
                <div className="block md:hidden mt-[0rem]">
                  <RightMobile />
                </div>
              </div>
              <div className="mt-[-11rem] md:mt-[-7rem] lg:mt-[-3.2rem]">
                <Dashboard />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-[-7rem] md:mt-[0rem]">
            <div className="w-[100%] h-[1px] bg-[#323A49]"></div>
            <div className="rounded-sm border-[#323A49] border-[0.89px] p-[1rem] w-[50%] flex justify-between items-center gap-[0.5rem]">
              <Dot />
              <p
                className="text-[#79C4EC] font-[300] text-[0.76rem] md:text-[1.25rem] text-center font-Poppins"
                style={{ whiteSpace: "nowrap" }}
              >
                Projects & Brands can now
              </p>
              <Dot />
            </div>
            <div className="w-[100%] h-[1px] bg-[#323A49]"></div>
          </div>
          <div className="flex flex-col container mt-[2.4rem] md:mt-[5rem] gap-[3rem] md:gap-[0.3rem]">
            <div className="flex flex-col md:flex-row justify-center xl:gap-[13rem] items-center gap-[2.5rem]">
              <div className="flex flex-col gap-[1.5rem] items-center md:items-start">
                <p className="text-[#E8E8E8] font-Poppins md:text-[1.2rem] lg:text-[2rem] text-[1.3rem] font-normal">
                  Expand reach and adoption
                </p>
                <div className="flex flex-col items-center md:items-start gap-[0.6rem]">
                  <div className="flex">
                    <div>
                      <People />
                    </div>
                    <div className="w-[18rem] md:w-[20rem] lg:w-[25rem]">
                      <p className="text-neutral-100 md:text-[1rem] lg:text-[1.25rem] text-[1rem] font-[100]">
                        Harness the power of community-driven marketing to
                        expand your product&apos;s reach and adoption by over 10
                        times
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <Ai />
                    </div>
                    <div className="w-[18rem] md:w-[20rem] lg:w-[25rem]">
                      <p className="text-neutral-100 md:text-[1rem] lg:text-[1.25rem] text-[1rem] font-[100]">
                        Use AI tools to build community support and retention
                        for your projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[20rem] md:w-[25rem]">
                <Chart />
              </div>
            </div>

            <div className="flex flex-col-reverse mt-[-2rem] md:mt-[0rem] md:flex-row md:justify-center items-center gap-[2.5rem] xl:gap-[13rem]">
              <div className="w-[20rem] md:w-[25rem]">
                <Airdrop />
              </div>
              <div className="flex flex-col gap-[1.5rem] items-center md:items-start">
                <p className="text-[#E8E8E8] font-Poppins md:text-[1.2rem] lg:text-[2rem] text-[1.3rem] font-normal">
                  Send Airdrops and Multi-tokens
                </p>
                <div className="flex flex-col items-center md:items-start gap-[0.6rem]">
                  <div className="flex">
                    <div>
                      <Chip />
                    </div>
                    <div className="w-[18rem] md:w-[20rem] lg:w-[25rem]">
                      <p className="text-neutral-100 md:text-[1rem] lg:text-[1.25rem] text-[1rem] font-[100]">
                        Seamless airdrops into social accounts of early adopters
                        of projects
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <Chip2 />
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-[0.6rem] w-[18rem] md:w-[20rem] lg:w-[25rem]">
                      <p className="text-neutral-100 md:text-[1rem] lg:text-[1.25rem] text-[1rem] font-[100]">
                        Token multi-sender supporting more than 400 crypto
                        currency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-[2rem] md:mt-[0rem]">
            <div className="w-[100%] h-[1px] bg-[#323A49]"></div>
            <div className="rounded-sm border-[#323A49] border-[0.89px] p-[1rem] w-[50%] flex justify-between items-center gap-[0.5rem]">
              <Dot />
              <p
                className="text-[#79C4EC] font-[300] text-[0.76rem] md:text-[1.25rem] text-center font-Poppins"
                style={{ whiteSpace: "nowrap" }}
              >
                Users are not left out
              </p>
              <Dot />
            </div>
            <div className="w-[100%] h-[1px] bg-[#323A49]"></div>
          </div>
          <div className="flex flex-col container mt-[-3.4rem] md:mt-[1rem] gap-[2.5rem] md:gap-[0.3rem]">
            <div className="flex flex-col md:flex-row justify-center xl:gap-[13rem] items-center">
              <div className="w-[20rem] md:w-[25rem] xl:w-[35rem]">
                <Earnings />
              </div>
              <div className="flex flex-col gap-[1.5rem] md:gap-[1rem] items-center md:items-start mt-[-5rem] md:mt-[0rem]">
                <p className="text-[#E8E8E8] font-Poppins md:text-[1.2rem] lg:text-[2rem] text-[1.3rem] font-normal">
                  Earn rewards while engaging
                </p>
                <div className="flex flex-col items-center md:items-start gap-[1.6rem] md:gap-[0.6rem]">
                  <div className="flex md:ml-[-1rem]">
                    <div>
                      <Bag />
                    </div>
                    <div className="w-[18rem] md:w-[20rem] lg:w-[25rem]">
                      <p className="text-neutral-100 md:text-[1rem] lg:text-[1.25rem] text-[1rem] font-[100]">
                        Earn exciting rewards when you like, comment, or share
                        posts on your portal
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <Reward />
                    </div>
                    <div className="w-[18rem] md:w-[20rem] lg:w-[25rem]">
                      <p className="text-neutral-100 md:text-[1rem] lg:text-[1.25rem] text-[1rem] font-[100]">
                        Rank high on our engagement leader board and win big in
                        out free to play contest
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-[2.5rem] xl:gap-[13rem]">
              <div className="flex flex-col gap-[1.5rem] items-center md:items-start">
                <p className="text-[#E8E8E8] font-Poppins md:text-[1.2rem] lg:text-[2rem] text-[1.3rem] font-normal">
                  Create content using AI
                </p>
                <div className="flex flex-col gap-[1.5rem] md:gap-[0.6rem]">
                  <div className="flex">
                    <div>
                      <Build />
                    </div>
                    <div className="w-[18rem] md:w-[20rem] lg:w-[25rem]">
                      <p className="text-neutral-100 md:text-[1rem] lg:text-[1.25rem] text-[1rem] font-[100]">
                        Build strong and engaging communities using our Ai
                        assisted content creating tool
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <Schedule />
                    </div>
                    <div className="w-[18rem] md:w-[20rem] lg:w-[25rem]">
                      <p className="text-neutral-100 md:text-[1rem] lg:text-[1.25rem] text-[1rem] font-[100]">
                        Plan and schedule contents in minutes not days, with our
                        post management system
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[18rem] md:w-[25rem]">
                <Content />
              </div>
            </div>
          </div>
          {/* remember responsiveness for mobile */}
          <div className="container flex flex-col gap-[2rem] items-center mt-[1rem] md:mt-[4rem]">
            <p className="text-[1rem] md:text-[1.5rem] font-[400] font-Poppins text-[#A5A5A5] normal">
              Trusted by 2500+ Crypto Project Owners Globally{" "}
            </p>
            <div>
              <Trustees />
            </div>
            <div className="w-[100%] md:w-[44rem] px-[2rem]">
              <p className="text-center font-Poppins text-[1rem] md:text-[1.35rem] font-[300] text-neutral-500 italic">
                “ AudaXious is undoubtedly the future of finance! With its
                growing popularity, experts predict that by 2025, this digital
                currency wll revolutionize our economic landscape As a long-time
                #holder “
              </p>
              <p className="text-center font-Poppins text-[1rem] md:text-[1.35rem] font-[500] text-neutral-300 mt-[1.5rem]">
                {" "}
                - Davies from Nextustech
              </p>
            </div>
          </div>

          <div className="bg-bgLanding bg-no-repeat bg-cover overflow-hidden mt-[3rem]">
            <div className="w-[100%] md:w-[35rem] container py-[2rem] md:py-[3rem] lg:py-[3rem] xl:py-[7rem]">
              <p className="text-[1rem] normal font-Poppins font-[300] text-center text-neutral-300">
                Harness the power of community-driven marketing to expand your
                product&apos;s reach and adoption by over 10 times, Link your
                social account to get started
              </p>
              <div className="mt-[2rem] flex flex-col justify-center items-center">
                <button className="rounded-sm bg-[#EBEDED] p-[0.7rem] font-Poppins text-[1rem] font-[400] text-[#060B12] leading-[140%]">
                  Create Account
                </button>
              </div>
            </div>
          </div>

          <div className="container block md:hidden">
            <div className="bg-heroCustom bg-no-repeat bg-cover pt-[2rem] pl-[1rem] pb-[1rem] pr-[0.8rem] md:w-[90%] lg:w-[auto] border-[3px] border-[#1A2935] rounded-md xl:pt-[55px] lg:pt-[40px] xl:pb-[92px] lg:pb-[80px] xl:pl-[42px] lg:pl-[52px] xl:pr-[32px] lg:pr-[32px] md:pt-[30px] md:pl-[42px] lg:ml-[0rem] xl:ml-[0rem] md:mx-[auto] lg:mx-[0rem] mt-[88px] self-center">
              <div className="flex gap-[14px] justify-between">
                <div className="flex flex-col gap-[36px] items-center md:items-start">
                  <p className="text-[1.5rem] xl:text-[2rem] lg:text-[1.2rem] font-[200] font-Poppins text-[#FFF] text-center md:text-start">
                    Join the AudaXious mobile community
                  </p>
                  <p className="xl:text-[1.5rem] lg:text-[1rem] text-[#E8E8E8] font-[245]">
                    Our mobile app helps you get a more personalized
                    <br /> contents, Access to notification specific updates
                  </p>
                  <div>
                    <button className="flex border-[#1A2935] border-[1px] rounded-lg py-[14px] px-[20px]">
                      <Apple />
                      <span className="mx-[0.5rem]">
                        <LineBtw />
                      </span>
                      <Play />
                      <span className="ml-[0.5rem] font-Poppins text-[16px] text-[#79C4EC] font-[300">
                        Download app
                      </span>
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                  <div className="absolute right-[70px] bottom-[-50px]">
                    <Network1 />
                  </div>
                  <div className="absolute right-[-15px] lg:top-[-8px] xl:top-[30px]">
                    <Network2 />
                  </div>
                  <div className="absolute right-[120px] lg:top-[-10px] xl:top-[30px]">
                    <Dollar />
                  </div>
                  <div className="absolute right-[335px] lg:top-[60px] xl:top-[100px]">
                    <Chart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Landing;
