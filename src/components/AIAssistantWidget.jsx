import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Send, Bot, User, ArrowDown, MessageSquare, Check } from 'lucide-react';

export default function AIAssistantWidget() {
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [statusText, setStatusText] = useState('Active');
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'ai',
      text: "Hello! I am Tejaswini's AI Assistant. Ask me anything about her skills, projects, background, or how to get in touch!",
    },
  ]);

  const presetQuestions = [
    "What is Tejaswini's tech stack?",
    "Tell me about her recent projects.",
    "How can I hire Dande Tejaswini?",
    "Where is she based?",
  ];

  const handleSpeak = (text) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // cancel any active speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setStatusText('Speaking...');
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setStatusText('Active');
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setStatusText('Active');
    };

    window.speechSynthesis.speak(utterance);
  };

  const getAIResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('tech stack') || q.includes('skill')) {
      return "Dande Tejaswini specializes in React.js, JavaScript, HTML5/CSS3, Node.js, Python, zero-dependency Canvas graphics, REST APIs, and custom AI assistant integrations!";
    } else if (q.includes('project') || q.includes('work')) {
      return "Tejaswini has built modern full-stack dashboards, interactive voice-enabled portfolio assistants, zero-dependency particle visualizers, and e-commerce platforms.";
    } else if (q.includes('hire') || q.includes('contact') || q.includes('email')) {
      return "You can hire Tejaswini directly by clicking the 'Hire Tejaswini' button or sending a message to dandetejaswini1329@gmail.com!";
    } else if (q.includes('location') || q.includes('where') || q.includes('based')) {
      return "Tejaswini is based in India and is open to remote full-time software engineering and AI developer positions worldwide.";
    } else {
      return `Thank you for asking! Dande Tejaswini is a dedicated Software Engineer & AI Developer. Feel free to connect with her at dandetejaswini1329@gmail.com for more details.`;
    }
  };

  const handleSendQuery = (queryText) => {
    const textToSend = queryText || userInput;
    if (!textToSend.trim()) return;

    const userMessage = { sender: 'user', text: textToSend };
    const responseText = getAIResponse(textToSend);
    const aiMessage = { sender: 'ai', text: responseText };

    setChatHistory((prev) => [...prev, userMessage, aiMessage]);
    setUserInput('');
    handleSpeak(responseText);
  };

  const handleHireClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="ai-assistant"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 1,
        background: 'var(--bg-primary)',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span
            style={{
              color: 'var(--accent-primary)',
              fontWeight: '700',
              fontSize: '0.9rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={16} /> Interactive Feature
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '8px' }}>
            Meet Tejaswini's AI Assistant
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1.05rem' }}>
            Powered by speech synthesis and interactive persona responses
          </p>
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

        {/* AI Container Widget */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '24px',
            padding: '36px 28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          {/* Avatar & Hire Tile Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '16px 0',
            }}
          >
            {/* Circular Avatar Graphic with Glowing Audio Pulse */}
            <div
              style={{
                position: 'relative',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                marginBottom: '20px',
              }}
            >
              {/* Outer pulsing audio soundwave ring */}
              <div
                className={isSpeaking ? 'avatar-pulse' : ''}
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  border: isSpeaking ? '3px solid var(--accent-primary)' : '2px dashed var(--border-color)',
                  transition: 'all 0.3s ease',
                }}
              />

              <img
                src="/avatar.jpg"
                alt="AI Assistant Portrait Avatar"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                  border: '3px solid var(--bg-secondary)',
                }}
              />

              {/* Mute/Voice Toggle Button */}
              <button
                onClick={() => setSpeechEnabled(!speechEnabled)}
                title={speechEnabled ? 'Mute AI Voice' : 'Enable AI Voice'}
                style={{
                  position: 'absolute',
                  top: '4px',
                  right: '4px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: speechEnabled ? 'var(--accent-primary)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                {speechEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
            </div>

            {/* Status Badge & Audio Soundwave Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '24px',
                padding: '6px 14px',
                borderRadius: '20px',
                background: 'var(--bg-tertiary)',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'var(--text-secondary)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: isSpeaking ? '#10b981' : '#3b82f6',
                }}
              />
              <span>{statusText}</span>

              {isSpeaking && (
                <div style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '16px', marginLeft: '4px' }}>
                  <div className="soundwave-bar" />
                  <div className="soundwave-bar" />
                  <div className="soundwave-bar" />
                  <div className="soundwave-bar" />
                  <div className="soundwave-bar" />
                </div>
              )}
            </div>

            {/* Standalone Tile Under Avatar: Hire Tejaswini */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '8px',
              }}
            >
              <button
                onClick={handleHireClick}
                style={{
                  maxWidth: '200px',
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: '14px',
                  background: 'var(--accent-gradient)',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px -4px rgba(37, 99, 235, 0.4)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  textAlign: 'center',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -4px rgba(37, 99, 235, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px -4px rgba(37, 99, 235, 0.4)';
                }}
              >
                Hire Tejaswini
              </button>
            </div>
          </div>

          {/* Interactive Chat Box */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '380px',
              background: 'var(--bg-secondary)',
              borderRadius: '18px',
              border: '1px solid var(--border-color)',
              overflow: 'hidden',
            }}
          >
            {/* Chat Header */}
            <div
              style={{
                padding: '14px 20px',
                borderBottom: '1px solid var(--border-color)',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bot size={18} color="var(--accent-primary)" />
                <span style={{ fontWeight: '700', fontSize: '0.92rem' }}>AI Conversation</span>
              </div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {speechEnabled ? 'Voice Output ON' : 'Voice Output OFF'}
              </span>
            </div>

            {/* Chat History */}
            <div
              style={{
                flexGrow: 1,
                padding: '16px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '82%',
                      padding: '10px 14px',
                      borderRadius:
                        msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                      background:
                        msg.sender === 'user' ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                      color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                      fontSize: '0.88rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Question Pills */}
            <div
              style={{
                padding: '8px 12px',
                display: 'flex',
                gap: '6px',
                overflowX: 'auto',
                borderTop: '1px solid var(--border-color)',
                background: 'var(--bg-tertiary)',
              }}
            >
              {presetQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendQuery(q)}
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--accent-primary)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendQuery();
              }}
              style={{
                padding: '10px 12px',
                display: 'flex',
                gap: '8px',
                background: 'var(--bg-secondary)',
              }}
            >
              <input
                type="text"
                placeholder="Ask AI Assistant a question..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                style={{
                  flexGrow: 1,
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'var(--accent-gradient)',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
