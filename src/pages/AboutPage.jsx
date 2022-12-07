import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/styles.css';
import '../assets/styles/components.css';
import PBTwitter from '../components/ProgressBar/ProgressBar';

export default function AboutPage() {
  return (
    <div>
        <header>
          <Navbar />
        </header>
        <section>
          <h1>About Page</h1>
          <div className="spacing5" />
          <div className="progress-bar">
            <div className="pb-twitter" />
          </div>
          <div className="spacing15" />
          <div className="progress-bar">
            <div className="pb-dev" />
          </div>
        </section>
    </div>
  )
}