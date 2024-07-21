import React from 'react';

const CompanyAppliedListPage = () => {
  const appliedCompanies = [
    { id: 1, name: 'Company A', status: 'Pending' },
    { id: 2, name: 'Company B', status: 'Interview Scheduled' },
    // Add more applied companies as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Applied Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appliedCompanies.map(company => (
          <div key={company.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-2">{company.name}</h2>
            <p>Status: {company.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyAppliedListPage;
