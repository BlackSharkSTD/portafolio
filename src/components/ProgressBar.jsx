import React from 'react';
import '../assets/styles/components.css';

export const ProgressBar = ({size, color, title}) => {
  return(
    <div className="progress-bar">
      <label>{title}</label>
      <p>{size}</p>
      <div className="progress">
        <hr className="barr" width={size} color={color} />
      </div>
    </div>
  );
};
