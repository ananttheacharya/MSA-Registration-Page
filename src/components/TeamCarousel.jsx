import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Yatharth Kaushikk',
        role: 'Lead',
        // Using a reliable placeholder service or just a div
        image: 'https://placehold.co/400x400/263961/FFF?text=Yatharth'
    },
    {
        name: 'Priyanshu Raj',
        role: 'Co-Lead',
        image: 'https://placehold.co/400x400/263961/FFF?text=Priyanshu'
    },
    {
        name: 'Shubh Gupta',
        role: 'General Secretary',
        image: 'https://placehold.co/400x400/263961/FFF?text=Shubh'
    }
];

const TeamCarousel = () => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    return (
        <section id="team" style={{ padding: '4rem 5%', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '3rem',
                color: 'var(--msa-white)'
            }}>
                Meet The Team
            </h2>

            <motion.div
                ref={carouselRef}
                className="carousel"
                whileTap={{ cursor: "grabbing" }}
                style={{ overflow: 'hidden' }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    style={{ display: 'flex', gap: '2rem', justifyContent: width === 0 ? 'center' : 'flex-start' }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="item"
                            style={{
                                minWidth: '300px',
                                padding: '2rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                textAlign: 'center'
                            }}
                            whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.1)' }}
                        >
                            <div style={{
                                width: '150px',
                                height: '150px',
                                margin: '0 auto 1.5rem',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '3px solid var(--msa-cyan)'
                            }}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    draggable="false"
                                />
                            </div>
                            <h3 style={{
                                margin: '0.5rem 0',
                                fontSize: '1.5rem',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--msa-white)'
                            }}>
                                {member.name}
                            </h3>
                            <p style={{
                                color: 'var(--msa-cyan)',
                                fontSize: '1.1rem',
                                fontWeight: '600'
                            }}>
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default TeamCarousel;
