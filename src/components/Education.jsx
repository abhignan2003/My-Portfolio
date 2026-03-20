import React from 'react';
import SlideUp from './SlideUp';
import FadeIn from './FadeIn';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Kalasalingam University",
      degree: "Bachelor of Technology - Computer Science & Engineering",
      location: "Krishnankoil, Tamil Nadu",
      date: "Sep 2021 – May 2025"
    },
    {
      institution: "Krishna Murthy IIT & NEET Academy",
      degree: "Intermediate (MPC)",
      location: "Nellore, AP",
      date: "Jun 2018 – Jul 2021"
    },
    {
      institution: "Narayana Olympiad School",
      degree: "Secondary Education (10th Grade)",
      location: "Nellore, AP",
      date: "May 2019"
    }
  ];

  const certifications = [
    { name: "Cisco Certified Cyber Essentials", link: "https://www.credly.com/badges/a11f2815-e679-4758-bc12-5e90d03518d3/print" },
    { name: "IBM Security Learning Services", link: "https://www.coursera.org/account/accomplishments/verify/8WKUJLBXXLDR" },
    { name: "Mastercard Cybersecurity Job Simulation", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_HBMNzydv5FPyerF4B_1752602330683_completion_certificate.pdf" },
    { name: "Introduction to Ethical Hacking, Cisco", link: "https://www.credly.com/badges/d2e48e69-3ad7-444f-9abc-ec54d166ef92/linked_in_profile" },
    { name: "CyberLab Security Training", link: "https://www.udemy.com/certificate/UC-90839894-69dc-4945-82d3-57a513f59730/" },
    { name: "Software Testing Workshop- Kumaraguru College of Technology", link: "https://drive.google.com/file/d/1e_Q5BcMiJXqq-087yuq8LkPf6ux8-sQg/view" }
  ];

  const events = [
    "KAVACH-2k23 National Hackathon",
    "Encryptcon 24-Hr Hackathon (IIT Madras)",
    "FantomCode'23",
    "RVIT Hackathon",
    "Mobile App Development Workshop"
  ];

  return (
    <section className="section" id="education">
      <SlideUp>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent-primary)', marginRight: '1rem' }}>04.</span> Qualifications
          <div style={{ flex: 1, height: '1px', background: 'var(--bg-element)', marginLeft: '1.5rem', border: '1px solid rgba(0,255,65,0.2)' }}></div>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

          {/* Education Timeline */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>
              <GraduationCap color="var(--accent-primary)" /> Academic Matrix
            </h3>
            <div style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {education.map((edu, idx) => (
                <FadeIn delay={idx * 0.1} key={idx}>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      position: 'absolute',
                      left: '-37px',
                      top: '5px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'var(--bg-primary)',
                      border: '2px solid var(--accent-primary)'
                    }}></div>
                    <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>{edu.degree}</h4>
                    <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      {edu.institution} | {edu.location}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.date}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Certifications & Events */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>
              <Award color="var(--accent-primary)" /> Certifications & Hackathons
            </h3>

            <FadeIn>
              <div className="glass-panel" style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>// Certifications</h4>
                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {certifications.map((cert, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: 'var(--accent-primary)', marginTop: '2px' }}>+</span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--text-secondary)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-primary)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                      >
                        {cert.name}
                        <ExternalLink size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-panel">
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>// Hackathons & Events</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {events.map((event, idx) => (
                    <span key={idx} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      background: 'var(--bg-secondary)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(136, 146, 176, 0.2)'
                    }}>
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default Education;
