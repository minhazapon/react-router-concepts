import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Nav from './Nav.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Data from './Data.jsx';
import DataDetails from './DataDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/nav",
        element: <Nav></Nav>,
      },
      {
        path: "/contact",
        element: <Contact></Contact> ,
      },
      {
        path: "/about",
        element: <About></About> ,
      },
      {
        path: "/service",
        element: <Service></Service> ,
      },
      {
        path: "/Data",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Data></Data> ,
      },

      {
        path: "/Data/:dataId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.dataId}`) ,
        element: <DataDetails></DataDetails> ,
      },

    ],



  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
