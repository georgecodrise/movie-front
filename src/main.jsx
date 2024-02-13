import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthLayout from './layout/AuthLayout.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import { AppRouter } from './router/AppRouter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  //</React.StrictMode>,
)
