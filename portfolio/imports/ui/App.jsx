import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Header } from './components/Header'
//import { SideNav } from './components/SideNav'
import { Home } from './pages/Home'
// import { Realtors } from './pages/Realtors'
// import {Testimonial} from './pages/Testimonial'





import { Footer } from './components/Footer'





export const App = () => (
  
  
  <Router>

  <Routes>
    <Route path='/' element={<Home/>}/>
   
   
   
  </Routes>
  <Footer />
</Router>
  );

