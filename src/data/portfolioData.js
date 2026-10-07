export const personalInfo = {
  name: "Shubham Murari",
  role: "B.Tech CSE Student",
  tagline: "B.Tech CSE Student • Technology & AI Enthusiast",
  college: "JECRC University",
  collegeLocation: "Jaipur, Rajasthan, India",
  location: "Jaipur, India",
  email: "shubhammurari85@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubham-murari-a1a1b1428/",
  github: "https://github.com",
  status: "B.Tech CSE • Available for Projects & Internships",
  aboutMe: "I am a B.Tech student interested in technology, artificial intelligence, web development and digital productivity. I am learning modern technologies and building practical projects.",
  stats: [
    { label: "Degree Focus", value: "B.Tech CSE" },
    { label: "University", value: "JECRC Univ." },
    { label: "Core Interests", value: "AI & Web Dev" },
    { label: "Location", value: "Jaipur, India" }
  ]
};

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering (CSE)",
    institution: "JECRC University",
    location: "Jaipur, Rajasthan, India",
    duration: "Currently Pursuing (First Year)",
    status: "Active Student",
    description: "Pursuing undergraduate studies in Computer Science and Engineering with a strong focus on computer science fundamentals, programming concepts, computational logic, and modern web technologies.",
    highlights: [
      "Foundational Programming in C and Python",
      "Modern Web Development (HTML, CSS, JavaScript)",
      "Problem Solving, Logic Building & Algorithmic Thinking",
      "Exploration of Artificial Intelligence and Modern AI Tools"
    ],
    badge: "Undergraduate Degree"
  }
];

export const skillsData = [
  {
    id: "c-lang",
    name: "C",
    category: "Languages",
    level: "Core Foundation",
    proficiency: 85,
    icon: "Code2",
    color: "from-blue-600 to-indigo-600",
    description: "Core programming fundamentals, syntax, pointers, memory management, and structured computational logic."
  },
  {
    id: "python",
    name: "Python",
    category: "Languages",
    level: "Core Foundation",
    proficiency: 88,
    icon: "Terminal",
    color: "from-cyan-500 to-blue-600",
    description: "Scripting, object-oriented concepts, algorithm implementation, data manipulation, and foundations for AI workflows."
  },
  {
    id: "html",
    name: "HTML",
    category: "Web Development",
    level: "Proficient",
    proficiency: 92,
    icon: "FileCode2",
    color: "from-orange-500 to-amber-500",
    description: "Semantic HTML5, clean document architecture, web standards, and accessible user interface structures."
  },
  {
    id: "css",
    name: "CSS",
    category: "Web Development",
    level: "Proficient",
    proficiency: 88,
    icon: "Palette",
    color: "from-sky-400 to-blue-500",
    description: "Responsive layouts, Flexbox, CSS Grid, Tailwind CSS, glassmorphism styling, and smooth transition animations."
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Web Development",
    level: "Intermediate",
    proficiency: 82,
    icon: "Code",
    color: "from-yellow-400 to-amber-500",
    description: "Modern ES6+ syntax, asynchronous programming (Promises, async/await), DOM interaction, and web interactivity."
  },
  {
    id: "web-dev",
    name: "Web Development",
    category: "Web Development",
    level: "Active Builder",
    proficiency: 86,
    icon: "Layout",
    color: "from-cyan-400 to-teal-500",
    description: "Building responsive, modern, recruiter-friendly web applications with clean component design and cross-device compatibility."
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    category: "AI & Innovation",
    level: "Enthusiast",
    proficiency: 85,
    icon: "BrainCircuit",
    color: "from-indigo-500 to-cyan-400",
    description: "Harnessing cutting-edge AI tools, LLMs, prompt engineering, and AI-assisted workflows to accelerate development and productivity."
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "Core Competencies",
    level: "Active Learner",
    proficiency: 84,
    icon: "Cpu",
    color: "from-emerald-400 to-teal-600",
    description: "Algorithmic thinking, analytical breakdown of engineering challenges, debugging, and continuous logic practice."
  }
];

export const skillCategories = [
  "All",
  "Languages",
  "Web Development",
  "AI & Innovation",
  "Core Competencies"
];

export const projectsData = [
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    category: "Web Development",
    badge: "Completed & Live",
    statusBadgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    shortDescription: "A responsive, modern personal portfolio website built with React, Vite, and Tailwind CSS showcasing skills, academic journey, practical projects, and contact channels.",
    fullDescription: "Engineered and deployed a modern developer portfolio adhering to premium UI/UX standards. Features glassmorphism cards, dynamic dark/light theme switching, responsive navigation, smooth scrolling, interactive project modals, and 1-click contact features.",
    features: [
      "Modern dark aesthetic with vibrant cyan/blue accents and subtle ambient glows",
      "Fully responsive design optimized for mobile, tablet, and desktop screens",
      "Dynamic dark and light theme switching with localStorage state persistence",
      "Interactive 1-click email copy tool and direct message mail launcher",
      "Clean modular codebase built with React, Vite, and Tailwind CSS"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    borderAccent: "hover:border-cyan-500/50",
    iconName: "Globe",
    demoUrl: "#",
    githubUrl: "https://github.com",
    isPlaceholder: false
  },
  {
    id: "python-problem-solving",
    title: "Python & C Problem Solving Lab",
    category: "Programming & Problem Solving",
    badge: "Active Coursework & Practice",
    statusBadgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    shortDescription: "A hands-on practical repository of algorithmic problem-solving exercises, data structure logic, and computational exercises developed during B.Tech studies.",
    fullDescription: "Dedicated practical project slot focusing on foundational computer science principles. Implements core data structures, algorithms, pointers, memory management in C, and automated utility scripts using Python.",
    features: [
      "Implementation of core algorithms and computational problem-solving patterns",
      "Clean modular code structure with detailed documentation and test cases",
      "Hands-on logic practice covering loops, arrays, pointers, functions, and file handling",
      "Ongoing repository updated regularly as coursework and competitive practice advance"
    ],
    technologies: ["Python", "C", "Algorithms", "Problem Solving"],
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    borderAccent: "hover:border-blue-500/50",
    iconName: "Terminal",
    demoUrl: "#",
    githubUrl: "https://github.com",
    isPlaceholder: true
  },
  {
    id: "web-ai-exploration",
    title: "Web App & AI Tools Integration",
    category: "Web Development & AI",
    badge: "In Development / Build Slot",
    statusBadgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    shortDescription: "An interactive web application exploring frontend user experiences combined with modern AI tools and digital productivity workflows.",
    fullDescription: "A hands-on practical project exploring the intersection of modern web interfaces and digital AI utilities. Designed to experiment with responsive layouts, modern JavaScript, and smart developer productivity aids.",
    features: [
      "Responsive user interface built with modern web technologies",
      "Integration of AI productivity tools and workflow optimizers",
      "Interactive component architecture with client-side state handling",
      "Clean UI styled with modern CSS and developer-first design patterns"
    ],
    technologies: ["Web Development", "JavaScript", "HTML5", "CSS3", "AI Tools"],
    gradient: "from-indigo-600/20 via-purple-600/10 to-transparent",
    borderAccent: "hover:border-indigo-500/50",
    iconName: "Bot",
    demoUrl: "#",
    githubUrl: "https://github.com",
    isPlaceholder: true
  }
];

export const achievementsData = [
  {
    category: "Academic Milestones",
    title: "B.Tech CSE Academic Journey",
    issuer: "JECRC University, Jaipur",
    date: "Current Program",
    badge: "Active Pursuit",
    icon: "GraduationCap",
    description: "Enrolled in Bachelor of Technology (Computer Science & Engineering) at JECRC University. Actively building computer science foundations through rigorous coursework and lab practicals."
  },
  {
    category: "Technical Milestones",
    title: "Core Programming & Logic Foundation",
    issuer: "Foundational Computing",
    date: "Active Practice",
    badge: "Technical Foundation",
    icon: "Medal",
    description: "Established core competencies in C and Python programming, structured problem-solving techniques, and computational algorithms."
  },
  {
    category: "Technical Milestones",
    title: "Modern Web Development Capabilities",
    issuer: "Hands-on Practical Builds",
    date: "Active Practice",
    badge: "Practical Build",
    icon: "Award",
    description: "Designed, developed, and deployed modern responsive web interfaces using semantic HTML, CSS styling, modern JavaScript, and React."
  },
  {
    category: "Target Roadmap",
    title: "Upcoming Hackathons & Certifications",
    issuer: "University & Collegiate Tech Events",
    date: "Upcoming Target",
    badge: "Planned Milestone",
    icon: "Trophy",
    description: "Preparing to participate in collegiate hackathons, collaborative coding sprints at JECRC University, and earning accredited technical certifications throughout B.Tech CSE."
  }
];

export const achievementCategories = [
  "All",
  "Academic Milestones",
  "Technical Milestones",
  "Target Roadmap"
];

