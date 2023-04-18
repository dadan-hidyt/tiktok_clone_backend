import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter,Route,RouterProvider} from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'


const routers = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/login',
        element : <Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
