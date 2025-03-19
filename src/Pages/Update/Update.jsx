import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Updates = () => {
  const [expandedUpdates, setExpandedUpdates] = useState({});

  const toggleExpand = (id) => {
    setExpandedUpdates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const paragraphs = [
    "Reviewing and adjusting fees can solve problems with high client demand and low talent supply. Find out how to improve capacity and revenue.",
    "Reviewing and adjusting fees can solve problems with high client demand and low talent supply. Find out how to improve capacity and revenue.",
    "Reviewing and adjusting fees can solve problems with high client demand and low talent supply. Find out how to improve capacity and revenue."
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">UPDATES</h1>

      {/* First Update */}
      <div className="mb-5">
        <h2 className="fw-bold">Why firms should review their pricing</h2>
        <p className="text-muted">January 1, 2025</p>
        <p className="lead">
          {paragraphs[0]}
        </p>
        {expandedUpdates['update1'] ? (
          <div>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="lead">{paragraph}</p>
            ))}
            <button 
              className="btn btn-secondary" 
              onClick={() => toggleExpand('update1')}
            >
              Back
            </button>
          </div>
        ) : (
          <button 
            className="btn btn-primary" 
            onClick={() => toggleExpand('update1')}
          >
            Read More
          </button>
        )}
      </div>

      <hr className="my-5" />

      {/* Second Update */}
      <div className="mb-5">
        <h2 className="fw-bold">Final regs. address resolution of federal tax controversies by Appeals</h2>
        <p className="text-muted">January 1, 2025</p>
        <p className="lead">
          {paragraphs[0]}
        </p>
        {expandedUpdates['update2'] ? (
          <div>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="lead">{paragraph}</p>
            ))}
            <button 
              className="btn btn-secondary" 
              onClick={() => toggleExpand('update2')}
            >
              Back
            </button>
          </div>
        ) : (
          <button 
            className="btn btn-primary" 
            onClick={() => toggleExpand('update2')}
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default Updates;