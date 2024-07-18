import '../../App.css';
import React from 'react';

const CertificateEdit = ({ certificate, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...certificate, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="certificateName"
        value={certificate.certificateName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="certificateURL"
        value={certificate.certificateURL}
        onChange={handleChange}
      />
    </div>
  );
};

export default CertificateEdit;
