import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingBackground from '../components/FloatingBackground';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        teamName: '',
        leaderName: '',
        leaderEmail: '',
        leaderPhone: '',
        member2Name: '',
        member3Name: '', // Optional
        member4Name: '', // Optional
        projectDomain: 'Web Development',
        projectAbstract: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Registration Submitted! (Demo)");
    };

    const inputGroupStyle = {
        marginBottom: '1.5rem'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        color: 'var(--msa-cyan)',
        fontFamily: 'monospace',
        fontSize: '0.9rem'
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid var(--msa-grey)',
        borderRadius: '8px',
        color: 'var(--msa-white)',
        fontSize: '1rem',
        outline: 'none',
    };

    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <FloatingBackground />

            <div style={{ position: 'relative', zIndex: 10, padding: '2rem 5%' }}>
                <Link to="/" style={{
                    color: 'var(--msa-white)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                    opacity: 0.8
                }}>
                    ← Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: 'rgba(13, 13, 13, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid var(--msa-purple)',
                        borderRadius: '24px',
                        padding: '3rem'
                    }}
                >
                    <h1 style={{
                        textAlign: 'center',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '2rem',
                        fontSize: '3rem',
                        color: 'var(--msa-white)'
                    }}>Team Registration</h1>

                    <form onSubmit={handleSubmit}>
                        {/* Team Details */}
                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>TEAM NAME</label>
                            <input type="text" name="teamName" required style={inputStyle} value={formData.teamName} onChange={handleChange} />
                        </div>

                        {/* Leader Details */}
                        <h3 style={{ color: 'var(--msa-white)', margin: '2rem 0 1rem 0', borderBottom: '1px solid var(--msa-grey)', paddingBottom: '0.5rem' }}>Team Leader</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>NAME</label>
                                <input type="text" name="leaderName" required style={inputStyle} value={formData.leaderName} onChange={handleChange} />
                            </div>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>EMAIL</label>
                                <input type="email" name="leaderEmail" required style={inputStyle} value={formData.leaderEmail} onChange={handleChange} />
                            </div>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>PHONE</label>
                                <input type="tel" name="leaderPhone" required style={inputStyle} value={formData.leaderPhone} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Member Details */}
                        <h3 style={{ color: 'var(--msa-white)', margin: '2rem 0 1rem 0', borderBottom: '1px solid var(--msa-grey)', paddingBottom: '0.5rem' }}>Team Members</h3>
                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>MEMBER 2 NAME (Required)</label>
                            <input type="text" name="member2Name" required style={inputStyle} value={formData.member2Name} onChange={handleChange} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>MEMBER 3 NAME (Optional)</label>
                                <input type="text" name="member3Name" style={inputStyle} value={formData.member3Name} onChange={handleChange} />
                            </div>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>MEMBER 4 NAME (Optional)</label>
                                <input type="text" name="member4Name" style={inputStyle} value={formData.member4Name} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Project Details */}
                        <h3 style={{ color: 'var(--msa-white)', margin: '2rem 0 1rem 0', borderBottom: '1px solid var(--msa-grey)', paddingBottom: '0.5rem' }}>Project Info</h3>
                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>Track / Domain</label>
                            <select name="projectDomain" style={inputStyle} value={formData.projectDomain} onChange={handleChange}>
                                <option>Web Development</option>
                                <option>AI / ML</option>
                                <option>Full Stack App</option>
                                <option>Blockchain / Web3</option>
                                <option>IoT / Hardware</option>
                                <option>Open Innovation</option>
                            </select>
                        </div>
                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>Abstract / Idea Brief</label>
                            <textarea name="projectAbstract" rows="4" style={{ ...inputStyle, resize: 'vertical' }} value={formData.projectAbstract} onChange={handleChange}></textarea>
                        </div>

                        <button type="submit" style={{
                            width: '100%',
                            padding: '1.2rem',
                            marginTop: '2rem',
                            background: 'linear-gradient(90deg, var(--msa-blue), var(--msa-purple))',
                            border: 'none',
                            borderRadius: '50px',
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            boxShadow: '0 0 20px rgba(92, 46, 145, 0.5)'
                        }}>
                            SUBMIT REGISTRATION
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default RegisterPage;
