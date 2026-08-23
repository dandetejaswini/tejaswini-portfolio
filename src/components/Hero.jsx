import React from 'react';
import { ArrowRight, Bot, Mail, Sparkles, Code2, Terminal, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenAI }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 60px 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Information */}
        <div>
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'var(--accent-soft)',
              border: '1px solid var(--accent-primary)',
              color: 'var(--accent-primary)',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                display: 'inline-block',
              }}
            />
            Available for Engineering & AI Roles
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '16px',
            }}
          >
            Hi, I'm <span className="gradient-text">Dande Tejaswini</span>
          </h1>

          <h2
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: '600',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
            }}
          >
            Building Intelligent Web Apps & Modern AI Experiences
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '32px',
              maxWidth: '540px',
            }}
          >
            Full-Stack Software Developer passionate about crafting resilient scalable applications, seamless user interfaces, and custom AI persona integrations.
          </p>

          {/* Action CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '12px',
                background: 'var(--accent-gradient)',
                color: '#ffffff',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.4)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Explore Projects <ArrowRight size={18} />
            </a>

            <button
              onClick={onOpenAI}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: '12px',
                background: 'var(--glass-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Bot size={20} color="var(--accent-primary)" />
              Ask AI Assistant
            </button>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500' }}>
              Connect with me:
            </span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email Dande Tejaswini"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
                transition: 'all 0.2s ease',
              }}
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
                transition: 'all 0.2s ease',
              }}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
                transition: 'all 0.2s ease',
              }}
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual Card */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="glass-panel animate-float"
            style={{
              padding: '30px',
              borderRadius: '24px',
              maxWidth: '420px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Glowing Backdrop */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1,
                borderRadius: '50%',
              }}
            />

            {/* Profile Avatar Card */}
            <div
              style={{
                width: '160px',
                height: '160px',
                margin: '0 auto 20px auto',
                borderRadius: '50%',
                padding: '5px',
                background: 'var(--accent-gradient)',
                position: 'relative',
              }}
            >
              <img
                src="/avatar.jpg"
                alt="Dande Tejaswini Professional Portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#10b981',
                  border: '3px solid var(--bg-secondary)',
                  borderRadius: '50%',
                }}
              />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '4px' }}>
              Dande Tejaswini
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '20px' }}>
              Software Engineer & AI Specialist
            </p>

            {/* Tech Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              {['React.js', 'Node.js', 'Python', 'AI/LLMs', 'Tailwind', 'REST APIs'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    background: 'var(--bg-tertiary)',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-color)',
              }}
            >
              <div>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', display: 'block' }}>15+</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Projects</span>
              </div>
              <div>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', display: 'block' }}>3+</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Years Exp.</span>
              </div>
              <div>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', display: 'block' }}>100%</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
