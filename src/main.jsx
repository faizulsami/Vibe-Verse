import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Components/Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/Provider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='App'>
      <div className='md:Blur' style={{ top: '-12%', right: '0' }}></div>
      <div className='md:Blur' style={{ top: '36%', left: '-8rem' }}></div>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
