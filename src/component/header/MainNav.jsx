import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Programs from '../../pages/Programs';
import Contact from '../../pages/Contact';
import Event from '../../pages/Event';
const MainNav = () => {
  return (
    <Routes>

      <Route exact path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/program" element={<Programs />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/Event" element={<Event />}/>

    </Routes>
  )
}

export default MainNav