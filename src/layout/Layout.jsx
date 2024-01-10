import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Spinner from '../common/Spinner';

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
