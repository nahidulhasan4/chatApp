import React from 'react';
import SIgnin from './pages/SIgnin';
import Signup from './pages/Signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default App