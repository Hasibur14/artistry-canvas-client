import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Router from './Routes/Route';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelmetProvider> */}
      <RouterProvider router={Router} />
      <ToastContainer />
    {/* </HelmetProvider> */}
  </React.StrictMode>,
)
