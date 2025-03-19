import React from 'react';

import { Route, Routes } from 'react-router-dom';

import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Update from '../Pages/Update/Update';
import UpdateDetail from '../Pages/Update/UpdateDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/updates' element={<Update />} />
      <Route path='/updates/:id' element={<UpdateDetail />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
