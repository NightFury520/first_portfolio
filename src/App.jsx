import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import './App.css';
import Socials from './components/Socials';

const App = () => {
  return (
    <>
      <Header />
      <Socials />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App