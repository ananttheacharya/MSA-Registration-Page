import React from 'react';
import { motion } from 'framer-motion';
import MSALogo from '../assets/MSALOGO.png';
import BITMesraLogo from '../assets/BITMESRALOGO.png';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 5%',
      zIndex: 100,
      position: 'relative',
      background: 'rgba(0,0,0,0.2)',
      backdropFilter: 'blur(10px)'
    }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
        <img src={MSALogo} alt="MLSA Logo" style={{ height: '50px' }} />

      </motion.div>

      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
          {['About', 'Timeline', 'Team'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <a href={`#${item.toLowerCase()}`} style={{
                color: 'var(--msa-white)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                transition: 'color 0.3s',
                fontFamily: 'var(--font-body)'
              }}
                onMouseEnter={(e) => e.target.style.color = 'var(--msa-cyan)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--msa-white)'}
              >
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img src={BITMesraLogo} alt="BIT Mesra Logo" style={{ height: '50px', marginLeft: '1rem' }} />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
