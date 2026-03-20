import React from 'react';
import SlideUp from './SlideUp';
import FadeIn from './FadeIn';

const Skills = () => {
  const skillCategories = [
    {
      title: "Security & SOC",
      skills: ["SIEM", "SOC Analysis", "Threat Intelligence", "Incident Response", "Log Analysis", "Vulnerability Assessment", "Ethical Hacking", "Digital Forensics", "Malware Analysis"]
    },
    {
      title: "Cloud & Tools",
      skills: ["Microsoft Azure", "Azure Sentinel", "Wazuh", "Splunk", "Wireshark", "Nmap", "Metasploit", "Burp Suite", "KQL", "GeoIP Watchlists"]
    },
    {
      title: "Programming & OS",
      skills: ["Python", "Bash Scripting", "MySQL", "HTML/CSS", "Git", "Linux (CLI/Admin)", "Windows Security"]
    },
    {
      title: "Frameworks & AI",
      skills: ["MITRE ATT&CK", "OWASP Top 10", "CIA Triad", "LangChain", "LLM Integration", "Machine Learning (scikit-learn)", "OpenCV"]
    }
  ];

  return (
    <section className="section" id="skills">
      <SlideUp>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent-primary)', marginRight: '1rem' }}>02.</span> Technical Arsenal
          <div style={{ flex: 1, height: '1px', background: 'var(--bg-element)', marginLeft: '1.5rem', border: '1px solid rgba(0,255,65,0.2)' }}></div>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <FadeIn delay={idx * 0.1} key={category.title}>
              <div style={{
                background: 'var(--bg-element)',
                border: '1px solid rgba(0,255,65,0.2)',
                borderRadius: '8px',
                padding: '1.5rem',
                minHeight: '100%',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--glow-shadow)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '10px' }}>&gt;_</span> {category.title}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {category.skills.map(skill => (
                    <span key={skill} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--accent-primary)',
                      background: 'rgba(0, 255, 65, 0.05)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(0, 255, 65, 0.3)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SlideUp>
    </section>
  );
};

export default Skills;
