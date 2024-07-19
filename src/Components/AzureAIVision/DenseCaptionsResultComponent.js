import React from 'react';

const DenseCaptionsResultComponent = ({ denseCaptionsResult }) => (
  <div>
    <h2>Dense Captions Result</h2>
    {denseCaptionsResult.values.map((caption, index) => (
      <div key={index}>
        <p>{caption.text}</p>
        <p>Confidence: {(caption.confidence * 100).toFixed(2)}%</p>
      </div>
    ))}
  </div>
);

export default DenseCaptionsResultComponent;