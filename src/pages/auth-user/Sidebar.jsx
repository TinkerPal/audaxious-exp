import { useState } from 'react';
import clsx from 'clsx';
import {
  Link,
  matchPath,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
// import { LogOut } from 'react-feather';

// import useLogout from '../../hooks/useLogout';
// import LogOutModal from '../../components/LogOutModal';
import PathConstant from '../../routes/pathConstant';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import { ReactComponent as DashBoardSvg } from '../../assets/svg/Home2-Outline-32px.svg';
import { ReactComponent as MultisenderSvg } from '../../assets/svg/MoneySend-Outline-32px.svg';
import { ReactComponent as EventsSvg } from '../../assets/svg/Calendar1-Outline-32px.svg';
import { ReactComponent as EngageSvg } from '../../assets/svg/Calendar1-Outline-32px.svg';
import { ReactComponent as CommunitySvg } from '../../assets/svg/People-Outline-32px.svg';
import { ReactComponent as RewardsSvg } from '../../assets/svg/Award-Outline-32px.svg';
import { ReactComponent as SettingsSvg } from '../../assets/svg/Setting2-Outline-32px.svg';
import { ReactComponent as HelpSvg } from '../../assets/svg/Setting2-Outline-32px.svg';
import LineSvg from '../../assets/svg/line 2.svg';

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    isSidebar,
    toggleSidebar,
    ismd,
    islg,
    sidebarWidth,
    headerLinks,
    isFullSidebarWidth,
  } = props;

  return (
    <>
      {!ismd && isSidebar && (
        <div
          className='fixed left-0 right-0 top-0 bottom-0 bg-[#060b12] bg-opacity-25 z-10'
          onClick={toggleSidebar}
        />
      )}

      <div
        className={clsx(
          'fixed left-0 top-0 bottom-0 font-Poppins bg-[#060b12] transition-all z-10 md:z-0 overflow-y-auto scroll-track-hide overflow-x-hidden',
          !ismd && (isSidebar ? 'translate-x-0' : '-translate-x-full')
        )}
        style={{ width: sidebarWidth }}
      >
        <div className='sticky top-0'>
          <div
            className={clsx(
              'pt-[30px] mb-4 relative flex',
              isFullSidebarWidth ? '' : 'justify-center'
            )}
          >
            <div className=''>
              <div className='mb-10 ml-4 xl:ml-12'>
                {/* <Logo /> */}
                <div className='text-white'>Logo</div>
              </div>
            </div>
            {!ismd && (
              <>
                <div className='flex-1' />
                <span className='cursor-pointer' onClick={toggleSidebar}>
                  X
                </span>
              </>
            )}
          </div>
          {!ismd && (
            <div className='flex items-center gap-4 px-1 mb-8'>
              {headerLinks}
            </div>
          )}
        </div>
        <div>
          {AUDAXIOUS_LINKS.map((link, index) => {
            const contentProps = { key: index, index, link, ...props };
            return !!link.children ? (
              <AppSidebarGroup {...contentProps} />
            ) : (
              <AppSidebarLink {...contentProps} />
            );
          })}
        </div>
        <div className='flex flex-col justify-end px-2 py-2 mt-28 xl:px-4 lg:mt-40 xl:mt-52'>
          {/* Logout button */}
          {/* <button
            className='w-full flex justify-center gap-4 items-center xl:px-4 py-[0.59rem] text-red-500 transition-all bg-red-950 rounded-lg'
            onClick={() => setIsOpen(true)}
          >
            <span className='md:hidden xl:block'>Logout</span>{' '}
            <span>
              <LogOut />
            </span>
          </button>
          <LogOutModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onClick={handleLogout}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

function AppSidebarGroup({ link, index, toggleDrawer, isFullSidebarWidth }) {
  const { label, children, SvgIcon } = link;

  const location = useLocation();

  const isActive = useMemo(() => {
    let result = null;
    for (const child of children) {
      result = matchPath({ path: child.to + '/*' }, location.pathname);
      if (result) {
        break;
      }
    }
    return result;
  }, [children, location.pathname]);

  const [isSubMenu, toggleSubMenu] = useToggle(!!isActive);

  return (
    <>
      <div
        className={clsx(
          'cursor-pointer flex items-center gap-2 p-4 bg-paper text-[#6D7A86] hover:text-white text-[16px] font-[500] transition-all duration-300 ease-in-out',
          isFullSidebarWidth ? '' : 'justify-center'
        )}
        {...{ onClick: toggleSubMenu }}
      >
        <SvgIcon fill={!!isActive && 'bg-paper text-[#F2]'} />
        {isFullSidebarWidth && (
          <>
            <span className='flex-1 ml-2'>{label}</span>
            {isSubMenu ? <ArrowUpSvg /> : <ArrowDownSvg />}
          </>
        )}
      </div>
      {isSubMenu && (
        <div className={clsx('bg-paper', isActive && 'bg-paper')}>
          {children?.map((link, index) => (
            <AppSidebarLink {...{ key: index, link, isFullSidebarWidth }} />
          ))}
        </div>
      )}
    </>
  );
}

function AppSidebarLink({
  link,
  isFullSidebarWidth,
  toggleSidebar,
  ismd,
  islg,
}) {
  const {
    label,
    SvgIcon,
    comingSoon,
    marginBottom,
    underlineImage,
    ...restProps
  } = link;

  const handleClick = () => {
    if (!islg && !islg) {
      toggleSidebar();
    }
  };

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          clsx(
            'px-2 relative my-3 py-[0.59rem] xl:ml-10 mx-2 rounded-lg flex items-center gap-1 transition-all duration-300 ease-in-out text-[#818282] hover:text-white',
            isFullSidebarWidth ? '' : 'justify-center',
            isActive && 'bg-[#2C2D30] text-[#D6D8D8]',
            marginBottom && 'lg:mb-16'
          )
        }
        {...restProps}
        onClick={handleClick}
      >
        {({ isActive }) => (
          <>
            <SvgIcon fill={isActive ? '#FF844B' : '#6D7A86'} />
            {isFullSidebarWidth && (
              <>
                <span className='flex-1 text-[15px] font-normal ml-3'>
                  {label}
                </span>
                {underlineImage && (
                  <img
                    src={underlineImage}
                    alt='Underline'
                    className='absolute hidden top-14 lg:block'
                  />
                )}
              </>
            )}
          </>
        )}
      </NavLink>
    </>
  );
}

const AUDAXIOUS_LINKS = [
  {
    label: 'DashBoard',
    to: PathConstant.DASHBOARD,
    SvgIcon: DashBoardSvg,
    marginBottom: true,
    underlineImage: LineSvg,
  },
  {
    label: 'Multisender',
    to: PathConstant.MULTISENDER,
    SvgIcon: MultisenderSvg,
  },
  {
    label: 'Events',
    to: PathConstant.EVENTS,
    SvgIcon: EventsSvg,
  },
  {
    label: 'Engage Portal',
    to: PathConstant.ENGAGEPORTALAUTH,
    SvgIcon: EngageSvg,
  },
  {
    label: 'Community',
    to: PathConstant.COMMUNITY,
    SvgIcon: CommunitySvg,
  },
  {
    label: 'Rewards',
    to: PathConstant.REWARDS,
    SvgIcon: RewardsSvg,
    marginBottom: true,
    underlineImage: LineSvg,
  },
  {
    label: 'Settings',
    to: PathConstant.SETTINGS,
    SvgIcon: SettingsSvg,
  },
  {
    label: 'Help',
    to: PathConstant.HELP,
    SvgIcon: HelpSvg,
  },
];
