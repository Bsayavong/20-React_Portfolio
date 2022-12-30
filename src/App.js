import Nav from './components/nav';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}