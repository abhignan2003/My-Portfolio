import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" style={{
      borderTop: '1px solid rgba(0, 255, 65, 0.2)',
      padding: '4rem 2rem 2rem',
      background: 'var(--bg-secondary)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Initialize <span style={{ color: 'var(--accent-primary)' }}>Contact</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
          My inbox is always open. Whether you have a question, a SOC/Security Engineer opportunity, or just want to say hi, I'll try my best to get back to you!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="mailto:abhignan2003@gmail.com" className="btn" style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem' }}>
            Say Hello
          </a>
          <a
            href="https://wa.me/918919380958"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#25D366',
              border: '1px solid currentColor',
              padding: '0.8rem 1.5rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.1)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(37, 211, 102, 0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <span style={{ fontSize: '1.2rem' }}>💬</span> WhatsApp
          </a>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <a href="https://github.com/abhignan2003" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/guda-abignan-reddy-7560a025b/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
          <Linkedin size={24} />
        </a>
        <a href="mailto:abhignan2003@gmail.com" style={{ color: 'var(--text-secondary)' }}>
          <Mail size={24} />
        </a>
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> Designed & Built by Guda Abignan Reddy ©️ {currentYear}
      </p>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(136, 146, 176, 0.5)', marginTop: '0.5rem' }}>
        System Status: Secure
      </p>
    </footer>
  );
};

export default Footer;
