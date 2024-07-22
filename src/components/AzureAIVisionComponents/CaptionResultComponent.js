// src/Components/CaptionResultComponent.js
import React from 'react';

const CaptionResultComponent = ({ captionResult }) => (
  <div>
    <h2>Caption Result</h2>
    <p>{captionResult.text}</p>
    <p>Confidence: {(captionResult.confidence * 100).toFixed(2)}%</p>
  </div>
);

export default CaptionResultComponent;