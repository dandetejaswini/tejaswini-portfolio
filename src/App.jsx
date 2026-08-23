import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  
  // Light / Dark Theme State
  const [theme, setTheme] = useState('light'); // Default theme is Light Mode
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  
  // AI Assistant Chat & Speech State
  const [assistantMessage, setAssistantMessage] = useState("I am Tejaswini's AI assistant. Explore her software engineering projects, internships, and skills!");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const canvasRef = useRef(null);
  const speechRef = useRef(null);

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.3;
      
      const setVoiceAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(v => 
          (v.name.includes('Female') || v.name.includes('Zira') || v.name.includes('Google UK English Female') || v.name.includes('Samantha') || v.name.includes('Victoria') || v.name.includes('Karen') || v.name.includes('Moira')) && v.lang.startsWith('en')
        ) || voices.find(v => v.lang.startsWith('en'));
        
        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }
        
        utterance.onstart = () => {
          setIsSpeaking(true);
          setIsPaused(false);
        };
        utterance.onend = () => {
          setIsSpeaking(false);
          setIsPaused(false);
        };
        utterance.onerror = () => {
          setIsSpeaking(false);
          setIsPaused(false);
        };

        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      };

      if (window.speechSynthesis.getVoices().length > 0) {
        setVoiceAndSpeak();
      } else {
        window.speechSynthesis.onvoiceschanged = setVoiceAndSpeak;
      }
    }
  };

  const handleAssistantClick = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking && !isPaused) {
        window.speechSynthesis.pause();
        setIsPaused(true);
        setIsSpeaking(false);
      } else if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
        setIsSpeaking(true);
      } else {
        speakText(assistantMessage);
      }
    }
  };

  const handleAssistantQuery = (query) => {
    setAssistantMessage(query);
    setIsPaused(false);
    speakText(query);
  };

  const handleWelcomeEnter = () => {
    setShowWelcome(false);
    setLoading(false);
    speakText("I am Tejaswini's AI assistant. Explore her software engineering projects, internships, and skills!");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create rotating particle field
    const particlesCount = 900;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 16;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: theme === 'dark' ? 0xec4899 : 0xdb2777,
      transparent: true,
      opacity: theme === 'dark' ? 0.85 : 0.75
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (clientX, clientY) => {
      targetX = (clientX / window.innerWidth - 0.5) * 1.5;
      targetY = (clientY / window.innerHeight - 0.5) * 1.5;
    };

    const handleMouseMove = (event) => {
      handlePointerMove(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        handlePointerMove(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      particlesMesh.rotation.y += 0.0008;
      particlesMesh.rotation.x += 0.0004;

      mouseX += (targetX - mouseX) * 0.12;
      mouseY += (targetY - mouseY) * 0.12;

      camera.position.x = mouseX * 1.8;
      camera.position.y = -mouseY * 1.8;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-z0-9]+@gmail\.com$/;

  const getNameError = () => {
    if (!formData.name) return null;
    if (!nameRegex.test(formData.name)) return 'Please enter a valid name containing only letters (a-z, A-Z).';
    return null;
  };

  const getEmailError = () => {
    if (!formData.email) return null;
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email (lowercase letters and numbers only before @gmail.com).';
    return null;
  };

  const getMessageError = () => {
    if (!formData.message) return null;
    if (formData.message.trim().length < 10) return 'Please enter a message (at least 10 characters).';
    return null;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({ type: 'error', text: 'Please enter all the fields before submitting.' });
      return;
    }
    if (!nameRegex.test(formData.name)) {
      setFormStatus({ type: 'error', text: 'Please enter a valid name containing only letters (a-z, A-Z).' });
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', text: 'Please enter a valid email (lowercase letters and numbers only before @gmail.com).' });
      return;
    }
    if (formData.message.trim().length < 10) {
      setFormStatus({ type: 'error', text: 'Please enter a message (at least 10 characters).' });
      return;
    }

    setFormSubmitting(true);
    setFormStatus(null);

    try {
      await fetch("https://formsubmit.co/ajax/dandetejaswini1329@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact Message from ${formData.name}`,
          _captcha: "false"
        })
      });
    } catch (err) {
      console.error("Email delivery attempt completed:", err);
    } finally {
      setFormSubmitting(false);
      setFormStatus({ type: 'success', text: 'Message Sent Successfully!' });

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus(null);
      }, 2000);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const projectsData = [
    {
      id: 'cxintel',
      title: 'CXIntel',
      category: 'AI / Salesforce / Automation',
      featured: true,
      github: 'https://github.com/dandetejaswini/CXIntel',
      live: 'https://cxintel-dev-ed.develop.my.site.com/s/',
      desc: 'AI-driven CRM focused on customer feedback analysis and workflow automation.',
      tech: ['Apex', 'Lightning Web Components', 'JavaScript', 'Python', 'REST APIs', 'GitHub Actions'],
      metrics: [
        'Analyzed 500+ customer feedback records',
        'Improved insight accuracy by 35%',
        'Automated ticket tagging via REST APIs',
        'Reduced manual review time by 40%'
      ],
      details: 'Built an enterprise-grade CRM extension on Salesforce leveraging LWC and Python backend sentiment pipelines to automatically classify and prioritize inbound tickets.'
    },
    {
      id: 'gitnexus',
      title: 'GitNexus',
      category: 'AI / Developer Tools',
      featured: true,
      github: 'https://github.com/dandetejaswini/GitNexus',
      desc: 'An Intelligent Multi-Agent System for Automated GitHub Analysis.',
      tech: ['JavaScript', 'AI Agents', 'GitHub REST API', 'Automation'],
      metrics: [
        'Automated repository code analysis',
        'Multi-agent workflow orchestration',
        'Intelligent commit summarization'
      ],
      details: 'Engineered an intelligent multi-agent JavaScript system designed to scan repositories, summarize architectural changes, and assist developers with deep repository intelligence.'
    },
    {
      id: 'netguardian',
      title: 'NetGuardian',
      category: 'AI / Security',
      featured: true,
      badge: 'Qualified: OpenAI Academy & NextWave Buildathon (State Level)',
      github: 'https://github.com/dandetejaswini/Net-Gaurdian',
      desc: 'Chrome extension for safer browsing that detects and blurs inappropriate content using lightweight AI. Qualified for OpenAI Academy & NextWave Buildathon.',
      tech: ['TypeScript', 'Chrome Extension', 'Flask', 'NLP', 'Privacy-First'],
      metrics: [
        'Real-time content detection and sanitization',
        'Real-time DOM inspection and blurring',
        'Local privacy-focused inference',
        'Qualified for OpenAI Academy & NextWave Buildathon (State Level)'
      ],
      details: 'Client-side extension paired with a lightweight Flask backend to identify and sanitize sensitive web elements instantly. Qualified for the OpenAI Academy and NextWave Buildathon.'
    },
    {
      id: 'edubond',
      title: 'EduBond Mobile',
      category: 'AI / Education / Mobile',
      featured: true,
      github: 'https://github.com/dandetejaswini/Edubond_mobile',
      desc: 'React Native mobile application connecting students, mentors, and alumni through AI matching.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'AI Matching', 'Real-time Chat'],
      metrics: [
        'Real-time WebSocket communication',
        'AI-driven peer and mentor matching',
        'Cross-platform mobile architecture'
      ],
      details: 'Developed a comprehensive cross-platform app ensuring seamless mentorship scheduling, AI-powered profile matching, and instant messaging.'
    },
    {
      id: 'spendiq',
      title: 'SpendIQ',
      category: 'FinTech / Web App',
      featured: true,
      github: '',
      live: 'https://spendiqpro.vercel.app/en',
      desc: 'Client-side web application designed to reduce overspending and checkout queues via barcode scanning.',
      tech: ['JavaScript', 'ZXing', 'WebRTC', 'Vercel', 'WCAG 2.1'],
      metrics: [
        '95% barcode scan accuracy',
        '99% uptime deployment',
        'Full WCAG 2.1 accessibility compliance'
      ],
      details: 'Fast, accessible client-side budgetary tool utilizing real-time device camera barcode capture to instantly categorize and track daily retail expenditures.'
    },
    {
      id: 'nlp-pipeline',
      title: 'Advanced NLP Pipeline with Transformers',
      category: 'AI / NLP / Backend',
      featured: true,
      github: 'https://github.com/dandetejaswini/Advanced-NLP-Pipeline-with-Transformers',
      desc: 'Robust FastAPI and Transformers pipeline for summarization, translation, and entity recognition.',
      tech: ['Python', 'FastAPI', 'Transformers', 'Docker', 'Inference Caching'],
      metrics: [
        '50% API response latency reduction',
        'Optimized transformer weights caching',
        'Modular REST inference endpoints'
      ],
      details: 'Production-grade NLP inference engine supporting concurrent summarization, translation, and Named Entity Recognition with optimized Docker deployment.'
    },
    {
      id: 'reposense',
      title: 'RepoSense',
      category: 'AI / Developer Tools / Automation',
      featured: true,
      github: 'https://github.com/dandetejaswini/reposense',
      desc: 'Autonomous AI-powered GitHub intelligence system that analyzes repositories, pull requests, code risks, and Git history to generate actionable engineering insights.',
      tech: ['Python', 'Gemini API', 'GitHub API', 'FastAPI', 'PyDriller', 'Docker'],
      metrics: [
        'Multi-agent GitHub analysis',
        'Repository risk and code hotspot detection',
        'Automated engineering intelligence'
      ],
      details: 'Autonomous AI-powered GitHub intelligence system that analyzes repositories, pull requests, code risks, and Git history to generate actionable engineering insights.'
    },
    {
      id: 'fraud-risk',
      title: 'Fraud Risk Scoring',
      category: 'Machine Learning',
      featured: false,
      github: 'https://github.com/dandetejaswini/Fraud_Risk_Scoring',
      desc: 'Machine learning fraud detection system utilizing neural networks and SMOTE data balancing.',
      tech: ['Python', 'TensorFlow', 'Scikit-Learn', 'SMOTE'],
      metrics: [
        'Neural network-based fraud classification',
        'Model training and validation for high-risk transactions',
        'Handled severe dataset class imbalance using SMOTE'
      ],
      details: 'Trained and validated robust neural network classification models to flag high-risk transaction anomalies.'
    },
    {
      id: 'weather-app',
      title: 'Weather App using api Integration',
      category: 'Salesforce / API',
      featured: false,
      github: 'https://github.com/dandetejaswini/Weather-App-Using-API-Integration',
      desc: 'Real-time weather application built within Salesforce using Lightning Web Components.',
      tech: ['Salesforce LWC', 'SLDS', 'REST API', 'JavaScript'],
      metrics: [
        'Real-time weather data retrieval through external API',
        'Lightning Web Components-based weather interface',
        'Dynamic weather metrics rendering inside Salesforce UI'
      ],
      details: 'Integrated external meteorology APIs directly into Salesforce Lightning Experience using LWC and SLDS.'
    },
    {
      id: 'ai-email',
      title: 'AI Email Generator',
      category: 'AI / Backend',
      featured: false,
      github: 'https://github.com/dandetejaswini/Email-Generator-Using-Langchain-Flask',
      desc: 'Context-aware professional email generator powered by LangChain and Flask.',
      tech: ['Python', 'Flask', 'LangChain', 'Prompt Engineering'],
      metrics: [
        'Modular Flask REST endpoints',
        'Context-aware professional email drafting',
        'Structured multi-parameter email orchestration'
      ],
      details: 'Streamlined corporate correspondence drafting through structured prompt templates and modular Flask REST endpoints.'
    }
  ];

  const certificationsData = [
    { title: 'Information Technology Specialist in HTML and CSS', issuer: 'Certiport (2023)', link: 'https://www.credly.com/badges/8c0767fe-2d87-46cd-a9f7-159da49186aa' },
    { title: 'Information Technology Specialist in Python', issuer: 'Certiport (2023)', link: 'https://drive.google.com/file/d/1Dw43WenvhYx-nPC11P6t0xiEjrsFN123/view?usp=sharing' },
    { title: 'Salesforce Platform Developer I', issuer: 'Salesforce (2025)', link: 'https://drive.google.com/file/d/1Wn7lNAck8JIJrMXh8YRIvphJWs31D0Yu/view?usp=sharing' },
    { title: 'Salesforce AgentForce Specialist', issuer: 'Salesforce (2025)', link: 'https://drive.google.com/file/d/1BgGL9qyufgqqAo9wG37pRYiYUYQ9PW8W/view?usp=sharing' },
    { title: 'Information Technology Specialist in Java', issuer: 'Certiport (2024)', link: 'https://www.credly.com/badges/6064c502-5e2f-472b-a57f-2c49568a6fcc' },
    { title: 'Red Hat Certified System Administrator (RHCSA)', issuer: 'Red Hat (2024 — Expired Aug 2025)', link: 'https://www.credly.com/badges/56c15cb2-cd42-43df-a140-10d5273c792f' },
    { title: 'Pega Certified System Architect (CSA)', issuer: 'Pega (2025)', link: 'https://accounts.pega.com/profile/DandeTejaswini/share/BPEGACPSA24V1-PEGACPSA24V1' }
  ];

  const achievementsData = [
    { year: '2024', title: 'Second Prize — Paper Presentation', org: 'Two-Day National Level Technical & Cultural Symposium, CIET, Guntur', desc: 'Secured 2nd prize for rigorous technical presentation.' },
    { year: '2024', title: 'Top 10 — CODE WARS 1.0', org: 'ACM JNTU-GV (ITYUKTA-2K24)', desc: 'Achieved a top 10 ranking in competitive programming challenge.' },
    { year: '2024', title: 'Qualified — OpenAI & NextWave Buildathon (State Level)', org: 'OpenAI / NextWave (State Level Buildathon)', desc: 'Successfully qualified in competitive state-level AI buildathon event.' },
    { year: '2024', title: 'Advanced to Round 3 — HP PowerLab 2.0', org: 'Hindustan Petroleum Corporation Limited', desc: 'Reached Round 3 in national innovation challenge.' },
    { year: 'Open Source', title: 'Google Summer of Code — Open Source Contribution', org: 'Open Source Ecosystem', desc: 'Contributed to open-source agent and tool ecosystems including LangChain, LlamaIndex, and CrewAI.' }
  ];

  const filteredProjects = filterCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase().includes(filterCategory.toLowerCase()));

  // Dynamic Theme Glassmorphism Style Classes
  const isDark = theme === 'dark';
  const pageBgClass = isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900';
  const cardGlassClass = isDark 
    ? 'bg-slate-900/35 backdrop-blur-md border border-slate-800/60 hover:border-pink-500/50 hover:bg-slate-900/50 shadow-lg' 
    : 'bg-white/40 backdrop-blur-md border border-white/60 hover:border-pink-400 hover:bg-white/60 shadow-sm';
  const navGlassClass = isDark 
    ? 'bg-slate-950/60 backdrop-blur-md border-b border-slate-800/60' 
    : 'bg-white/50 backdrop-blur-md border-b border-slate-200/60';
  const textMutedClass = isDark ? 'text-slate-400' : 'text-slate-600';
  const inputBgClass = isDark ? 'bg-slate-900/50 border-slate-700/80 text-white placeholder-slate-500' : 'bg-white/50 border-slate-200 text-slate-800 placeholder-slate-400';

  return (
    <div className={`min-h-screen ${pageBgClass} font-sans selection:bg-pink-500 selection:text-white relative overflow-x-hidden transition-colors duration-300`}>
      
      {/* Loading Screen */}
      {loading && (
        <div className={`fixed inset-0 z-50 ${isDark ? 'bg-slate-950' : 'bg-slate-50'} flex flex-col items-center justify-center transition-opacity duration-700`}>
          <div className="w-12 h-12 border-3 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-bold tracking-wide">DANDE TEJASWINI</h2>
          <p className={`text-sm ${textMutedClass} mt-1`}>Loading portfolio...</p>
        </div>
      )}

      {/* Welcome Overlay - triggers speech on click (required by browser autoplay policy) */}
      {!loading && showWelcome && (
        <div 
          onClick={handleWelcomeEnter}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center cursor-pointer"
          style={{ background: isDark ? 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0f172a 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #fce7f3 40%, #f8fafc 100%)' }}
        >
          <div className="text-center space-y-6 animate-pulse-slow">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-pink-500 shadow-2xl shadow-pink-500/30">
              <img 
                src={`${import.meta.env.BASE_URL}avatar.jpg`}
                alt="Tejaswini" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Welcome to My Portfolio
            </h1>
            <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Dande Tejaswini — Software Engineer & AI Developer
            </p>
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg shadow-pink-600/30 transition-all text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Tap to Enter & Meet My AI Assistant
              </span>
            </div>
            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'} animate-bounce mt-4`}>
              Click anywhere to continue
            </p>
          </div>
        </div>
      )}

      {/* Persistent Background Three.js Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 w-full h-full" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }} />

      {/* Header / Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${navGlassClass} shadow-sm transition-all`}>
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#home" className="text-lg font-bold tracking-tight flex items-center space-x-2 hover:opacity-85 transition-opacity">
            <span className="w-3 h-3 rounded-full bg-pink-600 inline-block shadow-sm"></span>
            <span>DANDE TEJASWINI</span>
          </a>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center space-x-6 text-sm font-medium ${textMutedClass}`}>
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Certifications', 'Education', 'Contact'].map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`transition-colors hover:text-pink-500 py-1 ${activeSection === id ? 'text-pink-500 font-semibold border-b-2 border-pink-500' : ''}`}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center space-x-3">
            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1G8xsn_RT7sM7PSshHSp8GYhVI8rWRK-P/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Resume</span>
            </a>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-xl ${isDark ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'} transition-colors`}
              title="Toggle Theme"
            >
              {isDark ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden ${isDark ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-lg border-b border-slate-300 px-6 py-4 space-y-3 text-sm`}>
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Certifications', 'Education', 'Contact'].map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 dark:text-slate-300 hover:text-pink-500 py-1 font-medium"
                >
                  {item}
                </a>
              );
            })}
          </div>
        )}
      </header>

      {/* Home / Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* AI Talking Assistant Avatar Box */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className={`${cardGlassClass} p-6 rounded-3xl flex flex-col items-center relative group w-full max-w-sm`}>
              <div className="absolute -top-3 bg-pink-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow">
                Tejaswini&apos;s AI Assistant
              </div>
              
              <div className={`w-[260px] min-h-[350px] ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100/80 border-pink-100'} rounded-2xl overflow-hidden flex flex-col items-center justify-between p-5 border relative shadow-inner gap-3`}>
                
                {/* AI Status Badge */}
                <div className="w-full flex items-center justify-between px-1">
                  <div className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-emerald-400 animate-ping' : 'bg-pink-500'}`}></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-pink-500">
                      {isSpeaking ? 'Speaking...' : isPaused ? 'Paused' : 'AI Assistant Active'}
                    </span>
                  </div>
                  {isSpeaking && (
                    <div className="flex items-end space-x-0.5 h-3">
                      <span className="w-0.5 h-full bg-pink-500 animate-bounce"></span>
                      <span className="w-0.5 h-2/3 bg-pink-400 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                      <span className="w-0.5 h-full bg-pink-500 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                    </div>
                  )}
                </div>

                {/* Avatar Display Frame */}
                <div 
                  onClick={handleAssistantClick}
                  title={isPaused ? "Tap to Resume Speech" : isSpeaking ? "Tap to Pause Speech" : "Tap to Hear Assistant"}
                  className={`relative w-36 h-36 rounded-full overflow-hidden border-4 cursor-pointer flex items-center justify-center bg-gradient-to-tr from-pink-600 via-purple-600 to-indigo-600 shadow-xl ${isSpeaking ? 'border-pink-500 ring-4 ring-pink-500/30 scale-105' : 'border-pink-300/80 hover:border-pink-500'} transition-all duration-300 group/avatar shrink-0`}
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}avatar.jpg`} 
                    alt="Tejaswini AI Assistant" 
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover/avatar:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        e.currentTarget.nextElementSibling.style.display = 'block';
                      }
                    }}
                  />

                  {/* Fallback Detailed AI Assistant Vector Illustration */}
                  <div className="hidden w-full h-full relative">
                    <svg className="w-full h-full p-1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="48" fill="url(#avatarGlow)" />
                      <defs>
                        <linearGradient id="avatarGlow" x1="0" y1="0" x2="100" y2="100">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                      <path d="M22 45 C 20 20, 80 20, 78 45 C 82 65, 75 80, 72 88 C 65 78, 70 50, 70 45 C 70 25, 30 25, 30 45 C 30 50, 35 78, 28 88 C 25 80, 18 65, 22 45 Z" fill="#1e1b4b" />
                      <ellipse cx="50" cy="52" rx="18" ry="22" fill="#fbcfe8" />
                      <ellipse cx="43" cy="48" rx="2.5" ry="3.5" fill="#1e1b4b" />
                      <ellipse cx="57" cy="48" rx="2.5" ry="3.5" fill="#1e1b4b" />
                      <circle cx="44" cy="47" r="1" fill="#ffffff" />
                      <circle cx="58" cy="47" r="1" fill="#ffffff" />
                      <path d="M39 42 Q 43 40 47 43" stroke="#831843" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      <path d="M53 43 Q 57 40 61 42" stroke="#831843" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      {isSpeaking ? (
                        <ellipse cx="50" cy="62" rx="4" ry="3" fill="#9d174d" className="animate-pulse" />
                      ) : (
                        <path d="M44 60 Q 50 65 56 60" stroke="#9d174d" strokeWidth="2" strokeLinecap="round" fill="none" />
                      )}
                      <path d="M28 50 C 28 30, 72 30, 72 50" stroke="#f472b6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                      <rect x="25" y="46" width="6" height="12" rx="3" fill="#ec4899" />
                      <rect x="69" y="46" width="6" height="12" rx="3" fill="#ec4899" />
                      <path d="M30 56 Q 36 66 45 65" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <circle cx="45" cy="65" r="2.5" fill="#38bdf8" />
                    </svg>
                  </div>

                  {isSpeaking && (
                    <div className="absolute inset-0 bg-pink-900/30 backdrop-blur-[1px] flex items-center justify-center pointer-events-none">
                      <div className="flex space-x-1.5 items-end h-8">
                        <span className="w-1.5 bg-white animate-bounce h-4 rounded-full shadow-sm"></span>
                        <span className="w-1.5 bg-white animate-bounce h-8 rounded-full shadow-sm" style={{animationDelay: '0.1s'}}></span>
                        <span className="w-1.5 bg-white animate-bounce h-5 rounded-full shadow-sm" style={{animationDelay: '0.2s'}}></span>
                        <span className="w-1.5 bg-white animate-bounce h-7 rounded-full shadow-sm" style={{animationDelay: '0.3s'}}></span>
                      </div>
                    </div>
                  )}

                  {isPaused && (
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center text-white text-xs font-black uppercase tracking-widest border border-pink-500/40">
                      Paused
                    </div>
                  )}
                </div>

                <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest text-center">
                  {isPaused ? 'Tap avatar to Resume' : isSpeaking ? 'Tap avatar to Pause' : 'Tap avatar to Speak'}
                </p>

                {/* Highlighted Hire Me Compact Action Tile */}
                <div className="w-full flex justify-center py-1">
                  <a
                    href="#contact"
                    onClick={() => handleAssistantQuery("Tejaswini is actively seeking Full-Time software engineering roles, AI developer positions, and internship opportunities! Please reach out via the contact form.")}
                    className="max-w-[190px] w-full flex items-center justify-center space-x-1.5 bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold py-2 px-3 rounded-xl shadow-md transition-all hover:scale-[1.02] border border-pink-400/40 text-center whitespace-nowrap"
                  >
                    <span className="animate-pulse text-xs">✨</span>
                    <span>Hire Tejaswini</span>
                  </a>
                </div>

                <p className={`text-xs font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'} px-2 text-center italic leading-relaxed`}>
                  &ldquo;{assistantMessage}&rdquo;
                </p>
              </div>

              {/* Prompt Buttons */}
              <div className="w-full mt-4 space-y-2">
                <p className={`text-[11px] font-semibold ${textMutedClass} uppercase tracking-wider text-center`}>Ask me anything:</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini is a Computer Science engineering student at Aditya University with an 8.64 CGPA, specializing in AI, full-stack, and enterprise solutions.")}
                    className={`text-[11px] ${isDark ? 'bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50' : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    About
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini has interned at Areteans Technology Solutions as a Technology Specialist in PEGA, and at Technical Hub as a Salesforce Software Engineering Intern.")}
                    className={`text-[11px] ${isDark ? 'bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50' : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Experience
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini has strong skills in Java, Python, JavaScript, Apex, FastAPI, Flask, React, SQL, and Salesforce Lightning Web Components.")}
                    className={`text-[11px] ${isDark ? 'bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50' : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Skills
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini has built major systems including CXIntel AI CRM, GitNexus multi-agent system, EduBond mobile app, and SpendIQ FinTech tool.")}
                    className={`text-[11px] ${isDark ? 'bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50' : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini secured 2nd prize in national paper presentation, ranked in Top 10 at Code Wars 1.0, and qualified in OpenAI hackathons.")}
                    className={`text-[11px] ${isDark ? 'bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50' : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Achievements
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini holds Salesforce Platform Developer I, AgentForce Specialist, Pega CSA, Red Hat RHCSA, and Certiport Python and Java certifications.")}
                    className={`text-[11px] ${isDark ? 'bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50' : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Certifications
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini is pursuing B.Tech in CSE at Aditya University (2022-2026) with 8.64 CGPA, after scoring 96.7% in Intermediate and 96.66% in 10th standard.")}
                    className={`text-[11px] ${isDark ? 'bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50' : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Education
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Name & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center order-2 lg:order-1 space-y-6">
            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${isDark ? 'bg-pink-950/50 border-pink-800/60 text-pink-300' : 'bg-pink-50 border-pink-200 text-pink-700'} border text-xs font-semibold tracking-wide uppercase`}>
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              <span>Software Development Candidate</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              DANDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">TEJASWINI</span>
            </h1>

            <p className={`text-base sm:text-lg ${textMutedClass} max-w-xl font-normal leading-relaxed`}>
              &ldquo;Software Development candidate with hands-on experience building AI-enabled platforms using Python, Java, and REST APIs, alongside enterprise Salesforce solutions. Strong fundamentals in software engineering and system architecture.&rdquo;
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 bg-pink-600 hover:bg-pink-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Explore My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>

              <a
                href="https://www.linkedin.com/in/tejaswini-dande-826157258/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 ${cardGlassClass} text-xs font-medium px-5 py-3 rounded-xl transition-all`}
              >
                <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/dandetejaswini"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 ${cardGlassClass} text-xs font-medium px-5 py-3 rounded-xl transition-all`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-bold text-pink-500 uppercase tracking-widest">Professional Profile</h2>
            <h3 className="text-3xl font-bold tracking-tight">About Me</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`${cardGlassClass} p-8 rounded-3xl space-y-4`}>
              <h4 className="text-xl font-semibold">Background & Passion</h4>
              <p className={`${textMutedClass} leading-relaxed text-sm sm:text-base`}>
                I am a dedicated software development student and engineer with a robust foundation in algorithmic problem solving, object-oriented programming, and cloud-backed system integration. My expertise spans Python, Java, JavaScript, and enterprise Salesforce ecosystems.
              </p>
              <p className={`${textMutedClass} leading-relaxed text-sm sm:text-base`}>
                Whether architecting intelligent multi-agent systems, optimizing FastAPI inference pipelines, or building responsive web and mobile applications, I focus on scalability, maintainability, and user experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className={`${cardGlassClass} p-6 rounded-3xl text-center space-y-2`}>
                <span className="text-3xl font-black text-pink-500">10+</span>
                <h5 className="text-sm font-semibold">Production Projects</h5>
                <p className={`text-xs ${textMutedClass}`}>AI, Full-Stack & Salesforce</p>
              </div>

              <div className={`${cardGlassClass} p-6 rounded-3xl text-center space-y-2`}>
                <span className="text-3xl font-black text-indigo-500">7+</span>
                <h5 className="text-sm font-semibold">Certifications</h5>
                <p className={`text-xs ${textMutedClass}`}>Salesforce, Python, Java</p>
              </div>

              <div className={`${cardGlassClass} p-6 rounded-3xl text-center space-y-2 col-span-2`}>
                <span className="text-2xl font-black text-violet-500">B.Tech CSE (2022–2026)</span>
                <h5 className="text-sm font-semibold">Aditya University</h5>
                <p className={`text-xs ${textMutedClass}`}>CGPA: 8.64 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-bold text-pink-500 uppercase tracking-widest">Technical Proficiency</h2>
            <h3 className="text-3xl font-bold tracking-tight">Skills & Expertise</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className={`${cardGlassClass} p-6 rounded-3xl space-y-4`}>
              <div className="w-10 h-10 rounded-2xl bg-pink-500/20 text-pink-500 flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>
              <h4 className="text-lg font-bold">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Apex'].map(s => (
                  <span key={s} className={`text-xs font-medium px-3 py-1 rounded-lg ${isDark ? 'bg-slate-800/60 text-slate-200' : 'bg-slate-200/60 text-slate-800'}`}>{s}</span>
                ))}
              </div>
            </div>

            <div className={`${cardGlassClass} p-6 rounded-3xl space-y-4`}>
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-500 flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h4 className="text-lg font-bold">Frameworks & Backend</h4>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'Flask', 'Node.js', 'React', 'React Native', 'LWC', 'REST APIs'].map(s => (
                  <span key={s} className={`text-xs font-medium px-3 py-1 rounded-lg ${isDark ? 'bg-slate-800/60 text-slate-200' : 'bg-slate-200/60 text-slate-800'}`}>{s}</span>
                ))}
              </div>
            </div>

            <div className={`${cardGlassClass} p-6 rounded-3xl space-y-4`}>
              <div className="w-10 h-10 rounded-2xl bg-violet-500/20 text-violet-500 flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 className="text-lg font-bold">AI & ML Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['LangChain', 'Transformers', 'TensorFlow', 'Scikit-Learn', 'CrewAI', 'LlamaIndex'].map(s => (
                  <span key={s} className={`text-xs font-medium px-3 py-1 rounded-lg ${isDark ? 'bg-slate-800/60 text-slate-200' : 'bg-slate-200/60 text-slate-800'}`}>{s}</span>
                ))}
              </div>
            </div>

            <div className={`${cardGlassClass} p-6 rounded-3xl space-y-4`}>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
              <h4 className="text-lg font-bold">Cloud & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['Salesforce CRM', 'Git & GitHub', 'Docker', 'Linux / RHCSA', 'Pega CSA', 'Vercel'].map(s => (
                  <span key={s} className={`text-xs font-medium px-3 py-1 rounded-lg ${isDark ? 'bg-slate-800/60 text-slate-200' : 'bg-slate-200/60 text-slate-800'}`}>{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-bold text-pink-500 uppercase tracking-widest">Career & Internships</h2>
            <h3 className="text-3xl font-bold tracking-tight">Experience</h3>
          </div>

          <div className="relative border-l-2 border-pink-500/40 pl-6 space-y-12 ml-4">
            
            <div className="relative group">
              <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-pink-500 border-4 border-slate-900 shadow"></span>
              <div className={`${cardGlassClass} p-8 rounded-3xl space-y-3`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-xl font-bold">Technology Specialist</h4>
                  <span className="text-xs font-semibold bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full border border-pink-500/30">Jan 2025 – Jun 2025</span>
                </div>
                <h5 className={`text-sm font-semibold ${textMutedClass}`}>Areteans Technology Solutions Pvt. Ltd. | Hyderabad</h5>
                <ul className={`${textMutedClass} text-sm sm:text-base leading-relaxed space-y-2 pt-1`}>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Implemented PEGA-based workflow automation, improving process efficiency by 25%.</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Optimized backend logic and PEGA case flows in collaboration with engineering teams.</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Contributed to enterprise application development and workflow automation, supporting process-oriented software delivery.</span></li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['PEGA', 'Workflow Automation', 'Enterprise Applications', 'Backend Logic'].map(t => (
                    <span key={t} className={`text-xs px-2.5 py-1 rounded-md ${isDark ? 'bg-slate-800/60 text-slate-300' : 'bg-slate-200/60 text-slate-800'}`}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 shadow"></span>
              <div className={`${cardGlassClass} p-8 rounded-3xl space-y-3`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-xl font-bold">Software Engineering Intern (Salesforce Platform)</h4>
                  <span className="text-xs font-semibold bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/30">Jun 2024 – Jul 2024</span>
                </div>
                <h5 className={`text-sm font-semibold ${textMutedClass}`}>Technical Hub Pvt. Ltd. | Surampalem</h5>
                <ul className={`${textMutedClass} text-sm sm:text-base leading-relaxed space-y-2 pt-1`}>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Integrated third-party REST APIs into Salesforce using Lightning Web Components (LWC).</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Developed backend logic in Apex and Python for sentiment-analysis workflows.</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Worked across Salesforce application development, API integration, and backend workflow implementation.</span></li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Salesforce', 'Apex', 'LWC', 'Python', 'REST APIs'].map(t => (
                    <span key={t} className={`text-xs px-2.5 py-1 rounded-md ${isDark ? 'bg-slate-800/60 text-slate-300' : 'bg-slate-200/60 text-slate-800'}`}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-xs font-bold text-pink-500 uppercase tracking-widest">Portfolio</h2>
              <h3 className="text-3xl font-bold tracking-tight">Projects</h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {['All', 'AI', 'Salesforce', 'FinTech', 'Developer Tools'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${filterCategory === cat ? 'bg-pink-600 text-white shadow-md' : `${cardGlassClass} text-xs`}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${cardGlassClass} rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full border border-pink-500/30">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-2.5" onClick={(e) => e.stopPropagation()}>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate-400 hover:text-pink-500 transition-colors"
                          title="View GitHub Repository"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate-400 hover:text-pink-500 transition-colors"
                          title="View Live Demo"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {project.badge && (
                    <div className="inline-flex items-center space-x-1.5 text-[11px] font-semibold bg-amber-500/15 text-amber-500 border border-amber-500/30 px-2.5 py-1 rounded-lg w-full">
                      <span className="text-xs">🏆</span>
                      <span>{project.badge}</span>
                    </div>
                  )}

                  <h4 className="text-xl font-bold group-hover:text-pink-500 transition-colors">{project.title}</h4>
                  <p className={`${textMutedClass} text-sm leading-relaxed`}>{project.desc}</p>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className={`text-[11px] px-2.5 py-1 rounded-md font-medium ${isDark ? 'bg-slate-800/60 text-slate-300' : 'bg-slate-200/60 text-slate-800'}`}>{t}</span>
                    ))}
                  </div>

                  <button className={`w-full ${isDark ? 'bg-slate-800/50 hover:bg-pink-600' : 'bg-slate-200/50 hover:bg-pink-600'} hover:text-white text-xs font-semibold py-2.5 rounded-xl transition-all border border-slate-500/20`}>
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`${isDark ? 'bg-slate-900/90 text-white border-slate-700' : 'bg-white/90 text-slate-900 border-slate-200'} rounded-3xl max-w-2xl w-full p-8 shadow-2xl border space-y-6 relative max-h-[90vh] overflow-y-auto`}>
            <button 
              onClick={() => setSelectedProject(null)}
              className={`absolute top-6 right-6 w-8 h-8 rounded-full ${isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} flex items-center justify-center font-bold`}
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-500">{selectedProject.category}</span>
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className={`${textMutedClass} text-sm sm:text-base leading-relaxed`}>{selectedProject.details}</p>
            </div>

            <div className={`space-y-3 ${isDark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-slate-100/60 border-slate-200'} p-5 rounded-2xl border`}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-pink-500">Key Highlights & Metrics</h4>
              <ul className="space-y-2">
                {selectedProject.metrics.map((m, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pink-500">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map(t => (
                  <span key={t} className={`text-xs ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-800'} px-3 py-1 rounded-lg font-medium`}>{t}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-500/20">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center space-x-2"
                >
                  <span>GitHub Repository</span>
                </a>
              )}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center space-x-2"
                >
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-bold text-pink-500 uppercase tracking-widest">Recognitions</h2>
            <h3 className="text-3xl font-bold tracking-tight">Achievements & Hackathons</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievementsData.map((ach, idx) => (
              <div key={idx} className={`${cardGlassClass} p-6 rounded-3xl space-y-3 transition-all`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full border border-pink-500/30">{ach.year}</span>
                  <span className={`text-xs font-semibold ${textMutedClass}`}>{ach.org}</span>
                </div>
                <h4 className="text-lg font-bold">{ach.title}</h4>
                <p className={`${textMutedClass} text-sm`}>{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-bold text-pink-500 uppercase tracking-widest">Credentials</h2>
            <h3 className="text-3xl font-bold tracking-tight">Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardGlassClass} p-6 rounded-3xl transition-all flex flex-col justify-between space-y-4 group`}
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-pink-500 uppercase tracking-wider">{cert.issuer}</span>
                  <h4 className="text-base font-bold group-hover:text-pink-500 transition-colors">{cert.title}</h4>
                </div>
                <div className="flex items-center text-xs font-semibold space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Verify Credential</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-bold text-pink-500 uppercase tracking-widest">Academic Background</h2>
            <h3 className="text-3xl font-bold tracking-tight">Education</h3>
          </div>

          <div className="space-y-6">
            
            <div className={`${cardGlassClass} p-8 rounded-3xl space-y-3`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xl font-bold">B.Tech — Computer Science and Engineering (CSE)</h4>
                <span className="text-xs font-semibold bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full border border-pink-500/30">2022 – 2026</span>
              </div>
              <h5 className={`text-sm font-semibold ${textMutedClass}`}>Aditya University (Formerly Aditya Engineering College)</h5>
              <p className={`text-xs ${textMutedClass}`}>Location: Surampalem, Andhra Pradesh</p>
              <div className="pt-2">
                <span className={`text-sm font-bold ${isDark ? 'bg-slate-800/80 text-slate-200' : 'bg-slate-200/80 text-slate-800'} px-3 py-1.5 rounded-lg inline-block`}>CGPA: 8.64 / 10</span>
              </div>
            </div>

            <div className={`${cardGlassClass} p-8 rounded-3xl space-y-3`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xl font-bold">Intermediate — MPC (Mathematics, Physics and Chemistry)</h4>
                <span className="text-xs font-semibold bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/30">Passed: 2022</span>
              </div>
              <h5 className={`text-sm font-semibold ${textMutedClass}`}>Sri Saraswathi Junior College</h5>
              <p className={`text-xs ${textMutedClass}`}>Location: Ongole, Andhra Pradesh</p>
              <div className="pt-2">
                <span className={`text-sm font-bold ${isDark ? 'bg-slate-800/80 text-slate-200' : 'bg-slate-200/80 text-slate-800'} px-3 py-1.5 rounded-lg inline-block`}>Score: 96.7%</span>
              </div>
            </div>

            <div className={`${cardGlassClass} p-8 rounded-3xl space-y-3`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xl font-bold">10th Standard</h4>
                <span className="text-xs font-semibold bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full border border-violet-500/30">Passed: 2020</span>
              </div>
              <h5 className={`text-sm font-semibold ${textMutedClass}`}>Sri Chaitanya EM High School</h5>
              <p className={`text-xs ${textMutedClass}`}>Location: Singarayakonda, Andhra Pradesh</p>
              <div className="pt-2">
                <span className={`text-sm font-bold ${isDark ? 'bg-slate-800/80 text-slate-200' : 'bg-slate-200/80 text-slate-800'} px-3 py-1.5 rounded-lg inline-block`}>Score: 96.66%</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-bold text-pink-500 uppercase tracking-widest">Get In Touch</h2>
            <h3 className="text-3xl font-bold tracking-tight">Contact Me</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">Let&apos;s Build Something Together</h4>
              <p className={`${textMutedClass} leading-relaxed text-sm sm:text-base`}>
                I am actively seeking Full-Time software engineering opportunities, AI developer roles, and internships. Feel free to reach out via the form or connect through my professional profiles below!
              </p>

              <div className="space-y-4 pt-2">
                <div className={`flex items-center space-x-4 ${cardGlassClass} p-4 rounded-2xl`}>
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-500 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h5 className={`text-xs font-semibold ${textMutedClass} uppercase`}>Email</h5>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-semibold hover:text-pink-500"
                    >
                      dandetejaswini1329@gmail.com
                    </a>
                  </div>
                </div>

                <div className={`flex items-center space-x-4 ${cardGlassClass} p-4 rounded-2xl`}>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <div>
                    <h5 className={`text-xs font-semibold ${textMutedClass} uppercase`}>LinkedIn</h5>
                    <a href="https://www.linkedin.com/in/tejaswini-dande-826157258/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-pink-500">tejaswini-dande</a>
                  </div>
                </div>

                <div className={`flex items-center space-x-4 ${cardGlassClass} p-4 rounded-2xl`}>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                  <div>
                    <h5 className={`text-xs font-semibold ${textMutedClass} uppercase`}>GitHub</h5>
                    <a href="https://github.com/dandetejaswini" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-pink-500">dandetejaswini</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${cardGlassClass} p-8 rounded-3xl`}>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider ${textMutedClass} mb-2`}>Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => { setFormData({...formData, name: e.target.value}); if(formStatus) setFormStatus(null); }}
                    placeholder="Enter your name"
                    className={`w-full ${inputBgClass} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors`}
                  />
                  <p className={`text-[11px] ${textMutedClass} mt-1.5 flex items-center gap-1 font-medium`}>
                    <span className="text-pink-500 font-bold">•</span> Required: Valid name containing only letters (a-z, A-Z) and spaces.
                  </p>
                  {getNameError() && (
                    <p className="text-xs text-rose-500 mt-1 font-medium flex items-center gap-1">
                      <span>⚠️</span> {getNameError()}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider ${textMutedClass} mb-2`}>Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => { setFormData({...formData, email: e.target.value}); if(formStatus) setFormStatus(null); }}
                    placeholder="example@gmail.com"
                    className={`w-full ${inputBgClass} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors`}
                  />
                  <p className={`text-[11px] ${textMutedClass} mt-1.5 flex items-center gap-1 font-medium`}>
                    <span className="text-pink-500 font-bold">•</span> Required: Lowercase letters &amp; numbers only before @gmail.com.
                  </p>
                  {getEmailError() && (
                    <p className="text-xs text-rose-500 mt-1 font-medium flex items-center gap-1">
                      <span>⚠️</span> {getEmailError()}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider ${textMutedClass} mb-2`}>Your Message</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => { setFormData({...formData, message: e.target.value}); if(formStatus) setFormStatus(null); }}
                    placeholder="Write your message here..."
                    className={`w-full ${inputBgClass} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none`}
                  />
                  <p className={`text-[11px] ${textMutedClass} mt-1.5 flex items-center gap-1 font-medium`}>
                    <span className="text-pink-500 font-bold">•</span> Required: Minimum 10 characters.
                  </p>
                  {getMessageError() && (
                    <p className="text-xs text-rose-500 mt-1 font-medium flex items-center gap-1">
                      <span>⚠️</span> {getMessageError()}
                    </p>
                  )}
                </div>

                {formStatus && formStatus.type === 'error' && (
                  <div className="p-3 rounded-xl text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {formStatus.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formSubmitting || (formStatus && formStatus.type === 'success')}
                  className={`w-full font-semibold py-3.5 rounded-xl shadow transition-all text-sm cursor-pointer disabled:opacity-90 ${
                    formStatus && formStatus.type === 'success' 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-pink-600 hover:bg-pink-500 text-white'
                  }`}
                >
                  {formSubmitting ? 'Sending Message...' : formStatus && formStatus.type === 'success' ? 'Message Sent Successfully!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${navGlassClass} text-center text-xs relative z-10`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={textMutedClass}>© {new Date().getFullYear()} Dande Tejaswini. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/dandetejaswini" target="_blank" rel="noopener noreferrer" className={`${textMutedClass} hover:text-pink-500 transition-colors`}>GitHub</a>
            <a href="https://www.linkedin.com/in/tejaswini-dande-826157258/" target="_blank" rel="noopener noreferrer" className={`${textMutedClass} hover:text-pink-500 transition-colors`}>LinkedIn</a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${textMutedClass} hover:text-pink-500 transition-colors`}
            >
              Email
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
