import React from 'react';

const TagsResultComponent = ({ tagsResult }) => (
  <div>
    <h2>Tags Result</h2>
    {tagsResult.map((tag, index) => (
      <div key={index}>
        <p>{tag.name}</p>
        <p>Confidence: {tag.confidence}</p>
      </div>
    ))}
  </div>
);

export default TagsResultComponent;