import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import Error from './components/ErrorPage/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children:[
      { 
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('company.json')
      },
      { 
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      { 
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      { 
        path: '/blog',
        element: <Blogs></Blogs>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
