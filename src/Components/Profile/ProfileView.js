import '../../App.css';
import React from 'react';
import ExperienceView from '../Experience/ExperienceView';
import CertificateView from '../Certificate/CertificateView';

const ProfileView = ({ profile }) => (
  <div>
    <div className="container">
    <img width="20%" height="20%" src={profile.photo} alt="Profile" />
    <h1>{profile.name}</h1>
    <p>Age: {profile.age}</p>
    <p>Email: {profile.email}</p>
    <p>Gender: {profile.gender}</p>
    <p>Years of Experience: {profile.yearsOfExperience}</p>
    <p>Summary: {profile.summary}</p>
    </div>

    <div className="container">

    <h2>Experiences</h2>
    {profile.experiences.map((exp, index) => (
      <ExperienceView key={index} experience={exp} />
    ))}

    </div>

    <div className="container">
    <h2>Skills</h2>
    <ul>
      {profile.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>

    </div>
    <div className="container">
    <h2>Certificates</h2>
    {profile.certificates.map((cert, index) => (
      <CertificateView key={index} certificate={cert} />
    ))}
</div>
    
  </div>
);

export default ProfileView;
