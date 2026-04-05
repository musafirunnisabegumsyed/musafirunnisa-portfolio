import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  // Smooth scroll for "View Projects" button
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll reveal animation
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    animatedElements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div>
      <Header />
      <Hero scrollToProjects={scrollToProjects} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;