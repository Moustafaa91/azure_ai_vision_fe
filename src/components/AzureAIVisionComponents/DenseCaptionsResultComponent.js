import React from 'react';

const DenseCaptionsResultComponent = ({ analysisResult }) => {
  const denseCaptions = analysisResult?.denseCaptionsResult;

  return (
  <div>
    <h2>Dense Captions Result</h2>
    {denseCaptions.values.map((caption, index) => (
      <div key={index}>
        <p>{caption.text}</p>
        <p>Confidence: {(caption.confidence * 100).toFixed(2)}%</p>
      </div>
    ))}
  </div>
  );
};

export default DenseCaptionsResultComponent;