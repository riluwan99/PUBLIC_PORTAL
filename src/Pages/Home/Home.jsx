import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CertifiedAccountant = () => {
  const [caId, setCaId] = useState('');

  const handleVerify = () => {
    // Handle verification logic here
    console.log('Verifying CA ID:', caId);
    alert(`Verifying CA ID: ${caId}`);
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mb-4">Certified Accountant</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter CA ID"
            value={caId}
            onChange={(e) => setCaId(e.target.value)}
            style={{ maxWidth: '300px', margin: '0 auto' }}
          />
        </div>
        <button 
          className="btn btn-primary"
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>

      {/* Address and Contact Information */}
      <div className="text-center mt-5">
        <p>2232, GLADIAN ST, FL345, MIAMI, USA</p>
        <p>Tel: +33 45 45 45 45 45</p>
      </div>
    </div>
  );
};

export default CertifiedAccountant;