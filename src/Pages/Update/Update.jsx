import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import style from './update.module.css';

const Updates = () => {
  const [expandedUpdates, setExpandedUpdates] = useState({});
  const updatesData = [
    {
      title: 'Why firms should review their pricing',
      date: 'January 1, 2025',
      paragraphs: [
        'Reviewing and adjusting fees can solve problems with high client demand and low talent supply. Find out how to improve capacity and revenue.',
        'Fee structures impact both profitability and client retention. Learn strategies to balance value and competitiveness.',
        'Understand the impact of inflation and market trends on pricing decisions for accounting firms.',
      ],
    },
    {
      title: 'The future of accounting automation',
      date: 'February 15, 2025',
      paragraphs: [
        'Automation is transforming accounting firms, reducing manual workload and increasing efficiency.',
        'AI-powered tools can help accountants focus on strategic advisory rather than data entry.',
        'Understanding which automation tools to adopt can give firms a competitive advantage.',
      ],
    },
    {
      title: 'How tax regulations are changing in 2025',
      date: 'March 5, 2025',
      paragraphs: [
        'Upcoming tax reforms will impact businesses and individuals, requiring firms to stay updated.',
        'Navigating new compliance rules efficiently can prevent penalties and improve financial planning.',
        'Learn how tax software can simplify compliance and ensure accurate filings.',
      ],
    },
    {
      title: 'Client retention strategies for accounting firms',
      date: 'April 10, 2025',
      paragraphs: [
        'Strong client relationships are key to long-term business success in the accounting industry.',
        'Personalized services and proactive communication can increase customer loyalty.',
        'Implementing feedback mechanisms can help firms improve services and retain high-value clients.',
      ],
    },
    {
      title: 'Cybersecurity risks in financial data management',
      date: 'May 20, 2025',
      paragraphs: [
        'With growing cyber threats, accounting firms must prioritize data security to protect sensitive client information.werwreweryyyyyyyweryrew br ywreyr',
        'Multi-factor authentication and encrypted storage can reduce risks of data breaches.',
        'Regular security audits and compliance checks help maintain trust and prevent financial fraud.',
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpandedUpdates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className='container mt-0'>
      <h1 className='text-center mb-4 fs-3 fw-bold'>UPDATES</h1>

      <div className={style.updatesScrollContainer}>
        {updatesData.map((update, index) => (
          <div key={index} className='mb-4 border-bottom border-1 pb-2 border-secondary-subtle'>
            <h2 className='fw-bolder fs-5'>{update.title}</h2>
            <p className='text-muted fs-6 fw-bolder'>{update.date}</p>

            {/* Always Show the First Paragraph */}
            <p className='lead fs-6 fw-normal'>{update.paragraphs[0]}</p>

            {/* Show Additional Content Only When Expanded */}
            {expandedUpdates[index] && (
              <>
                {update.paragraphs.slice(1).map((paragraph, i) => (
                  <p key={i} className='lead fs-6 fw-normal'>
                    {paragraph}
                  </p>
                ))}
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
        ))}
      </div>
    </div>
  );
};

export default Updates;
