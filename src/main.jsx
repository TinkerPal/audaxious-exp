import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ToastContainer position='top-center' />
        <App />
      </BrowserRouter>
    </HelmetProvider>{' '}
  </React.StrictMode>
);
