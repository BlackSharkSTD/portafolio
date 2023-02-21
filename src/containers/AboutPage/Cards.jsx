import React from 'react';
import '../../assets/styles/components.css';
import CodeDialog from './Dialogs/CodeDialog';
import DesignDialog from './Dialogs/DesignDialog';
import FlagDialog from './Dialogs/FlagDialog';
import OfficeDialog from './Dialogs/OfficeDialog';
import OSDialog from './Dialogs/OSDialog';
import ElectroDialog from './Dialogs/ElectronicDialog';
import DBDialog from './Dialogs/DBDialog';
import ModelsDialog from './Dialogs/ModelsDialog';
import VideoDialog from './Dialogs/VideoDialog';

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
        <div className="card-div">
          <h1>Base de Datos</h1>
          <div className="spacing15" />
          <p>Estos son algunos lenguajes de programación que he usado</p>
          <div className="spacing15" />
          <DBDialog />
        </div>
        <div className="card-div">
          <h1>Office</h1>
          <div className="spacing15" />
          <p>Estos son algunos lenguajes de programación que he usado</p>
          <div className="spacing15" />
          <OfficeDialog />
        </div>
        <div className="card-div">
          <h1>Diseño</h1>
          <div className="spacing15" />
          <p>Estos son algunos lenguajes de programación que he usado</p>
          <div className="spacing15" />
          <DesignDialog />
        </div>
        <div className="card-div">
          <h1>Modelado 3D</h1>
          <div className="spacing15" />
          <p>Estos son algunos lenguajes de programación que he usado</p>
          <div className="spacing15" />
          <ModelsDialog />
        </div>
        <div className="card-div">
          <h1>Edición de video</h1>
          <div className="spacing15" />
          <p>Estos son algunos lenguajes de programación que he usado</p>
          <div className="spacing15" />
          <VideoDialog />
        </div>
        <div className="card-div">
          <h1>Sistemas Operativos</h1>
          <div className="spacing15" />
          <p>Estos son algunos lenguajes de programación que he usado</p>
          <div className="spacing15" />
          <OSDialog />
        </div>
        <div className="card-div">
          <h1>Electronica</h1>
          <div className="spacing15" />
          <p>Estos son algunos lenguajes de programación que he usado</p>
          <div className="spacing15" />
          <ElectroDialog />
        </div>
        <div className="card-div">
          <h1>Idiomas</h1>
          <div className="spacing15" />
          <p>Estos son algunos lenguajes de programación que he usado</p>
          <div className="spacing15" />
          <FlagDialog />
        </div>
    </div>
  )
}