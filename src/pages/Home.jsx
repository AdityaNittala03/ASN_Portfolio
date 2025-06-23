import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from '../components/animations/Particles';
import TextPressure from '../components/animations/TextPressure';
import DecryptedText from '../components/animations/DecryptedText';
import ClickSpark from '../components/animations/ClickSpark';
import SplashCursor from '../components/animations/SplashCursor';
import ProfileCard from '../components/ui/ProfileCard';
import FlowingMenu from '../components/ui/FlowingMenu';
import ChromaGrid from '../components/ui/ChromaGrid';
import ProjectModal from '../components/ui/ProjectModal';
import GlareHover from '../components/ui/GlareHover';
import StarBorder from '../components/ui/StarBorder';
import { portfolioContent } from '../data/portfolioContent';
import getAssetPath from '../utils/assets';
import './Home.css';

// Skills data with categories and icons
const skillsData = [
  {
    link: '#',
    text: 'Languages',
    icons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'
    ]
  },
  {
    link: '#',
    text: 'Frontend',
    icons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    ]
  },
  {
    link: '#',
    text: 'Backend',
    icons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gin/gin-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
    ]
  },
  {
    link: '#',
    text: 'Database & Cloud',
    icons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    ]
  },
  {
    link: '#',
    text: 'AI & ML',
    icons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg'
    ]
  }
];

// Project data formatted for ChromaGrid
const projects = [
  {
    id: 'gonews',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop&crop=center',
    title: 'GoNews',
    subtitle: 'India-centric news aggregator mobile app built with Flutter and Go backend',
    handle: 'Flutter • Go • REST API',
    borderColor: '#0d00a4',
    gradient: 'linear-gradient(145deg, #0d00a4, #22007c)',
    url: 'https://github.com/AdityaNittala03/gonews',
    videoUrl: null, // Video removed due to GitHub file size limits
    description: 'Full-stack Flutter + Go application featuring advanced news aggregation with India-first content strategy. Built with enterprise-grade architecture demonstrating clean code principles and high-performance system design.',
    features: [
      {
        category: 'Backend Stack',
        items: ['Go 1.21 + Fiber framework', 'PostgreSQL 15+ with full-text search', 'Redis 7+ caching', 'JWT authentication']
      },
      {
        category: 'Advanced Algorithms',
        items: ['4-layer deduplication engine using Levenshtein distance + SHA256 hashing', 'Sub-2 second performance optimization', 'Dynamic TTL caching (15min-4hr)', 'Performance scoring algorithm (0-100)']
      },
      {
        category: 'Core Features',
        items: ['Multi-dimensional filtering (15+ types)', 'Concurrent API integration (NewsData.io, GNews, RapidAPI)', 'IST timezone optimization', 'Market hours detection']
      },
      {
        category: 'Architecture',
        items: ['Clean architecture with dependency injection', 'Background monitoring & auto-optimization', 'Enterprise-level system design patterns']
      }
    ],
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
    ],
    screenshots: [
      getAssetPath('assets/gonews/Home_all.jpg'),
      getAssetPath('assets/gonews/Home_topStories.jpg'),
      getAssetPath('assets/gonews/Search.jpg'),
      getAssetPath('assets/gonews/Profile_1.jpg')
    ]
  },
  {
    id: 'smart-finance-assistant',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center',
    title: 'Smart Finance Assistant',
    subtitle: 'AI-driven budgeting web app with ML categorization and D3.js visualizations',
    handle: 'Python • Flask • D3.js • PostgreSQL',
    borderColor: '#10B981',
    gradient: 'linear-gradient(210deg, #10B981, #22007c)',
    url: 'https://github.com/AdityaNittala03/Smart-Finance-Assistant---AI-Driven-Budgeting-Web-App',
    description: 'Comprehensive AI-powered financial management system featuring machine learning models for intelligent transaction categorization, spending predictions, and budget recommendations with interactive visualizations.',
    features: [
      'Developed comprehensive AI-powered financial management system using Python Flask backend, PostgreSQL database, and Vanilla JavaScript frontend with D3.js visualizations',
      'Implemented 4 machine learning models (scikit-learn, TensorFlow) achieving 85%+ accuracy for transaction categorization, spending predictions, and budget recommendations',
      'Built RESTful API with JWT authentication, Redis caching, and real-time data processing',
      'Created responsive PWA with interactive charts optimized for Indian Rupees',
      'Containerized with Docker, featuring continuous learning pipeline and anomaly detection for enhanced financial insights'
    ],
    screenshots: [
      getAssetPath('assets/Finance_Tracker/FT_1.png'),
      getAssetPath('assets/Finance_Tracker/FT_2.png'),
      getAssetPath('assets/Finance_Tracker/FT_3.png'),
      getAssetPath('assets/Finance_Tracker/FT_4.png'),
      getAssetPath('assets/Finance_Tracker/FT_5.png'),
      getAssetPath('assets/Finance_Tracker/FT_6.png'),
      getAssetPath('assets/Finance_Tracker/FT_7.png'),
      getAssetPath('assets/Finance_Tracker/FT_8.png'),
      getAssetPath('assets/Finance_Tracker/FT_9.png')
    ]
  },
  {
    id: 'chip8-emulator',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop&crop=center',
    title: 'CHIP8 Emulator',
    subtitle: 'Cross-platform Chip-8 emulator for classic 8-bit games built in C with SDL',
    handle: 'C • SDL • Systems Programming',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(165deg, #F59E0B, #22007c)',
    url: 'https://github.com/AdityaNittala03/CHIP8-Emulator',
    description: 'A fully functional CHIP-8 emulator implementing complete CPU architecture from scratch with real-time graphics rendering and interactive debugging capabilities.',
    features: [
      {
        category: 'Core Architecture',
        items: ['Complete 4KB memory implementation', 'Accurate instruction set emulation', '16 8-bit registers + index register', 'Program counter and stack pointer management']
      },
      {
        category: 'Graphics & Display',
        items: ['64x32 monochrome display rendering', 'Sprite drawing with XOR logic', 'Real-time 60fps graphics output', 'SDL2-based cross-platform rendering']
      },
      {
        category: 'Input & Audio',
        items: ['16-key hexadecimal keypad mapping', 'Configurable key bindings', 'Buzzer sound synthesis', 'Real-time input processing']
      },
      {
        category: 'Development Features',
        items: ['Interactive debugger with breakpoints', 'Step-by-step execution mode', 'Memory and register inspection', 'ROM loading and validation']
      }
    ],
    videoUrl: null, // Video removed due to GitHub file size limits
    screenshots: [
      getAssetPath('assets/Chip8/C3.png')
    ]
  },
  {
    id: 'findmytracker',
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=500&h=300&fit=crop&crop=center',
    title: 'FindMyTracker',
    subtitle: 'Location tracking automation tool for macOS FindMy app using Python',
    handle: 'Python • PyAutoGUI • Automation',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(225deg, #8B5CF6, #22007c)',
    url: 'https://github.com/AdityaNittala03/FindMyTracker',
    description: 'Automated location tracking system for maintaining historical location records with intelligent screenshot capture and file organization.',
    features: [
      {
        category: 'Automation Features',
        items: ['Automated screenshot capture at configurable intervals', 'Intelligent duplicate detection and removal', 'Background process monitoring', 'Cross-platform compatibility testing']
      },
      {
        category: 'File Management',
        items: ['Organized date-based filing system', 'Automatic folder creation by date', 'Compressed storage options', 'Backup and recovery mechanisms']
      },
      {
        category: 'Monitoring & Logging',
        items: ['Comprehensive logging system with rotation', 'Real-time status monitoring', 'Error handling and recovery', 'Performance metrics tracking']
      },
      {
        category: 'Configuration',
        items: ['Configurable capture intervals', 'Customizable file naming patterns', 'Region-specific capture areas', 'Quality and compression settings']
      }
    ],
    screenshots: [
      getAssetPath('assets/FindMy/Findmy.png')
    ]
  }
];

const Home = () => {
  // Boot animation disabled - content shows immediately
  const [showContent, setShowContent] = useState(true);
  const [showSplashCursor, setShowSplashCursor] = useState(true);
  const [splashCursorEnabled, setSplashCursorEnabled] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    window.open('mailto:adityanittalajob@gmail.com', '_blank');
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {showSplashCursor && splashCursorEnabled && <SplashCursor />}
      
      {/* Fluid Toggle Switch */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backdropFilter: 'blur(10px)',
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '12px 16px',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <span style={{
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '600',
          userSelect: 'none'
        }}>
          🌊 Fluid
        </span>
        <div
          onClick={() => setSplashCursorEnabled(!splashCursorEnabled)}
          style={{
            width: '50px',
            height: '26px',
            background: splashCursorEnabled 
              ? 'linear-gradient(45deg, #0d00a4, #22007c)' 
              : 'rgba(255, 255, 255, 0.2)',
            borderRadius: '13px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <div style={{
            width: '20px',
            height: '20px',
            background: '#ffffff',
            borderRadius: '50%',
            position: 'absolute',
            top: '2px',
            left: splashCursorEnabled ? '26px' : '2px',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
          }} />
        </div>
      </div>
      
      {/* Boot Animation DISABLED */}
      
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={12}
        sparkRadius={20}
        sparkCount={8}
        duration={500}
        easing="ease-out"
        extraScale={1.2}
      >
        <motion.div 
          className="home"
          variants={contentVariants}
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
        >
        <Particles
          particleColors={['#ffffff', '#0d00a4', '#22007c']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={false}
          disableRotation={false}
          sizeRandomness={1}
          cameraDistance={15}
        />
        
        <main className="home-content">
        <motion.section className="hero-section" variants={contentVariants}>
          <div className="hero-left">
            <div className="text-pressure-container" style={{ position: 'relative', height: '200px' }}>
              <TextPressure
                text="Hello!"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={60}
              />
            </div>
            <h2 className="subtitle">
              <DecryptedText 
                text="I'm Aditya Nittala"
                animateOn="view"
                speed={50}
                maxIterations={8}
                sequential={true}
                revealDirection="start"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                className="revealed-text"
                encryptedClassName="encrypted-text"
              />
            </h2>
            <h3 className="tagline">
              <DecryptedText 
                text="AI & FullStack Developer & Systems Architect"
                animateOn="view"
                speed={40}
                maxIterations={6}
                sequential={true}
                revealDirection="start"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                className="revealed-text"
                encryptedClassName="encrypted-text"
              />
            </h3>
            <p className="intro">
              <DecryptedText 
                text="Crafting scalable solutions from low-level systems to modern web applications. Passionate about distributed architectures, performance optimization, and building products that make a difference."
                animateOn="view"
                speed={30}
                maxIterations={5}
                sequential={true}
                revealDirection="start"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                className="revealed-text"
                encryptedClassName="encrypted-text"
              />
            </p>
          </div>
          
          <div className="hero-right">
            <ProfileCard
              name={portfolioContent.hero.subtitle.replace("I'm ", "")}
              title="AI & FullStack Developer"
              handle="adityanittala03"
              status="Available for Opportunities"
              avatarUrl={getAssetPath('aditya.png')}
              showUserInfo={false}
              enableTilt={true}
            />
          </div>
        </motion.section>

        <motion.section className="resume-section" variants={contentVariants}>
          <h3 className="section-title">Download my Resume</h3>
          <div className="resume-container">
            <GlareHover
              width="100%"
              height="auto"
              background="linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))"
              borderRadius="20px"
              borderColor="rgba(255, 255, 255, 0.2)"
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
              className="resume-glare-wrapper"
            >
              <div className="resume-card">
                <div className="resume-icon">
                  📄
                </div>
                <div className="resume-content">
                  <h4>Professional Resume</h4>
                  <p>Get my latest resume with detailed experience, skills, and projects</p>
                  <StarBorder
                    as="a"
                    href={getAssetPath('ADITYA_NITTALA_RESUME.pdf')} 
                    download="ADITYA_NITTALA_RESUME.pdf"
                    className="resume-download-btn"
                    color="magenta"
                    speed="6.5s"
                    thickness={4}
                  >
                    Download Resume
                  </StarBorder>
                </div>
              </div>
            </GlareHover>
          </div>
        </motion.section>

        <motion.section className="skills-section" variants={contentVariants}>
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-container">
            <FlowingMenu items={skillsData} />
          </div>
        </motion.section>

        <motion.section className="projects-section" variants={contentVariants}>
          <h3 className="section-title">Featured Projects</h3>
          <div className="projects-container">
            <ChromaGrid 
              items={projects}
              radius={300}
              columns={2}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
              onItemClick={handleProjectClick}
            />
          </div>
        </motion.section>
        </main>

        <motion.footer className="footer-section" variants={contentVariants}>
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <h4>Aditya Nittala</h4>
                <p>AI & FullStack Developer</p>
              </div>
              <div className="footer-links">
                <div className="footer-column">
                  <h5>Connect</h5>
                  <a href="mailto:adityanittalajob@gmail.com">
                    Email
                  </a>
                  <a href="https://www.linkedin.com/in/adityanittala03/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="https://github.com/AdityaNittala03" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
                <div className="footer-column">
                  <h5>Projects</h5>
                  <span onClick={() => handleProjectClick(projects[0])}>GoNews</span>
                  <span onClick={() => handleProjectClick(projects[1])}>Smart Finance Assistant</span>
                  <span onClick={() => handleProjectClick(projects[2])}>CHIP8 Emulator</span>
                </div>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom">
              <p className="footer-copyright">
                © {new Date().getFullYear()} Aditya Nittala. All rights reserved.
              </p>
              <p className="footer-credits">
                All creative aspects, design concepts, and technical implementations are original works by Aditya Nittala. 
                This portfolio showcases my personal projects and professional capabilities.
              </p>
            </div>
          </div>
        </motion.footer>
        </motion.div>
      </ClickSpark>
      
      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        project={selectedProject}
      />
    </>
  );
};

export default Home;