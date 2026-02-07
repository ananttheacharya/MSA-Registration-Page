import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const cardStyle = {
        background: 'rgba(13, 13, 13, 0.6)',
        border: '1px solid var(--msa-dark-blue)',
        borderRadius: '16px',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
        height: '100%'
    };

    return (
        <section id="about" style={{ padding: '4rem 10%', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={cardStyle}
                >
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--msa-cyan)', marginBottom: '1rem', fontSize: '2rem' }}>About MSA</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--msa-light-grey)' }}>
                        Microsoft Student Ambassadors are a global group of on-campus ambassadors who are eager to help fellow students, lead in their local tech communities, and develop technical and career skills for the future. The BIT Jaipur Chapter is dedicated to fostering innovation and technical growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={cardStyle}
                >
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--msa-purple)', marginBottom: '1rem', fontSize: '2rem' }}>About BIT Jaipur</h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--msa-light-grey)' }}>
                        Birla Institute of Technology, Jaipur (BIT Jaipur) is an off-campus centre of BIT Mesra, Ranchi, established in 1995. It operates under the academic guidance of the parent university, adhering to the same high standards of curriculum and examination.
                    </p>
                    <blockquote style={{
                        marginTop: '1rem',
                        fontStyle: 'italic',
                        borderLeft: '3px solid var(--msa-white)',
                        paddingLeft: '1rem',
                        color: 'var(--msa-white)'
                    }}>
                        “सा विद्या या विमुक्तये” <br />
                        <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>(That is knowledge which liberates)</span>
                    </blockquote>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ ...cardStyle, marginTop: '2rem', textAlign: 'center', borderColor: 'var(--msa-cyan)' }}
            >
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--msa-white)', marginBottom: '1rem', fontSize: '2rem' }}>About The Event</h3>
                <p style={{ lineHeight: '1.6', color: 'var(--msa-light-grey)', maxWidth: '800px', margin: '0 auto' }}>
                    Hosted by the Microsoft Student Ambassador community, this <strong style={{ color: 'var(--msa-cyan)' }}>36-hour hackathon</strong> is an innovation-driven experience where developers, designers, and creators collaborate to turn ideas into real solutions. Participants will build across domains like AI, web, and cloud while receiving mentorship, resources, and support from our valued sponsors.
                </p>
            </motion.div>
        </section>
    );
};

export default AboutSection;
