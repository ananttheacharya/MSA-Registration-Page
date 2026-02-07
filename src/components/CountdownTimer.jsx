import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
    // Target date: March 27, 2026 (Tentative)
    const [targetDate] = useState(new Date('2026-03-27T00:00:00'));

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +targetDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                d: Math.floor(difference / (1000 * 60 * 60 * 24)),
                h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                m: Math.floor((difference / 1000 / 60) % 60),
                s: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(newTime => calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center', margin: '3rem 0' }}>
            {Object.keys(timeLeft).map((interval) => (
                <div key={interval} style={{ textAlign: 'center' }}>
                    <motion.span
                        key={timeLeft[interval]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: 'block',
                            fontSize: 'clamp(3rem, 5vw, 5rem)',
                            fontWeight: '700',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--msa-light-purple)',
                            lineHeight: 1
                        }}
                    >
                        {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
                    </motion.span>
                    <span style={{
                        color: 'var(--msa-grey)',
                        textTransform: 'uppercase',
                        fontSize: '1rem',
                        letterSpacing: '2px'
                    }}>{interval}</span>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
