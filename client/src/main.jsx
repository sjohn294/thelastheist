import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style/index.css'


import App from './App.jsx';
import Error from './components/pages/error/Error.jsx';
import Home from './components/pages/home/Home.jsx';
import Contact from './components/pages/contact/Contact.jsx';
import About from './components/pages/about/About.jsx';
import Portfolio from './components/pages/portfolio/Portfolio.jsx';
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
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
