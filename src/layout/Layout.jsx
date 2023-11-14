import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Spinner from '../common/Spinner';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
