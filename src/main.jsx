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
import AuthProvider from './ContextProvider/AuthContext';
import PrivateRouteForLoginSignUp from './PrivateRoute/PrivateRouteForLoginSignUp';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRouteForOthers>
            <AddProduct></AddProduct>
          </PrivateRouteForOthers>
        ),
      },
      {
        path: "/apple",
        loader: () => fetch("http://localhost:5000/apple"),
        element: (
          <PrivateRouteForOthers>
            <Apple></Apple>
          </PrivateRouteForOthers>
        ),
      },
      {
        path: "/dji",
        loader: () => fetch("http://localhost:5000/dji"),
        element: (
          <PrivateRouteForOthers>
            <Dji></Dji>
          </PrivateRouteForOthers>
        ),
      },
      {
        path: "/samsung",
        loader: () => fetch("http://localhost:5000/samsung"),
        element: (
          <PrivateRouteForOthers>
            <Samsung></Samsung>
          </PrivateRouteForOthers>
        ),
      },
      {
        path: "/google",
        loader: () => fetch("http://localhost:5000/google"),
        element: (
          <PrivateRouteForOthers>
            <Google></Google>
          </PrivateRouteForOthers>
        ),
      },
      {
        path: "/sony",
        loader: () => fetch("http://localhost:5000/sony"),
        element: (
          <PrivateRouteForOthers>
            <Sony></Sony>
          </PrivateRouteForOthers>
        ),
      },
      {
        path: "/microsoft",
        loader: () => fetch("http://localhost:5000/microsoft"),
        element: (
          <PrivateRouteForOthers>
            <Microsoft></Microsoft>
          </PrivateRouteForOthers>
        ),
      },
      {
        path: "/login",
        element: (
          <PrivateRouteForLoginSignUp>
            <Login></Login>
          </PrivateRouteForLoginSignUp>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRouteForLoginSignUp>
            <Register></Register>
          </PrivateRouteForLoginSignUp>
        ),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
   
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
