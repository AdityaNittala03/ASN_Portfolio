import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircularGallery from './CircularGallery';
import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="project-modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            ref={modalRef}
            className="project-modal-container"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <button 
              className="modal-close-button"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="modal-content">
              {project.id === 'gonews' ? (
                // GoNews layout: Left column (icons + video), Center column (screenshots + description)
                <>
                  <div className="modal-left">
                    <div className="modal-icons">
                      <h4>Project Links</h4>
                      <div className="tech-icons">
                        <a 
                          href="https://github.com/AdityaNittala03/gonews" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                            alt="GitHub" 
                            className="tech-icon"
                          />
                        </a>
                        <a 
                          href="https://www.linkedin.com/pulse/excited-share-my-latest-project-gonews-indias-premier-nittala-wqj1c/?trackingId=AE1XMbmdXY6yst79gLAecw%3D%3D" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                            alt="LinkedIn" 
                            className="tech-icon"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="modal-carousel">
                      <h4>Demo Video</h4>
                      <div className="carousel-content">
                        {project.videoUrl ? (
                          <video
                            className="carousel-video"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                          >
                            <source src={project.videoUrl} type="video/mp4" />
                            <source src={project.videoUrl} type="video/mov" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <span>Video Player</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="modal-center">
                    <div className="modal-video-player">
                      <h4>Screenshots</h4>
                      <div className="screenshots-container">
                        {project.screenshots?.length > 0 ? (
                          <CircularGallery 
                            items={project.screenshots.map((screenshot, index) => ({
                              image: screenshot,
                              text: `Screen ${index + 1}`
                            }))}
                            bend={2}
                            textColor="#ffffff"
                            borderRadius={0.08}
                            font="bold 16px Figtree"
                            aspectRatio="9:16"
                          />
                        ) : (
                          <div className="screenshots-placeholder">
                            <span>Screenshots</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="modal-description">
                      <div className="project-header">
                        <h3>{project.title}</h3>
                        <p className="project-type">{project.handle}</p>
                      </div>
                      <h4>Description</h4>
                      <p>{project.description || project.subtitle}</p>
                      {project.features && (
                        <div className="features-container">
                          {Array.isArray(project.features) && typeof project.features[0] === 'object' ? (
                            // New structured format
                            project.features.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="feature-section">
                                <h5 className="feature-category">{section.category}</h5>
                                <ul className="feature-list">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            // Legacy flat array format
                            <ul className="feature-list">
                              {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : project.id === 'chip8-emulator' ? (
                // CHIP8 Emulator layout: Left video demos, Right project info
                <div className="modal-layout-3">
                  <div className="modal-left-videos">
                    <div className="modal-main-video">
                      <h4>Main Demo</h4>
                      <div className="video-content">
                        {project.videoUrl ? (
                          <video
                            className="main-demo-video"
                            controls
                            muted
                            loop
                            playsInline
                            onError={(e) => console.error('Main video error:', e.target.error)}
                            onLoadStart={() => console.log('Main video loading:', project.videoUrl)}
                          >
                            <source src={project.videoUrl} type="video/quicktime" />
                            <source src={project.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <span>Demo Video</span>
                        )}
                      </div>
                    </div>
                    <div className="modal-secondary-video">
                      <h4>Gameplay Demo</h4>
                      <div className="video-content">
                        {project.screenshots?.[0] ? (
                          <video
                            className="secondary-demo-video"
                            controls
                            muted
                            loop
                            playsInline
                            onError={(e) => console.error('Secondary video error:', e.target.error)}
                            onLoadStart={() => console.log('Secondary video loading:', project.screenshots[0])}
                          >
                            <source src={project.screenshots[0]} type="video/quicktime" />
                            <source src={project.screenshots[0]} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <span>Gameplay Video</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="modal-right-info">
                    <div className="modal-project-header">
                      <h3>{project.title}</h3>
                      <p className="project-type">{project.handle}</p>
                    </div>
                    <div className="modal-project-links">
                      <h4>Project Links</h4>
                      <div className="tech-icons-horizontal">
                        <a 
                          href={project.url || "#"} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                            alt="GitHub" 
                            className="tech-icon"
                          />
                        </a>
                        <a 
                          href="https://www.linkedin.com/posts/adityanittala03_programming-emulation-c-activity-7331362243399360512-XJkP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACw0zl8B82ICCZ8r9byDcqOpaooEUfPrpHU" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                            alt="LinkedIn" 
                            className="tech-icon"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="modal-description-large">
                      <h4>Description</h4>
                      <p>{project.description || project.subtitle}</p>
                      {project.features && (
                        <div className="features-container">
                          {Array.isArray(project.features) && typeof project.features[0] === 'object' ? (
                            // Structured format
                            project.features.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="feature-section">
                                <h5 className="feature-category">{section.category}</h5>
                                <ul className="feature-list">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            // Legacy flat array format
                            <ul className="feature-list">
                              {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : project.id === 'findmytracker' ? (
                // FindMyTracker layout: Left screenshot, Right project info
                <div className="modal-layout-4">
                  <div className="modal-left-screenshot">
                    <div className="modal-findmy-screenshot">
                      <h4>Application Interface</h4>
                      <div className="screenshot-content">
                        {project.screenshots?.[0] ? (
                          <img
                            src={project.screenshots[0]}
                            alt="FindMyTracker Interface"
                            className="findmy-screenshot-img"
                          />
                        ) : (
                          <span>Screenshot</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="modal-right-content">
                    <div className="modal-project-header">
                      <h3>{project.title}</h3>
                      <p className="project-type">{project.handle}</p>
                    </div>
                    <div className="modal-project-links">
                      <h4>Project Links</h4>
                      <div className="tech-icons-horizontal">
                        <a 
                          href="https://github.com/AdityaNittala03/FindMyTracker" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                            alt="GitHub" 
                            className="tech-icon"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="modal-description-scrollable">
                      <h4>Description</h4>
                      <p>{project.description || project.subtitle}</p>
                      {project.features && (
                        <div className="features-container">
                          {Array.isArray(project.features) && typeof project.features[0] === 'object' ? (
                            // Structured format
                            project.features.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="feature-section">
                                <h5 className="feature-category">{section.category}</h5>
                                <ul className="feature-list">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            // Legacy flat array format
                            <ul className="feature-list">
                              {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                // Smart Finance Assistant layout: Left screenshots, Right project info
                <div className="modal-layout-2">
                  <div className="modal-left-side">
                    <div className="modal-left-screenshots">
                      <h4>Project Screenshots</h4>
                      <div className="carousel-content">
                        {project.screenshots?.length > 0 ? (
                          <CircularGallery 
                            items={project.screenshots.map((screenshot, index) => ({
                              image: screenshot,
                              text: `Screen ${index + 1}`
                            }))}
                            bend={2}
                            textColor="#ffffff"
                            borderRadius={0}
                            font="bold 16px Figtree"
                            aspectRatio="16:9"
                          />
                        ) : (
                          <div className="screenshots-placeholder">
                            <span>Screenshots</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="modal-project-links">
                      <h4>Project Links</h4>
                      <div className="tech-icons-horizontal">
                        <a 
                          href={project.url || "#"} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                            alt="GitHub" 
                            className="tech-icon"
                          />
                        </a>
                        <a 
                          href="https://www.linkedin.com/pulse/from-manual-excel-sheets-ai-powered-financial-aditya-nittala-5ijzc" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-link"
                        >
                          <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                            alt="LinkedIn" 
                            className="tech-icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal-right-info">
                    <div className="modal-project-header">
                      <h3>{project.title}</h3>
                      <p className="project-type">{project.handle}</p>
                    </div>
                    <div className="modal-description-large">
                      <h4>Description</h4>
                      <p>{project.description || project.subtitle}</p>
                      {project.features && (
                        <div className="features-container">
                          {Array.isArray(project.features) ? (
                            <ul className="feature-list">
                              {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;