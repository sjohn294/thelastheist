import ReactDOM from 'react-dom/client'

// import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/pages/Home.jsx';
import Login from './components/pages/Login.jsx';
import Signup from './components/pages/Signup.jsx';



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
        path: '/VehicleList',
        element: <Signup />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);