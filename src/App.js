import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Navbar from './components/Navbar';
import Employee from './components/Calendar';
import './App.css';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Gallery from './components/Gallery';

export default function App(){
  return (
    <div className='Global'> 
                <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navbar />} />
          <Route path="hairdressing" element={<Gallery/>} />
          <Route path="calendar" element={<Employee />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <div className='SecondPage'>
                <Employee/>
      </div> 
      <div>
                <Contact/>
      </div>
      <div className='ButtonTop'>
                <Button/>
      </div> */}
      
    </div>
  )
};
 