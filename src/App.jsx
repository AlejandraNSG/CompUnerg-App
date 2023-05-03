// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";

import MainLayout from "./layout/MainLayout.jsx";

import SmoothScroll from "smooth-scroll";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Forgot from "./pages/Forgot.jsx";
import Courses from "./pages/Courses.jsx";
import HomePage from "./pages/HomePAge.jsx";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <BrowserRouter>
        {/* Rutas Publicas  */}
        <Routes>
          {/* Rutas Publicas  */}
          <Route path="/">
            <Route index element={<HomePage/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="forgot" element={<Forgot/>}/>
            {/* <Route path='*' element={<Error404/>}/> */}
          </Route>

          {/* Rutas Privadas  */}
          <Route path='/home' element={<MainLayout/>}>
            <Route index element={<Courses/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
