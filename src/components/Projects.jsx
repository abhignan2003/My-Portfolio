import React from 'react';
import SlideUp from './SlideUp';
import FadeIn from './FadeIn';
import { ExternalLink, Github, TerminalSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ShadowSentinel AI",
      subtitle: "Real-Time AI-Powered Cyber Guardian Bot",
      description: "An AI-driven SOC bot integrating Wazuh SIEM with a Large Language Model (LangChain) for automated alert summarization, contextual threat classification, and severity scoring. Implemented automated IP blocking via firewall rule injection and built facial recognition-based authentication.",
      tech: ["Wazuh SIEM", "LangChain", "LLMs", "Python", "OpenCV"],
      links: { github: "https://github.com/abhignan2003/ShadowSentinel-AI.git", live: "#" }
    },
    {
      title: "SIEM Cloud SOC Honeypot",
      subtitle: "Microsoft Azure Sentinel",
      description: "Deployed a deliberately vulnerable Windows VM on Azure with open RDP to capture live brute-force and credential-stuffing attacks. Integrated Azure Sentinel via Log Analytics workspace with custom GeoIP watchlists to visualize global threat actor activity on KQL-powered dashboards.",
      tech: ["Azure Sentinel", "Windows Server VM", "KQL", "GeoIP", "Log Analytics"],
      links: { github: "https://github.com/abhignan2003/SIEM-Cloud-SOC-Honeypot", live: "#" }
    },
    {
      title: "Open-Source Host Security Monitoring",
      subtitle: "SIEM with Wazuh on Linode/Akamai",
      description: "Configured Wazuh SIEM across distributed endpoints to monitor file integrity, registry modifications, active IP connections, and real-time vulnerabilities. Centralized syslog forwarding and built automated alerting workflows.",
      tech: ["Wazuh", "Linode/Akamai", "Linux/Bash", "Syslog", "FIM"],
      links: { github: "https://github.com/abhignan2003/Open-Source-Host-Security-Monitoring-SIEM-with-Wazuh-on-Linode-Akamai-.git", live: "#" }
    },
    {
      title: "Sign Language Recognition (EXSEL)",
      subtitle: "ML Gesture Classification",
      description: "Designed a scikit-learn classification pipeline to recognize hand gestures from image inputs with high accuracy. Applied OpenCV for image preprocessing, feature extraction, and real-time accessible gesture-to-text translation.",
      tech: ["Python", "scikit-learn", "OpenCV", "Machine Learning"],
      links: { github: "https://github.com/abhignan2003/Hand-Gesture-Recognition ", live: "#" }
    }
  ];

  return (
    <section className="section" id="projects">
      <SlideUp>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent-primary)', marginRight: '1rem' }}>03.</span> Security Deployments
          <div style={{ flex: 1, height: '1px', background: 'var(--bg-element)', marginLeft: '1.5rem', border: '1px solid rgba(0,255,65,0.2)' }}></div>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
          {projects.map((project, idx) => (
            <FadeIn delay={0.1} key={project.title}>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-element)',
                border: '1px solid rgba(0,255,65,0.2)',
                borderRadius: '8px',
                padding: '2.5rem',
                overflow: 'hidden'
              }}
                className="project-card"
              >
                <div style={{ flex: 1, zIndex: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        {project.subtitle}
                      </h4>
                      <h3 style={{ color: 'var(--text-primary)', fontSize: '1.8rem' }}>{project.title}</h3>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                        <Github size={24} />
                      </a>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>

                  <div style={{
                    background: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    borderLeft: '2px solid var(--accent-primary)'
                  }}>
                    {project.description}
                  </div>

                  <ul style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    gap: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--accent-primary)'
                  }}>
                    {project.tech.map(t => <li key={t}>{t}</li>)}
                  </ul>
                </div>

                <div style={{
                  position: 'absolute',
                  right: '-10%',
                  opacity: 0.05,
                  zIndex: 1,
                  pointerEvents: 'none',
                  transform: 'scale(3)'
                }}>
                  <TerminalSquare size={200} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <style>{`
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .project-card:hover {
            transform: scale(1.02);
            box-shadow: var(--glow-shadow);
          }
        `}</style>
      </SlideUp>
    </section>
  );
};

export default Projects;
