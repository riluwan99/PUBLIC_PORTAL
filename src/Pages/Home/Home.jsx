import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.module.css';

const CertifiedAccountant = () => {
  const [caId, setCaId] = useState('');

  const handleVerify = () => {
    // Handle verification logic here
    console.log('Verifying CA ID:', caId);
    alert(`Verifying CA ID: ${caId}`);
  };

  return (
    <div className='container mt-5 '>
      <div className='text-center d-flex flex-column justify-content-center align-items-center '>
        <h1 className='mb-4'>Certified Accountant</h1>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control border border-3 rounded-3 border-dark text-center text-dark my-3 mx-auto custom-placeholder'
            placeholder='Enter CA ID'
            value={caId}
            onChange={(e) => setCaId(e.target.value)}
            style={{ width: '300px' }}
          />
        </div>
        <button
          className='btn border border-2 border-secondary text-white px-5 py-1 custom-button-style fs-5'
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>

      {/* Address and Contact Information */}
      <div className=' w-100  d-flex flex-column justify-content-center align-items-center lh-1 '>
        <div
          className='text-center mt-5 border-top border-2 border-secondary-subtle py-3'
          style={{ width: '400px' }}
        >
          <p className='lh-1'>2232, GLADIAN ST, FL345, MIAMI, USA</p>
          <p className='lh-1'>Tel: +33 45 45 45 45 45</p>
        </div>
      </div>
    </div>
  );
};

export default CertifiedAccountant;
