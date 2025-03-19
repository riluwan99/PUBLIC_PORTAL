import React from 'react';

const About = () => {
  return (
    <div className='container '>
      <h2 className='text-center mb-4 fs-3 fw-bold'>ABOUT US</h2>
      <p className='text-muted text-center fw-bold fs-6'>
        Welcome to our Certified Accountant portal. Our mission is to provide trusted financial
        guidance and professional accounting services.
      </p>

      <div className=' p-4 my-4 rounded-0 border-bottom '>
        <p className='lh-lg'>
          At <b>Certified Accountant</b>, we provide a reliable and efficient platform to verify the
          credentials of chartered accountants. Our mission is to help businesses, individuals, and
          regulatory bodies confirm the authenticity of CA qualifications, ensuring transparency and
          trust in the financial sector. With an extensive database and real-time verification
          tools, we make it easy to check whether a professional is a registered chartered
          accountant. Our system cross-checks credentials with official records, providing accurate
          and up-to-date information. We are committed to maintaining integrity in the accounting
          profession by preventing misrepresentation and ensuring that only qualified professionals
          offer financial services. Whether you’re hiring a CA, seeking compliance assurance, or
          verifying a professional’s credentials,<b> Certified Accountant</b> is your trusted
          resource. Verify with confidence.
        </p>
      </div>

      <div className='text-center mt-4'>
        <p>
          <strong>Location:</strong> 2232, GALDIAN ST, FL345, MIAMI, USA
        </p>
        <p>
          <strong>Contact:</strong> +33 45 45 45 45 45
        </p>
      </div>
    </div>
  );
};

export default About;
