import React from 'react';
import '../assets/styles/components.css';

export const ProgressBar = ({size, color}) => {
  return(
    <div className="progress">
      <hr className="barr" width={size} color={color} />
      <p>{size}</p>
    </div>
  );
};
