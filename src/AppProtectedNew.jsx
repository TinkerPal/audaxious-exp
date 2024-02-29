import { Route, Routes } from "react-router-dom";
// import DashboardLayout from "./pages/newAuth-user/Layout";
// import Dashboard from "./pages/newAuth-user/Dashboard";
// import EngagePortals from "./pages/newAuth-user/EngagePortal";
import { lazy } from "react";
// import Landing from "./pages/landing/Landing";
import Layout from "./layout/Layout";

const AppProtectedNew = () => {
  const Home = lazy(() => import("./pages/landing/Landing"));
  const About = lazy(() => import("./pages/about/About"));
  const DashboardLayout = lazy(() => import("./pages/newAuth-user/Layout"));
  const Dashboard = lazy(() => import("./pages/newAuth-user/Dashboard"));
  const EngagePortals = lazy(() => import("./pages/newAuth-user/EngagePortal"));
  const Spaces = lazy(() => import("./pages/newAuth-user/Spaces"));
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index={true} element={<Dashboard />} />
            <Route path="engage-portal" element={<EngagePortals />} />
            <Route path="spaces" element={<Spaces />} />
            <Route />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};

export default AppProtectedNew;
