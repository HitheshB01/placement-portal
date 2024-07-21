import React, { useState } from 'react';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    linkedIn: '',
    gitHub: '',
    objective: '',
    technicalSkills: '',
    certifications: '',
    hobbies: '',
    education: [{ institution: '', degree: '', gpa: '', year: '' }],
    projects: [{ title: '', description: '' }],
    achievements: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      education: newEducation,
    }));
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      projects: newProjects,
    }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { institution: '', degree: '', gpa: '', year: '' }],
    }));
  };

  const addProject = () => {
    setFormData((prevData) => ({
      ...prevData,
      projects: [...prevData.projects, { title: '', description: '' }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8">Resume Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedIn">
            LinkedIn Profile
          </label>
          <input
            id="linkedIn"
            name="linkedIn"
            type="url"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.linkedIn}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gitHub">
            GitHub Profile
          </label>
          <input
            id="gitHub"
            name="gitHub"
            type="url"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.gitHub}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="objective">
            Objective
          </label>
          <textarea
            id="objective"
            name="objective"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.objective}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technicalSkills">
            Technical Skills
          </label>
          <textarea
            id="technicalSkills"
            name="technicalSkills"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.technicalSkills}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certifications">
            Certifications
          </label>
          <textarea
            id="certifications"
            name="certifications"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.certifications}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hobbies">
            Hobbies
          </label>
          <textarea
            id="hobbies"
            name="hobbies"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.hobbies}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`institution-${index}`}>
                Institution
              </label>
              <input
                id={`institution-${index}`}
                name="institution"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`degree-${index}`}>
                Degree
              </label>
              <input
                id={`degree-${index}`}
                name="degree"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`gpa-${index}`}>
                GPA
              </label>
              <input
                id={`gpa-${index}`}
                name="gpa"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={edu.gpa}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`year-${index}`}>
                Year
              </label>
              <input
                id={`year-${index}`}
                name="year"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={addEducation}
          >
            Add Education
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          {formData.projects.map((proj, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`title-${index}`}>
                Project Title
              </label>
              <input
                id={`title-${index}`}
                name="title"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={proj.title}
                onChange={(e) => handleProjectChange(index, e)}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`description-${index}`}>
                Description
              </label>
              <textarea
                id={`description-${index}`}
                name="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={proj.description}
                onChange={(e) => handleProjectChange(index, e)}
              ></textarea>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={addProject}
          >
            Add Project
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="achievements">
            Achievements
          </label>
          <textarea
            id="achievements"
            name="achievements"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.achievements}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;



























// import React, { useState } from 'react';
// import FreshersResume from './FreshersResume';

// const ResumeForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     linkedin: '',
//     github: '',
//     objective: '',
//     education: [],
//     projects: [],
//     technicalSkills: [],
//     certifications: [],
//     achievements: [],
//     hobbies: []
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* Form fields for all resume details */}
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
//         {/* Add inputs for other fields similarly */}
//         <button type="submit">Generate Resume</button>
//       </form>

//       {formData.name && <FreshersResume {...formData} />}
//     </div>
//   );
// };

// export default ResumeForm;












// import React, { useState, useEffect } from 'react';

// const ResumeForm = ({ initialData, onSave }) => {
//   const [formData, setFormData] = useState(initialData || {
//     name: '',
//     email: '',
//     phoneNumber: '',
//     linkedIn: '',
//     gitHub: '',
//     objective: '',
//     technicalSkills: '',
//     certifications: '',
//     hobbies: '',
//     education: [],
//     projects: [],
//     achievements: '',
//   });

//   useEffect(() => {
//     setFormData(initialData);
//   }, [initialData]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleEducationChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedEducation = [...formData.education];
//     updatedEducation[index][name] = value;
//     setFormData({ ...formData, education: updatedEducation });
//   };

//   const handleProjectChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedProjects = [...formData.projects];
//     updatedProjects[index][name] = value;
//     setFormData({ ...formData, projects: updatedProjects });
//   };

//   const addEducation = () => {
//     setFormData({
//       ...formData,
//       education: [...formData.education, { institution: '', degree: '', gpa: '', year: '' }],
//     });
//   };

//   const addProject = () => {
//     setFormData({
//       ...formData,
//       projects: [...formData.projects, { title: '', description: '' }],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold mb-8">Resume Form</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Personal Information Fields */}
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
//           <input id="name" name="name" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.name} onChange={handleInputChange} />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
//           <input id="email" name="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.email} onChange={handleInputChange} />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
//           <input id="phoneNumber" name="phoneNumber" type="tel" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.phoneNumber} onChange={handleInputChange} />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedIn">LinkedIn Profile</label>
//           <input id="linkedIn" name="linkedIn" type="url" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.linkedIn} onChange={handleInputChange} />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gitHub">GitHub Profile</label>
//           <input id="gitHub" name="gitHub" type="url" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.gitHub} onChange={handleInputChange} />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="objective">Objective</label>
//           <textarea id="objective" name="objective" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.objective} onChange={handleInputChange}></textarea>
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technicalSkills">Technical Skills</label>
//           <textarea id="technicalSkills" name="technicalSkills" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.technicalSkills} onChange={handleInputChange}></textarea>
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certifications">Certifications</label>
//           <textarea id="certifications" name="certifications" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.certifications} onChange={handleInputChange}></textarea>
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hobbies">Hobbies</label>
//           <textarea id="hobbies" name="hobbies" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.hobbies} onChange={handleInputChange}></textarea>
//         </div>
//         {/* Education Section */}
//         <div className="mb-6">
//           <h2 className="text-xl font-bold mb-2">Education</h2>
//           {formData.education.map((edu, index) => (
//             <div key={index} className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`institution-${index}`}>Institution</label>
//               <input id={`institution-${index}`} name="institution" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={edu.institution} onChange={(e) => handleEducationChange(index, e)} />
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`degree-${index}`}>Degree</label>
//               <input id={`degree-${index}`} name="degree" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} />
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`gpa-${index}`}>GPA</label>
//               <input id={`gpa-${index}`} name="gpa" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={edu.gpa} onChange={(e) => handleEducationChange(index, e)} />
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`year-${index}`}>Year</label>
//               <input id={`year-${index}`} name="year" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={edu.year} onChange={(e) => handleEducationChange(index, e)} />
//             </div>
//           ))}
//           <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={addEducation}>Add Education</button>
//         </div>
//         {/* Projects Section */}
//         <div className="mb-6">
//           <h2 className="text-xl font-bold mb-2">Projects</h2>
//           {formData.projects.map((proj, index) => (
//             <div key={index} className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`title-${index}`}>Project Title</label>
//               <input id={`title-${index}`} name="title" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={proj.title} onChange={(e) => handleProjectChange(index, e)} />
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`description-${index}`}>Description</label>
//               <textarea id={`description-${index}`} name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={proj.description} onChange={(e) => handleProjectChange(index, e)}></textarea>
//             </div>
//           ))}
//           <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={addProject}>Add Project</button>
//         </div>
//         {/* Achievements Section */}
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="achievements">Achievements</label>
//           <textarea id="achievements" name="achievements" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.achievements} onChange={handleInputChange}></textarea>
//         </div>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ResumeForm;
