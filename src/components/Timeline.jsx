import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const Timeline = () => {
    const events = [
        {
            date: '1 - 8 MARCH',
            title: 'REGISTRATION PHASE',
            description: 'The journey begins here. Rally your team of 2-4 innovators and register for the event. This is your first step towards making a mark in the tech world.'
        },
        {
            date: '8 - 14 MARCH',
            title: 'IDEA SUBMISSION',
            description: 'Brainstorm, innovate, and refine. Submit your comprehensive project proposal and presentation (PPT) detailing your unique solution to the problem statements.'
        },
        {
            date: '14 - 16 MARCH',
            title: 'EVALUATION ROUND',
            description: 'Our panel of experts will review all submissions. The most promising and impactful ideas will be shortlisted to compete in the grand finale.'
        },
        {
            date: '27 - 29 MARCH',
            title: 'THE HACKATHON',
            description: 'The main event awaits! 36 hours of non-stop coding, building, and deploying. Collaborate, learn from mentors, and bring your vision to life.'
        },
    ];

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="timeline" style={{ padding: '6rem 5%', position: 'relative', zIndex: 2 }}>
            <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3.5rem',
                textAlign: 'center',
                marginBottom: '5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--msa-white)',
                textShadow: '0 0 20px rgba(80, 228, 254, 0.3)'
            }}>Timeline</h2>

            <div ref={ref} style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>

                {/* Glowing Background Line */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, transparent, rgba(80, 228, 254, 0.1) 10%, rgba(92, 46, 145, 0.1) 90%, transparent)',
                    filter: 'blur(4px)',
                    zIndex: 0
                }}></div>

                {/* Animated Central Line */}
                <motion.div style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(to bottom, transparent, var(--msa-cyan) 10%, var(--msa-purple) 90%, transparent)',
                    transformOrigin: 'top',
                    zIndex: 1,
                    translateX: '-50%'
                }} />

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                        style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            alignItems: 'center',
                            marginBottom: '4rem',
                            position: 'relative'
                        }}
                    >
                        {/* Timeline Node */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'var(--msa-black)',
                            border: '2px solid var(--msa-cyan)',
                            boxShadow: '0 0 15px var(--msa-cyan)',
                            zIndex: 2
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                background: 'var(--msa-cyan)',
                                opacity: 0.3,
                                animation: 'pulse 2s infinite'
                            }}></div>
                        </div>

                        {/* Content Card */}
                        <div style={{
                            width: '42%',
                            padding: '2rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderLeft: index % 2 !== 0 ? '4px solid var(--msa-cyan)' : '1px solid rgba(255,255,255,0.05)',
                            borderRight: index % 2 === 0 ? '4px solid var(--msa-cyan)' : '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '16px',
                            textAlign: index % 2 === 0 ? 'right' : 'left',
                            position: 'relative',
                            transition: 'transform 0.3s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                            }}
                        >
                            <span style={{
                                display: 'inline-block',
                                color: 'var(--msa-cyan)',
                                fontWeight: '700',
                                fontSize: '0.9rem',
                                letterSpacing: '2px',
                                marginBottom: '0.5rem',
                                textTransform: 'uppercase',
                                borderBottom: '1px solid rgba(80, 228, 254, 0.3)',
                                paddingBottom: '0.2rem'
                            }}>
                                {event.date}
                            </span>
                            <h3 style={{
                                color: 'var(--msa-white)',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.8rem',
                                margin: '0.5rem 0 1rem',
                                lineHeight: 1.2
                            }}>{event.title}</h3>
                            <p style={{
                                color: 'var(--msa-light-grey)',
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                fontWeight: 300,
                                fontFamily: 'var(--font-body)'
                            }}>{event.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style>
                {`
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 0; }
                }
                `}
            </style>
        </section>
    );
};

export default Timeline;
