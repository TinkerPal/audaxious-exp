import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import PathConstant from "./routes/pathConstant";

import Layout from "./layout/Layout";
import Ssoverify from "./pages/dashboard/Ssoverify";
// import ErrorPage from './pages/error/ErrorPage';

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Landing = lazy(() => import("./pages/landing/Landing"));
const CreateAccount = lazy(() => import("./pages/register/CreateAccount"));
const CreateAccountLink = lazy(() =>
  import("./pages/register/CreateAccountLink")
);
const Questionaire = lazy(() => import("./pages/register/Questionaire"));
const Login = lazy(() => import("./pages/login/Login"));
const ForgetPassword = lazy(() =>
  import("./pages/forget-password/ForgetPassword")
);
const ForgetPasswordLink = lazy(() =>
  import("./pages/forget-password/ForgetPasswordLink")
);
const ResetPassword = lazy(() =>
  import("./pages/forget-password/ResetPassword")
);
const EngagePortal = lazy(() => import("./pages/engage-portal/EngagePortal"));

const AppPublic = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={PathConstant.HOME} element={<Home />} />
          <Route path={PathConstant.ABOUT} element={<About />} />
          <Route path={PathConstant.LANDING} element={<Landing />} />
          <Route
            path={PathConstant.CREATEACCOUNT}
            element={<CreateAccount />}
          />
          <Route
            path={PathConstant.CREATEACCOUNTOTP}
            element={<CreateAccountLink />}
          />
          <Route path={PathConstant.QUESTIONAIRE} element={<Questionaire />} />
          <Route path={PathConstant.LOGIN} element={<Login />} />
          <Route
            path={PathConstant.FORGETPASSWORD}
            element={<ForgetPassword />}
          />
          <Route
            path={PathConstant.FORGETPASSWORDOTP}
            element={<ForgetPasswordLink />}
          />
          <Route
            path={PathConstant.RESETPASSWORD}
            element={<ResetPassword />}
          />
          <Route path={PathConstant.ENGAGEPORTAL} element={<EngagePortal />} />
          <Route path={PathConstant.DASHBOARD} element={<Ssoverify />} />

          {/* <Route path="*" element={<Login />} /> */}
        </Routes>
      </Layout>
    </>
  );
};

export default AppPublic;
