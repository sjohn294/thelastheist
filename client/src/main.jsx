import ReactDOM from 'react-dom/client'
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/pages/Home.jsx';
import Login from './components/pages/Login.jsx';
import Signup from './components/pages/Signup.jsx';
import VehicleList from './components/VicList/index.jsx';
import RegionList from './components/RegionList/index.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      },
      {
        path: '/VehicleList/:category',
        element: <VehicleList />,
      },
      {
        path:'/RegionList/:region',
        element: <RegionList />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);