import React, { lazy } from 'react';
import PathConstant from './pathConstant';

const Home = lazy(() => import('../pages/home/Home'));
const Login = lazy(() => import('../pages/login/Login'));

const routes = [
  { path: PathConstant.HOME, element: <Home /> },
  { path: PathConstant.LOGIN, element: <Login /> },
];

export default routes;
