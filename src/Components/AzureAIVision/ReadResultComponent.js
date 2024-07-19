import React from 'react';

const ReadResultComponent = ({ readResult }) => (
  <div>
    <h2>Read Result</h2>
    <p>{readResult.text}</p>
  </div>
);

export default ReadResultComponent;