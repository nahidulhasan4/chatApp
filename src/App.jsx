import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);


const App = () => {


  return (
    <RouterProvider router={router} />

  )
}

export default App