import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/styles.css';

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <p className="title3">Hola</p>
      </section>
    </>
  )
}