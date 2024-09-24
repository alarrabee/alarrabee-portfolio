import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './components/pages/home.jsx'
import About from './components/pages/about.jsx'
import Portfolio from './components/pages/portfolio.jsx'
import Resume from './components/pages/resume.jsx'
import ErrorPage from './components/pages/error.jsx'

//defined routes
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path:'about',
          element: <About/>
        },
        {
          path:'portfolio',
          element: <Portfolio/>
        },
        {
          path:'resume',
          element: <Resume/>
        }
      ],
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
