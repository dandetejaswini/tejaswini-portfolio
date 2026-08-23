import React, { useState } from 'react';
import { ExternalLink, Sparkles, Eye, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Interactive Portfolio & AI Assistant Avatar',
      category: 'AI & Web',
      image: '/avatar.jpg',
      description:
        'A state-of-the-art interactive developer portfolio featuring a zero-dependency HTML5 2D Canvas background particle system, Web Speech API speech synthesis, custom portrait AI Assistant avatar in a black suit, and asynchronous FormSubmit contact integration.',
      tags: ['React.js', 'Speech Synthesis', 'Canvas 2D', 'FormSubmit API', 'Glassmorphism'],
      liveUrl: '#',
      githubUrl: 'https://github.com',
      highlights: [
        'Custom female software engineer AI persona avatar with speech effects',
        'Direct Gmail Web Compose URL integration (mailto redirect alternative)',
        'AJAX asynchronous POST submission with green success state feedback',
        'Zero-dependency canvas particle grid running at 60 FPS',
      ],
    },
    {
      id: 2,
      title: 'Full-Stack Task & Project Command Hub',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      description:
        'A comprehensive project management dashboard enabling real-time team collaboration, status tracking, automated notifications, and interactive analytics visualizers.',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      highlights: [
        'Real-time task board updates',
        'Role-based access control and user authentication',
        'Interactive analytics dashboard',
      ],
    },
    {
      id: 3,
      title: 'AI Persona Voice & Speech Synthesis Widget',
      category: 'AI & Web',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      description:
        'An interactive web assistant widget featuring real-time audio soundwave visualizer animation, voice synthesis response, status badges, and quick-question cards.',
      tags: ['Web Speech API', 'Canvas Visualizer', 'React Hooks', 'TailwindCSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      highlights: [
        'Real-time soundwave bar height modulation',
        'Speech synthesis output in natural clear cadence',
        'Seamless integration for portfolio sites',
      ],
    },
    {
      id: 4,
      title: 'Smart E-Commerce Platform & Checkout Integration',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1556742049-0a67daf4005a?auto=format&fit=crop&w=800&q=80',
      description:
        'Modern online storefront complete with product catalog filtering, dynamic shopping cart drawer, secure checkout processing, and email order confirmation.',
      tags: ['React', 'Node.js', 'REST API', 'CSS Grid', 'Stripe Integration'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      highlights: [
        'Dynamic cart management with persistent local storage',
        'Instant search and tag filtering',
        'Automated confirmation email dispatching',
      ],
    },
  ];

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section
      id="projects"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span
            style={{
              color: 'var(--accent-primary)',
              fontWeight: '700',
              fontSize: '0.9rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Featured Work
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '8px' }}>
            Projects Showcase
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

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '50px',
            flexWrap: 'wrap',
          }}
        >
          {['All', 'Full Stack', 'AI & Web'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 22px',
                borderRadius: '20px',
                border: activeTab === tab ? 'none' : '1px solid var(--border-color)',
                background: activeTab === tab ? 'var(--accent-gradient)' : 'var(--glass-bg)',
                color: activeTab === tab ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
              }}
            >
              {/* Image Banner */}
              <div
                style={{
                  height: '200px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(4px)',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Body Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '10px' }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'var(--bg-tertiary)',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-color)',
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-primary)',
                      fontWeight: '600',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    <Eye size={16} /> Details
                  </button>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Code"
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                      }}
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Preview"
                      style={{
                        color: 'var(--accent-primary)',
                        textDecoration: 'none',
                      }}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '600px',
              width: '100%',
              borderRadius: '24px',
              padding: '32px',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '12px' }}>
              {selectedProject.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '10px' }}>
              Key Highlights:
            </h4>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
              {selectedProject.highlights.map((h, idx) => (
                <li key={idx} style={{ marginBottom: '8px', lineHeight: '1.5' }}>
                  {h}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedProject(null)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: 'var(--accent-gradient)',
                color: '#ffffff',
                border: 'none',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
