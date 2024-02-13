import React from 'react';

const ChildComponent = ({ message }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <p>Received message: {message}</p>
    </div>
  );
};

export default ChildComponent;
