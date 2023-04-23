
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import { About } from './ui/about/About'
import { App } from './ui/app'
import { Cats } from './ui/cats/Cats'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Cats />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
