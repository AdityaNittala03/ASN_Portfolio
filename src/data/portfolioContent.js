// Portfolio Content Data
// This file contains all the text content for Aditya Nittala's portfolio website

export const portfolioContent = {
  // Hero Section Content
  hero: {
    mainHeading: "Hello", // With Text Pressure effect
    subtitle: "I'm Aditya Nittala", // With Shiny Text
    tagline: "AI & FullStack Developer & Systems Architect", // With Shiny Text
    description: "Crafting scalable solutions from low-level systems to modern web applications. Passionate about distributed architectures, performance optimization, and building products that make a difference."
  },

  // About Section (Extended for 3D Model area)
  about: {
    professionalSummary: "Final year Computer Science student at Symbiosis Institute of Technology with a proven track record in full-stack development, systems programming, and AI/ML implementations. Experienced in building production-ready applications serving 100+ users, optimizing performance by 60%, and reducing operational costs by ₹2,00,000+ through innovative solutions.",
    quickStats: [
      { label: "Years of Development Experience", value: "3+" },
      { label: "Projects Delivered", value: "10+" },
      { label: "Research Papers Published", value: "3" },
      { label: "Lighthouse Score Achieved", value: "92/100" }
    ]
  },

  // Projects Section Content
  projects: [
    {
      id: "gonews",
      previewCard: {
        title: "GoNews",
        type: "Mobile Application",
        techStack: ["Flutter", "Go", "PostgreSQL", "Redis"],
        description: "India-first news aggregator with advanced deduplication algorithms"
      },
      fullPage: {
        heroStatement: "Revolutionizing news consumption with intelligent aggregation",
        problem: "Information overload and duplicate news across multiple sources",
        solution: "Built a concurrent news aggregator with 4-layer deduplication engine achieving <2s performance",
        keyFeatures: [
          "Advanced deduplication using Levenshtein distance + SHA256",
          "Multi-dimensional filtering (15+ types)",
          "Dynamic TTL caching (15min-4hr)",
          "Performance scoring algorithm (0-100)",
          "IST timezone optimization",
          "Concurrent API integration"
        ],
        technicalHighlights: [
          "Clean architecture with dependency injection",
          "Background monitoring and auto-optimization",
          "Enterprise-level system design patterns"
        ]
      }
    },
    {
      id: "smart-finance-assistant",
      previewCard: {
        title: "AI Finance Assistant",
        type: "Web Application",
        techStack: ["Python", "Flask", "JavaScript", "D3.js", "PostgreSQL"],
        description: "AI-powered financial management with 85%+ prediction accuracy"
      },
      fullPage: {
        heroStatement: "Empowering financial decisions with machine learning",
        problem: "Lack of personalized financial insights for Indian users",
        solution: "Comprehensive financial management system with ML-driven insights",
        keyFeatures: [
          "4 ML models for transaction categorization",
          "Real-time spending predictions",
          "Interactive D3.js visualizations",
          "JWT authentication with Redis caching",
          "Progressive Web App (PWA) support",
          "Indian Rupee optimization"
        ],
        impactMetrics: [
          "85%+ accuracy in transaction categorization",
          "Continuous learning pipeline",
          "Anomaly detection for fraud prevention"
        ]
      }
    },
    {
      id: "chip8-emulator",
      previewCard: {
        title: "CHIP-8 Emulator",
        type: "Systems Programming",
        techStack: ["C", "SDL2", "CMake"],
        description: "Low-level emulator implementing complete CPU architecture"
      },
      fullPage: {
        heroStatement: "Bringing retro gaming to life through systems programming",
        challenge: "Emulating a complete computer system from scratch",
        solution: "Built a fully functional CHIP-8 emulator with 35 opcodes",
        technicalFeatures: [
          "Complete CPU architecture implementation",
          "Real-time graphics rendering (60fps)",
          "Interactive debugger with breakpoints",
          "Audio synthesis with waveform generation",
          "Save/load state functionality",
          "Cross-platform compatibility"
        ],
        engineeringHighlights: [
          "Bit manipulation for instruction decoding",
          "Pointer arithmetic for memory operations",
          "Mathematical timing calculations"
        ]
      }
    },
    {
      id: "findmytracker",
      previewCard: {
        title: "FindMyTracker",
        type: "Automation Tool",
        techStack: ["Python", "PyAutoGUI"],
        description: "Location tracking automation for macOS FindMy app"
      },
      fullPage: {
        heroStatement: "Automating location history with precision",
        useCase: "Maintaining location records for safety and tracking",
        features: [
          "Automated screenshot capture",
          "Organized date-based filing",
          "Comprehensive logging system",
          "Configurable intervals",
          "Virtual environment setup"
        ]
      }
    }
  ],

  // Experience Section Content
  experience: [
    {
      title: "Full-Stack Web Developer Intern",
      company: "ICEICO Technologies",
      duration: "Jan 2025 - Apr 2025",
      description: "Led the development of Migradent Clinic Web Platform, transforming manual processes into a digital ecosystem. Reduced administrative inefficiencies by 30% and achieved a 92/100 Lighthouse score while maintaining HIPAA compliance.",
      keyAchievements: [
        "Optimized page load times from 3.8s to 1.6s",
        "Enabled 100+ virtual consultations",
        "Reduced patient onboarding time by 40%"
      ]
    },
    {
      title: "Technical Consultant",
      company: "Innovative Hydrocarbons",
      duration: "Sept 2022 - Nov 2022",
      description: "Developed Python-based monitoring system for LPG station management, integrating biometric tracking and IoT sensors. Achieved monthly cost savings of ₹2,00,000 through fraud prevention and operational optimization."
    },
    {
      title: "Technical Consultant",
      company: "Plastomatic Industries",
      duration: "June 2022 - Aug 2022",
      description: "Built platform-based inventory management system with real-time monitoring. Increased customer feedback submissions from 10% to 40% through user-centric design."
    }
  ],

  // Skills Section Content
  skills: {
    tagline: "Proficient in building end-to-end solutions across the stack",
    categories: [
      {
        name: "Languages",
        items: ["Python", "Go", "C/C++", "JavaScript", "Dart", "SQL"]
      },
      {
        name: "Frontend",
        items: ["Flutter", "HTML5", "CSS3", "TailwindCSS"]
      },
      {
        name: "Backend",
        items: ["Flask", "Fiber", "RESTful APIs"]
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MySQL", "Redis"]
      },
      {
        name: "AI/ML",
        items: ["TensorFlow", "PyTorch", "Scikit-learn"]
      },
      {
        name: "DevOps",
        items: ["Docker", "AWS", "CI/CD"]
      },
      {
        name: "Architecture",
        items: ["Microservices", "Event-Driven", "Distributed Systems"]
      }
    ]
  },

  // Achievements & Publications
  achievements: {
    awards: [
      { title: "1st Prize", event: "Hack-O-Week 1.2 (Google DSC)", icon: "🏆" },
      { title: "2nd Prize", event: "A Code Quiz (Technical Programming)", icon: "🥈" },
      { title: "Selected", event: "MIT iQuHACK 2023", icon: "🎯" },
      { title: "Team Captain", event: "2nd Position, Skill-O-Mania Basketball", icon: "🏀" }
    ],
    publications: [
      { title: "Anemia Detection Using Deep Learning", journal: "Automatika Journal (Q2)" },
      { title: "Optimizing Neural Radiance Fields", journal: "EEI Journal" },
      { title: "Blood Sample Analysis with ML", journal: "IEEE Conference" }
    ],
    leadership: [
      {
        role: "President, Student's Representative Council (2022-23)",
        description: "Led 60+ members across 7 clubs, organizing campus-wide events"
      },
      {
        role: "Flutter Workshop Organizer",
        description: "Trained 140 participants in mobile app development"
      }
    ]
  },

  // Footer/Contact Section
  contact: {
    heading: "Let's Build Something Amazing Together",
    subheading: "Currently seeking full-time opportunities in software engineering and systems design",
    details: {
      email: "adityanittalajob@gmail.com",
      linkedin: "/in/adityanittala03",
      github: "/AdityaNittala03",
      phone: "+91 6309966539"
    },
    quickLinks: [
      "Download Resume",
      "View GitHub Stats",
      "Read Publications"
    ]
  }
};

export default portfolioContent;