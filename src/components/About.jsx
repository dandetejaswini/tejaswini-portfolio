import React from 'react';
import { UserCheck, Award, GraduationCap, Code, Rocket, CheckCircle2, Download } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: 'Full Stack Engineering', desc: 'Building responsive web applications using React, JavaScript, HTML5/CSS3, and Node.js.' },
    { title: 'AI & Automation', desc: 'Integrating intelligent AI assistants, speech synthesis, and natural language processing solutions.' },
    { title: 'Performance Optimization', desc: 'Crafting zero-dependency canvas animations and light/fast loading web interfaces.' },
    { title: 'Clean Code Architecture', desc: 'Adhering to strict validation, modular components, and maintainable design systems.' },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              color: 'var(--accent-primary)',
              fontWeight: '700',
              fontSize: '0.9rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            About Me
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '8px' }}>
            Passionate About Problem Solving & Innovation
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-gradient)',
              margin: '16px auto 0 auto',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Text & Experience */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '16px' }}>
              Hello! I'm <span className="gradient-text">Dande Tejaswini</span>
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '20px',
              }}
            >
              I am a dedicated Software Engineer specialized in web application development, interactive user interfaces, and custom AI assistant integrations. My approach combines clean modular programming with cutting-edge visual experiences.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '32px',
              }}
            >
              Whether it's optimizing front-end canvas graphics, wiring background email submit APIs, or crafting interactive AI personas, I focus on delivering reliable, state-of-the-art products.
            </p>

            {/* Quick Specs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <GraduationCap color="var(--accent-primary)" size={22} />
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Education</span>
                  <span style={{ fontWeight: '600', fontSize: '0.92rem' }}>B.Tech in Computer Science</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award color="var(--accent-primary)" size={22} />
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Specialization</span>
                  <span style={{ fontWeight: '600', fontSize: '0.92rem' }}>Web & AI Applications</span>
                </div>
              </div>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '10px',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Download size={18} /> Request Resume / CV
            </a>
          </div>

          {/* Feature Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <CheckCircle2 color="var(--accent-primary)" size={22} />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
