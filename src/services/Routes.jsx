import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/404Page';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import PortfolioPage from '../pages/PortfolioPage';

export default function RoutesPage() {
  return (
    <Routes>
        <Route exact path='/' element={HomePage} />
        <Route path='/about' element={AboutPage} />
        <Route path='/contact' element={ContactPage} />
        <Route path='/portfolio' element={PortfolioPage} />
        <Route exact path='*' element={ErrorPage} />
    </Routes>
  )
}