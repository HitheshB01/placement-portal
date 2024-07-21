import React, { useState } from 'react';
import ResumeForm from './ResumeForm';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    linkedIn: 'https://linkedin.com/in/johndoe',
    gitHub: 'https://github.com/johndoe',
    objective: 'To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.',
    technicalSkills: 'JavaScript, React, Node.js, Python',
    certifications: 'Certified JavaScript Developer, Certified React Developer',
    hobbies: 'Reading, Coding, Hiking',
    education: [
      { institution: 'University A', degree: 'B.Sc in Computer Science', gpa: '3.8', year: '2023' },
      { institution: 'High School B', degree: 'High School Diploma', gpa: '4.0', year: '2019' },
    ],
    projects: [
      { title: 'Project A', description: 'A web application for managing tasks.' },
      { title: 'Project B', description: 'A mobile app for tracking fitness activities.' },
    ],
    achievements: 'Dean\'s List, Hackathon Winner',
  });

  const handleProfileChange = (newData) => {
    setProfileData(newData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <ResumeForm initialData={profileData} onSave={handleProfileChange} />
    </div>
  );
};

export default Profile;
