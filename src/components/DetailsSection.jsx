import React from 'react';
import { motion } from 'framer-motion';

const DetailsSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                maxHeight: '400px',
                overflowY: 'auto',
                color: 'var(--msa-light-grey)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h3 style={{ color: 'var(--msa-cyan)', marginBottom: '1rem', fontSize: '1.8rem' }}>Event Details</h3>
            <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                    Join us for the Microsoft Student Ambassador Hackathon 2026, a global event designed to ignite creativity and innovation.
                    Connect with fellow students, learn from industry experts, and build solutions that matter.
                </p>
                <h4 style={{ color: 'var(--msa-white)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Themes</h4>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>AI for Good</li>
                    <li>Sustainable Tech</li>
                    <li>Education & Accessibility</li>
                    <li>FinTech Innovation</li>
                </ul>
                <h4 style={{ color: 'var(--msa-white)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Prizes</h4>
                <p>
                    Top teams will win exclusive mentorship sessions, Surface laptops, and a chance to interview for internships at Microsoft.
                </p>
                <h4 style={{ color: 'var(--msa-white)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Location</h4>
                <p>Virtual & Hybrid Hubs across 50+ Universities worldwide.</p>

                {/* Placeholder text to ensure scrollability */}
                <p style={{ marginTop: '1rem', opacity: 0.7 }}>
                    Rules and regulations apply. Please ensure you read the participant handbook before registering.
                    Teams can consist of 1 to 4 members. All code must be written during the hackathon period.
                    External libraries and APIs are allowed.
                </p>
            </div>
        </motion.section>
    );
};

export default DetailsSection;
