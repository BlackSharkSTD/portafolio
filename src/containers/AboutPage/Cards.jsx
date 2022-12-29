import React from 'react';
import '../../assets/styles/components.css';
import CodeDialog from './Dialogs/CodeDialog';

export default function Cards() {
  return (
    <div className="card-row">
        <div className="card-div">
          <h1>Programación</h1>
          <div className="spacing15" />
          <p>Estos son algunos lenguajes de programación que he usado</p>
          <div className="spacing15" />
          <CodeDialog />
        </div>
    </div>
  )
}
