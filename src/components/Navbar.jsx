import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--accent-primary)' : '1px solid transparent',
      boxShadow: scrolled ? '0 0 15px rgba(0, 255, 65, 0.15)' : 'none',
      transition: 'all 0.3s ease',
      padding: '1.2rem 2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          fontFamily: 'var(--font-mono)',
          textShadow: scrolled ? 'var(--glow-shadow)' : 'none',
          letterSpacing: '-1px'
        }}>
          <span style={{ color: 'var(--text-primary)' }}>[ Guda</span><span style={{ color: 'var(--accent-primary)' }}>_</span><span style={{ color: 'var(--text-secondary)' }}>Abignan ]</span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)' }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="Req_Resources\G Abignan Reddy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" style={{ display: 'block', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="var(--accent-primary)" /> : <Menu color="var(--accent-primary)" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--accent-primary)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--text-primary)' }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="Req_Resources\G Abignan Reddy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Resume
          </a>
        </div>
      )}

      {/* Basic responsive override */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
