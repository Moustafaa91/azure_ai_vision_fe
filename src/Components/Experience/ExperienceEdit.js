import '../../App.css';
import React from 'react';

const ExperienceEdit = ({ experience, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...experience, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="roleName"
        value={experience.roleName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="companyName"
        value={experience.companyName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="companyURL"
        value={experience.companyURL}
        onChange={handleChange}
      />
      <input
        type="text"
        name="logo"
        value={experience.logo}
        onChange={handleChange}
      />
      <textarea
        name="roleDescription"
        value={experience.roleDescription}
        onChange={handleChange}
      />
    </div>
  );
};

export default ExperienceEdit;
