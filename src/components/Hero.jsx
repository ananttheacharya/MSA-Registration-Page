import React from 'react';
import { motion } from 'framer-motion';
// Import assets
import element1 from '../assets/images/element1.png';
import element2 from '../assets/images/element2.png';

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
            zIndex: 2,
            overflow: 'hidden' // Ensure elements don't spill out
        }}>
            {/* Floating Element 1 (Left/Top) */}
            <motion.img
                src={element1}
                alt=""
                initial={{ opacity: 0, x: -100, rotate: -20 }}
                animate={{
                    opacity: 0.6,
                    x: [-50, 0, -50],
                    y: [-20, 20, -20],
                    rotate: [-10, 10, -10]
                }}
                transition={{
                    opacity: { duration: 1 },
                    x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: 'clamp(150px, 30vw, 400px)',
                    zIndex: -1,
                    filter: 'blur(10px)',
                    mixBlendMode: 'screen'
                }}
            />

            {/* Floating Element 2 (Right/Bottom) */}
            <motion.img
                src={element2}
                alt=""
                initial={{ opacity: 0, x: 100, rotate: 20 }}
                animate={{
                    opacity: 0.6,
                    x: [50, 0, 50],
                    y: [20, -20, 20],
                    rotate: [10, -10, 10]
                }}
                transition={{
                    opacity: { duration: 1 },
                    x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: 'clamp(150px, 30vw, 400px)',
                    zIndex: -1,
                    filter: 'blur(8px)',
                    mixBlendMode: 'screen'
                }}
            />

            {/* Gradient Orb (Center) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(80, 228, 254, 0.2) 0%, rgba(92, 46, 145, 0.1) 50%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: -2,
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }}
            />

            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                style={{
                    fontSize: 'clamp(4rem, 12vw, 9rem)',
                    fontFamily: 'var(--font-heading)', // TanCanard
                    fontWeight: 'normal', // TanCanard usually inherently bold/stylized
                    color: 'var(--msa-white)',
                    lineHeight: 0.9,
                    letterSpacing: '2px',
                    marginBottom: '1rem',
                    textShadow: '0 0 30px rgba(80, 228, 254, 0.4)',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                CODE <br />
                <span style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px var(--msa-cyan)',
                    textShadow: '0 0 10px var(--msa-cyan)'
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
                    lineHeight: 1.6,
                    position: 'relative',
                    zIndex: 1
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
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    zIndex: 1
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
