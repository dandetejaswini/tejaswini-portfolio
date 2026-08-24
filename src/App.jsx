import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [credentialsTab, setCredentialsTab] = useState('certifications');
  
  // Light / Dark Theme State
  const [theme, setTheme] = useState('light');
  
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

    // Smooth circular canvas texture for ambient particles
    const circleCanvas = document.createElement('canvas');
    circleCanvas.width = 16;
    circleCanvas.height = 16;
    const ctx = circleCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(8, 8, 8, 0, Math.PI * 2);
    ctx.fill();

    const particleTexture = new THREE.CanvasTexture(circleCanvas);

    const particlesCount = 750;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 18;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const isDarkTheme = theme === 'dark';
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      map: particleTexture,
      color: isDarkTheme ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: isDarkTheme ? 0.5 : 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (clientX, clientY) => {
      targetX = (clientX / window.innerWidth - 0.5) * 1.2;
      targetY = (clientY / window.innerHeight - 0.5) * 1.2;
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
      
      particlesMesh.rotation.y += 0.0006;
      particlesMesh.rotation.x += 0.0003;

      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      camera.position.x = mouseX * 1.5;
      camera.position.y = -mouseY * 1.5;
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

      setFormSubmitting(false);
      setFormStatus({ type: 'success', text: 'Message Sent Successfully!' });

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus(null);
      }, 2000);
    } catch (err) {
      setFormSubmitting(false);
      setFormStatus({ type: 'error', text: 'Failed to send message. Please try again later.' });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'credentials', 'contact'];
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
      subtitle: 'Sentiment-aware CRM platform',
      category: 'AI / Salesforce / Automation',
      featured: true,
      github: 'https://github.com/dandetejaswini/CXIntel',
      live: 'https://cxintel-dev-ed.develop.my.site.com/s/',
      desc: 'Salesforce Experience Cloud CRM platform integrating Python sentiment pipelines to analyze customer feedback and automate support routing.',
      tech: ['Apex', 'LWC', 'JavaScript', 'Python', 'REST APIs', 'GitHub Actions'],
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
      subtitle: 'Intelligent Multi-Agent System',
      category: 'AI / Developer Tools',
      featured: true,
      github: 'https://github.com/dandetejaswini/GitNexus',
      desc: 'Autonomous multi-agent system analyzing GitHub repository architecture, pull requests, and commit metrics to summarize codebase health.',
      tech: ['JavaScript', 'AI Agents', 'GitHub REST API', 'Automation', 'LangChain'],
      metrics: [
        'Automated repository code analysis',
        'Multi-agent workflow orchestration',
        'Intelligent commit summarization'
      ],
      details: 'Multi-agent orchestration system that interfaces with GitHub APIs to parse repository structures, evaluate commit histories, and generate autonomous project health reports.'
    },
    {
      id: 'netguardian',
      title: 'NetGuardian',
      subtitle: 'Real-time AI content shield',
      category: 'AI / Security',
      featured: true,
      badge: 'OpenAI Academy & NextWave Buildathon',
      github: 'https://github.com/dandetejaswini/Net-Gaurdian',
      desc: 'Browser extension that detects and blurs harmful content in real time using privacy-preserving on-device inference.',
      tech: ['TensorFlow.js', 'Flask', 'LangChain', 'Browser Extension', 'Privacy-First'],
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
      subtitle: 'AI peer & mentor connection mobile app',
      category: 'AI / Mobile',
      featured: true,
      github: 'https://github.com/dandetejaswini/Edubond_mobile',
      desc: 'React Native mobile application connecting students, mentors, and alumni through intelligent profile matching algorithms.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'AI Matching', 'WebSockets'],
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
      subtitle: 'Smart barcode retail budgeting tool',
      category: 'FinTech / Web App',
      featured: true,
      github: '',
      live: 'https://spendiqpro.vercel.app/en',
      desc: 'Web application reducing checkout queues and retail overspending using camera barcode scanning and budget limits.',
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
      title: 'Advanced NLP Pipeline',
      subtitle: 'High-throughput FastAPI inference engine',
      category: 'AI / NLP / Backend',
      featured: true,
      github: 'https://github.com/dandetejaswini/Advanced-NLP-Pipeline-with-Transformers',
      desc: 'FastAPI and HuggingFace Transformers pipeline for high-speed text summarization, translation, and entity recognition.',
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
      subtitle: 'Autonomous GitHub code risk analysis',
      category: 'AI / Developer Tools',
      featured: true,
      github: 'https://github.com/dandetejaswini/reposense',
      desc: 'Autonomous AI-powered GitHub intelligence system that analyzes repositories, pull requests, code risks, and Git history.',
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
      subtitle: 'Neural network transaction classification',
      category: 'Machine Learning',
      featured: false,
      github: 'https://github.com/dandetejaswini/Fraud_Risk_Scoring',
      desc: 'Machine learning fraud detection system utilizing deep neural networks and SMOTE data balancing.',
      tech: ['Python', 'TensorFlow', 'Scikit-Learn', 'SMOTE', 'Pandas'],
      metrics: [
        'Neural network-based fraud classification',
        'High-risk transaction anomaly flagging',
        'Balanced datasets using SMOTE technique'
      ],
      details: 'Trained and validated robust neural network classification models to flag high-risk transaction anomalies.'
    }
  ];

  const certificationsData = [
    { title: 'Information Technology Specialist in HTML and CSS', issuer: 'Certiport (2023)', link: 'https://www.credly.com/badges/8c0767fe-2d87-46cd-a9f7-159da49186aa' },
    { title: 'Information Technology Specialist in Python', issuer: 'Certiport (2023)', link: 'https://drive.google.com/file/d/1Dw43WenvhYx-nPC11P6t0xiEjrsFN123/view?usp=sharing' },
    { title: 'Salesforce Platform Developer I', issuer: 'Salesforce (2025)', link: 'https://drive.google.com/file/d/1Wn7lNAck8JIJrMXh8YRIvphJWs31D0Yu/view?usp=sharing' },
    { title: 'Salesforce AgentForce Specialist', issuer: 'Salesforce (2025)', link: 'https://drive.google.com/file/d/1BgGL9qyufgqqAo9wG37pRYiYUYQ9PW8W/view?usp=sharing' },
    { title: 'Information Technology Specialist in Java', issuer: 'Certiport (2024)', link: 'https://www.credly.com/badges/6064c502-5e2f-472b-a57f-2c49568a6fcc' },
    { title: 'Red Hat Certified System Administrator (RHCSA)', issuer: 'Red Hat (2024)', link: 'https://www.credly.com/badges/56c15cb2-cd42-43df-a140-10d5273c792f' },
    { title: 'Pega Certified System Architect (CSA)', issuer: 'Pega (2025)', link: 'https://accounts.pega.com/profile/DandeTejaswini/share/BPEGACPSA24V1-PEGACPSA24V1' }
  ];

  const achievementsData = [
    { year: '2024', title: 'Second Prize — Paper Presentation', org: 'National Technical Symposium, CIET', desc: 'Secured 2nd prize for technical paper presentation on emerging AI architectures.' },
    { year: '2024', title: 'Top 10 — CODE WARS 1.0', org: 'ACM JNTU-GV', desc: 'Achieved top 10 ranking in competitive algorithmic programming challenge.' },
    { year: '2024', title: 'Qualified — OpenAI & NextWave Buildathon', org: 'OpenAI / NextWave (State Level)', desc: 'Qualified in state-level competitive AI application buildathon.' },
    { year: '2024', title: 'Advanced to Round 3 — HP PowerLab 2.0', org: 'Hindustan Petroleum Corporation Limited', desc: 'Reached Round 3 in national innovation engineering challenge.' },
    { year: 'Open Source', title: 'Google Summer of Code — Contributions', org: 'Open Source Ecosystem', desc: 'Contributed to AI tool ecosystems including LangChain, LlamaIndex, and CrewAI.' }
  ];

  const experienceData = [
    {
      company: 'Areteans Technology Solutions',
      role: 'PEGA Software Engineer Intern / Specialist',
      period: 'Jan 2025 – Present',
      location: 'Hyderabad, India',
      badge: 'Current Internship',
      points: [
        'Engineered enterprise PEGA workflow solutions and case management rules.',
        'Collaborated on client-facing business process automation and REST integrations.',
        'Applied Pega Certified System Architect (CSA) principles to optimize application lifecycle.'
      ]
    },
    {
      company: 'Technical Hub',
      role: 'Salesforce Software Engineering Intern',
      period: 'May 2024 – Nov 2024',
      location: 'Surampalem, AP',
      badge: 'Completed',
      points: [
        'Developed custom Apex classes, triggers, and Lightning Web Components (LWC).',
        'Integrated third-party REST API services into Salesforce CRM for real-time data sync.',
        'Earned Salesforce Platform Developer I and AgentForce Specialist certifications.'
      ]
    }
  ];

  const filteredProjects = filterCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase().includes(filterCategory.toLowerCase()));

  // Executive Pastel Design Tokens
  const isDark = theme === 'dark';
  const pageBgClass = isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900';
  const cardGlassClass = isDark 
    ? 'bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all shadow-lg' 
    : 'bg-white/70 backdrop-blur-xl border border-slate-200/80 hover:border-cyan-500/40 hover:shadow-md transition-all shadow-sm';
  const navGlassClass = isDark 
    ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70' 
    : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/80';
  const textMutedClass = isDark ? 'text-slate-400' : 'text-slate-600';
  const inputBgClass = isDark ? 'bg-slate-900/60 border-slate-800 text-white placeholder-slate-500' : 'bg-white/70 border-slate-200 text-slate-800 placeholder-slate-400';

  return (
    <div className={`min-h-screen ${pageBgClass} font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden transition-colors duration-300`}>
      
      {/* FULL SCREEN BACKDROP OVERLAY - Mobile Menu Click-Outside Dismiss */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[45] w-screen h-screen bg-slate-950/60 backdrop-blur-sm lg:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Loading Screen */}
      {loading && (
        <div className={`fixed inset-0 z-50 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'} flex flex-col items-center justify-center transition-opacity duration-700`}>
          <div className="w-12 h-12 border-3 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-bold tracking-wider uppercase">DANDE TEJASWINI</h2>
          <p className={`text-xs ${textMutedClass} mt-1 tracking-widest`}>Loading Portfolio...</p>
        </div>
      )}

      {/* Welcome Overlay - triggers speech on click */}
      {!loading && showWelcome && (
        <div 
          onClick={handleWelcomeEnter}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center cursor-pointer p-6"
          style={{ background: isDark ? 'linear-gradient(135deg, #090d16 0%, #0f172a 50%, #1e1b4b 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e0f2fe 100%)' }}
        >
          <div className="text-center space-y-6 max-w-md mx-auto">
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/80 shadow-2xl shadow-cyan-500/30 transition-transform hover:scale-105">
              <img 
                src={`${import.meta.env.BASE_URL}avatar.jpg`}
                alt="Tejaswini" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider">
                Interactive Portfolio
              </span>
              <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Welcome to My Profile
              </h1>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Dande Tejaswini — Software Engineer &amp; AI Developer
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg shadow-cyan-500/25 transition-all text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Tap to Enter &amp; Start AI Voice
              </span>
            </div>
            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'} animate-bounce pt-2`}>
              Click anywhere to continue
            </p>
          </div>
        </div>
      )}

      {/* Ambient 3D Three.js Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 w-full h-full" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }} />

      {/* Header / Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${navGlassClass} shadow-sm transition-all`}>
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#home" className="text-base sm:text-lg font-extrabold tracking-tight flex items-center space-x-2.5 hover:opacity-85 transition-opacity">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block shadow-sm shadow-cyan-500/50"></span>
            <span className="tracking-wider">DANDE TEJASWINI</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center space-x-6 text-sm font-medium ${textMutedClass}`}>
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'journey', label: 'Journey' },
              { id: 'credentials', label: 'Credentials' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors hover:text-cyan-500 py-1 ${activeSection === item.id ? 'text-cyan-500 font-semibold border-b-2 border-cyan-500' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1G8xsn_RT7sM7PSshHSp8GYhVI8rWRK-P/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-xl transition-all shadow-sm shadow-cyan-500/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Resume</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-xl ${isDark ? 'bg-slate-900 text-amber-400 hover:bg-slate-800 border border-slate-800' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'} transition-colors`}
              title="Toggle Light/Dark Theme"
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
          <div className={`relative z-50 lg:hidden ${isDark ? 'bg-slate-900/95 text-slate-100 border-slate-800' : 'bg-white/95 text-slate-800 border-slate-200'} backdrop-blur-xl border-b px-6 py-4 space-y-3 text-sm shadow-2xl`}>
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'journey', label: 'Journey (Experience & Education)' },
              { id: 'credentials', label: 'Credentials (Certifications & Awards)' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 dark:text-slate-300 hover:text-cyan-500 py-1.5 font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href="https://drive.google.com/file/d/1G8xsn_RT7sM7PSshHSp8GYhVI8rWRK-P/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm w-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Home / Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* AI Talking Assistant Avatar Box (FIRST on Mobile `order-1`, RIGHT on Desktop `md:order-2`) */}
          <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center order-1 md:order-2">
            <div className={`${cardGlassClass} p-6 rounded-3xl flex flex-col items-center relative group w-full max-w-sm`}>
              <div className="absolute -top-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow">
                Tejaswini&apos;s AI Assistant
              </div>
              
              <div className={`w-[260px] min-h-[340px] ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100/80 border-slate-200'} rounded-2xl overflow-hidden flex flex-col items-center justify-between p-5 border relative shadow-inner gap-3`}>
                
                {/* AI Status Badge */}
                <div className="w-full flex items-center justify-between px-1">
                  <div className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-cyan-400 animate-ping' : 'bg-cyan-500'}`}></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-500">
                      {isSpeaking ? 'Speaking...' : isPaused ? 'Paused' : 'AI Assistant Active'}
                    </span>
                  </div>
                  {isSpeaking && (
                    <div className="flex items-end space-x-0.5 h-3">
                      <span className="w-0.5 h-full bg-cyan-500 animate-bounce"></span>
                      <span className="w-0.5 h-2/3 bg-indigo-400 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                      <span className="w-0.5 h-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                    </div>
                  )}
                </div>

                {/* Avatar Display Frame */}
                <div 
                  onClick={handleAssistantClick}
                  title={isPaused ? "Tap to Resume Speech" : isSpeaking ? "Tap to Pause Speech" : "Tap to Hear Assistant"}
                  className={`relative w-36 h-36 rounded-full overflow-hidden border-4 cursor-pointer flex items-center justify-center bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-600 shadow-xl ${isSpeaking ? 'border-cyan-400 ring-4 ring-cyan-500/30 scale-105' : 'border-cyan-300/80 hover:border-cyan-500'} transition-all duration-300 group/avatar shrink-0`}
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

                  {/* Fallback Vector */}
                  <div className="hidden w-full h-full relative">
                    <svg className="w-full h-full p-1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="48" fill="url(#avatarGlow)" />
                      <defs>
                        <linearGradient id="avatarGlow" x1="0" y1="0" x2="100" y2="100">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="50%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      <path d="M22 45 C 20 20, 80 20, 78 45 C 82 65, 75 80, 72 88 C 65 78, 70 50, 70 45 C 70 25, 30 25, 30 45 C 30 50, 35 78, 28 88 C 25 80, 18 65, 22 45 Z" fill="#0f172a" />
                      <ellipse cx="50" cy="52" rx="18" ry="22" fill="#e0f2fe" />
                    </svg>
                  </div>

                  {isSpeaking && (
                    <div className="absolute inset-0 bg-cyan-900/30 backdrop-blur-[1px] flex items-center justify-center pointer-events-none">
                      <div className="flex space-x-1.5 items-end h-8">
                        <span className="w-1.5 bg-white animate-bounce h-4 rounded-full shadow-sm"></span>
                        <span className="w-1.5 bg-white animate-bounce h-8 rounded-full shadow-sm" style={{animationDelay: '0.1s'}}></span>
                        <span className="w-1.5 bg-white animate-bounce h-5 rounded-full shadow-sm" style={{animationDelay: '0.2s'}}></span>
                        <span className="w-1.5 bg-white animate-bounce h-7 rounded-full shadow-sm" style={{animationDelay: '0.3s'}}></span>
                      </div>
                    </div>
                  )}

                  {isPaused && (
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center text-white text-xs font-black uppercase tracking-widest border border-cyan-500/40">
                      Paused
                    </div>
                  )}
                </div>

                <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest text-center">
                  {isPaused ? 'Tap avatar to Resume' : isSpeaking ? 'Tap avatar to Pause' : 'Tap avatar to Speak'}
                </p>

                {/* Hire Me Action Tile (No emoji) */}
                <div className="w-full flex justify-center py-1">
                  <a
                    href="#contact"
                    onClick={() => handleAssistantQuery("Tejaswini is actively seeking Full-Time software engineering roles, AI developer positions, and entry-level opportunities! Please reach out via the contact form.")}
                    className="max-w-[190px] w-full flex items-center justify-center space-x-1.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md transition-all hover:scale-[1.02] text-center whitespace-nowrap"
                  >
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
                    onClick={() => handleAssistantQuery("Tejaswini is a Computer Science engineering graduate from Aditya University with an 8.64 CGPA, specializing in AI, full-stack, and enterprise solutions.")}
                    className={`text-[11px] ${isDark ? 'bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800' : 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    About
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini has interned at Areteans Technology Solutions as a PEGA Specialist, and at Technical Hub as a Salesforce Software Engineering Intern.")}
                    className={`text-[11px] ${isDark ? 'bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800' : 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Experience
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini has strong skills in Java, Python, JavaScript, Apex, FastAPI, Flask, React, SQL, and Salesforce Lightning Web Components.")}
                    className={`text-[11px] ${isDark ? 'bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800' : 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Skills
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini has built major systems including CXIntel AI CRM, GitNexus multi-agent system, EduBond mobile app, and SpendIQ FinTech tool.")}
                    className={`text-[11px] ${isDark ? 'bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800' : 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini secured 2nd prize in national paper presentation, ranked in Top 10 at Code Wars 1.0, and qualified in OpenAI hackathons.")}
                    className={`text-[11px] ${isDark ? 'bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800' : 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Achievements
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini holds Salesforce Platform Developer I, AgentForce Specialist, Pega CSA, Red Hat RHCSA, and Certiport Python and Java certifications.")}
                    className={`text-[11px] ${isDark ? 'bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800' : 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Certifications
                  </button>
                  <button 
                    onClick={() => handleAssistantQuery("Tejaswini has completed her B.Tech in Computer Science & Engineering at Aditya University (2022-2026) with an 8.64 CGPA, after scoring 96.7% in Intermediate and 96.66% in 10th standard. She is an entry-level software candidate.")}
                    className={`text-[11px] ${isDark ? 'bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800' : 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100'} px-2 py-1 rounded-lg font-medium transition-colors border`}
                  >
                    Education
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Name & Bio (SECOND on Mobile `order-2`, LEFT on Desktop `md:order-1`) */}
          <div className="col-span-12 md:col-span-7 flex flex-col items-start justify-center order-2 md:order-1 space-y-6">
            <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full ${isDark ? 'bg-cyan-950/50 border-cyan-800/60 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-700'} border text-xs font-semibold tracking-wide uppercase`}>
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span>Entry-Level Software Engineer &amp; AI Developer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              DANDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500">TEJASWINI</span>
            </h1>

            <p className={`text-base sm:text-lg ${textMutedClass} max-w-xl font-normal leading-relaxed`}>
              &ldquo;Software Engineering graduate with hands-on expertise in AI engineering, Python, Java, and Salesforce platforms. Specialized in building intelligent agents, REST APIs, and scalable enterprise solutions.&rdquo;
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]"
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
                <svg className="w-4 h-4 text-cyan-500 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Professional Profile</h2>
            <h3 className="text-3xl font-extrabold tracking-tight">About Me</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className={`${cardGlassClass} p-8 rounded-3xl space-y-4`}>
              <h4 className="text-xl font-bold">Background &amp; Passion</h4>
              <p className={`${textMutedClass} leading-relaxed text-sm sm:text-base`}>
                I am an entry-level Software Engineer &amp; AI Developer with a strong foundation in Artificial Intelligence, Multi-Agent Systems, and enterprise software engineering. My technical expertise encompasses Python, Java, JavaScript, and Salesforce ecosystems (LWC &amp; AgentForce).
              </p>
              <p className={`${textMutedClass} leading-relaxed text-sm sm:text-base`}>
                From architecting autonomous multi-agent GitHub intelligence tools to building high-throughput FastAPI inference engines, I focus on engineering scalable, maintainable AI applications with seamless user experiences.
              </p>

              {/* Target Engineering Roles (Matching Image 2) */}
              <div className="pt-3 space-y-2 border-t border-slate-200 dark:border-slate-800">
                <h5 className={`text-xs font-bold uppercase tracking-wider ${textMutedClass}`}>Specialized Roles</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    'AI Engineer',
                    'GenAI / LLM Engineer',
                    'Software Engineer',
                    'Full Stack Developer',
                    'Salesforce Developer'
                  ].map((role) => (
                    <span 
                      key={role} 
                      className={`text-xs font-mono font-medium px-3.5 py-1.5 rounded-xl border shadow-xs transition-colors ${
                        isDark 
                          ? 'bg-slate-900/80 text-cyan-300 border-slate-800' 
                          : 'bg-white text-slate-800 border-slate-200/80'
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics & Impact Cards (Matching Image 2 & 3) */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`${cardGlassClass} p-6 rounded-3xl space-y-2`}>
                <span className="text-3xl font-black text-cyan-500">10+</span>
                <h5 className="text-sm font-bold">Projects Shipped</h5>
                <p className={`text-xs ${textMutedClass}`}>AI, software engineering &amp; Salesforce solutions</p>
              </div>

              <div className={`${cardGlassClass} p-6 rounded-3xl space-y-2`}>
                <span className="text-3xl font-black text-indigo-500">6</span>
                <h5 className="text-sm font-bold">AI Domains</h5>
                <p className={`text-xs ${textMutedClass}`}>GenAI, Agentic AI, RAG, NLP, ML &amp; Automation</p>
              </div>

              <div className={`${cardGlassClass} p-6 rounded-3xl space-y-2 col-span-2`}>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-violet-500">7+</span>
                  <span className="text-xs font-bold bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full border border-violet-500/20">Verified Badges</span>
                </div>
                <h5 className="text-sm font-bold">Certifications &amp; Credentials</h5>
                <p className={`text-xs ${textMutedClass}`}>Salesforce Platform Dev I, Agentforce, Pega CSA, Red Hat RHCSA, Python &amp; Java</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Technical Proficiency</h2>
            <h3 className="text-3xl font-extrabold tracking-tight">Skills &amp; Expertise</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className={`${cardGlassClass} p-6 rounded-3xl space-y-4`}>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>
              <h4 className="text-lg font-bold">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Apex'].map(s => (
                  <span key={s} className={`text-xs font-mono font-medium px-3 py-1 rounded-lg ${isDark ? 'bg-slate-800/80 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>{s}</span>
                ))}
              </div>
            </div>

            <div className={`${cardGlassClass} p-6 rounded-3xl space-y-4`}>
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h4 className="text-lg font-bold">Frameworks &amp; Web</h4>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'Flask', 'Node.js', 'React', 'React Native', 'LWC', 'REST APIs'].map(s => (
                  <span key={s} className={`text-xs font-mono font-medium px-3 py-1 rounded-lg ${isDark ? 'bg-slate-800/80 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>{s}</span>
                ))}
              </div>
            </div>

            <div className={`${cardGlassClass} p-6 rounded-3xl space-y-4`}>
              <div className="w-10 h-10 rounded-2xl bg-violet-500/10 text-violet-500 flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 className="text-lg font-bold">AI &amp; Data Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['LangChain', 'Transformers', 'TensorFlow', 'Scikit-Learn', 'CrewAI', 'LlamaIndex'].map(s => (
                  <span key={s} className={`text-xs font-mono font-medium px-3 py-1 rounded-lg ${isDark ? 'bg-slate-800/80 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>{s}</span>
                ))}
              </div>
            </div>

            <div className={`${cardGlassClass} p-6 rounded-3xl space-y-4`}>
              <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
              <h4 className="text-lg font-bold">Enterprise Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {['Salesforce', 'AgentForce', 'PEGA', 'Docker', 'Git / GitHub', 'VS Code'].map(s => (
                  <span key={s} className={`text-xs font-mono font-medium px-3 py-1 rounded-lg ${isDark ? 'bg-slate-800/80 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Portfolio Showcase</h2>
            <h3 className="text-3xl font-extrabold tracking-tight">Featured Projects</h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['All', 'AI', 'Salesforce', 'Mobile', 'Web App', 'Security'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${filterCategory === cat ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-500/20' : isDark ? 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800' : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid (Matching Image 1 Reference Layout) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${cardGlassClass} p-6 rounded-3xl flex flex-col justify-between cursor-pointer space-y-4 hover:scale-[1.01] transition-transform`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider">{project.category}</span>
                    {project.badge && (
                      <span className="text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 px-2.5 py-0.5 rounded-full border border-cyan-500/20 truncate max-w-[150px]">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold tracking-tight">{project.title}</h4>
                    {project.subtitle && (
                      <p className="text-xs font-semibold text-sky-500 dark:text-sky-400 mt-0.5">{project.subtitle}</p>
                    )}
                  </div>
                  <p className={`text-xs ${textMutedClass} line-clamp-3 leading-relaxed`}>{project.desc}</p>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Colored Pastel Tech Stack Badges (Matching Image 1) */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-xl transition-colors ${
                          isDark 
                            ? 'bg-sky-950/60 text-sky-300 border border-sky-800/60' 
                            : 'bg-sky-50 text-sky-800 border border-sky-200/80 shadow-xs'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Outlined Action Buttons (Matching Image 1: Architecture & Repo) */}
                  <div className="flex items-center space-x-2 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      className={`flex-1 inline-flex items-center justify-center space-x-1.5 text-xs font-semibold py-2 px-3 rounded-xl border transition-all ${
                        isDark
                          ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                          : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                      <span>Architecture</span>
                    </button>
                    
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 inline-flex items-center justify-center space-x-1.5 text-xs font-semibold py-2 px-3 rounded-xl border transition-all ${
                          isDark
                            ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                            : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs'
                        }`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span>Repo</span>
                      </a>
                    ) : (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 inline-flex items-center justify-center space-x-1.5 text-xs font-semibold py-2 px-3 rounded-xl border transition-all ${
                          isDark
                            ? 'bg-slate-900/80 hover:bg-slate-800 text-cyan-400 border-slate-700/80'
                            : 'bg-white hover:bg-slate-100 text-cyan-700 border-slate-200 shadow-xs'
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-md">
          <div className={`relative max-w-2xl w-full ${isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'} rounded-3xl p-8 space-y-6 shadow-2xl border max-h-[90vh] overflow-y-auto`}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">{selectedProject.category}</span>
              <h3 className="text-2xl font-black">{selectedProject.title}</h3>
              {selectedProject.subtitle && (
                <p className="text-xs font-semibold text-sky-500">{selectedProject.subtitle}</p>
              )}
            </div>

            <p className={`text-sm ${textMutedClass} leading-relaxed`}>{selectedProject.details}</p>

            {selectedProject.metrics && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-500">Key Highlights &amp; Metrics</h4>
                <ul className="space-y-2">
                  {selectedProject.metrics.map((m, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs font-medium">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span className={textMutedClass}>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 flex flex-wrap gap-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span>View Repository</span>
                </a>
              )}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-95 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* STREAMLINED SECTION: Career & Education Journey Timeline */}
      <section id="journey" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Experience &amp; Academics</h2>
            <h3 className="text-3xl font-extrabold tracking-tight">Career &amp; Education Journey</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column: Work Experience */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h4 className="text-xl font-extrabold">Professional Internships</h4>
              </div>

              <div className="space-y-6">
                {experienceData.map((exp, idx) => (
                  <div key={idx} className={`${cardGlassClass} p-7 rounded-3xl space-y-4 relative overflow-hidden`}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h5 className="text-lg font-bold">{exp.role}</h5>
                        <p className="text-xs font-semibold text-cyan-500">{exp.company}</p>
                      </div>
                      <span className="text-[11px] font-bold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 pt-1">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2 text-xs font-medium">
                          <span className="text-cyan-500 font-bold">•</span>
                          <span className={textMutedClass}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Academic Degrees */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                </div>
                <h4 className="text-xl font-extrabold">Academic Background</h4>
              </div>

              <div className="space-y-6">
                <div className={`${cardGlassClass} p-7 rounded-3xl space-y-3`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-base font-bold">B.Tech — Computer Science &amp; Engineering (CSE)</h5>
                    <span className="text-[11px] font-bold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">Completed (2022–2026)</span>
                  </div>
                  <p className={`text-xs font-medium ${textMutedClass}`}>Aditya University (Formerly Aditya Engineering College) — Surampalem, AP</p>
                  <div className="pt-2">
                    <span className={`text-xs font-bold ${isDark ? 'bg-slate-800/80 text-cyan-300' : 'bg-cyan-50 text-cyan-800'} px-3 py-1.5 rounded-lg inline-block`}>Degree Completed — CGPA: 8.64 / 10</span>
                  </div>
                </div>

                <div className={`${cardGlassClass} p-7 rounded-3xl space-y-3`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-base font-bold">Intermediate — MPC</h5>
                    <span className="text-[11px] font-bold bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20">Passed 2022</span>
                  </div>
                  <p className={`text-xs font-medium ${textMutedClass}`}>Sri Saraswathi Junior College — Ongole, AP</p>
                  <div className="pt-2">
                    <span className={`text-xs font-bold ${isDark ? 'bg-slate-800/80 text-indigo-300' : 'bg-indigo-50 text-indigo-800'} px-3 py-1.5 rounded-lg inline-block`}>Score: 96.7%</span>
                  </div>
                </div>

                <div className={`${cardGlassClass} p-7 rounded-3xl space-y-3`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-base font-bold">10th Standard</h5>
                    <span className="text-[11px] font-bold bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full border border-violet-500/20">Passed 2020</span>
                  </div>
                  <p className={`text-xs font-medium ${textMutedClass}`}>Sri Chaitanya EM High School — Singarayakonda, AP</p>
                  <div className="pt-2">
                    <span className={`text-xs font-bold ${isDark ? 'bg-slate-800/80 text-violet-300' : 'bg-violet-50 text-violet-800'} px-3 py-1.5 rounded-lg inline-block`}>Score: 96.66%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STREAMLINED SECTION: Credentials & Recognition (Certifications & Achievements Hub) */}
      <section id="credentials" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Qualifications &amp; Honors</h2>
            <h3 className="text-3xl font-extrabold tracking-tight">Credentials &amp; Recognition</h3>
          </div>

          {/* Interactive Hub Tabs */}
          <div className="flex justify-center">
            <div className={`p-1.5 rounded-2xl ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-slate-200/70 border border-slate-300'} inline-flex space-x-2`}>
              <button
                onClick={() => setCredentialsTab('certifications')}
                className={`text-xs font-bold px-6 py-2.5 rounded-xl transition-all ${credentialsTab === 'certifications' ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Certifications ({certificationsData.length})
              </button>
              <button
                onClick={() => setCredentialsTab('achievements')}
                className={`text-xs font-bold px-6 py-2.5 rounded-xl transition-all ${credentialsTab === 'achievements' ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Honors &amp; Achievements ({achievementsData.length})
              </button>
            </div>
          </div>

          {/* Certifications Tab View */}
          {credentialsTab === 'certifications' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className={`${cardGlassClass} p-6 rounded-3xl flex items-start justify-between gap-4`}>
                  <div className="space-y-2">
                    <h5 className="text-sm font-bold leading-snug">{cert.title}</h5>
                    <p className={`text-xs ${textMutedClass}`}>{cert.issuer}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors shrink-0"
                    title="View Verified Credential"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Tab View */}
          {credentialsTab === 'achievements' && (
            <div className="space-y-4">
              {achievementsData.map((item, idx) => (
                <div key={idx} className={`${cardGlassClass} p-6 rounded-3xl flex flex-wrap sm:flex-nowrap items-start gap-4`}>
                  <span className="text-xs font-extrabold bg-cyan-500/10 text-cyan-500 px-3 py-1 rounded-full border border-cyan-500/20 shrink-0">
                    {item.year}
                  </span>
                  <div className="space-y-1">
                    <h5 className="text-base font-bold">{item.title}</h5>
                    <p className="text-xs font-semibold text-cyan-500">{item.org}</p>
                    <p className={`text-xs ${textMutedClass} pt-1`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Get In Touch</h2>
            <h3 className="text-3xl font-extrabold tracking-tight">Contact Me</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">Let&apos;s Build Something Together</h4>
              <p className={`${textMutedClass} leading-relaxed text-sm sm:text-base`}>
                I am actively seeking Full-Time software engineering opportunities, AI developer roles, and entry-level engineering positions. Feel free to reach out via the form or connect through my professional profiles below!
              </p>

              <div className="space-y-4 pt-2">
                <div className={`flex items-center space-x-4 ${cardGlassClass} p-4 rounded-2xl`}>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h5 className={`text-xs font-semibold ${textMutedClass} uppercase`}>Email</h5>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-bold hover:text-cyan-500"
                    >
                      dandetejaswini1329@gmail.com
                    </a>
                  </div>
                </div>

                <div className={`flex items-center space-x-4 ${cardGlassClass} p-4 rounded-2xl`}>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <div>
                    <h5 className={`text-xs font-semibold ${textMutedClass} uppercase`}>LinkedIn</h5>
                    <a href="https://www.linkedin.com/in/tejaswini-dande-826157258/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-cyan-500">tejaswini-dande</a>
                  </div>
                </div>

                <div className={`flex items-center space-x-4 ${cardGlassClass} p-4 rounded-2xl`}>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                  <div>
                    <h5 className={`text-xs font-semibold ${textMutedClass} uppercase`}>GitHub</h5>
                    <a href="https://github.com/dandetejaswini" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-cyan-500">dandetejaswini</a>
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
                    className={`w-full ${inputBgClass} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}
                  />
                  <p className={`text-[11px] ${textMutedClass} mt-1.5 flex items-center gap-1 font-medium`}>
                    <span className="text-cyan-500 font-bold">•</span> Required: Valid name containing only letters (a-z, A-Z) and spaces.
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
                    className={`w-full ${inputBgClass} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}
                  />
                  <p className={`text-[11px] ${textMutedClass} mt-1.5 flex items-center gap-1 font-medium`}>
                    <span className="text-cyan-500 font-bold">•</span> Required: Lowercase letters &amp; numbers only before @gmail.com.
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
                    className={`w-full ${inputBgClass} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}
                  ></textarea>
                  <p className={`text-[11px] ${textMutedClass} mt-1.5 flex items-center gap-1 font-medium`}>
                    <span className="text-cyan-500 font-bold">•</span> Required: At least 10 characters message.
                  </p>
                  {getMessageError() && (
                    <p className="text-xs text-rose-500 mt-1 font-medium flex items-center gap-1">
                      <span>⚠️</span> {getMessageError()}
                    </p>
                  )}
                </div>

                {formStatus && (
                  <div className={`p-3.5 rounded-xl text-xs font-bold text-center ${formStatus.type === 'success' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}`}>
                    {formStatus.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
                >
                  {formSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 relative z-10 border-t ${isDark ? 'border-slate-900 bg-slate-950 text-slate-400' : 'border-slate-200 bg-slate-100 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} Dande Tejaswini. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="https://github.com/dandetejaswini" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/tejaswini-dande-826157258/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">LinkedIn</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
