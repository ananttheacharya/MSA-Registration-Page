import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const RegisterModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        university: '',
        projectIdea: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registration Successful for ${formData.name}! (This is a demo)`);
        onClose();
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        marginBottom: '1rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid var(--msa-grey)',
        borderRadius: '8px',
        color: 'var(--msa-white)',
        fontSize: '1rem',
        outline: 'none',
        fontFamily: 'var(--font-body)',
        transition: 'border-color 0.3s'
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(5px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 100
                }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            width: '90%',
                            maxWidth: '500px',
                            background: 'rgba(13, 13, 13, 0.9)',
                            border: '1px solid var(--msa-cyan)',
                            borderRadius: '20px',
                            padding: '2.5rem',
                            position: 'relative',
                            boxShadow: '0 0 50px rgba(80, 228, 254, 0.2)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'none',
                                border: 'none',
                                color: 'var(--msa-white)',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={24} />
                        </button>

                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--msa-white)',
                            marginBottom: '2rem',
                            textAlign: 'center',
                            fontSize: '2rem'
                        }}>
                            Join the <span style={{ color: 'var(--msa-purple)' }}>Future</span>
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                            <input
                                type="text"
                                name="university"
                                placeholder="University / College"
                                value={formData.university}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                            <textarea
                                name="projectIdea"
                                placeholder="Project Idea (Optional)"
                                value={formData.projectIdea}
                                onChange={handleChange}
                                style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                            />

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    style={{
                                        flex: 1,
                                        padding: '1rem',
                                        background: 'transparent',
                                        border: '1px solid var(--msa-grey)',
                                        color: 'var(--msa-white)',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    style={{
                                        flex: 1,
                                        padding: '1rem',
                                        background: 'var(--msa-blue)',
                                        border: 'none',
                                        color: 'white',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        boxShadow: '0 0 15px rgba(1, 119, 215, 0.4)'
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RegisterModal;
