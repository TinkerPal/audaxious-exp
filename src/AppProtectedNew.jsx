import { Route, Routes } from "react-router-dom";
// import DashboardLayout from "./pages/newAuth-user/Layout";
// import Dashboard from "./pages/newAuth-user/Dashboard";
// import EngagePortals from "./pages/newAuth-user/EngagePortal";
import { lazy } from "react";
// import Landing from "./pages/landing/Landing";
import Layout from "./layout/Layout";
import Profile from "./pages/newAuth-user/profile/Profile";
import TogglePost from "./pages/newAuth-user/aiCreative/TogglePost";
import RootPost from "./pages/newAuth-user/aiCreative/RootPost";
// import ManualPost from "./pages/newAuth-user/aiCreative/ManualPost";
// import SpaceCampaignDetails from "./pages/newAuth-user/spaces/SpaceCampaignDetails";
// import Home from "./pages/Homes/Home";

const AppProtectedNew = () => {
  const Home = lazy(() => import("./pages/Homes/Home"));
  const About = lazy(() => import("./pages/about/About"));
  const DashboardLayout = lazy(() =>
    import("./pages/newAuth-user/layout/Layout")
  );
  const Dashboard = lazy(() =>
    import("./pages/newAuth-user/dashboard/Dashboard")
  );
  const EngagePortals = lazy(() =>
    import("./pages/newAuth-user/engagePortal/EngagePortal")
  );
  const Spaces = lazy(() => import("./pages/newAuth-user/spaces/Spaces"));
  const SpaceDetail = lazy(() =>
    import("./pages/newAuth-user/spaces/SpaceDetail")
  );
  const EngagementDetail = lazy(() =>
    import("./pages/newAuth-user/engagePortal/CampaignDetail")
  );
  const SpaceCampaignDetails = lazy(() =>
    import("./pages/newAuth-user/spaces/SpaceCampaignDetails")
  );
  const AiCreative = lazy(() =>
    import("./pages/newAuth-user/aiCreative/AiCreative")
  );
  const AiPost = lazy(() => import("./pages/newAuth-user/aiCreative/AiPost"));
  const ManualPost = lazy(() =>
    import("./pages/newAuth-user/aiCreative/ManualPost")
  );
  const SEO = lazy(() => import("./assets/SEO/Meta"));
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<DashboardLayout />}>
            <Route index={true} element={<Dashboard />} />
            <Route />
          </Route>
          <Route path="/seo" element={<SEO />} />
          <Route path="/engage-portal" element={<DashboardLayout />}>
            <Route index={true} element={<EngagePortals />} />
            <Route path=":postId" element={<EngagementDetail />} />
            <Route />
          </Route>
          <Route path="/spaces" element={<DashboardLayout />}>
            <Route index={true} element={<Spaces />} />
            <Route path=":spaceId">
              <Route index={true} element={<SpaceDetail />} />
              <Route path=":campaignId" element={<SpaceCampaignDetails />} />
            </Route>
            <Route />
          </Route>
          <Route path="/ai-creatives" element={<DashboardLayout />}>
            <Route path="/ai-creatives" element={<AiCreative />}>
              {/* <Route element={<RootPost />}> */}
              <Route path="ai" element={<AiPost />} />
              <Route path="manual" element={<ManualPost />} />
              {/* </Route> */}
            </Route>
          </Route>
          <Route path="/profile" element={<DashboardLayout />}>
            <Route index={true} element={<Profile />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};

export default AppProtectedNew;
