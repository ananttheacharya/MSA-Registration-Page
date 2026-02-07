import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
        }}>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    color: 'var(--msa-white)',
                    lineHeight: 0.9,
                    letterSpacing: '-2px',
                    marginBottom: '1rem',
                    textShadow: '0 0 30px rgba(80, 228, 254, 0.4)'
                }}
            >
                CODE <br />
                <span style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px var(--msa-cyan)',
                    textShadow: 'none'
                }}>CRUSH</span> <br />
                <span style={{ color: 'var(--msa-purple)' }}>1.0</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    color: 'var(--msa-light-grey)',
                    maxWidth: '800px',
                    margin: '0 auto 2rem auto',
                    lineHeight: 1.6
                }}
            >
                <p>A FLAGSHIP 36 HOUR HACKATHON</p>
                <p style={{ color: 'var(--msa-blue)', fontWeight: 600 }}>HOSTED BY MICROSOFT STUDENT AMBASSADOR, BIT JAIPUR</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--msa-grey)', textTransform: 'uppercase' }}>Date</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>27-29 MARCH <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>(Tentative)</span></span>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--msa-grey)', textTransform: 'uppercase' }}>Venue</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>TO BE ANNOUNCED</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
