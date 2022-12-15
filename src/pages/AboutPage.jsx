import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/styles.css';
import '../assets/styles/components.css';
import CodeDialog from '../containers/AboutPage/CodeDialog';
import DBDialog from '../containers/AboutPage/DBDialog';
import DesignDialog from '../containers/AboutPage/DesignDialog';
import ElectronicDialog from '../containers/AboutPage/ElectronicDialog';
import FlagsDialog from '../containers/AboutPage/FlagDialog';
import OSDialog from '../containers/AboutPage/OSDialog';
import OfficeDialog from '../containers/AboutPage/OfficeDialog';

export default function AboutPage() {
  return (
    <div>
        <header>
          <Navbar />
        </header>
        <section>
          <h1>About Page</h1>
          <div className="spacing15" />
          <div className="card fa1">
            <h1>Programación</h1>
            <br /><hr />
            <div className="spacing10" />
            <div className="card2 fa1">
              <CodeDialog />
              <DBDialog />
              <DesignDialog />
              <ElectronicDialog />
              <FlagsDialog />
              <OSDialog />
              <OfficeDialog />
            </div>
          </div>
        </section>
    </div>
  )
}