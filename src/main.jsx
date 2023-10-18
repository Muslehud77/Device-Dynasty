import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root/Root';
import AddProduct from './Pages/Add-Product/AddProduct';
import PrivateRouteForOthers from './PrivateRoute/PrivateRouteForOthers';
import Apple from './Pages/Category/Apple';
import Dji from './Pages/Category/Dji';
import Samsung from './Pages/Category/Samsung';
import Google from './Pages/Category/Google';
import Sony from './Pages/Category/Sony';
import Microsoft from './Pages/Category/Microsoft';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/add-product",
        element: <PrivateRouteForOthers><AddProduct></AddProduct></PrivateRouteForOthers>,
      },
      {
        path: "/apple",
        element: <PrivateRouteForOthers><Apple></Apple></PrivateRouteForOthers>,
      },
      {
        path: "/dji",
        element: <PrivateRouteForOthers><Dji></Dji></PrivateRouteForOthers>,
      },
      {
        path: "/samsung",
        element: <PrivateRouteForOthers><Samsung></Samsung></PrivateRouteForOthers>,
      },
      {
        path: "/google",
        element: <PrivateRouteForOthers><Google></Google></PrivateRouteForOthers>,
      },
      {
        path: "/sony",
        element: <PrivateRouteForOthers><Sony></Sony></PrivateRouteForOthers>,
      },
      {
        path: "/microsoft",
        element: <PrivateRouteForOthers><Microsoft></Microsoft></PrivateRouteForOthers>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
