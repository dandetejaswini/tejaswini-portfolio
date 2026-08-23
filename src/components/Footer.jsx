import React from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        padding: '60px 24px 30px 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img
              src="/avatar.jpg"
              alt="Dande Tejaswini Avatar"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--accent-primary)',
              }}
            />
            <div>
              <span style={{ fontSize: '1.2rem', fontWeight: '800', display: 'block' }}>
                Dande Tejaswini
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Software Engineer & AI Application Developer
              </span>
            </div>
          </div>

          {/* Social Links & Direct Gmail URL */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Direct Gmail Compose Link */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Draft Email in Gmail"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '20px',
                background: 'var(--accent-soft)',
                border: '1px solid var(--accent-primary)',
                color: 'var(--accent-primary)',
                fontWeight: '600',
                fontSize: '0.88rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Mail size={16} /> dandetejaswini1329@gmail.com
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
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
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
              }}
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Dande Tejaswini. Designed & Built with{' '}
            <Heart size={14} color="#ef4444" style={{ display: 'inline', verticalAlign: 'middle' }} />
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '600',
              fontSize: '0.85rem',
            }}
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
