import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const CompanyCard = ({ company }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <div className="flex items-center mb-2">
        <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 mr-4" />
        <h2 className="text-xl font-bold">{company.name}</h2>
        <button 
          className="ml-auto text-blue-600"
          onClick={toggleDetails}
        >
          {showDetails ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
        </button>
      </div>
      {showDetails && (
        <div className="mt-2">
          <p><strong>Role:</strong> {company.role}</p>
          <p><strong>Company Details:</strong> {company.details}</p>
          <p><strong>Openings:</strong> {company.openings}</p>
          <p><strong>Salary:</strong> {company.salary}</p>
          <p><strong>Skills Required:</strong> {company.skills.join(', ')}</p>
        </div>
      )}
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Apply</button>
    </div>
  );
};

export default CompanyCard;
