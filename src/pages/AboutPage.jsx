import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/styles.css';
import '../assets/styles/components.css';
import CodeDialog from '../containers/AboutPage/CodeDialog';
import DBDialog from '../containers/AboutPage/DBDialog';
import DesignDialog from '../containers/AboutPage/DesignDialog';
import ElectronicDialog from '../containers/AboutPage/ElectronicDialog';

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
            <CodeDialog />
            <DBDialog />
            <DesignDialog />
            <ElectronicDialog />
          </div>
        </section>
    </div>
  )
}