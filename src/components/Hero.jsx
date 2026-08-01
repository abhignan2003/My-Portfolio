import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'left', marginTop: '4rem' }}>
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
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', lineHeight: 1.2, color: 'var(--text-secondary)', marginBottom: '2rem' }}
        >
          <span style={{ color: 'var(--accent-primary)', textShadow: 'var(--glow-shadow)' }}>AI Threat Validation Analyst</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '3rem' }}
        >
          Cybersecurity professional with hands-on SOC experience across Microsoft Defender XDR, endpoint, email, identity, and cloud investigations, with a strong focus on incident response, threat intelligence, SIEM engineering, and AI-driven detection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.2rem' }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            <Shield size={16} />
            AI Threat Validation Analyst at CyberMSI
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn" style={{ background: 'rgba(0, 255, 65, 0.1)', color: 'var(--accent-primary)' }}>
            Initialize Projects
          </a>
          <a href="/Guda_Abignan_Reddy_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
            Extract Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
