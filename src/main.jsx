import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
import Layout from './components/Layout';
import NuevoPaciente from './page/NuevoPaciente';
import Index from './page/Index';
import Sesion from './page/Sesion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sesion/>,
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
