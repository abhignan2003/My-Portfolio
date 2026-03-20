import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'left' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>
            <Terminal size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            System.out.println("Hello, World!");
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--text-primary)' }}
        >
          Guda Abignan <span style={{ color: 'var(--text-secondary)' }}>Reddy.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.2, color: 'var(--text-secondary)', marginBottom: '2rem' }}
        >
          I secure the <span style={{ color: 'var(--accent-primary)', textShadow: 'var(--glow-shadow)' }}>matrix</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '3rem' }}
        >
          Cybersecurity graduate specializing in SOC operations, SIEM engineering, cloud security, and AI-driven threat detection. Building scalable security systems and hunting threats before they become breaches.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn" style={{ background: 'rgba(0, 255, 65, 0.1)', color: 'var(--accent-primary)' }}>
            Initialize Projects
          </a>
          <a href="Req_Resources\G Abignan Reddy.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
            Extract Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
