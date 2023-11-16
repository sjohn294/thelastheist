import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'


import App from './App.jsx';
import Error from './pages/error/ErrorPage.jsx';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Schedule from './pages/schedule/Schedule.jsx';
import Vehicle from './pages/vehicles/Vehicle.jsx';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';


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
        path: '/Schedule',
        element: <Schedule />,
      },
      {
        path: '/Vehicles',
        element: <Vehicle />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
