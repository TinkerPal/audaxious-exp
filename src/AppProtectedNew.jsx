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
  const SpaceDetail = lazy(() => import("./pages/newAuth-user/SpaceDetail"));
  const EngagementDetail = lazy(() =>
    import("./pages/newAuth-user/SingleTweetById")
  );
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index={true} element={<Dashboard />} />
            {/* <Route path="/engage-portal" element={<EngagePortals />} />
            <Route path="spaces" element={<Spaces />} />
            <Route path="spaces/:spaceId" element={<SpaceDetail />} /> */}
            <Route />
          </Route>
          <Route path="/engage-portal" element={<DashboardLayout />}>
            <Route index={true} element={<EngagePortals />} />
            <Route path=":postId" element={<EngagementDetail />} />
            <Route />
          </Route>
          <Route path="/spaces" element={<DashboardLayout />}>
            <Route index={true} element={<Spaces />} />
            <Route path=":spaceId" element={<SpaceDetail />} />
            <Route />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};

export default AppProtectedNew;
