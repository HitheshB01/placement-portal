import React from 'react';

const FreshersResume = ({
  name,
  email,
  phone,
  linkedin,
  github,
  objective,
  education,
  projects,
  technicalSkills,
  certifications,
  achievements,
  hobbies
}) => {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg" style={{ width: '210mm', height: '297mm' }}>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900">{name}</h1>
        <p className="text-lg text-gray-700">{email} | {phone}</p>
        <p className="text-lg text-gray-700">{linkedin} | {github}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="col-span-1">
          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Objective</h2>
          <p className="text-gray-800 mb-8">{objective}</p>
          
          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Technical Skills</h2>
          <ul className="list-disc list-inside text-gray-800 mb-8">
            {technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-800 mb-8">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Hobbies</h2>
          <ul className="list-disc list-inside text-gray-800">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </aside>

        <section className="col-span-2">
          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
              <p className="text-gray-700">{edu.degree} | {edu.gpa} | {edu.year}</p>
            </div>
          ))}

          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}

          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Achievements</h2>
          <ul className="list-disc list-inside text-gray-800">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FreshersResume;
