import React from 'react';

const ObjectsResultComponent = ({ analysisResult }) => {
  const objects = analysisResult?.objectsResult;

  return ( 
  <div>
    <h2>Objects Result</h2>
    {objects ? (
      <>
      {objects.values.map((object, index) => (
        <div key={index}>
          <div>
            <p>Bounding Box: x: {object.boundingBox.x}, y: {object.boundingBox.y}, w: {object.boundingBox.w}, h: {object.boundingBox.h}</p>
          </div>
          {object.tags.map((tag, tagIndex) => (
            <div key={tagIndex}>
              <p>{tag.name}</p>
              <p>Confidence: {(tag.confidence * 100).toFixed(2)}%</p>
            </div>
          ))}
        </div>
      ))}
      </>
    ) : (
      <p>No objects result available.</p>
    )}
    
  </div>
  );
};

export default ObjectsResultComponent;