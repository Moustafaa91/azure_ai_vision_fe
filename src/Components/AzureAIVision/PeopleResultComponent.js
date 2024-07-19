import React from 'react';

const PeopleResultComponent = ({ peopleResult }) => (
  <div>
    <h2>People Result</h2>
    {peopleResult.map((person, index) => (
      <div key={index}>
        <p>{person.name}</p>
        <p>Confidence: {person.confidence}</p>
      </div>
    ))}
  </div>
);

export default PeopleResultComponent;