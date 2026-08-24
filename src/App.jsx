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
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  
  // AI Assistant Speech & Video Avatar State
  const [assistantMessage, setAssistantMessage] = useState(
    "Hi! Welcome to Dande Tejaswini's portfolio. I'm your virtual guide. Take a look around to explore her work, technical journey, projects, achievements, and credentials. Let's get started!"
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState(null);

  const canvasRef = useRef(null);
  const welcomeCanvasRef = useRef(null);
  const speechRef = useRef(null);
  const videoRef = useRef(null);
  const returnTimerRef = useRef(null);
  const onVideoEndRef = useRef(null);

  const cancelReturnTimer = () => {
    if (returnTimerRef.current) {
      clearTimeout(returnTimerRef.current);
      returnTimerRef.current = null;
    }
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      cancelReturnTimer();
    };

    const handleScrollDismissAll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      if (selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('wheel', (e) => { handleUserInteraction(); handleScrollDismissAll(); }, { passive: true });
    window.addEventListener('touchmove', (e) => { handleUserInteraction(); handleScrollDismissAll(); }, { passive: true });
    window.addEventListener('scroll', handleScrollDismissAll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScrollDismissAll);
      window.removeEventListener('touchmove', handleScrollDismissAll);
      window.removeEventListener('scroll', handleScrollDismissAll);
    };
  }, [mobileMenuOpen, selectedProject]);

  const speakText = (text, onComplete) => {
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
          if (onComplete) onComplete();
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

  const jumpToSection = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  const playAssistantVideo = (videoName, message, onEndCallback = null) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    cancelReturnTimer();
    setAssistantMessage(message);
    onVideoEndRef.current = onEndCallback;

    const videoUrl = `${import.meta.env.BASE_URL}avatar_videos/${videoName}`;
    setActiveVideoSrc(videoUrl);
    setIsSpeaking(true);
    setIsPaused(false);
  };

  const handleAssistantClick = () => {
    if (activeVideoSrc && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
        setIsSpeaking(true);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
        setIsSpeaking(false);
      }
    } else {
      playAssistantVideo(
        'greeting.mp4',
        "Hi! Welcome to Dande Tejaswini's portfolio. I'm your virtual guide. Take a look around to explore her work, technical journey, projects, achievements, and credentials. Let's get started!"
      );
    }
  };

  // AI Assistant Section Handlers (Plays video avatar in Hero without scrolling away)
  const handleNavAbout = () => {
    playAssistantVideo(
      'about.mp4',
      "Tejaswini is an entry-level Software Engineer and AI Developer with experience across AI, backend development, APIs, Salesforce, PEGA, automation, and software engineering."
    );
  };

  const handleNavSkills = () => {
    playAssistantVideo(
      'skills.mp4',
      "Her skills span AI and machine learning, programming, backend and APIs, frontend development, Salesforce, PEGA, databases, DevOps, and core software engineering."
    );
  };

  const handleNavProjects = () => {
    playAssistantVideo(
      'projects.mp4',
      "Tejaswini has built projects across AI, developer tools, security, mobile applications, FinTech, NLP, Salesforce, and automation."
    );
  };

  const handleNavJourney = () => {
    playAssistantVideo(
      'journey.mp4',
      "Tejaswini's professional journey includes enterprise software, workflow automation, Salesforce development, API integration, and AI-driven application workflows."
    );
  };

  const handleNavEducation = () => {
    playAssistantVideo(
      'education.mp4',
      "Tejaswini has completed her B.Tech in Computer Science and Engineering from Aditya University with a CGPA of 8.64. She completed her Intermediate in MPC with 96.7% and her 10th standard with 96.66%."
    );
  };

  const handleNavAchievements = () => {
    setCredentialsTab('achievements');
    playAssistantVideo(
      'achievements.mp4',
      "Her achievements include a Top 10 position in CODE WARS 1.0, second prize in a paper presentation, qualification for the OpenAI and NextWave State-Level Buildathon, and advancement to Round 3 of HP PowerLab 2.0."
    );
  };

  const handleNavCredentials = () => {
    setCredentialsTab('certifications');
    playAssistantVideo(
      'credentials.mp4',
      "Her certifications include Salesforce Platform Developer I, Salesforce AgentForce Specialist, Pega Certified System Architect, Red Hat Certified System Administrator, and Information Technology Specialist certifications."
    );
  };

  const handleNavHire = () => {
    playAssistantVideo(
      'hire.mp4',
      "Interested in working with Tejaswini? She is open to opportunities in Software Engineering, AI and Machine Learning, Backend Development, Full Stack Development, Salesforce, PEGA, Automation, and other technology-focused roles. Let's connect.",
      () => {
        // Direct jump to contact form AFTER hire video finishes talking!
        jumpToSection('contact');
      }
    );
  };

  const handleWelcomeEnter = () => {
    setShowWelcome(false);
    setLoading(false);
    const greetingText = "Hi! Welcome to Dande Tejaswini's portfolio. I'm your virtual guide. Take a look around to explore her work, technical journey, projects, achievements, and credentials. Let's get started!";
    playAssistantVideo('greeting.mp4', greetingText);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Welcome canvas animation - subtle glassmorphic cursor trail only
  useEffect(() => {
    if (!welcomeCanvasRef.current) return;
    if (!showWelcome || loading) return;

    const canvas = welcomeCanvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const trail = [];
    const MAX_TRAIL = 80;
    const isDarkTheme = theme === 'dark';

    // Subtle floating dots (very light, small, gentle)
    const dots = [];
    for (let i = 0; i < 20; i++) {
      dots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.5,
        alpha: Math.random() * 0.15 + 0.08,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * Math.PI * 2
      });
    }

    const addPoint = (x, y) => {
      trail.push({ x, y, time: Date.now() });
      if (trail.length > MAX_TRAIL) trail.shift();
    };

    const handleMouseMove = (e) => addPoint(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) addPoint(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      const trailColor = isDarkTheme ? 'rgba(6, 182, 212, ' : 'rgba(8, 145, 178, ';
      const dotColor = isDarkTheme ? '#06b6d4' : '#0891b2';

      // 1. Very subtle floating dots
      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        d.angle += d.twinkleSpeed;
        const a = Math.max(0.05, d.alpha + Math.sin(d.angle) * 0.06);

        ctx.save();
        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
        ctx.restore();
      });

      // 2. Delicate cursor light trail
      while (trail.length > 0 && now - trail[0].time > 1200) trail.shift();

      if (trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const prev = trail[i - 1];
          const curr = trail[i];
          const age = now - curr.time;
          const progress = i / trail.length;
          const alpha = Math.max(0, (1 - age / 1200) * progress * 0.6);
          const lineWidth = Math.max(1, progress * 4);

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = trailColor + '1)';
          ctx.lineWidth = lineWidth;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.shadowBlur = 8;
          ctx.shadowColor = dotColor;
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
          ctx.stroke();
          ctx.restore();
        }

        // Small soft glow at cursor tip
        const tip = trail[trail.length - 1];
        const tipAge = now - tip.time;
        if (tipAge < 150) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, (1 - tipAge / 150) * 0.5);
          const g = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, 12);
          g.addColorStop(0, trailColor + '0.4)');
          g.addColorStop(1, trailColor + '0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(tip.x, tip.y, 12, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showWelcome, loading, theme]);
  // NOTE: canvas element is rendered outside the conditional block below, always in DOM

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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
      setFormStatus({ type: 'error', text: 'Please enter all the required fields before submitting.' });
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
          subject: formData.subject || `Opportunity Message from ${formData.name}`,
          message: formData.message,
          _subject: `New Portfolio Contact Message from ${formData.name}`,
          _captcha: "false"
        })
      });

      setFormSubmitting(false);
      const successText = "Thank you for reaching out! Your message has been sent successfully to Tejaswini. She'll get back to you as soon as possible.";
      setFormStatus({ type: 'success', text: successText });

      // Direct jump back to Hero section and play contact_success.mp4 video avatar!
      jumpToSection('home');
      const spokenSuccess = "Thank you for reaching out to Tejaswini. Your message has been sent successfully!";
      playAssistantVideo('contact_success.mp4', spokenSuccess);

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
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
      badge: 'Qualified: OpenAI Academy & NextWave Buildathon',
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
    { year: '2024', title: 'Google Summer of Code — Contributions', org: 'Open Source Ecosystem', desc: 'Contributed to AI tool ecosystems including LangChain, LlamaIndex, and CrewAI.' }
  ];

  // Exactly structured 8 Skills Categories
  const skillsCategories = [
    {
      title: 'Programming',
      icon: 'code',
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'Apex', 'SQL']
    },
    {
      title: 'AI / Machine Learning',
      icon: 'ai',
      items: ['AI', 'Machine Learning', 'NLP', 'Transformers', 'BERT', 'TensorFlow', 'LangChain', 'Semantic Search', 'TF-IDF', 'spaCy', 'Neural Networks', 'Sentiment Analysis', 'NER', 'Summarization', 'Translation', 'AI Agents', 'Prompt Engineering']
    },
    {
      title: 'Backend & APIs',
      icon: 'backend',
      items: ['Flask', 'FastAPI', 'Spring Boot', 'Node.js', 'REST APIs', 'JDBC', 'JPA', 'Spring Data JPA', 'Microservices', 'API Integration']
    },
    {
      title: 'Frontend & Mobile',
      icon: 'frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'LWC', 'Tailwind CSS', 'Material UI', 'SLDS', 'WebRTC', 'ZXing']
    },
    {
      title: 'Salesforce & PEGA',
      icon: 'enterprise',
      items: ['Salesforce Platform', 'Apex', 'LWC', 'Salesforce APIs', 'Reports', 'Dashboards', 'Flows', 'Salesforce Automation', 'PEGA', 'PEGA Case Management', 'PEGA Workflow Automation']
    },
    {
      title: 'Databases & Data',
      icon: 'data',
      items: ['SQL', 'H2', 'MongoDB', 'Mongoose', 'Data Processing', 'Data Pipelines', 'Data Analysis', 'Data Visualization', 'SMOTE']
    },
    {
      title: 'DevOps & Developer Tools',
      icon: 'devops',
      items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Maven', 'SDKMAN', 'Vercel', 'CI/CD', 'Kafka', 'Java 17', 'Java 21']
    },
    {
      title: 'Software Engineering',
      icon: 'engineering',
      items: ['Data Structures & Algorithms', 'OOP', 'Graphs', 'Dynamic Programming', 'Debugging', 'Testing', 'Modular Design', 'System Design', 'Workflow Automation', 'Technical Documentation']
    }
  ];

  // Exact User Experience Data
  const experienceData = [
    {
      company: 'Areteans Technology Solutions Pvt. Ltd. | Hyderabad',
      role: 'Technology Specialist Apprentice',
      period: 'Jan 2025 – Jun 2025',
      badge: 'Current Role',
      points: [
        'Implemented PEGA-based workflow automation and application logic for enterprise business processes.',
        'Optimized backend logic and case flows, contributing to a 25% improvement in process efficiency.',
        'Collaborated with engineering teams on application development, AI-enabled workflows, debugging, testing, and process optimization.'
      ]
    },
    {
      company: 'Technical Hub Pvt. Ltd. | Surampalem',
      role: 'Software Engineering Intern — Salesforce Platform',
      period: 'Jun 2024 – Jul 2024',
      badge: 'Completed',
      points: [
        'Developed Salesforce application functionality using Apex and Lightning Web Components (LWC).',
        'Integrated third-party REST APIs and developed Apex/Python backend logic for AI-driven sentiment-analysis workflows.',
        'Worked on AI/data processing, application integration, debugging, testing, and reusable component development.'
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

      {/* Welcome Canvas - ALWAYS in DOM so ref is available for useEffect */}
      <canvas
        ref={welcomeCanvasRef}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          pointerEvents: 'none',
          zIndex: 61,
          display: (!loading && showWelcome) ? 'block' : 'none'
        }}
      />

      {/* Welcome Overlay - triggers speech on click */}
      {!loading && showWelcome && (
        <div 
          onClick={handleWelcomeEnter}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center cursor-pointer p-6 overflow-hidden select-none backdrop-blur-xl"
          style={{ background: isDark ? 'rgba(15, 23, 42, 0.65)' : 'rgba(248, 250, 252, 0.55)' }}
        >
          
          <div className="text-center space-y-6 max-w-md mx-auto relative z-10">
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
              { id: 'journey', label: 'Journey' },
              { id: 'credentials', label: 'Credentials' },
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
            <div className={`${cardGlassClass} p-4 sm:p-6 rounded-3xl flex flex-col items-center relative group w-full max-w-[360px] sm:max-w-[420px]`}>
              <div className="absolute -top-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow z-20">
                Tejaswini&apos;s AI Assistant
              </div>
              
              <div className={`w-full min-h-[410px] sm:min-h-[450px] ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100/80 border-slate-200'} rounded-3xl overflow-hidden flex flex-col items-center justify-between p-5 sm:p-7 border relative shadow-inner gap-4`}>
                
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

                {/* 3D Talking Avatar Display Frame with Live Lip-Sync */}
                <div 
                  onClick={handleAssistantClick}
                  title={isPaused ? "Tap to Resume Speech" : isSpeaking ? "Tap to Pause Speech" : "Tap to Hear Assistant"}
                  className={`relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full overflow-hidden border-4 cursor-pointer flex items-center justify-center bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-600 shadow-xl ${isSpeaking ? 'border-cyan-400 ring-4 ring-cyan-500/25 scale-105 transition-all duration-300' : 'border-cyan-300/80 hover:border-cyan-500'} transition-all duration-300 group/avatar shrink-0 my-auto`}
                  style={{
                    perspective: '600px'
                  }}
                >
                  <style>{`
                    @keyframes talkingHead3D {
                      0%, 100% { transform: scale(1.3) rotate(0deg) translateY(0px) rotateY(0deg); }
                      25% { transform: scale(1.33) rotate(2deg) translateY(-3px) rotateY(-4deg); }
                      50% { transform: scale(1.31) rotate(-2deg) translateY(1px) rotateY(4deg); }
                      75% { transform: scale(1.34) rotate(1.5deg) translateY(-2px) rotateY(-2deg); }
                    }
                    @keyframes lipSyncTalkingMouth {
                      0%, 100% { transform: scaleY(0.2) scaleX(0.85); opacity: 0.6; }
                      20% { transform: scaleY(1.5) scaleX(1.15); opacity: 0.95; }
                      40% { transform: scaleY(0.4) scaleX(0.8); opacity: 0.7; }
                      60% { transform: scaleY(1.7) scaleX(1.2); opacity: 1; }
                      80% { transform: scaleY(0.6) scaleX(0.9); opacity: 0.8; }
                    }
                  `}</style>

                  {activeVideoSrc ? (
                    <video
                      ref={videoRef}
                      src={activeVideoSrc}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover scale-[1.3] transform-gpu rounded-full overflow-hidden"
                      onPlay={() => {
                        setIsSpeaking(true);
                        setIsPaused(false);
                      }}
                      onEnded={() => {
                        setIsSpeaking(false);
                        setIsPaused(false);
                        setActiveVideoSrc(null);
                        if (onVideoEndRef.current) {
                          const callback = onVideoEndRef.current;
                          onVideoEndRef.current = null;
                          callback();
                        }
                      }}
                      onError={() => {
                        setActiveVideoSrc(null);
                        if (onVideoEndRef.current) {
                          const callback = onVideoEndRef.current;
                          onVideoEndRef.current = null;
                          callback();
                        }
                      }}
                    />
                  ) : (
                    <img 
                      src={`${import.meta.env.BASE_URL}avatar.jpg`} 
                      alt="Tejaswini AI Assistant" 
                      className={`w-full h-full object-cover rounded-full transition-transform duration-500 ${isSpeaking ? 'scale-110' : 'group-hover/avatar:scale-110'}`}
                      style={{
                        animation: isSpeaking ? 'talkingHead3D 2.5s ease-in-out infinite' : 'none',
                        transformOrigin: 'center center'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = 'block';
                        }
                      }}
                    />
                  )}

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

                  {/* Live Lip-Sync Mouth Articulation on Photo (Only when fallback photo is shown) */}
                  {!activeVideoSrc && isSpeaking && (
                    <div 
                      className="absolute pointer-events-none rounded-full bg-rose-950/70 border border-rose-400/50 shadow-inner"
                      style={{
                        bottom: '29%',
                        left: '43%',
                        width: '14%',
                        height: '8%',
                        animation: 'lipSyncTalkingMouth 0.3s ease-in-out infinite alternate',
                        boxShadow: '0 0 6px rgba(244, 63, 94, 0.6)'
                      }}
                    />
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

                {/* Hire Me Prominent Separate Button */}
                <div className="w-full flex justify-center py-1">
                  <button
                    onClick={handleNavHire}
                    className="max-w-[190px] w-full flex items-center justify-center bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md transition-all hover:scale-[1.02] text-center whitespace-nowrap"
                  >
                    <span>Hire Tejaswini</span>
                  </button>
                </div>

                <p className={`text-xs font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'} px-2 text-center italic leading-relaxed`}>
                  &ldquo;{assistantMessage}&rdquo;
                </p>
              </div>

              {/* Exact Predefined AI Assistant Buttons */}
              <div className="w-full mt-4 space-y-2">
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <button 
                    onClick={handleNavAbout}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80 hover:bg-cyan-900/60' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300 hover:bg-cyan-100/90'}`}
                  >
                    About
                  </button>
                  <button 
                    onClick={handleNavSkills}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80 hover:bg-cyan-900/60' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300 hover:bg-cyan-100/90'}`}
                  >
                    Skills
                  </button>
                  <button 
                    onClick={handleNavProjects}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80 hover:bg-cyan-900/60' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300 hover:bg-cyan-100/90'}`}
                  >
                    Projects
                  </button>
                  <button 
                    onClick={handleNavJourney}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80 hover:bg-cyan-900/60' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300 hover:bg-cyan-100/90'}`}
                  >
                    Journey
                  </button>
                  <button 
                    onClick={handleNavEducation}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80 hover:bg-cyan-900/60' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300 hover:bg-cyan-100/90'}`}
                  >
                    Education
                  </button>
                  <button 
                    onClick={handleNavAchievements}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80 hover:bg-cyan-900/60' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300 hover:bg-cyan-100/90'}`}
                  >
                    Achievements
                  </button>
                  <button 
                    onClick={handleNavCredentials}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80 hover:bg-cyan-900/60' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300 hover:bg-cyan-100/90'}`}
                  >
                    Credentials
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Name & Bio (SECOND on Mobile `order-2`, LEFT on Desktop `md:order-1`) */}
          <div className="col-span-12 md:col-span-7 flex flex-col items-start justify-center order-2 md:order-1 space-y-6">
            <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full ${isDark ? 'bg-cyan-950/50 border-cyan-800/60 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-700'} border text-xs font-semibold tracking-wide uppercase`}>
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span>Software Engineer &amp; AI Developer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              DANDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500">TEJASWINI</span>
            </h1>

            {/* Exact Hero Text Requested by User */}
            <p className={`text-base sm:text-lg ${textMutedClass} max-w-xl font-normal leading-relaxed`}>
              &ldquo;Software Engineer with hands-on experience in AI, Python, JavaScript, Salesforce, backend development, and REST APIs. Building AI-powered applications, intelligent developer tools, NLP solutions, and enterprise automation systems with a strong foundation in software engineering.&rdquo;
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
              {/* Exact Background & Passion text requested by user */}
              <p className={`${textMutedClass} leading-relaxed text-sm sm:text-base`}>
                I am an entry-level Software Engineer and AI Developer with a strong foundation in Artificial Intelligence, software engineering, backend development, and API integration. My technical background includes Python, Java, JavaScript, Salesforce, Apex, Lightning Web Components, and modern AI/NLP technologies.
              </p>
              <p className={`${textMutedClass} leading-relaxed text-sm sm:text-base`}>
                I enjoy building AI-powered applications, intelligent developer tools, NLP solutions, and workflow automation systems, with hands-on experience across projects involving multi-agent systems, REST APIs, FastAPI, Transformers, and Salesforce platforms. I focus on developing practical, reliable solutions while continuously strengthening my software engineering and problem-solving skills.
              </p>

              {/* Target Engineering Roles */}
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
                      className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${
                        isDark 
                          ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' 
                          : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Expanded 6-Card Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`${cardGlassClass} p-6 rounded-3xl space-y-2`}>
                <span className="text-3xl font-black text-cyan-500">10+</span>
                <h5 className="text-sm font-bold">Projects Shipped</h5>
                <p className={`text-xs ${textMutedClass}`}>AI, software engineering, analytics, and Salesforce projects</p>
              </div>

              <div className={`${cardGlassClass} p-6 rounded-3xl space-y-2`}>
                <span className="text-3xl font-black text-cyan-500">6</span>
                <h5 className="text-sm font-bold">AI Domains</h5>
                <p className={`text-xs ${textMutedClass}`}>GenAI, Agentic AI, RAG, NLP, ML, and AI automation</p>
              </div>

              <div className={`${cardGlassClass} p-6 rounded-3xl space-y-2`}>
                <span className="text-3xl font-black text-cyan-500">7+</span>
                <h5 className="text-sm font-bold">Certifications</h5>
                <p className={`text-xs ${textMutedClass}`}>Salesforce Platform Dev I, Agentforce, Pega CSA, RHCSA, Python &amp; Java</p>
              </div>

              <div className={`${cardGlassClass} p-6 rounded-3xl space-y-2`}>
                <span className="text-3xl font-black text-cyan-500">8.64</span>
                <h5 className="text-sm font-bold">B.Tech CGPA</h5>
                <p className={`text-xs ${textMutedClass}`}>Computer Science &amp; Engineering Academic Distinction at Aditya University</p>
              </div>

              <div className={`${cardGlassClass} p-6 rounded-3xl space-y-2`}>
                <span className="text-3xl font-black text-cyan-500">25%</span>
                <h5 className="text-sm font-bold">Efficiency Boost</h5>
                <p className={`text-xs ${textMutedClass}`}>Process optimization &amp; workflow automation in PEGA/Salesforce</p>
              </div>

              <div className={`${cardGlassClass} p-6 rounded-3xl space-y-2`}>
                <span className="text-3xl font-black text-cyan-500">95%+</span>
                <h5 className="text-sm font-bold">System Accuracy</h5>
                <p className={`text-xs ${textMutedClass}`}>Barcode scanning precision &amp; ML transaction anomaly detection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (Exact 8 Categories Requested by User) */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Technical Proficiency</h2>
            <h3 className="text-3xl font-extrabold tracking-tight">SKILLS</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsCategories.map((cat, idx) => (
              <div key={idx} className={`${cardGlassClass} p-6 rounded-3xl space-y-4`}>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span 
                      key={item} 
                      className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${
                        isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${cardGlassClass} p-6 rounded-3xl flex flex-col justify-between cursor-pointer space-y-4 hover:scale-[1.01] transition-transform`}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider">{project.category}</span>
                    {project.badge && (
                      <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border whitespace-normal ${
                        isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                      }`}>
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
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${
                          isDark 
                            ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' 
                            : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Outlined Action Buttons (Overview, Repo, Live) */}
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      className={`flex-1 min-w-[80px] inline-flex items-center justify-center space-x-1 text-xs font-semibold py-2 px-2.5 rounded-xl border transition-all ${
                        isDark
                          ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                          : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      <span>Overview</span>
                    </button>
                    
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 min-w-[70px] inline-flex items-center justify-center space-x-1 text-xs font-semibold py-2 px-2.5 rounded-xl border transition-all ${
                          isDark
                            ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                            : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs'
                        }`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span>Repo</span>
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 min-w-[70px] inline-flex items-center justify-center space-x-1 text-xs font-semibold py-2 px-2.5 rounded-xl border transition-all ${
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

      {/* Project Detail Modal - Click Anywhere Outside to Dismiss */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-md cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-2xl w-full ${isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'} rounded-3xl p-8 space-y-6 shadow-2xl border max-h-[90vh] overflow-y-auto cursor-default`}
          >
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
            {/* Left Column: Work Experience (Exact User Text) */}
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
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h5 className="text-lg font-bold">{exp.role}</h5>
                        <p className="text-xs font-semibold text-cyan-500">{exp.company}</p>
                      </div>
                      <span className={`text-[11px] font-medium px-3 py-1 rounded-full border self-start sm:self-auto ${
                        isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                      }`}>
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
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                </div>
                <h4 className="text-xl font-extrabold">Academic Background</h4>
              </div>

              <div className="space-y-6">
                <div className={`${cardGlassClass} p-7 rounded-3xl space-y-3`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h5 className="text-base font-bold">B.Tech — Computer Science &amp; Engineering (CSE)</h5>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border self-start sm:self-auto ${
                      isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                    }`}>2022 – 2026</span>
                  </div>
                  <p className={`text-xs font-medium ${textMutedClass}`}>Aditya University (Formerly Aditya Engineering College) — Surampalem, AP</p>
                  <div className="pt-2">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border inline-block ${
                      isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                    }`}>CGPA: 8.64 / 10</span>
                  </div>
                </div>

                <div className={`${cardGlassClass} p-7 rounded-3xl space-y-3`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h5 className="text-base font-bold">Intermediate — MPC</h5>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border self-start sm:self-auto ${
                      isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                    }`}>2020 – 2022</span>
                  </div>
                  <p className={`text-xs font-medium ${textMutedClass}`}>Sri Saraswathi Junior College — Ongole, AP</p>
                  <div className="pt-2">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border inline-block ${
                      isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                    }`}>Score: 96.7%</span>
                  </div>
                </div>

                <div className={`${cardGlassClass} p-7 rounded-3xl space-y-3`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h5 className="text-base font-bold">10th Standard</h5>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border self-start sm:self-auto ${
                      isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                    }`}>2020</span>
                  </div>
                  <p className={`text-xs font-medium ${textMutedClass}`}>Sri Chaitanya EM High School — Singarayakonda, AP</p>
                  <div className="pt-2">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border inline-block ${
                      isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                    }`}>Score: 96.66%</span>
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
                  <span className={`w-28 text-center justify-center text-xs font-medium px-3 py-1 rounded-full border shrink-0 ${
                    isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                  }`}>
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

      {/* Contact Section (Exact User Specifications) */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Get In Touch</h2>
            <h3 className="text-3xl font-extrabold tracking-tight">Contact Me</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">Let&apos;s Connect</h4>
              
              {/* Exact Specified Contact Top Display Text */}
              <div className={`${cardGlassClass} p-5 rounded-2xl space-y-3`}>
                <p className={`${textMutedClass} leading-relaxed text-sm font-medium`}>
                  Thank you for your interest in working with Tejaswini. If you have an opportunity that matches her profile, feel free to reach out through the contact form.
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <h5 className={`text-xs font-bold uppercase tracking-wider ${textMutedClass} mb-2`}>Open Opportunity Areas:</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Software Engineering',
                      'AI / Machine Learning',
                      'Backend Development',
                      'Full Stack Development',
                      'Salesforce',
                      'PEGA',
                      'Automation',
                      'Technology-focused roles'
                    ].map((area) => (
                      <span key={area} className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all ${
                        isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/80' : 'bg-cyan-50/90 text-cyan-900 border-cyan-300'
                      }`}>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

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
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
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
                  <label className={`block text-xs font-semibold uppercase tracking-wider ${textMutedClass} mb-2`}>Subject (Optional)</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="e.g. Software Engineering Role / Project Collaboration"
                    className={`w-full ${inputBgClass} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}
                  />
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

                {/* Contact Form Success / Error Box */}
                {formStatus && (
                  <div className={`p-4 rounded-2xl text-xs font-semibold text-center leading-relaxed ${formStatus.type === 'success' ? 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/30'}`}>
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
