import Container from "../../components/Container";
import { Helmet } from "react-helmet-async";
import pathConstant from "../../routes/pathConstant";
import { ReactComponent as Ones } from "../../assets/svg/border-one.svg";
import { ReactComponent as Two } from "../../assets/svg/border-two.svg";
import { ReactComponent as Three } from "../../assets/svg/border-three.svg";
import { ReactComponent as Community1 } from "../../assets/svg/community1.svg";
import { ReactComponent as Community2 } from "../../assets/svg/community2.svg";
import { ReactComponent as Community3 } from "../../assets/svg/community3.svg";
import { ReactComponent as Search } from "../../assets/svg/search.svg";
import { ReactComponent as Money } from "../../assets/svg/moneySecurity.svg";
import { ReactComponent as Mark } from "../../assets/svg/mark.svg";
import { ReactComponent as Network1 } from "../../assets/svg/network1.svg";
import { ReactComponent as Network2 } from "../../assets/svg/network2.svg";
import { ReactComponent as Apple } from "../../assets/svg/buttonApple.svg";
import { ReactComponent as Play } from "../../assets/svg/buttonPlay.svg";
import { ReactComponent as LineBtw } from "../../assets/svg/linePhone.svg";
import { ReactComponent as Rectangle } from "../../assets/svg/rectangle.svg";
import { ReactComponent as Rectangle2 } from "../../assets/svg/rectangle2.svg";
import { ReactComponent as RectangleMobile1 } from "../../assets/svg/rectangleMobile.svg";
import { ReactComponent as RectangleMobile2 } from "../../assets/svg/rectangleMobile2.svg";
import { ReactComponent as RectangleMd } from "../../assets/svg/rectangleMd.svg";
import { ReactComponent as Rectangle2Xl } from "../../assets/svg/rectangle2xl.svg";
import { ReactComponent as Star } from "../../assets/svg/startH.svg";
import { ReactComponent as Star2 } from "../../assets/svg/starH.svg";
import { ReactComponent as Dollar } from "../../assets/svg/dollar.svg";
import { ReactComponent as Chart } from "../../assets/svg/chartF.svg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>A DeSo platform where active members are rewarded </title>
        <meta name="description" content="" />
        <link rel="canonical" href={pathConstant.ABOUT} />
      </Helmet>

      <Container>
        <section className="flex flex-col items-center justify-items-center overflow-hidden">
          <div className="mt-[-60px] relative bg-buttonCustom bg-no-repeat bg-cover bg-opacity-600 py-[120px] px-[200px]">
            <div className="absolute bottom-[100px] right-20">
              <Star />
            </div>
            <div className="absolute bottom-15 left-20">
              <Star />
            </div>
            <div className="absolute top-[73px] left-60">
              <Star2 />
            </div>
            <button
              style={{ whiteSpace: "nowrap" }}
              className="px-[19px] py-[8px] border-[#314048] text-[#FFF] border-[2px] bg-neutral rounded-lg font-light font-Poppins"
            >
              About us
            </button>
          </div>
          <div className="container">
            <p className="xl:text-[2.7rem] lg:text-[2rem] md:text-[2rem] text-[20px] md:leading-[55px] font-Poppins font-[900] text-[#FFF] leading-[45px] mt-[-70px] text-center">
              Promote Projects. Build Communities. Earn Rewards
            </p>
          </div>
          <div className="container">
            <div className="relative pt-[2rem] bg-heroCustom bg-no-repeat bg-cover pl-[1rem] pb-[1rem] pr-[0.8rem] border-[3px] border-[#1A2935] rounded-md xl:pt-[55px] lg:pt-[40px] xl:pb-[92px] lg: pb-[80px] xl:pl-[42px] lg:pl-[52px] xl:pr-[32px] lg:pr-[32px] md:pt-[30px] md:pl-[42px] lg:ml-[0rem] xl:ml-[0rem] md:mx-[auto] lg:mx-[0rem] mt-[88px] self-center">
              <div className="hidden z-10 md:block absolute top-0 right-0">
                <Rectangle />
              </div>
              <div className="hidden md:block absolute top-0 right-0">
                <RectangleMd />
              </div>
              <div className="hidden lg:block absolute top-0 right-0">
                <Rectangle2 />
              </div>
              <div className="hidden xl:block absolute top-0 right-0">
                <Rectangle2Xl />
              </div>
              <div className="block z-10 md:hidden absolute top-0 right-0">
                <RectangleMobile1 />
              </div>
              <div className="block z-5 md:hidden absolute top-0 right-0">
                <RectangleMobile2 />
              </div>
              <div className="flex flex-col gap-[34px]">
                <h2 className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent text-[2rem] font-Poppins font-[500]">
                  Our Purpose
                </h2>
                <p className="font-Poppins text-[14px] md:text-[30px] lg:text-[2rem] font-[400] text-[#E8E8E8]">
                  Decentralized Social Blockchain
                </p>
                <div className="">
                  <p
                    className="font-Poppins xl:text-[1.5rem] md:text-[20px] text-[14px] font-light text-[#E8E8E8] normal"
                    style={{ fontWeight: "275" }}
                  >
                    We at audaxious are very concerned with helping brands
                    develop and scale
                    <br /> healthy communities, Improve engagements on social
                    post and provide product
                    <br /> owners with AI tools for content generation and
                    engagement analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[56px]">
            <p className="text-center font-Poppins text-[20px] md:text-[32px] font-[900] text-[#FFF]">
              Who can use Audaxious?
            </p>
            <div className=" px-[1rem] md:px-[0rem]">
              <p className="text-center text-[13px] md:text-[1.25rem] font-[275] font-Poppins text-[#F5F5F5] mt-[1rem]">
                Brands that care about reach and adoption, people that care
                <br /> about rewards. We’re giving you the audacity to
              </p>
            </div>
          </div>

          <div className="container flex flex-col md:w-[90%] lg:w-auto mt-[56px] gap-[56px] md:mx-[auto] lg:mx-[4rem] xl:mx-[0rem]">
            <div className="flex justify-between gap-20 items-center sm: flex-col md:flex-row">
              <div className="flex gap-6 flex-col md:flex-row justify-items-center items-center md:items-start md:justify-items-start w-[310px] md:w-[544px]">
                <div>
                  <Ones />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="xl:text-[2rem] lg:text-[1.6rem] font-[900] font-Poppins text-[#A5D7F2] text-center md:text-start">
                    Grow Communities
                  </p>

                  <p className="xl:text-[1.25rem] lg:text-[1rem] md:text-[0.6rem] font-[275] font-Poppins text-[#F0F0F0]">
                    Audaxious powers community growth and project success by
                    helping you schedule social post, using AI-driven tools and
                    automated analysis.
                  </p>
                </div>
              </div>

              <Community1 />
            </div>

            <div className="flex justify-between gap-20 items-center sm: flex-col md:flex-row flex-col-reverse">
              <Community2 />
              <div className="flex gap-6 flex-col md:flex-row justify-items-center items-center md:items-start md:justify-items-start  w-[310px] md:w-[544px]">
                <div>
                  <Two />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="xl:text-[2rem] lg:text-[1.6rem] font-[900] font-Poppins text-[#A5D7F2] text-center md:text-start">
                    Accelerate Engagements
                  </p>
                  <p className="xl:text-[1.25rem] lg:text-[1rem] md:text-[0.6rem] font-[275] font-Poppins text-[#F0F0F0]">
                    Boost your Brands exposure through our Play-to-Earn, and
                    Engage-to-earn contests, motivating active community members
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-20 items-center sm: flex-col md:flex-row">
              <div className="flex gap-6 flex-col md:flex-row justify-items-center items-center md:items-start md:justify-items-start  w-[310px] md:w-[544px]">
                <div>
                  <Three />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="xl:text-[1.8rem] lg:text-[1.6rem] font-[900] font-Poppins text-[#A5D7F2] text-center md:text-start">
                    Reward social engagements
                  </p>
                  <p className="xl:text-[1.25rem] lg:text-[1rem] md:text-[0.6rem] font-[275] font-Poppins text-[#F0F0F0]">
                    High quality engagements should be rewarded, take advantage
                    of our airdrop and multi-sender tools to streamline the
                    process
                  </p>
                </div>
              </div>

              <Community3 />
            </div>
          </div>
          <div className="mt-[56px] md:w-[90%] lg:w-[90%] xl:w-[100%] flex flex-col items-center">
            <h2 className="text-center font-Poppins text-[2.5rem] font-[500] text-[#EBEDED]">
              Our values
            </h2>
            <div className="mt-[32px] flex gap-[24px] sm: items-center sm: flex-col md:flex-wrap lg:flex-nowrap lg:flex-row">
              <div className="border-[#20475E] border-[2px] w-[90%] xl:w-[365px] lg:w-[300px] xl:h-[435px] h-[390px] lg:h-[500px] pb-[40px] pl-[28px] pr-[28px] flex flex-col rounded-sm bg-boxGrid bg-no-repeat bg-cover">
                <div className="pt-[56px] pb-[20px] bg-blur1 bg-no-repeat bg-contain">
                  <p className="text-[1.5rem] text-[#E6F1BA] font-Poppins font-400">
                    Transparency
                  </p>

                  <p className="text-[1.125rem] font-Poppins font-[275] text-[#A5A5A5] pt-[1.25rem]">
                    Our records are unchangeable openly accessible to everyone
                    in the participants in the network, promoting trust and
                    accountability within the audaxious eco-system.
                  </p>
                </div>
                <div className="mt-[2rem]">
                  <Search />
                </div>
              </div>
              <div className="border-[#20475E] border-[2px] w-[90%] xl:w-[365px] lg:w-[300px] xl:h-[435px] h-[410px] lg:h-[500px] pt-[56px] pb-[40px] pl-[28px] pr-[28px] flex flex-col rounded-sm bg-blur bg-no-repeat bg-center">
                <p className="text-[1.5rem] text-[#E49EF6] font-Poppins font-400">
                  Accountability
                </p>
                <p className="text-[1.125rem] font-Poppins font-[275] text-[#A5A5A5] pt-[1.25rem]">
                  We operate within established guidelines, and treat user data
                  and interactions with the utmost respect and responsibility.
                </p>
                <div className="mt-[5.3rem]">
                  <Mark />
                </div>
              </div>
              <div className="border-[#20475E] border-[2px] w-[90%] xl:w-[365px] lg:w-[300px] xl:h-[435px] h-[410px] lg:h-[500px] pt-[56px] pb-[40px] pl-[28px] pr-[28px] flex flex-col rounded-sm bg-blur2 bg-no-repeat bg-center">
                <p className="text-[1.5rem] text-[#A5D7F2] font-Poppins font-400">
                  Integrity
                </p>
                <p className="text-[1.125rem] font-Poppins font-[275] text-[#D3D3D3] pt-[1.25rem]">
                  we consistently deliver on our promises and commitments. This
                  includes the reliability of our AI tools, accuracy in
                  analysis, and the seamless execution of engagement strategies
                </p>
                <div className="mt-[2.1rem]">
                  <Money />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bg-heroCustom bg-no-repeat bg-cover pt-[2rem] pl-[1rem] pb-[1rem] pr-[0.8rem] md:w-[90%] lg:w-[auto] border-[3px] border-[#1A2935] rounded-md xl:pt-[55px] lg:pt-[40px] xl:pb-[92px] lg: pb-[80px] xl:pl-[42px] lg:pl-[52px] xl:pr-[32px] lg:pr-[32px] md:pt-[30px] md:pl-[42px] lg:ml-[0rem] xl:ml-[0rem] md:mx-[auto] lg:mx-[0rem] mt-[88px] self-center">
              <div className="flex gap-[14px] justify-between">
                <div className="flex flex-col gap-[36px]">
                  <p className="xl:text-[2rem] lg:text-[1.2rem] font-[900] font-Poppins text-[#FFF] text-center md:text-start">
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

export default About;
