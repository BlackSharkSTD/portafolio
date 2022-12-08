import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/styles.css';
import '../assets/styles/components.css';
import { ProgressBar } from '../components/ProgressBar';

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
            <h1>Hola</h1>
            <div className="spacing10" />
            <p>Hola esto es un texto de prueba</p>
            <div className="spacing10" />
            <ProgressBar size="99%" color="#03a9f4" />
            <div className="spacing10" />
            <ProgressBar size="20%" color="#00e59b" />
            <div className="spacing10" />
            <ProgressBar size="40%" color="#ff8c00" />
            <div className="spacing10" />
            <ProgressBar size="50%" color="#a1a1a1" />
          </div>
          <div className="spacing10" />
        </section>
    </div>
  )
}