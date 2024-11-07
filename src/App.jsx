import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Rootlayout from "./layout/Rootlayout";

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
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />}></Route>
        
      </Route>
    </>
  )
);


const App = () => {


  return (
    <RouterProvider router={router} />

  )
}

export default App