import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingBackground from './components/FloatingBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Timeline from './components/Timeline';
import TeamCarousel from './components/TeamCarousel';
import CountdownTimer from './components/CountdownTimer';
import RegisterPage from './pages/RegisterPage';

// Home Component to group landing page sections
const Home = () => {
  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <FloatingBackground />

      <Header />

      <main>
        <Hero />
        <AboutSection />
        <Timeline />
        <TeamCarousel />

        <section style={{ padding: '4rem 5%', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '2rem' }}>Ready to Crush It?</h2>
          <CountdownTimer />

          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--msa-purple)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(45deg, var(--msa-blue), var(--msa-purple))',
                color: 'white',
                border: 'none',
                padding: '1.2rem 4rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                borderRadius: '50px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                margin: '2rem 0',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              REGISTER NOW
            </motion.button>
          </Link>
        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--msa-grey)',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        &copy; 2026 Microsoft Student Ambassadors, BIT Jaipur. All rights reserved.
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
