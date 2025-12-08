import { Github, Linkedin, Mail, Code, HardHat, Brain, BookOpenText, GitBranch, Laptop, Database, Brackets, Cloud, Server, Atom, Globe, Lightbulb, Cpu, Terminal, Zap, Layers, Webhook, Settings, Network,FileCode, Braces, Binary, GitCompare,Coffee,Sailboat } from 'lucide-react';

import profilePhotoUrl from './profile.jpg';
import markdarshan from '../assets/projects/markdarshan.png';
import plant from '../assets/projects/plant.png';
import portfolio from '../assets/projects/portfolio.png';
import safe_mind from '../assets/projects/safe_mind.png';
import Artificial_Intelligence from '../assets/certificates/Artificial Intelligence.jpg';
import cisco_hackathon from '../assets/certificates/cisco_hackathon.jpg'
import google_solutin_hackathon from '../assets/certificates/google_solutin_hackathon.jpg'
import Computer_Vision from '../assets/certificates/Computer Vision.jpg';
import Introduction_to_Deep_Learning from '../assets/certificates/Introduction to Deep Learning.jpg';
import nlp from '../assets/certificates/Introduction to Natural Language Processing.jpg';
import data from '../assets/certificates/Introduction to Data Science.jpg';
import gen from '../assets/certificates/Generative models for developers.jpg';
import nue from '../assets/certificates/neu_ai_page.jpg';




export const personalData = {
  name: "Akshaj Mishra",
  title: "Full Stack Developer | AI Enthusiast",
  shortAbout: "Experienced and results-driven Software Developer with a solid foundation in Data Structures and Algorithms (DSA) and expertise in the MERN stack, Java, Python, and C++. I am seeking a challenging role where I can apply my skills in full-stack development, problem-solving, and AI and Machine Learning to drive technical excellence.",
  profilePhotoUrl, 

  skills: [
    { name: "C++", category: "Programming Languages", logo: Braces },
    { name: "Java", category: "Programming Languages", logo: Coffee },
    { name: "Python", category: "Programming Languages", logo: FileCode },
    { name: "TypeScript", category: "Programming Languages", logo: Brackets },

    { name: "MongoDB", category: "Web Development", logo: Database },
    { name: "Express.js", category: "Web Development", logo: Webhook },
    { name: "React.js", category: "Web Development", logo: Atom },
    { name: "Node.js", category: "Web Development", logo: Server },
    { name: "Vite", category: "Web Development", logo: Zap },
    { name: "Tailwind CSS", category: "Web Development", logo: Layers },
    { name: "Framer Motion", category: "Web Development", logo: Globe },

    { name: "Local LLMs", category: "AI/ML Tools", logo: Brain },
    { name: "Gemini APIs", category: "AI/ML Tools", logo: Network },
    { name: "TensorFlow", category: "AI/ML Tools", logo: Cpu },
    { name: "PyTorch", category: "AI/ML Tools", logo: Cpu },
    { name: "Scikit-learn", category: "AI/ML Tools", logo: Binary },
    { name: "Neural Networks", category: "AI/ML Tools", logo: Network },

    { name: "DSA", category: "Computer Science Skills", logo: GitCompare },
    { name: "Problem-Solving", category: "Computer Science Skills", logo: Lightbulb },
    { name: "OOP", category: "Computer Science Skills", logo: Settings }, 

    { name: "Git", category: "Version Control & Tools", logo: GitBranch },
    { name: "GitHub", category: "Version Control & Tools", logo: Github },
    { name: "VS Code", category: "Version Control & Tools", logo: Terminal },
    { name: "Docker", category: "Version Control & Tools", logo: Sailboat },
    { name: "Fast API", category: "AI/ML Tools", logo: Network },
    { name: "DNN", category: "AI/ML Tools", logo: Brain },
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
      details: "Achieved 70% marks."
    },
    {
      institution: "Little Flower Hr. Sec. School (Class 10th)",
      degree: "General Education",
      year: "2020",
      details: "Achieved 70% marks."
    }
  ],
  

  projects: [
    {
      title: "Plantvillage",
      description: "AI-powered platform for crop disease identification and agricultural productivity improvement",
      githubLink: "https://github.com/Akshaj-mishra/plantVillage",
      liveLink: "https://imagegrnai.web.app", 
      imageUrl: plant,
      techStack: ["Deep Learning" ,"Docker", "FastAPI", "Gemini API", "React.js", "Firebase", "CNN"],
      points: [
        "Built an end-to-end plant disease classification system using a CNN trained on the PlantVillage dataset, achieving high accuracy in real-time leaf disease prediction.",
        "Developed a FastAPI backend to handle inference, preprocess images, and integrate with Google Gemini API for generating detailed disease explanations and treatment suggestions.",
        "Implemented a responsive React.js frontend enabling farmers/users to upload images, view predictions, and receive AI-generated insights.",
        "Designed a modular, production-ready architecture with separate layers for the ML model, API services, and UI.",
        "Helps communities increase food security through better crop management",
        "Deployed the system on Firebase Hosting, ensuring seamless CI/CD, scalable backend integration, and fast global access."
      ]
    }, 
    {
      title: "MARGDARSHAN",
      description: "Markdarshan Truck Routing is an intelligent logistics solution that optimizes truck routes for faster, safer, and more cost-efficient transportation.",
      githubLink: "https://github.com/Akshaj-mishra/MARGDARSHAN",
      liveLink: "#", 
      imageUrl: markdarshan,
      techStack: ["Fast API", "Next", "Type Script", "MongoDB", "Xg Boast Model", "Google Maps API" , "Express"],
      points: [
        "Developed an AI-powered logistics platform that optimizes truck routing for faster, safer, and cost-efficient transportation.",
        "Built a scalable backend using FastAPI + Express.js, integrating XGBoost models for predictive routing metrics (ETA, fuel estimation, risk scoring).",
        "Created a modern Next.js + TypeScript frontend for real-time fleet visualization, dynamic dispatching, and driver–owner communication.",
        "Integrated Google Maps API traffic-aware navigation, and intelligent location suggestions (fuel, rest stops).",
        "Designed modular services for route planning, vehicle constraints, driver analytics, and operations monitoring.",
        "Implemented database management using MongoDB, enabling high-volume geospatial queries and live tracking."
      ]
    },
    {
      title: "SafeMind",
      description: "Suicide Thought Prediction Model is an AI-powered system designed to analyze social media messages and detect early signs of suicidal ideation.",
      githubLink: "https://github.com/Akshaj-mishra/SafeMind",
      liveLink: "#", // if put # then live link option is diabled for that project
      imageUrl: safe_mind,
      techStack: ["Python", "TensorFlow","Docker", "DNN", "FastAPI", "OpenCV", "LangChain"],
      points: [
        "AI-powered system for detecting suicidal ideation from text",
        "Uses NLP and machine learning for emotional distress analysis",
        "Ethical data processing with privacy and safety considerations",
        "Classifies risk levels for timely human intervention",
        "Analyzes social media messages for early warning signs",
        "Responsible AI implementation with mental health focus"
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: "This portfolio showcases my work as a software developer specializing in C++, Java, Python, MERN Stack, AI/ML, and scalable system design. It highlights my skills, academic background, major projects, and professional profiles—all presented through an interactive, modern UI built with React, Tailwind CSS, and Framer Motion.",
      githubLink: "https://github.com/Akshaj-mishra/portfolio",
      liveLink: "#", 
      imageUrl: portfolio,
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "EmailJS"],
      points: [
        "Modern, responsive UI built with React and Tailwind CSS",
        "Interactive animations using Framer Motion library",
        "Showcases skills, projects, and academic background",
        "Contact form with email integration",
        "Dark/light mode toggle functionality",
        "Optimized for performance and accessibility"
      ]
    }
  ],

  socialLinks: [
    { name: "GitHub", url: "https://github.com/Akshaj-mishra", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/akshaj-mishra-84099a28b", icon: Linkedin },
    { name: "Gmail", url: "akshajmishra3@gmail.com", icon: Mail }
  ],

  contactEmail: "akshajmishra3@gmail.com",
  emailJSServiceId: "service_qgo1hsx", 
  emailJSTemplateId: "template_mb927p9",
  emailJSPublicKey: "JDKhfRDxVWdjtT2Qa",

  certificates: [
    {
      id: 1,
      title: "Artificial Intelligence",
      issuer: "Infosys",
      date: "June 2025",
      imageUrl: Artificial_Intelligence,
    },
    {
      id: 2,
      title: "Cisco Hackathon",
      issuer: "Cisco",
      date: "September 2024",
      imageUrl: cisco_hackathon,
    },
    {
      id: 3,
      title: "Google Solutin Hackathon",
      issuer: "Google",
      date: "August 2025",
      imageUrl: google_solutin_hackathon,
    },
    {
      id: 4,
      title: "Computer Vision",
      issuer: "Infosys",
      date: "June 2025",
      imageUrl: Computer_Vision,
    },
    {
      id: 5,
      title: "Introduction to Deep Learning",
      issuer: "Infosys",
      date: "June 2025",
      imageUrl: Introduction_to_Deep_Learning,
    },
    {
      id: 6,
      title: "Introduction to Natural Language Processing",
      issuer: "Infosys",
      date: "June 2025",
      imageUrl: nlp,
    },
    {
      id: 7,
      title: "Introduction to Data Science",
      issuer: "Infosys",
      date: "June 2025",
      imageUrl: data,
    },
    {
      id: 8,
      title: "Generative models for developers",
      issuer: "Infosys",
      date: "June 2025",
      imageUrl: gen,
    },
    {
      id: 9,
      title: "NeuCode Challenge",
      issuer: "NeuCode",
      date: "June 2025",
      imageUrl: nue,
    }
  ]
};