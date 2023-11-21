import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Spinner from '../common/Spinner';

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
