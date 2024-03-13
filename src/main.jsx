import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router.jsx';
import {
  RouterProvider
} from "react-router-dom";
import Provider from './Provider/Provider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router}>
     
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
