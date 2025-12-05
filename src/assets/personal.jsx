import { Github, Linkedin, Mail, Code, HardHat, Brain, BookOpenText, GitBranch, Laptop, Database, Brackets, Cloud, Server, Atom, Globe, Lightbulb } from 'lucide-react';

export const personalData = {
  name: "Akshaj Mishra",
  title: "Full Stack Developer | AI Enthusiast",
  shortAbout: "Experienced and results-driven Software Developer with a solid foundation in Data Structures and Algorithms (DSA) and expertise in the MERN stack, Java, Python, and C++. I am seeking a challenging role where I can apply my skills in full-stack development, problem-solving, and AI and Machine Learning to drive technical excellence.",
  profilePhotoUrl: "", 

  skills: [
    { name: "C++", category: "Programming Languages", logo: Code },
    { name: "Java", category: "Programming Languages", logo: Code },
    { name: "Python", category: "Programming Languages", logo: Code },
    { name: "TypeScript", category: "Programming Languages", logo: Lightbulb },

    { name: "MongoDB", category: "Web Development", logo: Database },
    { name: "Express.js", category: "Web Development", logo: Server },
    { name: "React.js", category: "Web Development", logo: Brackets },
    { name: "Node.js", category: "Web Development", logo: Server },
    { name: "Vite", category: "Web Development", logo: Atom },
    { name: "Tailwind CSS", category: "Web Development", logo: Cloud },
    { name: "Framer Motion", category: "Web Development", logo: Globe },

    { name: "Local LLMs", category: "AI/ML Tools", logo: Brain },
    { name: "Gemini APIs", category: "AI/ML Tools", logo: Brain },
    { name: "TensorFlow", category: "AI/ML Tools", logo: Brain },
    { name: "PyTorch", category: "AI/ML Tools", logo: Brain },
    { name: "Scikit-learn", category: "AI/ML Tools", logo: Brain },
    { name: "Neural Networks", category: "AI/ML Tools", logo: Brain },

    { name: "DSA", category: "Computer Science Skills", logo: BookOpenText },
    { name: "Problem-Solving", category: "Computer Science Skills", logo: BookOpenText },
    { name: "OOP", category: "Computer Science Skills", logo: BookOpenText },

    { name: "Git", category: "Version Control & Tools", logo: GitBranch },
    { name: "GitHub", category: "Version Control & Tools", logo: Github },
    { name: "VS Code", category: "Version Control & Tools", logo: Laptop },
  ],

  academics: [
    {
      institution: "VIT Bhopal University",
      degree: "Bachelor of Technology in Computer Science (AI and ML)",
      year: "2023 - 2027 ",
      details: "Currently pursuing my undergraduate degree, focusing on algorithms, data structures, and machine learning with 8.00 gpa."
    },
    {
      institution: "Little Flower Hr. Sec. School (Class 12th)",
      degree: "Science Stream",
      year: "2022",
      details: "Achieved 95% marks."
    },
    {
      institution: "Little Flower Hr. Sec. School (Class 10th)",
      degree: "General Education",
      year: "2020",
      details: "Achieved 92% marks."
    }
  ],
  

  projects: [
    {
      title: "Plantvillage",
      description: "PlantVillage is an open-access platform designed to help farmers identify crop diseases and improve agricultural productivity using AI-powered tools. It combines research, machine learning, and a vast image database to provide quick, accurate diagnoses of plant health issues. By offering practical, data-driven guidance, PlantVillage supports sustainable farming and helps communities increase food security.",
      githubLink: "https://github.com/Akshaj-mishra/plantVillage.git",
      imageUrl: ""
    },
    {
      title: "MARGDARSHAN",
      description: "Markdarshan Truck Routing is an intelligent logistics solution that optimizes truck routes for faster, safer, and more cost-efficient transportation. Using real-time data and smart routing algorithms, it helps drivers avoid delays, reduce fuel consumption, and ensure timely deliveries. The platform improves fleet management by offering accurate navigation, live tracking, and optimized route planning tailored for commercial transport.",
      githubLink: "https://github.com/Akshaj-mishra/MARGDARSHAN.git",
      imageUrl: ""
    },
    {
      title: "SafeMind",
      description: "Suicide Thought Prediction Model is an AI-powered system designed to analyze social media messages and detect early signs of suicidal ideation. By combining NLP, machine learning, and ethical data processing, the model identifies emotional distress, classifies risk levels, and supports timely human intervention—while ensuring privacy, safety, and responsible AI use.",
      githubLink: "https://github.com/Akshaj-mishra/SafeMind.git",
      imageUrl: ""
    },
    {
      title: "Personal Portfolio Website",
      description: "This portfolio showcases my work as a software developer specializing in C++, Java, Python, MERN Stack, AI/ML, and scalable system design. It highlights my skills, academic background, major projects, and professional profiles—all presented through an interactive, modern UI built with React, Tailwind CSS, and Framer Motion.",
      githubLink: "https://github.com/Akshaj-mishra/portfolio.git",
      imageUrl: ""
    }
  ],

  socialLinks: [
    { name: "GitHub", url: "https://github.com/Akshaj-mishra", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/akshaj-mishra-84099a28b", icon: Linkedin },
    { name: "Gmail", url: "mailto:akshajmishra3@gmail.com", icon: Mail }
  ],

  contactEmail: "akshajmishra3@gmail.com",
  emailJSServiceId: "service_xxxx", 
  emailJSTemplateId: "template_xxxx",
  emailJSPublicKey: "user_xxxx"
};
