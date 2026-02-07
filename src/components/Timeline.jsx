import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const events = [
        { date: '1-8 MARCH', title: 'REGISTRATION OPEN', icon: '🚀' },
        { date: '8 - 14 MARCH', title: 'PPT SUBMISSION', icon: '📝' },
        { date: '14-16 MARCH', title: 'EVALUATION', icon: '⚖️' },
        { date: '27-29 MARCH', title: '36 HOUR HACKATHON', icon: '💻' },
    ];

    return (
        <section id="timeline" style={{ padding: '4rem 5%', position: 'relative', zIndex: 2 }}>
            <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '4rem',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }}>Event Timeline</h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, var(--msa-blue), var(--msa-purple), var(--msa-cyan))',
                    zIndex: 0
                }}></div>

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            alignItems: 'center',
                            marginBottom: '3rem',
                            position: 'relative'
                        }}
                    >
                        {/* Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'var(--msa-black)',
                            border: '4px solid var(--msa-cyan)',
                            boxShadow: '0 0 10px var(--msa-cyan)',
                            zIndex: 1
                        }}></div>

                        {/* Content Card */}
                        <div style={{
                            width: '45%',
                            padding: '1.5rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            textAlign: index % 2 === 0 ? 'right' : 'left',
                            position: 'relative',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                        }}>
                            <span style={{
                                display: 'block',
                                fontSize: '2rem',
                                marginBottom: '0.5rem'
                            }}>{event.icon}</span>
                            <h3 style={{
                                color: 'var(--msa-white)',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.2rem'
                            }}>{event.title}</h3>
                            <p style={{
                                color: 'var(--msa-cyan)',
                                fontWeight: 'bold',
                                marginTop: '0.5rem',
                                letterSpacing: '1px'
                            }}>{event.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
