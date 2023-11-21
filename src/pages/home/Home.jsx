import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pathConstant from '../../routes/pathConstant';
import Accordion from '../../components/Accordion';
import { feedback } from '../../constants/globalConstant';

import arrowLeft from '../../assets/svg/arrow-left.svg';
import arrowRight from '../../assets/svg/arrow-right.svg';
import gift from '../../assets/svg/gift.svg';
import medal from '../../assets/svg/medal.svg';
import globe from '../../assets/svg/globe.svg';
import money from '../../assets/svg/money.svg';
import ai from '../../assets/svg/ai.svg';
import adoption from '../../assets/svg/adoption.svg';
import air from '../../assets/svg/air.svg';
import sender from '../../assets/svg/sender.svg';

import { ReactComponent as Apple } from '../../assets/svg/apple.svg';
import { ReactComponent as Google } from '../../assets/svg/google.svg';
import { ReactComponent as App } from '../../assets/svg/app.svg';
import { ReactComponent as Line } from '../../assets/svg/saying.svg';
import { ReactComponent as Line2 } from '../../assets/svg/question.svg';
import { ReactComponent as Line3 } from '../../assets/svg/trending-line.svg';
import { ReactComponent as Member } from '../../assets/svg/member.svg';
import { ReactComponent as Project } from '../../assets/svg/project.svg';

import Testimonial from '../../components/Testimonial';
import TestimonialTwo from '../../components/TestimonialTwo';
import Container from '../../components/Container';

const Home = () => {
  const [tab, setTab] = useState(0);
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };

  const swiperProps = {
    navigation: false,
    modules: [Autoplay, Navigation],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  const CustomPrevButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className='border border-[#2E2E2E] px-6 py-3 rounded-[4px]'
    >
      <img width='20' src={arrowLeft} alt='' />
    </button>
  );

  const CustomNextButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className='border border-[#2E2E2E] px-6 py-3 rounded-[4px]'
    >
      <img width='20' src={arrowRight} alt='' />
    </button>
  );

  return (
    <>
      <Helmet>
        <title>A DeSo platform where active members are rewarded </title>
        <meta name='description' content='' />
        <link rel='canonical' href={pathConstant.HOME} />
      </Helmet>

      {/* Hero section  */}
      <Container>
        <section id='Home' className='container pt-8'>
          <div className='flex flex-col lg:bg-custom md:max-h-[512px] overflow-hidden w-full bg-no-repeat bg-center items-center justify-center md:border-[2px] md:border-[#24343D] md:py-24 py-10 rounded-[24px]'>
            <h1 className='lg:text-[72px] md:text-[52px] text-[26px] leading-[36px] md:leading-[60px] lg:leading-[85px] font-semibold font-Bricolage_Grotesque text-center'>
              <p className='bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent'>
                <span className='text-[#EBEDED]'>Providing </span>
                web 3.0 benefits
                <br /> through social networks
              </p>
            </h1>
            <p className='text-[#A2B3BC] font-Poppins font-normal text-[15px] md:text-[18px] text-center mt-6'>
              Seamlessly connecting millions of social network users to web3 and
              its benefits.
              <br className='hidden md:block' />
              With AI and Web3, AudaXious offers projects an optimal way to
              incentivize
              <br className='hidden md:block' />
              members, grow communities, and enhance adoption
            </p>
            {/* <p className='text-[#A2B3BC] font-Poppins font-normal text-[15px] md:text-[18px] text-center mt-6'>
            Using tech and AI to easily connect millions to web3 and share
            <br className='hidden md:block' />
            blockchain benefits with social network users
          </p> */}
            <div className='flex items-center gap-6 pt-8'>
              <button className='bg-[#555656] py-2 md:px-10 px-8 rounded-[4px] border-[2px] border-[#818282] text-[#FDFDFD] md:text-[18px] text-[10.95px] font-normal font-Poppins'>
                Create account
              </button>
              <button className='bg-[#79C4EC] py-2 md:px-10 px-8 rounded-[4px] border-[2px] border-[#15151A] text-[#151519] md:text-[18px] text-[10.95px] font-normal font-Poppins'>
                Engage Portal
              </button>
            </div>
          </div>
        </section>

        {/* Active Users Section  */}
        <div className='container py-10 md:py-20'>
          <div className='flex items-center justify-center md:gap-x-28 gap-x-10'>
            <div>
              <h2 className='text-[#D6D8D8] leading-[44px] text-[20px] md:text-[40px] font-medium font-Bricolage_Grotesque text-center'>
                3,200
              </h2>
              <p className='text-[#818282] font-Poppins text-[13.5px] md:text-[18px] font-normal'>
                Active Users
              </p>
            </div>
            <div>
              <h2 className='text-[#D6D8D8] leading-[44px] text-[20px] md:text-[40px] font-medium font-Bricolage_Grotesque text-center'>
                500
              </h2>
              <p className='text-[#818282] font-Poppins text-[13.5px] md:text-[18px] font-normal'>
                Downloads
              </p>
            </div>
            <div>
              <h2 className='text-[#D6D8D8] leading-[44px] text-[20px] md:text-[40px] font-medium font-Bricolage_Grotesque text-center'>
                107
              </h2>
              <p className='text-[#818282] font-Poppins text-[13.5px] md:text-[18px] font-normal'>
                Communities
              </p>
            </div>
          </div>
        </div>

        {/* Tabs  */}

        <section id='About' className='container pt-10 md:pt-0'>
          <div className='flex justify-center'>
            {[
              { label: 'Member Benefits', SvgIcon: Member },
              { label: 'Project Benefits', SvgIcon: Project },
            ].map(({ label, SvgIcon }, index) => {
              return (
                <div key={index} className='relative'>
                  <button
                    className={clsx(
                      'flex items-center md:gap-3 gap-1 lg:px-28 md:px-16 text-[13.5px] px-3 py-3 relative rounded-[4px] font-Bricolage_Grotesque md:text-[20px] font-normal leading-[38px]',
                      tab === index
                        ? 'bg-[#95CAE8] bg-opacity-10 text-[#79C4EC]'
                        : 'bg-[#13161E] text-[#cbcdcd]'
                    )}
                    onClick={() => setTab(index)}
                  >
                    <SvgIcon
                      style={{ fill: tab === index ? '#79c4ec' : '#909292' }}
                    />
                    {label}
                  </button>
                  {tab === index && (
                    <div className='absolute bottom-0 w-full h-1 transform -translate-x-1/2 bg-[#95CAE8] left-1/2' />
                  )}
                </div>
              );
            })}
          </div>
          <div>{[<>{memberBenefitTab}</>, <>{projectBenefitTab}</>][tab]}</div>
        </section>

        {/* Trending Communities */}
        <section className='container'>
          <div className='py-10 mt-28 border-[2px] border-r-0 border-[#24343D] rounded-l-[24px]'>
            <div className='container flex items-start justify-between heading-secondary'>
              <div>
                <h3 className='text-white font-Bricolage_Grotesque text-[20px] md:text-[32px] font-normal'>
                  Trending Communities
                </h3>
                <div className='hidden md:block'>
                  <Line3 />
                </div>
                <p className='text-[#968F8F] font-Poppins font-normal text-[16px] md:text-[20px] mt-1'>
                  View trending communities
                </p>
              </div>

              <section className='hidden md:block'>
                <div className='flex items-center gap-6'>
                  <CustomPrevButton
                    onClick={() => swiperRefLocal?.current?.swiper?.slidePrev()}
                  />
                  <CustomNextButton
                    onClick={() => swiperRefLocal?.current?.swiper?.slideNext()}
                  />
                </div>
              </section>
            </div>
            <div className='lg:ml-8 pt-7'>
              <Swiper
                grabCursor
                effect='slide'
                speed={1000}
                {...swiperProps}
                ref={swiperRefLocal}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                  580: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                  },
                  1240: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                  },
                  2500: {
                    slidesPerView: 4.5,
                    spaceBetween: 10,
                  },
                }}
              >
                {feedback.map(
                  ({
                    imgUrl,
                    profileUrl,
                    title,
                    peopleUrl,
                    reaction,
                    text,
                  }) => (
                    <SwiperSlide
                      key={uuidv4()}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className='bg-[#01040B] border border-[#24343D] rounded-[8px]'>
                        <div className='flex justify-center'>
                          <img src={imgUrl} alt='' />
                        </div>
                        <div className='flex items-center justify-between p-4'>
                          <div className='flex items-center gap-2'>
                            <img src={profileUrl} alt='' />
                            <p className='text-[15px] font-Bricolage_Grotesque text-[#fff] font-normal'>
                              {title}
                            </p>
                          </div>
                          <div className='flex items-center gap-2'>
                            <img src={peopleUrl} alt='' />
                            <p className='text-[18px] font-Bricolage_Grotesque text-[#4D5056] font-light'>
                              {reaction}
                            </p>
                          </div>
                        </div>
                        <p className='text-[#81858D] text-[14px] font-normal font-Poppins px-4 mb-6'>
                          {text}
                        </p>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </section>

        {/* FAQ's Section  */}
        <div className='container pb-8 pt-28'>
          <div className='grid max-w-[1190px] items-start justify-center grid-cols-1 mx-auto md:grid-cols-2'>
            <div className='text-center md:text-left'>
              <h3 className='font-Bricolage_Grotesque text-[25px] md:text-[32px] font-medium text-[#fff] mb-4'>
                Frequently Asked Questions
              </h3>
              <div className='hidden md:block'>
                <Line2 />
              </div>
              <p className='text-[#968F8F] font-Poppins text-[18px] font-light md:text-start mt-3'>
                Find answers to questions others
                <br /> have asked
              </p>
            </div>

            <div className='max-w-[649px] pt-8 md:pt-0'>
              <Accordion />
            </div>
          </div>
        </div>

        {/* Testimonial Section  */}
        <div className='py-20'>
          <div className='container flex flex-col items-center justify-center text-center'>
            <h3 className='font-Bricolage_Grotesque text-[25px] md:text-[32px] font-medium text-[#fff] mb-3'>
              What people are saying
            </h3>
            <div className='hidden md:block'>
              <Line />
            </div>
            <p className='text-[#968F8F] font-Poppins text-[17px] md:text-[20px] font-light md:pt-3'>
              Hear from our community of people who have tried us
            </p>
          </div>
          <Testimonial />
          <TestimonialTwo />
        </div>

        {/* Download App Section  */}
        <section id='Download App' className='py-10 md:mt-10 bg-[#13161E]'>
          <div className='container flex flex-wrap items-center justify-center text-center gap-y-12 md:gap-x-32'>
            <div>
              <h3 className='text-[#FFFFFF] font-medium text-[27px] md:text-[32px] font-Bricolage_Grotesque'>
                Download Our mobile app
              </h3>
              <p className='font-Poppins text-[17px] lg:text-left font-light text-[#968F8F] leading-[28px] mb-4'>
                Do more with audaxious, downlaod
                <br /> the audaxious mobile app to get
                <br />
                started
              </p>
              <div className='flex items-center gap-4'>
                <Apple />
                <Google />
              </div>
            </div>
            <App />
          </div>
        </section>

        {/* Get Started Section  */}
        <div className='container py-20'>
          <div className='flex flex-col items-center justify-center text-center'>
            <h2 className='bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent font-Bricolage_Grotesque font-medium text-[36px]'>
              Get Started With Audaxious
            </h2>
            <p className='text-[#EBEDED] font-Poppins text-[18px] leading-[30px] font-light mb-6 mt-2'>
              Earn rewards. Promote Products & Brands. Build Communities{' '}
            </p>
            <button className='bg-[#EBEDED] rounded-[4px] font-Raleway text-[#151519] text-[18px] font-medium py-3 px-12'>
              Create account
            </button>
          </div>
        </div>
        {/* <div
        className='container relative'
        style={{
          background:
            'linear-gradient(to right, rgba(36, 52, 61, 0) 0%, rgba(36, 52, 61, 0.5) 50%, rgba(36, 52, 61, 0) 100%)',
        }}
      >
        <div className='border-b-[1px] border-[#71757D]'></div>
      </div> */}
      </Container>
    </>
  );
};

export default Home;

const memberBenefitTab = (
  <>
    <div className='pt-8 md:pt-14'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {/* First Card */}
        <div className='bg-[#95CAE8] bg-opacity-5 border-[2px] h-[260px]  border-[#1F2738] rounded-[12.55px]'>
          <div className='text-[#EBEDED] flex items-start justify-center gap-6 pt-16'>
            <img src={gift} className='w-10 mt-2' />
            <div>
              <h3 className='text-[22px] font-medium font-Bricolage_Grotesque'>
                Engage & earn rewards
              </h3>
              <p className='text-[16px] font-Poppins font-normal mt-2'>
                Earn exciting rewards when you
                <br /> like, comment or share posts
                <br /> on our portal
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className='bg-[#E1B47E] bg-opacity-5 border-[2px] border-[#33281C] rounded-[12.55px] h-[260px]'>
          <div className='text-[#EBEDED] flex items-start justify-center gap-6 pt-16'>
            <img src={medal} className='w-10 mt-2' />
            <div>
              <h3 className='text-[22px] font-medium font-Bricolage_Grotesque'>
                Free to Play Contests
              </h3>
              <p className='text-[16px] font-Poppins font-normal mt-2'>
                Rank top on our engagement
                <br /> leaderboard and qualify for periodic
                <br /> Win-Big free-to-play contest.
              </p>
            </div>
          </div>
        </div>

        {/* Third Card  */}
        <div className='bg-[#BE96DE] bg-opacity-5 border-[2px] border-[#3F314B] rounded-[12.55px] h-[260px]'>
          <div className='text-[#EBEDED] flex items-start justify-center gap-6 pt-16'>
            <img src={globe} className='w-10 mt-2' />
            <div>
              <h3 className='text-[22px] font-medium font-Bricolage_Grotesque'>
                Web 3 Seamless Access
              </h3>
              <p className='text-[16px] font-Poppins font-normal mt-2'>
                Create simple social media-based
                <br /> wallet with seamless access to web3
                <br /> tools and features.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Card  */}
        <div className='bg-[#74AA9C] bg-opacity-5 border-[2px] border-[#243833] rounded-[12.55px] h-[260px]'>
          <div className='text-[#EBEDED] flex items-start justify-center gap-6 pt-16'>
            <img src={money} className='w-10 mt-2' />
            <div>
              <h3 className='text-[22px] font-medium font-Bricolage_Grotesque'>
                Content creation revenue
              </h3>
              <p className='text-[16px] font-Poppins font-normal mt-2'>
                Generate revenue by creating conten
                <br /> and offering other marketing services
                <br /> for products and projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const projectBenefitTab = (
  <>
    <div className='pt-8 md:pt-14'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {/* First Card */}
        <div className='bg-[#040810] bg-opacity-10 border-[2px] border-[#1F2738] rounded-[12.55px] h-[260px]'>
          <div className='text-[#EBEDED] flex items-start justify-center gap-6 lg:pt-16 p-6'>
            <img src={ai} className='mt-2 w-14' />
            <div>
              <h3 className='text-[22px] font-medium font-Bricolage_Grotesque'>
                Build Communities Using AI{' '}
              </h3>
              <p className='text-[16px] font-Poppins font-normal mt-2'>
                Leverage AI tools to optimally build
                <br />
                strong and engaging community
                <br /> support for your project
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className='bg-[#040810] border-[2px] border-[#1F2738] rounded-[12.55px] h-[260px]'>
          <div className='text-[#EBEDED] flex items-start justify-center gap-6 lg:pt-16 p-6'>
            <img src={adoption} className='mt-2 w-14' />
            <div>
              <h3 className='text-[22px] font-medium font-Bricolage_Grotesque'>
                10X Reach & Adoption{' '}
              </h3>
              <p className='text-[16px] font-Poppins font-normal mt-2'>
                Harness the power of community-
                <br className='hidden lg:block' />
                driven marketing to expand your
                <br className='hidden lg:block' /> product's reach and adoption
                by <br className='hidden lg:block' />
                over 10 times
              </p>
            </div>
          </div>
        </div>

        {/* Third Card  */}
        <div className='bg-[#040810] border-[2px] border-[#1F2738] rounded-[12.55px] h-[260px]'>
          <div className='text-[#EBEDED] flex items-start justify-center gap-6 lg:pt-16 p-6'>
            <img src={sender} className='mt-2 w-14' />
            <div>
              <h3 className='text-[22px] font-medium font-Bricolage_Grotesque'>
                Multisender & Airdrop Tools{' '}
              </h3>
              <p className='text-[16px] font-Poppins font-normal mt-2'>
                Access to token multi-sender feature
                <br className='hidden lg:block' /> and airdrop tools which
                supports
                <br className='hidden lg:block' /> transfer to wallets and
                social <br className='hidden lg:block' />
                media accounts
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Card  */}
        <div className='bg-[#040810] border-[2px] border-[#1F2738] rounded-[12.55px] h-[260px]'>
          <div className='text-[#EBEDED] flex items-start justify-center gap-6 lg:pt-16 p-6'>
            <img src={air} className='mt-2 w-14' />
            <div>
              <h3 className='text-[22px] font-medium font-Bricolage_Grotesque'>
                Automate Your Community{' '}
              </h3>
              <p className='text-[16px] font-Poppins font-normal mt-2'>
                Automate your community activities,
                <br className='hidden lg:block' /> generate content using AI,
                and establish
                <br className='hidden lg:block' /> an engagement-reward
                structure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>{' '}
  </>
);
