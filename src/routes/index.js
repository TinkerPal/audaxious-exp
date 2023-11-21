import React, { lazy } from 'react';
import PathConstant from './pathConstant';

const Home = lazy(() => import('../pages/home/Home'));
const CreateAccount = lazy(() => import('../pages/register/CreateAccount'));
const CreateAccountLink = lazy(() =>
  import('../pages/register/CreateAccountLink')
);
const Register = lazy(() => import('../pages/register/SignIn'));
const Login = lazy(() => import('../pages/login/Login'));
const ForgetPassword = lazy(() =>
  import('../pages/forget-password/ForgetPassword')
);
const ForgetPasswordLink = lazy(() =>
  import('../pages/forget-password/ForgetPasswordLink')
);
const ResetPassword = lazy(() =>
  import('../pages/forget-password/ResetPassword')
);

const routes = [
  { path: PathConstant.HOME, element: <Home /> },
  { path: PathConstant.CREATEACCOUNT, element: <CreateAccount /> },
  { path: PathConstant.CREATEACCOUNTLINK, element: <CreateAccountLink /> },
  { path: PathConstant.REGISTER, element: <Register /> },
  { path: PathConstant.LOGIN, element: <Login /> },
  { path: PathConstant.FORGETPASSWORD, element: <ForgetPassword /> },
  { path: PathConstant.FORGETPASSWORDLINK, element: <ForgetPasswordLink /> },
  { path: PathConstant.RESETPASSWORD, element: <ResetPassword /> },
];

export default routes;
