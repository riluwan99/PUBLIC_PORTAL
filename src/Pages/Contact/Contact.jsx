import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
      }}
      className=' d-flex flex-column justify-content-center align-items-center'
    >
      <h2 className='text-center fs-3 fw-bold'>CONTACT</h2>
      <form onSubmit={handleSubmit} style={{ width: '400px' }}>
        <div>
          <br />
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', height: '45px' }}
            className='border border-3 rounded-3 border-dark text-center text-dark'
          />
        </div>
        <div>
          <br />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', height: '45px' }}
            className='border border-3 rounded-3 border-dark text-center text-dark'
          />
        </div>
        <div>
          <br />
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              height: '170px',
              resize: 'none',
            }}
            className='border border-3 rounded-5 border-dark text-center text-dark'
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            style={{
              backgroundColor: '#007BFF',
            }}
            className='btn border border-2 border-secondary text-white px-4 py-1 fs-5 my-2'
          >
            Submit
          </button>
        </div>
      </form>
      <div
        style={{ textAlign: 'center', width: '500px' }}
        className='border-top border-2 border-secondary-subtle pt-3 '
      >
        <p style={{ fontSize: '12px', lineHeight: '1' }}>2232, GLADIAN ST, FL345, MIAMI, USA</p>
        <p style={{ fontSize: '12px', lineHeight: '1' }}>Tel: +33 45 45 45 45</p>
      </div>
    </div>
  );
};

export default ContactForm;
