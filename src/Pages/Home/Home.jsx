import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.module.css';

const CertifiedAccountant = () => {
  const [caId, setCaId] = useState('');
  const [display, setDisplay] = useState('d-none');
  const [status, setStatus] = useState(0);
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
    console.log('Verifying CA ID:', caId);
    // alert(`Verifying CA ID: ${caId}`);
    try {
      const response = await fetch('http://localhost:4000/api/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: caId }),
      });
      setStatus(response.status);
      const data = await response.json();
      console.log('Response:', response);
      console.log('Data:', data.status);
      setResult(data);
      setDisplay('d-block');
    } catch (error) {
      console.error('Error verifying CA ID:', error);
      setResult({ status: 500, message: 'An error occurred while verifying the CA ID.' });
      setDisplay('d-block');
    }
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
      {result && (
        <div className={`text-center mt-3 ${display}`}>
          {status === 202 ? (
            <h4 className='text-success'>{result.message}</h4>
          ) : status === 200 ? (
            <h4 className='text-warning'>{result.message}</h4>
          ) : status === 406 ? (
            <h4 className='text-danger'>{result.message}</h4>
          ) : (
            <h4 className='text-danger'>{result.message}</h4>
          )}
        </div>
      )}

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
