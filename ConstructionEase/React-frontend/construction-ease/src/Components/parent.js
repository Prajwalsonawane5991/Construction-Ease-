import React from 'react';
import { Link } from 'react-router-dom';
import ChildComponent from './child';
const ParentComponent = () => {
  return (
    <div>
      <Link to="/child">Go to Child Component</Link>
      <h1>Parent Component</h1>
      <ChildComponent message={"yasir"}></ChildComponent>
    </div>
  );
};

export default ParentComponent;
