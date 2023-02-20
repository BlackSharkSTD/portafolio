import React from 'react';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import '../assets/styles/styles.css';

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <h1>{t('home')}</h1>
      </section>
    </>
  )
}