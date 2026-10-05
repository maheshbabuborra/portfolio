// Edit this file to make the template yours.
// Everything about your identity, links, SEO, and navigation lives here.
// Leave a field blank ("") to hide the UI that depends on it.

export const siteConfig = {
  name: "Mahesh Babu",
  role: "CSE (AI & ML) Student",
  tagline: "Building intelligent solutions for real-world problems.",

  bio: "I am a 3rd-year BTech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning. I enjoy building practical software and AI/ML projects that solve real-world problems. My current interests include Machine Learning, Deep Learning, Natural Language Processing, Python, and intelligent application development. I am continuously improving my programming, problem-solving, and software development skills through academic projects, experiments, hackathons, and hands-on learning.",

  // Replace this with your real email
  email: "YOUR_EMAIL@example.com",

  phone: "",

  // Keep this as a placeholder until your portfolio is deployed
  siteUrl: "https://yourportfolio.example.com",

  avatar: "/images/avatar.png",
  resume: "/resume.pdf",

  // Add your Cal.com handle later if required
  calLink: "",

  // Replace with your actual GitHub username
  githubUsername: "YOUR_GITHUB_USERNAME",

  social: {
    twitter: "https://x.com/YOUR_X_USERNAME",

    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",

    github: "https://github.com/YOUR_GITHUB_USERNAME",

    instagram: "https://instagram.com/YOUR_INSTAGRAM_USERNAME",

    medium: "https://medium.com/@YOUR_MEDIUM_USERNAME",
  },

  seo: {
    defaultTitle: "Mahesh Babu | AI & ML Student & Developer",

    defaultDescription:
      "Portfolio of Mahesh Babu, a 3rd-year CSE (AI & ML) student building practical Machine Learning, Deep Learning, NLP, and software projects.",

    twitterHandle: "@YOUR_X_USERNAME",

    keywords:
      "Mahesh Babu, AI, Machine Learning, Artificial Intelligence, CSE, AIML, Python, Deep Learning, NLP, Data Science, ML Projects, AI Projects, BTech, Student Developer, Portfolio",
  },

  nav: [
    {
      name: "Projects",
      path: "/projects",
      description: "AI, ML and real-world projects I've built.",
    },

    {
      name: "Experience",
      path: "/experience",
      description: "My learning journey, internships and experience.",
    },

    {
      name: "Blogs",
      path: "/blogs",
      description: "My notes and thoughts on AI, ML and technology.",
    },

    {
      name: "About",
      path: "/about",
      description: "Learn more about me and my journey.",
    },

    {
      name: "Contact",
      path: "/contact",
      description: "Let's connect and build something useful.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;