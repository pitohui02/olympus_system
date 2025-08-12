import { StrictMode } from 'react'
import './index.css'
import Login from './pages/Login'
import UserRegistration from './pages/User_Registration'

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <UserRegistration />
  }


])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
