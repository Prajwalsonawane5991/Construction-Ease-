import React from 'react';
import { Link } from 'react-router-dom';
import ChildComponent from './ChildComponent';
const ParentComponent = () => {
  return (
    <>
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div style={{justifyContent:"center", alignItems:"center"}}>
      
      <Link to="/child">Go to Child Component</Link>
      <h1>Parent Component</h1>
      <ChildComponent message={"yasir"}></ChildComponent>
    </div>
    </>
  );
};

export default ParentComponent;
