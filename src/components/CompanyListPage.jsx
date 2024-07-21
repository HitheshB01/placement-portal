import React from 'react';
import CompanyList from './CompanyList';

const CompanyListPage = () => {
  const companies = [
    {
      id: 1,
      name: 'Company A',
      logo: 'path/to/logo1.png',
      description: 'Leading tech company',
      role: 'Software Engineer',
      details: 'Company A is a leading tech company specializing in AI and machine learning.',
      openings: 5,
      salary: '120,000 USD',
      skills: ['JavaScript', 'React', 'Node.js']
    },
    {
      id: 2,
      name: 'Company B',
      logo: 'path/to/logo2.png',
      description: 'Innovative startup',
      role: 'Frontend Developer',
      details: 'Company B is an innovative startup focusing on web development.',
      openings: 3,
      salary: '80,000 USD',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    // Add more companies as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Company List</h1>
      <CompanyList companies={companies} />
    </div>
  );
};

export default CompanyListPage;
