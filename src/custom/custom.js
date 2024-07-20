// custom.js
import React from 'react';
import './custom.css';


const ParentComponent = (e) => {
  return (
    <div>
      <p className='name'>{e.name}</p>
      <p className='age'>{e.age}</p>
      <p className='email'>{e.email}</p>
    </div>
  );
};
export default ParentComponent;
