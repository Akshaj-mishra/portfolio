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
      description: "Developed a conversational AI chatbot using local LLMs and Gemini APIs, capable of understanding natural language and providing intelligent responses.",
      githubLink: "https://github.com/johndoe/ai-chatbot",
      imageUrl: ""
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application built with MERN stack, featuring user authentication, product catalog, shopping cart, and secure payment gateway.",
      githubLink: "https://github.com/johndoe/ecommerce-platform",
      imageUrl: ""
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Implemented a real-time document collaboration application using WebSockets, allowing multiple users to edit content simultaneously.",
      githubLink: "https://github.com/johndoe/realtime-collab",
      imageUrl: ""
    },
    {
      title: "Personal Portfolio Website",
      description: "This very website, showcasing my skills and projects, built with React, TypeScript, Tailwind CSS, and Framer Motion.",
      githubLink: "https://github.com/johndoe/portfolio-website",
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
