import { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import Header from './pages/auth-user/Header';
import Sidebar from './pages/auth-user/Sidebar';
import Dashboard from './pages/auth-user/Dashboard';
import Multisender from './pages/auth-user/Multisender';
import Events from './pages/auth-user/Events';
import EngagePortal from './pages/auth-user/EngagePortal';
import Community from './pages/auth-user/Community';
import Rewards from './pages/auth-user/Rewards';
import Settings from './pages/auth-user/Settings';
import Help from './pages/auth-user/Help';
// import ErrorPage from './pages/error/ErrorPage';

import useToggle from './hooks/useToggle';
import useMediaQuery from './hooks/useMediaQuery';
import {
  APP_SIDEBAR_MOBILE_WIDTH,
  APP_SIDEBAR_WIDTH,
  MediaQueryBreakpointEnum,
} from './constants/globalConstant';
import PathConstant from './routes/pathConstant';

const AppProtected = () => {
  const islg = useMediaQuery(MediaQueryBreakpointEnum.xl);
  const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);
  const [isSidebar, toggleSidebar, setSidebar] = useToggle(islg || false);

  const location = useLocation();

  const sidebarWidth = !ismd
    ? APP_SIDEBAR_WIDTH
    : isSidebar
    ? APP_SIDEBAR_WIDTH
    : APP_SIDEBAR_MOBILE_WIDTH;
  const isFullSidebarWidth = sidebarWidth === APP_SIDEBAR_WIDTH;

  useEffect(() => {
    setSidebar(islg || false);
  }, [islg, ismd]);

  const contentProps = {
    isSidebar,
    toggleSidebar,
    islg,
    ismd,
    sidebarWidth,
    isFullSidebarWidth,
  };

  return (
    <>
      <div
        className={clsx('')}
        style={{ paddingLeft: ismd ? sidebarWidth : 0 }}
      >
        <Header {...contentProps} />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route
              path='/'
              element={<Navigate to={PathConstant.DASHBOARD} replace='true' />}
            />
            <Route path={PathConstant.DASHBOARD} element={<Dashboard />} />
            <Route path={PathConstant.MULTISENDER} element={<Multisender />} />
            <Route path={PathConstant.EVENTS} element={<Events />} />
            <Route
              path={PathConstant.ENGAGEPORTALAUTH}
              element={<EngagePortal />}
            />
            <Route path={PathConstant.COMMUNITY} element={<Community />} />
            <Route path={PathConstant.REWARDS} element={<Rewards />} />
            <Route path={PathConstant.SETTINGS} element={<Settings />} />
            <Route path={PathConstant.HELP} element={<Help />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Sidebar {...contentProps} />{' '}
    </>
  );
};

export default AppProtected;
