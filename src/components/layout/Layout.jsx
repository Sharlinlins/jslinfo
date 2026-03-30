import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, scrollToSection, activeSection, isServicePage }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        scrollToSection={scrollToSection} 
        activeSection={activeSection}
        isServicePage={isServicePage}
      />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Layout;