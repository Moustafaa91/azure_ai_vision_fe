// src/Components/CaptionResultComponent.js
import React from 'react';

const CaptionResultComponent = ({ analysisResult }) => {
  const captionResult = analysisResult?.captionResult;

  return (
    <div>
      <h2>Caption Result</h2>
      {captionResult ? (
        <>
          <p>{captionResult.text}</p>
          <p>Confidence: {(captionResult.confidence * 100).toFixed(2)}%</p>
        </>
      ) : (
        <p>No caption result available.</p>
      )}
    </div>
  );
};

export default CaptionResultComponent;
