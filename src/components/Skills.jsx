import React from 'react';
import { Code, Server, Cpu, Wrench, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend & UI Craft',
      icon: Code,
      skills: [
        { name: 'React.js & JSX', level: 92 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3 Design System', level: 98 },
        { name: 'Tailwind CSS & Glassmorphism', level: 90 },
        { name: 'HTML5 Canvas & 2D Animations', level: 88 },
      ],
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      skills: [
        { name: 'Node.js & Express', level: 88 },
        { name: 'RESTful API Architecture', level: 92 },
        { name: 'Python & Scripting', level: 85 },
        { name: 'FormSubmit & AJAX Integrations', level: 95 },
        { name: 'PostgreSQL / MongoDB Basics', level: 82 },
      ],
    },
    {
      category: 'AI & Interactive Tech',
      icon: Cpu,
      skills: [
        { name: 'AI Voice & Speech Synthesis API', level: 92 },
        { name: 'Custom AI Assistant Avatars', level: 95 },
        { name: 'Prompt Engineering & Persona AI', level: 90 },
        { name: 'Interactive Soundwave Visualizers', level: 88 },
      ],
    },
    {
      category: 'Tools & Workflow',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub Version Control', level: 92 },
        { name: 'Vite & Modern Build Tools', level: 90 },
        { name: 'Responsive Mobile-First UI', level: 96 },
        { name: 'Vercel / Netlify Deployment', level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 1,
        background: 'var(--bg-secondary)',
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
            Technical Stack
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '8px' }}>
            Skills & Capabilities
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

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '30px',
          }}
        >
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '30px',
                  borderRadius: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'var(--accent-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{cat.category}</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: '6px',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                        }}
                      >
                        <span>{skill.name}</span>
                        <span style={{ color: 'var(--accent-primary)' }}>{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div
                        style={{
                          width: '100%',
                          height: '8px',
                          borderRadius: '4px',
                          background: 'var(--bg-tertiary)',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: `${skill.level}%`,
                            height: '100%',
                            background: 'var(--accent-gradient)',
                            borderRadius: '4px',
                            transition: 'width 1s ease-in-out',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 580px) {
          #skills grid-template-columns { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
