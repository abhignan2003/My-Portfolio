import React from 'react';
import SlideUp from './SlideUp';
import FadeIn from './FadeIn';
import { Briefcase, ShieldCheck } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Perform 24/7 SOC monitoring, including shifts as the sole analyst on duty, investigating and validating incidents across Microsoft Defender XDR, MDE, MDO, MDCA, and Microsoft Threat Intelligence.',
    'Correlate endpoint, identity, email, and cloud alerts to identify true positives, execute response actions such as device isolation and IOC blocking, and recommend remediation steps.',
    'Manage Jira tickets end-to-end, from initial customer communication through investigation, containment, remediation, and final resolution.',
    'Investigate phishing campaigns, malicious emails, URLs, IPs, and file hashes while mapping attacker behavior to MITRE ATT&CK TTPs.',
    'Draft concise 5W-based incident summaries covering findings, evidence, impact, and response actions for accurate reporting and customer updates.',
    'Support detection playbook troubleshooting, shift handovers, and knowledge documentation to improve automation reliability and SLA readiness.',
  ];

  const highlights = [
    'Microsoft Defender XDR',
    'Defender for Endpoint',
    'Defender for Office 365',
    'Defender for Cloud Apps',
    'Threat Intelligence',
    'Incident Response',
    'Jira',
    'MITRE ATT&CK',
  ];

  return (
    <section className="section" id="experience">
      <SlideUp>
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent-primary)', marginRight: '1rem' }}>02.</span> Experience
          <div style={{ flex: 1, height: '1px', background: 'var(--bg-element)', marginLeft: '1.5rem', border: '1px solid rgba(0,255,65,0.2)' }}></div>
        </h2>

        <FadeIn>
          <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Briefcase size={18} />
                  CyberMSI | Remote
                </p>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>AI Threat Validation Analyst</h3>
                <p style={{ color: 'var(--text-secondary)' }}>May 2026 - Present</p>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {responsibilities.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent-primary)', marginTop: '0.2rem' }}>&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(0,255,65,0.15)', borderRadius: '8px', padding: '1.5rem', height: '100%' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} />
                  // Focus Areas
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {highlights.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--accent-primary)',
                        background: 'rgba(0, 255, 65, 0.06)',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(0,255,65,0.2)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <style>{`
          @media (max-width: 900px) {
            #experience .glass-panel {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </SlideUp>
    </section>
  );
};

export default Experience;
