import React from 'react';
import SlideUp from './SlideUp';

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
              Hello! I'm Guda Abignan Reddy, a cybersecurity professional with hands-on SOC experience investigating, triaging, and responding to enterprise incidents across endpoint, email, identity, and cloud environments.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              My background combines live security operations with engineering-focused project work: Microsoft Defender investigations, SIEM deployments with Wazuh and Azure Sentinel, cloud honeypots on Azure, and an LLM-powered cyber guardian bot built for faster alert validation and response.
            </p>
            <p>
              I am growing as an <strong style={{ color: 'var(--accent-primary)' }}>AI Threat Validation Analyst</strong>, bringing hands-on expertise in threat validation, incident response, and threat intelligence to a strong security team.
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
                <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> SOC monitoring and incident triage
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> Email, endpoint, identity, Network, and cloud investigations
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> AI-assisted threat validation and response automation
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> SIEM engineering, threat hunting, and reporting
              </li>
            </ul>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default About;
