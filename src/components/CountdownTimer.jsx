import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
    // Target date: March 27, 2026 (Tentative)
    const targetDate = new Date('2026-03-27T00:00:00');

    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '4rem 0'
        }}>
            {timeUnits.map((unit, index) => (
                <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '16px',
                        padding: '2rem',
                        minWidth: '140px',
                        textAlign: 'center',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                    }}
                    whileHover={{ scale: 1.05, borderColor: 'var(--msa-cyan)' }}
                >
                    <motion.span
                        key={unit.value}
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{
                            display: 'block',
                            fontSize: '4rem',
                            fontWeight: '700',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--msa-cyan)',
                            marginBottom: '0.5rem',
                            lineHeight: 1,
                            textShadow: '0 0 10px rgba(80, 228, 254, 0.3)'
                        }}
                    >
                        {unit.value < 10 ? `0${unit.value}` : unit.value}
                    </motion.span>
                    <span style={{
                        color: 'var(--msa-grey)',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        letterSpacing: '2px',
                        fontWeight: '600',
                        fontFamily: 'var(--font-body)'
                    }}>
                        {unit.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

export default CountdownTimer;
