import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './app/store';
import { Provider } from 'react-redux';

import Login from './page/Login';
import Layout from './components/Layout';
import NuevoPaciente from './page/NuevoPaciente';
import Index from './page/Index';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/pacientes",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path: "/pacientes/nuevo",
        element: <NuevoPaciente/>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
