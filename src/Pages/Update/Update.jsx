import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import style from './update.module.css';

const Updates = () => {
  const [expandedUpdates, setExpandedUpdates] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/updates');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const toggleExpand = (id) => {
    setExpandedUpdates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(dateString));
  };

  return (
    <div className='container mt-0'>
      <h1 className='text-center mb-4 fs-3 fw-bold'>UPDATES</h1>

      <div className={style.updatesScrollContainer}>
        {data.length === 0 ? (
          <h5 className='text-danger text-center'>Something Error...!</h5>
        ) : (
          data.map((update, index) => (
            <div key={update.id} className='mb-4 border-bottom border-1 pb-2 border-secondary-subtle'>
              <h2 className='fw-bolder fs-5'>{update.title}</h2>
              <p className='text-muted fs-6 fw-bolder'>{formatDate(update.createdDateTime)}</p>

              {/* Always Show the First Paragraph */}
              <p className='lead fs-6 fw-normal'>{update.shortDescription}</p>

              {/* Show Additional Content Only When Expanded */}
              {expandedUpdates[index] && (
                <>
                  {<p className='lead fs-6 fw-normal'>{update.longDescription}</p>}
                  <button
                    className='btn btn-secondary rounded-0 px-5'
                    onClick={() => toggleExpand(index)}
                  >
                    Back
                  </button>
                </>
              )}

              {!expandedUpdates[index] && (
                <button className='btn btn-primary rounded-0' onClick={() => toggleExpand(index)}>
                  Read More
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Updates;
