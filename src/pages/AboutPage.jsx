import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/styles.css';
import '../assets/styles/components.css';
import CodeSection from '../containers/AboutPage/CodeSection';

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
            <p>Esta es una recopilación de mis conocimientos que he adquirido en el area de programación</p>
            <CodeSection />
          </div>
        </section>
    </div>
  )
}