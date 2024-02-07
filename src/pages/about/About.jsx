import Container from "../../components/Container";
import { Helmet } from "react-helmet-async";
import pathConstant from "../../routes/pathConstant";

const About = () => {
  return (
    <>
      <Helmet>
        <title>A DeSo platform where active members are rewarded </title>
        <meta name="description" content="" />
        <link rel="canonical" href={pathConstant.ABOUT} />
      </Helmet>

      <Container>
        <section className="flex flex-col items-center justify-items-center">
          <button className="pt-2 pb-2 pl-6 pr-6 border-slate-700 text-[#FFF] border-[2px] bg-neutral rounded-md mt-[60px] font-light font-Poppins">
            About us
          </button>
          <p className="xl:text-[2.5rem] lg:text-[2rem] md:text-[2.2rem] text-[20px] md:leading-[55px] font-Poppins font-[900] text-[#FFF] leading-[45px] mt-[70px] text-center">
            Promote Projects. Build Communities. Earn Rewards
          </p>
          <div className="px-[1rem] md:px-[0rem]">
          <div className="sm:w-[90%] pt-[2rem] pl-[1rem] pb-[1rem] pr-[0.8rem] md:w-[90%] lg:w-auto border-[3px] border-[#1A2935] rounded-md xl:pt-[55px] lg:pt-[40px] xl:pb-[92px] lg: pb-[80px] xl:pl-[42px] lg:pl-[52px] xl:pr-[32px] lg:pr-[32px] md:pt-[30px] md:pl-[42px] lg:ml-[3rem] xl:ml-[0rem] md:mx-[auto] lg:mx-[0rem] mt-[88px] self-center">
            <div className="flex flex-col gap-[34px]">
              <h2 className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent text-[32px] font-Poppins font-[900]">
                Our Purpose
              </h2>
              <p className="font-Poppins text-[14px] md:text-[40px] font-[400] text-[#EBEDED]">
                Decentralized Social Blockchain
              </p>
              <p className="font-Poppins xl:text-[24px] md:text-[20px] text-[14px] font-[275] text-[#F5F5F5]">
                We at audaxious are very concerned with helping brands develop
                and scale
                <br /> healthy communities, Improve engagements on social post
                and provide product
                <br /> owners with AI tools for content generation and
                engagement analysis
              </p>
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
          <div className="flex flex-col md:w-[90%] lg:w-auto mt-[56px] gap-[56px] md:mx-[auto] lg:mx-[4rem] xl:mx-[0rem]">
            <div className="flex justify-between gap-20 items-center sm: flex-col md:flex-row">
              <div className="flex gap-6 flex-col md:flex-row justify-items-center items-center md:items-start md:justify-items-start">
                <div className="rounded-full w-[54.8px] bg-[#172229] h-[54px] flex items-center justify-center border-[#20475E] border-[2px]">
                  <p className="font-Poppins text-[#79C4EC] font-[900] text-[24px]">
                    01
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="xl:text-[2rem] lg:text-[1.6rem] font-[900] font-Poppins text-[#A5D7F2] text-center md:text-start">
                    Grow Communities
                  </p>
                  <p className="xl:text-[1.25rem] lg:text-[1rem] md:text-[0.6rem] font-[275] font-Poppins text-[#F0F0F0]">
                    Audaxious powers community growth
                    <br /> and project success by helping you
                    <br /> schedule social post, using AI-driven
                    <br /> tools and automated analysis.
                  </p>
                </div>
              </div>

              <div className="w-[350px] h-[300px] bg-blue-500"></div>
            </div>

            <div className="flex justify-between gap-20 items-center sm: flex-col md:flex-row flex-col-reverse">
              <div className="w-[350px] h-[300px] bg-blue-500"></div>
              <div className="flex gap-6 flex-col md:flex-row justify-items-center items-center md:items-start md:justify-items-start">
                <div className="rounded-full w-[54.8px] bg-[#172229] h-[54px] flex items-center justify-center border-[#20475E] border-[2px]">
                  <p className="font-Poppins text-[#79C4EC] font-[900] text-[24px]">
                    02
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="xl:text-[2rem] lg:text-[1.6rem] font-[900] font-Poppins text-[#A5D7F2] text-center md:text-start">
                    Accelerate Engagements
                  </p>
                  <p className="xl:text-[1.25rem] lg:text-[1rem] md:text-[0.6rem] font-[275] font-Poppins text-[#F0F0F0]">
                    Boost your Brands exposure through our
                    <br /> Play-to-Earn, and Engage-to-earn contests,
                    <br /> motivating active community members
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-20 items-center sm: flex-col md:flex-row">
              <div className="flex gap-6 flex-col md:flex-row justify-items-center items-center md:items-start md:justify-items-start">
                <div className="rounded-full w-[54.8px] bg-[#172229] h-[54px] flex items-center justify-center border-[#20475E] border-[2px]">
                  <p className="font-Poppins text-[#79C4EC] font-[900] text-[24px]">
                    03
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="xl:text-[2rem] lg:text-[1.6rem] font-[900] font-Poppins text-[#A5D7F2] text-center md:text-start">
                    Reward social engagements
                  </p>
                  <p className="xl:text-[1.25rem] lg:text-[1rem] md:text-[0.8rem] font-[275] font-Poppins text-[#F0F0F0]">
                    High quality engagements should be rewarded,
                    <br /> take advantage of our airdrop and multi-sender
                    <br /> tools to streamline the process
                  </p>
                </div>
              </div>

              <div className="w-[350px] h-[300px] bg-blue-500"></div>
            </div>
          </div>
          <div className="mt-[56px] md:w-[90%] lg:w-[90%] xl:w-[100%] flex flex-col items-center">
            <h2 className="text-center font-Poppins text-[2rem] font-[900] text-[#EBEDED]">
              Our values
            </h2>
            <div className="mt-[32px] flex gap-[24px] sm: items-center sm: flex-col md:flex-wrap lg:flex-nowrap lg:flex-row">
              <div className="border-[#20475E] border-[2px] w-[90%] xl:w-[365px] lg:w-[300px] xl:h-[435px] lg: h-[400px] pt-[56px] pb-[40px] pl-[28px] pr-[28px] flex flex-col rounded-sm">
                <p className="text-[1.5rem] text-[#E6F1BA] font-Poppins font-400">
                  Transparency
                </p>
                <p className="text-[1.125rem] font-Poppins font-[275] text-[#A5A5A5] pt-[1.25rem]">
                  Our records are unchangeable openly accessible to everyone in
                  the participants in the network, promoting trust and
                  accountability within the audaxious eco-system.
                </p>
                <div className="w-[40px] h-[50px] bg-blue-500 mt-[2rem]"></div>
              </div>
              <div className="border-[#20475E] border-[2px] w-[90%] xl:w-[365px] lg:w-[300px] xl:h-[435px] lg: h-[400px] pt-[56px] pb-[40px] pl-[28px] pr-[28px] flex flex-col rounded-sm">
                <p className="text-[1.5rem] text-[#E49EF6] font-Poppins font-400">
                  Accountability
                </p>
                <p className="text-[1.125rem] font-Poppins font-[275] text-[#A5A5A5] pt-[1.25rem]">
                  We operate within established guidelines, and treat user data
                  and interactions with the utmost respect and responsibility.
                </p>
                <div className="w-[40px] h-[50px] bg-blue-500 mt-[4rem]"></div>
              </div>
              <div className="border-[#20475E] border-[2px] w-[90%] xl:w-[365px] lg:w-[300px] xl:h-[435px] lg: h-[400px] pt-[56px] pb-[40px] pl-[28px] pr-[28px] flex flex-col rounded-sm">
                <p className="text-[1.5rem] text-[#A5D7F2] font-Poppins font-400">
                  Integrity
                </p>
                <p className="text-[1.125rem] font-Poppins font-[275] text-[#D3D3D3] pt-[1.25rem]">
                  we consistently deliver on our promises and commitments. This
                  includes the reliability of our AI tools, accuracy in
                  analysis, and the seamless execution of engagement strategies
                </p>
                <div className="w-[40px] h-[50px] bg-blue-500 mt-[1rem]"></div>
              </div>
            </div>
          </div>
          <div className="border-[3px] border-[#1A2935] rounded-md xl:pt-[55px] lg:pt-[40px] xl:pb-[92px] lg: pb-[80px] xl:pl-[42px] lg:pl-[52px] xl:pr-[32px] lg:pr-[32px] md: p-[2rem] lg:ml-[0rem] xl:ml-[0rem] mt-[88px] self-center w-[90%] xl:w-[auto]">
            <div className="flex gap-[14px] justify-between">
              <div className="flex flex-col gap-[36px]">
                <p className="xl:text-[2rem] lg:text-[1.2rem] font-[900] font-Poppins text-[#FFF] text-center md:text-start">
                  Join the AudaXious mobile community
                </p>
                <p className="xl:text-[1.5rem] lg:text-[1rem] text-[#E8E8E8] font-[245]">
                  Our mobile app helps you get a more personalized
                  <br /> contents, Access to notification specific updates
                </p>
              </div>
              <div className="w-[350px] h-[100px] bg-blue-500 hidden md:block"></div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default About;
