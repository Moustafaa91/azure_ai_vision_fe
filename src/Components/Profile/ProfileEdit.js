import '../../App.css';
import React, { useState } from 'react';
import ExperienceEdit from '../Experience/ExperienceEdit';
import CertificateEdit from '../Certificate/CertificateEdit';

const ProfileEdit = ({ profile, onSave, onCancel }) => {
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleExperienceChange = (index, updatedExperience) => {
    const updatedExperiences = editedProfile.experiences.map((exp, i) =>
      i === index ? updatedExperience : exp
    );
    setEditedProfile({ ...editedProfile, experiences: updatedExperiences });
  };

  const handleCertificateChange = (index, updatedCertificate) => {
    const updatedCertificates = editedProfile.certificates.map((cert, i) =>
      i === index ? updatedCertificate : cert
    );
    setEditedProfile({ ...editedProfile, certificates: updatedCertificates });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={editedProfile.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={editedProfile.age}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={editedProfile.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        value={editedProfile.gender}
        onChange={handleChange}
      />
      <input
        type="number"
        name="yearsOfExperience"
        value={editedProfile.yearsOfExperience}
        onChange={handleChange}
      />
      <input
        type="text"
        name="photo"
        value={editedProfile.photo}
        onChange={handleChange}
      />
      <textarea
        name="summary"
        value={editedProfile.summary}
        onChange={handleChange}
      />
      
      <h2>Experiences</h2>
      {editedProfile.experiences.map((exp, index) => (
        <ExperienceEdit
          key={index}
          experience={exp}
          onChange={(updatedExperience) =>
            handleExperienceChange(index, updatedExperience)
          }
        />
      ))}

      <h2>Skills</h2>
      <ul>
        {editedProfile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Certificates</h2>
      {editedProfile.certificates.map((cert, index) => (
        <CertificateEdit
          key={index}
          certificate={cert}
          onChange={(updatedCertificate) =>
            handleCertificateChange(index, updatedCertificate)
          }
        />
      ))}

      <button onClick={() => onSave(editedProfile)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ProfileEdit;
