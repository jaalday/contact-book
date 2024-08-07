import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { 
  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as rootLoader, action as rootAction } from './routes/root'

import EditContact, {
  action as editAction,
} from './routes/edit';

import './index.css'
import ErrorPage from './error-page'
import Contact,{
  loader as contactLoader,
} from './routes/contact';

import {action as destroyAction} from './routes/destroy'
import Index from "./routes/index";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {index: true, element: <Index/>},
      {
        path: 'contacts/:contactId',
        element: <Contact/>,
        loader: contactLoader,
    },
    {
      path: "contacts/:contactId/edit",
      element: <EditContact/>,
      loader: contactLoader,
      action: editAction,

    },
    {
      path: 'contacts/:contactId/destroy',
      action: destroyAction,
      errorElement: <div>Oops! there was an Error</div>
    },

    ]

  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
