import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Header />
      <Hero />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
