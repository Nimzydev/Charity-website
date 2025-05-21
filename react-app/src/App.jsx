import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Donate from "./pages/Donate/Donate";




const App = () => {
  return (
    <>
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/donate' element={<Donate/>} />






    </Routes>
    






    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default App

