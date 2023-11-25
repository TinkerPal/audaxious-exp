import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';

import engageBg from '../../assets/svg/engage-bg.svg';

import { ReactComponent as Twitter } from '../../assets/svg/engage-twitter.svg';
import { ReactComponent as Discord } from '../../assets/svg/engage-discord.svg';
import { ReactComponent as Telegram } from '../../assets/svg/engage-telegram.svg';
import { ReactComponent as Facebook } from '../../assets/svg/engage-facebook.svg';
import { ReactComponent as Instagram } from '../../assets/svg/engage-instagram.svg';
import { ReactComponent as ArchitectureImg } from '../../assets/svg/architechture.svg';
import { ReactComponent as Comment } from '../../assets/svg/comment.svg';
import { ReactComponent as Share } from '../../assets/svg/share.svg';
import { ReactComponent as Likes } from '../../assets/svg/likes.svg';

import PathConstant from '../../routes/pathConstant';
import SearchBar from '../../components/SearchBar';
import { engagePortalArchitecture } from '../../constants/globalConstant';

const Dashboard = () => {
  const [tab, setTab] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Audaxious</title>
        <meta
          name='description'
          content='Create account so you can start trading tokens'
        />
        <link rel='canonical' href={PathConstant.DASHBOARD} />
      </Helmet>

      <div className='container'>
        <div className='border-[0.5px] border-[#24343D] rounded-[8px] min-h-screen'>
          <div className='bg-[#C1E4F6] mx-2 mt-2'>
            <div className='flex items-center justify-between md:px-10'>
              <div>
                <h2 className='font-Bricolage_Grotesque font-normal leading-5 text-center text-[16px] md:text-[32px] md:leading-[36px] text-[#000]'>
                  Engage & Earn Portal
                </h2>
                <p className='font-Poppins text-center text-[10px] leading-3 md:text-[16px] md:leading-[36px] text-[#383C41] font-light'>
                  Like, comment, share and earn exciting rewards
                </p>
              </div>

              <div className=''>
                <img src={engageBg} alt='engage-bg' />
              </div>
            </div>
          </div>

          <div className='flex flex-wrap items-center justify-between pt-8 mx-2 gap-y-4'>
            <p className='font-Bricolage_Grotesque font-light text-[18px] leading-[28px] text-[#EBEDED]'>
              Select a social network to engage with below
            </p>
            <SearchBar placeholder='Search...' />
          </div>

          {/* Tabs  */}
          {/* This will be replaced with actual filters using react-router-dom  */}
          <div className='container flex flex-shrink-0 px-2 pt-10 overflow-x-auto scroll-track-hide gap-9'>
            {[
              { label: 'Twitter', SvgIcon: Twitter },
              { label: 'Discord', SvgIcon: Discord },
              { label: 'telegram', SvgIcon: Telegram },
              { label: 'facebook', SvgIcon: Facebook },
              { label: 'Instagram', SvgIcon: Instagram },
            ].map(({ label, SvgIcon }, index) => {
              return (
                <button
                  key={index}
                  className={clsx(
                    'flex items-center gap-3 py-2 px-8 font-Poppins text-[24px] font-normal leading-[36px] rounded-[8px]',
                    tab === index
                      ? 'bg-[#79C4EC] text-[#060B12] border-[2px] border-[#335263]'
                      : 'border-[1px] border-[#24343D] text-[#A5A5A5]'
                  )}
                  onClick={() => setTab(index)}
                >
                  <SvgIcon
                    style={{ fill: tab === index ? '#060B12' : '#909292' }}
                  />
                  {label}
                </button>
              );
            })}
          </div>
          <div>
            {
              [
                <>{TwitterTab}</>,
                <>{DiscordTab}</>,
                <>{TelegramTab}</>,
                <>{FacebookTab}</>,
                <>{InstagramTab}</>,
              ][tab]
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

const TwitterTab = (
  <>
    <div className='pt-6'>
      <h3 className='flex container px-2 items-center gap-2 text-[#79C4EC] font-Poppins text-[22px] font-normal'>
        {' '}
        <ArchitectureImg /> Architecture
      </h3>
      <div className='grid items-center justify-center grid-cols-1 gap-6 px-2 pt-4 md:grid-cols-2'>
        {engagePortalArchitecture.map((item, index) => (
          <div
            key={index}
            className='border border-[#24343D] rounded-[4px] p-4 font-Poppins'
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <img src={item.img} alt='' />
                <div>
                  <h3 className='text-[#E8E8E8] font-normal text-[13px] md:text-[18px]'>
                    {item.handle}
                  </h3>
                  <p className='text-[#929192] text-[11px] font-medium'>
                    {item.time}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <img src={item.airdrop} alt='' />
                <div className='p-1 font-medium border border-gradient font-Bricolage_Grotesque'>
                  <p className='bg-gradient-to-b text-[12px] from-[#8CF10C] to-[#28ED77] uppercase bg-clip-text text-transparent'>
                    {item.e2e}
                  </p>
                </div>
                <div className='p-1 font-medium border border-gradients font-Bricolage_Grotesque'>
                  <p className='bg-gradient-to-b text-[12px] from-[#0C74F1] to-[#28EDDB] uppercase bg-clip-text text-transparent'>
                    {item.p2e}
                  </p>
                </div>
              </div>
            </div>

            <div className='px-11'>
              <p className='md:text-[16px] text-[10px] text-[#E8E8E8] font-light my-5'>
                {item.tweet}
              </p>
              <div className='flex items-center gap-4 text-[#929192] font-normal text-[13px]'>
                <p className='flex items-center gap-2'>
                  <Comment />
                  {item.comment}
                </p>
                <p className='flex items-center gap-2'>
                  <Share />
                  {item.share}
                </p>
                <p className='flex items-center gap-2'>
                  <Likes />
                  {item.likes}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className='flex px-2 pt-10 items-center gap-2 text-[#79C4EC] font-Poppins text-[22px] font-normal'>
        {' '}
        <ArchitectureImg /> Sports
      </h3>
      <div className='grid items-center justify-center grid-cols-1 gap-6 px-2 pt-4 md:grid-cols-2'>
        {engagePortalArchitecture.map((item, index) => (
          <div
            key={index}
            className='border border-[#24343D] rounded-[4px] p-4 font-Poppins'
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <img src={item.img} alt='' />
                <div>
                  <h3 className='text-[#E8E8E8] font-normal text-[13px] md:text-[18px]'>
                    {item.handle}
                  </h3>
                  <p className='text-[#929192] text-[11px] font-medium'>
                    {item.time}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <img src={item.airdrop} alt='' />
                <div className='p-1 font-medium border border-gradient font-Bricolage_Grotesque'>
                  <p className='bg-gradient-to-b text-[12px] from-[#8CF10C] to-[#28ED77] uppercase bg-clip-text text-transparent'>
                    {item.e2e}
                  </p>
                </div>
                <div className='p-1 font-medium border border-gradients font-Bricolage_Grotesque'>
                  <p className='bg-gradient-to-b text-[12px] from-[#0C74F1] to-[#28EDDB] uppercase bg-clip-text text-transparent'>
                    {item.p2e}
                  </p>
                </div>
              </div>
            </div>

            <div className='px-11'>
              <p className='md:text-[16px] text-[10px] text-[#E8E8E8] font-light my-5'>
                {item.tweet}
              </p>
              <div className='flex items-center gap-4 text-[#929192] font-normal text-[13px]'>
                <p className='flex items-center gap-2'>
                  <Comment />
                  {item.comment}
                </p>
                <p className='flex items-center gap-2'>
                  <Share />
                  {item.share}
                </p>
                <p className='flex items-center gap-2'>
                  <Likes />
                  {item.likes}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      //TODO
      {/* Pagination Here  */}
    </div>
  </>
);

const DiscordTab = (
  <>
    <div className='container'>
      <h3 className='text-white'>Comming Soon</h3>
    </div>
  </>
);

const TelegramTab = (
  <>
    <div className='container'>
      <h3 className='text-white'>Comming Soon</h3>
    </div>
  </>
);

const FacebookTab = (
  <>
    <div className='container'>
      <h3 className='text-white'>Comming Soon</h3>
    </div>
  </>
);

const InstagramTab = (
  <>
    <div className='container'>
      <h3 className='text-white'>Comming</h3>
    </div>
  </>
);
