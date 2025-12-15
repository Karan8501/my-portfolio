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
      description: "Official website for XpressBees with a custom CMS.",
      stack: ["React", "CMS", "Frontend"],
      link: "https://www.xpressbees.com",
    },
    {
      title: "OutMazed Website",
      description: "Official OutMazed website with responsive design and full CMS.",
      stack: ["React", "Responsive Design", "CMS"],
      link: "https://www.outmazed.com",
    },
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Redux",
        "Node.js",
        "Express.js",
        "Python REST APIs",
        "GraphQL",
        "SQL",
        "C++",
        "Material UI",
        "Bootstrap",
      ],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      category: "Cloud/DevOps",
      skills: ["AWS (EC2, S3, Lambda)", "Docker", "Nginx", "Jenkins", "CI/CD"],
    },
    {
      category: "Messaging/Queues",
      skills: ["WebSockets", "Kafka", "RabbitMQ"],
    },
    {
      category: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Postman",
        "Jira",
        "Confluence",
        "Azure DevOps",
      ],
    },
    {
      category: "Core Concepts",
      skills: [
        "System Design",
        "Event-Driven Architecture",
        "OOP",
        "DSA",
        "DBMS",
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
