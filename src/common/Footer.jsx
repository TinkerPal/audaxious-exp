import { NavLink } from 'react-router-dom';

import Audaxios from './Logo';

import { ReactComponent as Facebook } from '../assets/svg/facebook.svg';
import { ReactComponent as Instagram } from '../assets/svg/ig.svg';
import { ReactComponent as X } from '../assets/svg/x.svg';

function Footer(props) {
  return (
    <div className='container relative w-full text-white font-Poppins'>
      <div className='pb-7 pt-14'>
        <div className='flex flex-wrap mb-16 gap-x-24 md:gap-x-24 gap-y-8'>
          <div className='md:mr-32' style={{ maxWidth: 400 }}>
            <Audaxios />
            <p className='text-[11px] leading-[15.63px] font-light mt-3'>
              making access to web 3.0 simple...
            </p>
          </div>
          {GROUP_LINKS.map((group, key) => (
            <div key={key}>
              <h6 className='mb-6 text-[20px] leading-[30px] font-medium uppercase'>
                {group.name}
              </h6>
              {group.links.map((link, key) => (
                <div
                  key={key}
                  className='mb-4 text-[#71757D] text-[16px] leading-[24px] font-light'
                >
                  <NavLink {...link} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='border-t-[1px] border-[#71757D]'>
          <div className='flex flex-wrap items-center justify-center gap-2 pt-5 md:pt-7'>
            <p className='text-[#4F5259] md:flex-1 text-center font-medium font-Raleway text-[14px]'>
              © 2023 HackCity, Inc. | All rights reserved
            </p>
            <div className='flex items-center gap-8 md:ml-auto'>
              <Facebook />
              <Instagram />
              <X />
            </div>
          </div>
        </div>

        {/* Mobile Version  */}
        {/* <div className='md:hidden block'>
          <div className='flex flex-wrap items-center justify-center gap-2 pt-7'>
            <div className='flex items-center gap-8'>
              <Facebook />
              <Instagram />
              <X />
            </div>
            <div className='border-t-[1px] border-[#71757D]  mt-4'>
              <p className='text-[#4F5259] font-medium font-Raleway text-[14px] mt-4'>
                © 2023 HackCity, Inc. | All rights reserved
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;

const GROUP_LINKS = [
  {
    name: 'product',
    links: [
      { children: 'features', to: '/' },
      { children: 'solution', to: '/' },
      { children: 'pricing', to: '/' },
    ],
  },
  {
    name: 'resources',
    links: [
      { children: "FAQ's", to: '/' },
      { children: 'documentation', to: '/' },
      { children: 'apps', to: '/' },
    ],
  },
  {
    name: 'company',
    links: [
      { children: 'about us', to: '/' },
      { children: 'news', to: '/' },
      { children: 'blog', to: '/' },
    ],
  },
];
