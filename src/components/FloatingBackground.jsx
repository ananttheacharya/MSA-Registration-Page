import React from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = () => {
    const bubbles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        color: i % 2 === 0 ? 'var(--msa-blue)' : i % 3 === 0 ? 'var(--msa-purple)' : 'var(--msa-cyan)'
    }));

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
            background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0d0d0d 100%)'
        }}>
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    style={{
                        position: 'absolute',
                        width: bubble.size,
                        height: bubble.size,
                        borderRadius: '50%',
                        background: bubble.color,
                        opacity: 0.1,
                        top: `${bubble.y}%`,
                        left: `${bubble.x}%`,
                        filter: 'blur(40px)'
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, -50, 0],
                        scale: [1, 1.2, 0.8, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: bubble.delay
                    }}
                />
            ))}

            {/* Mesh Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(at 0% 0%, rgba(80, 228, 254, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(92, 46, 145, 0.15) 0px, transparent 50%)',
                zIndex: 1
            }} />
        </div>
    );
};

export default FloatingBackground;
