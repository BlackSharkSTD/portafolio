import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../containers/AboutPage/Cards';
import '../assets/styles/styles.css';
import '../assets/styles/components.css';

export default function AboutPage() {
  return (
    <>
        <header>
          <Navbar />
        </header>
        <section>
          <h1>About Page</h1>
          <div className="spacing15" />
          <div className="card fa1">
            <Cards />
          </div>
        </section>
    </>
  )
}