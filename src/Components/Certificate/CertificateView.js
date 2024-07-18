import '../../App.css';
import React from 'react';

const CertificateView = ({ certificate }) => (
  <div>
    <h4>{certificate.certificateName}</h4>
    <a href={certificate.certificateURL}>View Certificate</a>
  </div>
);

export default CertificateView;
