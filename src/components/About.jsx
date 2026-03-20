import React from 'react';
import SlideUp from './SlideUp';
import { Shield, Server, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section className="section" id="about">
      <SlideUp>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent-primary)', marginRight: '1rem' }}>01.</span> About Me
          <div style={{ flex: 1, height: '1px', background: 'var(--bg-element)', marginLeft: '1.5rem', border: '1px solid rgba(0,255,65,0.2)' }}></div>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            <p style={{ marginBottom: '1rem' }}>
              Hello! I'm Guda Abignan Reddy, a passionate cybersecurity professional dedicated to understanding how systems operate to defend them effectively. I hold a Bachelor of Technology in Computer Science & Engineering from Kalasalingam University.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              My journey involves building production-grade honeypot environments on Microsoft Azure, deploying open-source SIEM stacks with Wazuh, and engineering an LLM-powered cyber guardian bot with automated incident response.
            </p>
            <p>
              I am actively seeking a <strong style={{ color: 'var(--accent-primary)' }}>SOC Analyst</strong> or <strong style={{ color: 'var(--accent-primary)' }}>Security Engineer</strong> role to contribute deep hands-on expertise to a world-class security team.
            </p>
          </div>
          
          <div className="glass-panel" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              borderTop: '2px solid var(--accent-primary)',
              borderLeft: '2px solid var(--accent-primary)',
              width: '40px',
              height: '40px'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              right: '-15px',
              borderBottom: '2px solid var(--accent-primary)',
              borderRight: '2px solid var(--accent-primary)',
              width: '40px',
              height: '40px'
            }}></div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>// Current Directives</h3>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> Threat Intelligence Gathering
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> Automated Incident Response
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> Log Analysis & Forensics
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> Custom SIEM Rules Creation
              </li>
            </ul>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default About;
