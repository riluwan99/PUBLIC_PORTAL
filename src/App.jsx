import React from 'react';

import NavBar from './Components/Navbar';
import AppRoutes from './Routes/AppRoutes';

const App = () => {
  return (
    <>
      <div className='container-fluid min-vh-100 d-flex flex-column px-5'>
        <NavBar />
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
