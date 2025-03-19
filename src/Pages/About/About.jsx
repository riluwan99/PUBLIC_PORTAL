import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-muted text-center">
        Welcome to our Certified Accountant portal. Our mission is to provide trusted financial guidance and professional accounting services.
      </p>

      <div className="card p-4 shadow-sm mt-4">
        <h4>Our Vision</h4>
        <p>
          We aim to simplify financial management by offering accurate and transparent accounting solutions.
        </p>

        <h4>Why Choose Us?</h4>
        <ul>
          <li>✔ Experienced Certified Accountants</li>
          <li>✔ Secure and Reliable Services</li>
          <li>✔ Fast and Efficient Verification</li>
        </ul>
      </div>

      <div className="text-center mt-4">
        <p><strong>Location:</strong> 2232, GALDIAN ST, FL345, MIAMI, USA</p>
        <p><strong>Contact:</strong> +33 45 45 45 45 45</p>
      </div>
    </div>
  );
};

export default About;
