import React from 'react';

const SmartCropsResultComponent = ({ smartCropsResult }) => (
  <div>
    <h2>Smart Crops Result</h2>
    {smartCropsResult.map((crop, index) => (
      <div key={index}>
        <img src={crop.url} alt={`Crop ${index}`} />
        <p>Confidence: {crop.confidence}</p>
      </div>
    ))}
  </div>
);

export default SmartCropsResultComponent;