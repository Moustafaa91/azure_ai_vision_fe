import '../../App.css';
import React from 'react';

const ExperienceView = ({ experience }) => (
  <div>
    <img width="80" height="80" src={experience.logo} alt="Company Logo" />
    <h3>{experience.roleName}</h3>
    <p>Company: <a href={experience.companyURL}>{experience.companyName}</a></p>
    <p>{experience.roleDescription}</p>
  </div>
);

export default ExperienceView;
