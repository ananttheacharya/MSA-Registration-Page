import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 5%',
      zIndex: 10,
      position: 'relative'
    }}>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
        {/* Placeholder for Logo if needed, or just text */}
        <h2 style={{ color: 'var(--msa-cyan)', fontSize: '1.5rem', fontWeight: 700 }}>MSA</h2>
      </motion.div>

      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
          {['About', 'Timeline', 'FAQ'].map((item, index) => (
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
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--msa-cyan)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--msa-white)'}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
