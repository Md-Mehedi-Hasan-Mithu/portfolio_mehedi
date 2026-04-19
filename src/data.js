export const data = {
  name: "MD Mehedi Hasan",
  role: "Software Engineer",
  tagline: "Full-Stack Developer & Problem Solver",
  email: "mdmehedi3799@gmail.com",
  phone: "+880 1786-949509",
  location: "Dhaka, Bangladesh",
  available: true,
  bio: [
    "Fresh CSE graduate from RUET with strong fundamentals in OOP, DSA, and System Design. I build fast, scalable, full-stack web applications.",
    "At TrustInnovation Ltd., I shipped a complete school management system — automating admissions, results, admit cards, and hiring pipelines end-to-end.",
    "My thesis compared ML models from scratch: a neural network I built hit 90% accuracy vs 68% for Logistic Regression — I like understanding *why* things work."
  ],
  social: {
    github: "https://github.com/",      // TODO: add your GitHub username
    linkedin: "https://linkedin.com/in/", // TODO: add your LinkedIn
    leetcode: "https://leetcode.com/u/Mehedi177/",
  },
  stats: [
    { num: "350+", label: "Problems Solved" },
    { num: "4+", label: "Projects Shipped" },
    { num: "6+", label: "Years Coding" },
  ],
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "Java", "C", "C++", "Python", "SQL"]
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "HTML5", "CSS3", "REST API", "OAuth2"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Prisma ORM", "Firebase", "JWT"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "NoSQL"]
    },
    {
      category: "CS Fundamentals",
      items: ["DSA", "OOP", "System Design", "Design Patterns", "OS"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code"]
    },
  ],
  competitive: [
    { platform: "LeetCode", count: "110+", desc: "Data Structures & SQL", link: "https://leetcode.com/u/Mehedi177/" },
    { platform: "UVa Online Judge", count: "160+", desc: "Algorithms & DS", link: "https://uhunt.onlinejudge.org/id/1700201" },
    { platform: "HackerRank", count: "100+", desc: "Java, DSA & SQL", link: "https://www.hackerrank.com/profile/mdmehedi3799" },
  ],
  projects: [
    {
      num: "01",
      title: "School Management System (EMS)",
      desc: "Complete full-stack EMS powering an entire school's operations — student admissions, BCS-style job circulars, automated roll numbers, admit cards, fee tracking, and merit list publishing.",
      tech: ["Node.js", "React.js", "PostgreSQL", "Prisma ORM"],
      live: "https://mismyn.edu.bd/",
      github: null,
      featured: true,
    },
    {
      num: "02",
      title: "Car Doctor",
      desc: "Car service booking platform with JWT-based auth, Google & GitHub OAuth2 login/signup/logout, and full booking management system.",
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "OAuth2"],
      live: null,
      github: null,
    },
    {
      num: "03",
      title: "Product Inventory Software",
      desc: "Desktop-grade Java + MySQL software with full CRUD operations for efficient product management. Solid architecture with OOP principles.",
      tech: ["Java", "MySQL", "OOP"],
      live: null,
      github: null,
    },
    {
      num: "04",
      title: "ML Thesis: Neural Network vs Logistic Regression",
      desc: "Python implementation comparing two ML approaches from scratch. Neural network achieved 90% accuracy vs 68% for Logistic Regression on complex datasets.",
      tech: ["Python", "Machine Learning", "Neural Networks"],
      live: null,
      github: null,
    },
  ],
  awards: [
    { year: "2023", icon: "🏆", title: "Champion — Web Dev Idea Contest", detail: "RUET CSE FEST 2023" },
    { year: "2023", icon: "🥇", title: "31st — University Intra Programming Contest", detail: "Among 200+ participants" },
    { year: "2022", icon: "🏆", title: "Champion — Game Dev Idea Contest (NCPC)", detail: "National level competition" },
    { year: "2022", icon: "🥇", title: "Top 50 — RUET CSE Programming Contest", detail: "Among 300+ participants" },
    { year: "2015", icon: "🎓", title: "General Grade Scholarship — SSC", detail: "Government merit scholarship" },
    { year: "2012", icon: "🎓", title: "General Grade Scholarship — JSC", detail: "Government merit scholarship" },
    { year: "2009", icon: "🎓", title: "Talentpool Scholarship — PSC", detail: "National primary scholarship" },
  ],
  experience: [
    {
      role: "Software Developer",
      company: "TrustInnovation Ltd.",
      period: "Oct 2025 – Present",
      location: "CSD, Cantonment, Dhaka",
      points: [
        "Built full-stack School Management System used in production",
        "Automated admissions, circular publishing, and results workflows",
        "Implemented fee payment tracking and admit card generation",
      ]
    }
  ],
  education: {
    degree: "BSc in Computer Science & Engineering",
    university: "Rajshahi University of Engineering & Technology (RUET)",
    period: "2018 – 2024",
    location: "Rajshahi, Bangladesh"
  }
};