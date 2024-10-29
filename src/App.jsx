import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/Signup" element={<Signup />}></Route>
    
  </>
)
);

const App = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default App