export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  link?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  images?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Karan Chauhan",
    title: "Software Engineer",
    summary:
      "Software Engineer (2.5+ years) with expertise in building scalable systems and SaaS platforms. Skilled in end-to-end development, system design, and automation, with a proven track record of improving performance, reliability, and business efficiency.",
    contacts: {
      phone: "+91-8587852016",
      email: "kc80465@gmail.com",
      linkedin: "https://linkedin.com/in/karan-chauhan-25568620a/",
      github: "https://github.com/Karan8501",
    },
  },
  experience: [
    {
      company: "Business Operating Software",
      role: "SDE - II",
      duration: "Sept 2024 -- Present",
      location: "Noida, India",
      link: "https://www.buopso.com",
      description: [
        "Building scalable distributed microservices and event-driven architectures using Kafka.",
        "Designed multi-tenant systems with robust security (JWT, single-session).",
        "Optimized performance with Redis caching and real-time WebSocket features.",
      ],
    },
    {
      company: "Isource Technologies",
      role: "MERN Stack Developer",
      duration: "Nov 2023 -- Sept 2024",
      location: "Delhi, India",
      link: "https://isourse.com/",
      description: [
        "Developed core logistics integrations (UniCommerce-XpressBees) and internal tools (HRM, TMS).",
        "Implemented micro-frontend architecture for improved scalability.",
        "Delivered official websites for XpressBees and OutMazed with custom CMS.",
      ],
    },
    {
      company: "Freelance & Open Source",
      role: "Full Stack Developer",
      duration: "May 2023 -- Nov 2023",
      location: "Remote",
      description: [
        "Built responsive web applications for various clients using React and Next.js.",
        "Contributed to open source projects and refined core system design skills.",
        "Focus on performance optimization and modern UI/UX principles.",
      ],
    },
    {
      company: "Netaji Subhas University of Technology",
      role: "B.Tech in ECE",
      duration: "Aug 2019 -- May 2023",
      location: "Delhi, India",
      description: [
        "Graduated with a focus on Electronics and Communication Engineering.",
        "Built strong foundation in Data Structures, Algorithms, and DBMS.",
        "Active member of tech societies and coding clubs.",
      ],
    },
  ],
  projects: [
    {
      title: "XpressBees Website",
      description: "Official website for XpressBees with a custom CMS. Handles millions of visitors and tracks logistics in real-time.",
      stack: ["React", "Next.js", "Tailwind CSS", "CMS"],
      link: "https://www.xpressbees.com",
      images: [
        "/images/xb/image1.png"
      ]
    },
    {
      title: "OutMazed Website",
      description: "Official OutMazed website featuring a high-performance responsive design and a fully integrated custom Content Management System.",
      stack: ["React", "Responsive Design", "CMS", "Node.js"],
      link: "https://www.outmazed.com",
      images: [
        "/images/outmazed/image1.png"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard for product management.",
      stack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
      link: "https://example-ecommerce.com",
      images: [
        "/images/crm/image1.png"
      ]
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Redux",
        "GraphQL",
        "Material UI",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Python REST APIs",
        "MongoDB", 
        "PostgreSQL", 
        "MySQL",
        "SQL",
        "WebSockets", 
        "Kafka", 
        "RabbitMQ",
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "AWS (EC2, S3, Lambda)", 
        "Docker", 
        "Nginx", 
        "Jenkins", 
        "CI/CD",
        "Git",
        "GitHub",
      ],
    },
    {
      category: "Architecture",
      skills: [
        "System Design",
        "Event-Driven Architecture",
        "OOP",
        "DSA",
        "DBMS",
        "C++",
      ],
    },
  ],
  education: [
    {
      institution: "Netaji Subhas University of Technology (NSUT), East Campus",
      degree: "Bachelor of Technology in ECE",
      duration: "Aug 2019 -- May 2023",
      location: "Delhi, India",
    },
  ],
};
