import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style/index.css'


import App from './App.jsx';
import Error from './components/pages/error/Error.jsx';
import Home from './components/pages/home/Home.jsx';
import Login from './components/pages/login/Login.jsx';
import Schedule from './components/pages/schedule/Schedule.jsx';
import Vehicles from './components/pages/vehicles/Vehicles.jsx';
import Resume from './components/pages/resume/Resume.jsx';


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
        path: '/About',
        element: <About />,
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
        element: <Vehicles />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
