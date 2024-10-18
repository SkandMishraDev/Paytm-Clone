import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import { Signup } from './Pages/Signup.jsx'
import { Signin } from './Pages/Signin.jsx'
import Dashboard from './Pages/Dashboard.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/dasboard' element={<Dashboard/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
