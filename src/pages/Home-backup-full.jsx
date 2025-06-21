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
import { portfolioContent } from '../data/portfolioContent';
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
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center',
    title: 'GoNews',
    subtitle: 'India-centric news aggregator mobile app built with Flutter and Go backend',
    handle: 'Flutter • Go • REST API',
    borderColor: '#0d00a4',
    gradient: 'linear-gradient(145deg, #0d00a4, #22007c)',
    url: 'https://github.com/AdityaNittala03/gonews'
  },
  {
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop&crop=center',
    title: 'Smart Finance Assistant',
    subtitle: 'AI-driven budgeting web app with ML categorization and D3.js visualizations',
    handle: 'Python • Flask • D3.js • PostgreSQL',
    borderColor: '#10B981',
    gradient: 'linear-gradient(210deg, #10B981, #22007c)',
    url: 'https://github.com/AdityaNittala03/Smart-Finance-Assistant---AI-Driven-Budgeting-Web-App'
  },
  {
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop&crop=center',
    title: 'CHIP8 Emulator',
    subtitle: 'Cross-platform Chip-8 emulator for classic 8-bit games built in C with SDL',
    handle: 'C • SDL • Systems Programming',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(165deg, #F59E0B, #22007c)',
    url: 'https://github.com/AdityaNittala03/CHIP8-Emulator'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center',
    title: 'FindMyTracker',
    subtitle: 'Location tracking automation tool for macOS FindMy app using Python',
    handle: 'Python • PyAutoGUI • Automation',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(225deg, #8B5CF6, #22007c)',
    url: 'https://github.com/AdityaNittala03/FindMyTracker'
  }
];

const Home = () => {
  const [isBootAnimationComplete, setIsBootAnimationComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSplashCursor, setShowSplashCursor] = useState(false);

  useEffect(() => {
    // Start content animation after boot animation
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    // Delay splash cursor to avoid performance conflicts during boot
    const splashTimer = setTimeout(() => {
      setShowSplashCursor(true);
    }, 2200);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(splashTimer);
    };
  }, []);

  const handleContactClick = () => {
    window.open('mailto:adityanittalajob@gmail.com', '_blank');
  };

  const bootAnimationVariants = {
    initial: {
      scale: 0,
      opacity: 0
    },
    center: {
      scale: 2.5,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: "easeOut"
      }
    },
    final: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.2
      }
    }
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
      {showSplashCursor && <SplashCursor />}
      
      {/* Boot Animation Overlay */}
      <motion.div 
        className="boot-animation-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: isBootAnimationComplete ? 0 : 1 }}
        transition={{ duration: 0.5, delay: isBootAnimationComplete ? 0 : 0 }}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a3e 50%, #2d1b69 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          pointerEvents: isBootAnimationComplete ? 'none' : 'all'
        }}
      >
        <motion.div
          className="boot-hello"
          variants={bootAnimationVariants}
          initial="initial"
          animate={isBootAnimationComplete ? "final" : "center"}
          onAnimationComplete={() => {
            if (!isBootAnimationComplete) {
              setTimeout(() => setIsBootAnimationComplete(true), 300);
            }
          }}
          style={{
            fontSize: '6rem',
            fontWeight: 900,
            background: 'linear-gradient(45deg, #ffffff, var(--vibrant-blue), var(--electric-indigo))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            filter: 'drop-shadow(0 0 30px rgba(13, 0, 164, 0.5))'
          }}
        >
          Hello!
        </motion.div>
      </motion.div>

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
            <div className="text-pressure-container">
              <TextPressure
                text="Hello!"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#0d00a4"
                minFontSize={120}
              />
            </div>
            <h2 className="subtitle">
              <DecryptedText 
                text={portfolioContent.hero.subtitle}
                animateOn="view"
                speed={80}
                maxIterations={15}
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
                speed={60}
                maxIterations={12}
                sequential={true}
                revealDirection="start"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                className="revealed-text"
                encryptedClassName="encrypted-text"
              />
            </h3>
            <p className="intro">
              <DecryptedText 
                text={portfolioContent.hero.description}
                animateOn="view"
                speed={40}
                maxIterations={10}
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
              avatarUrl="/aditya.png"
              showUserInfo={false}
              enableTilt={true}
            />
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
            />
          </div>
        </motion.section>
        </main>
        </motion.div>
      </ClickSpark>
    </>
  );
};

export default Home;