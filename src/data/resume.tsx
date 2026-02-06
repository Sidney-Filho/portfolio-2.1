import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sidney Costa Filho",
  initials: "SCF",
  url: "https://dillion.io",
  location: "Braga, Portugal",
  locationLink: "https://www.google.com/maps/place/braga",
  description:
    "Full-Stack Developer | AI & Automation Solutions | FastAPI, React, LLMs, LangChain, Azure OCR",
  summary:
    "Full-Stack Developer specialized in AI-powered automation systems. I build applications that reduce manual work, optimize business workflows, and integrate LLM-based intelligence using React, Next.js, FastAPI, SQL Server/PostgreSQL, and Azure AI. Previously AI Developer Intern at Oiko AI (2025), delivering production-ready automation tools and intelligent document processing solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Python (FastAPI)",
    "C# .NET",
    "PostgresSQL",
    "SQL Server",
    "Docker",
    "LangChain",
    "LangGraph",
    "LLMs",
    "OCR Azure",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "sidinhocostafilho@gmail.com",
    tel: "+351 922 007 309",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sidney-Filho",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sidneycostafilho/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:sidinhocostafilho@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/SidneyCostaFilho_CV.pdf",
        icon: NotebookIcon,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Oiko AI",
      href: "https://oiko.ai/",
      badges: [],
      location: "Remote",
      title: "AI Developer Intern",
      logoUrl: "/oiko.jpg",
      start: "Fev 2025",
      end: "Sep 2025",
      description:
        "Built AI-powered automation systems for enterprise workflows as an AI Developer Intern at Oiko AI. Designed and implemented LLM agents using LangChain and LangSmith to analyze documents, automate manual processes, and generate structured reports from PDFs and Excel files. Integrated Azure OCR for intelligent document processing, developed FastAPI microservices, and built full-stack dashboards with React and Next.js to deliver production-ready internal tools. Maintained and extended .NET Core systems with SQL Server and PostgreSQL backends.",
    },
  ],
  education: [
    {
      school: "Instiuto Politecnico do Cavado e do Ave",
      href: "https://ipca.pt/",
      degree: "Curso Superior de Tecnologia (CST), Desenvolvimento Web",
      logoUrl: "/ipca.jpg",
      start: "2023",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Lume AI",
      href: "https://lume-ai-nu.vercel.app/",
      dates: "Jan 2026",
      active: true,
      description:
        "Intelligent AI summarization platform that transforms extensive content into structured, actionable insights using Google Gemini. Built with Next.js 16 and Supabase (SSR/Auth), delivering a secure, high-performance experience with real-time AI processing and server-side session management.",
      technologies: [
        "Next.js 16",
        "Google Gemini",
        "Supabase (SSR/Auth)",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://lume-ai-nu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/Sidney-Filho/Lume-AI",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/lume-ai.png",
      video:
        "",
    },
    {
      title: "OpsAI - AI Powered Business Operations Assistant",
      href: "https://github.com/Sidney-Filho/OpsAI",
      dates: "Jan 2025 - Fev 2025",
      active: true,
      description:
        "Intelligent AI chatbot that analyzes operational and KPI data from a PostgreSQL/Supabase database and answers business questions using natural language. Built with FastAPI and LangChain, delivering accurate, data-grounded insights on costs, performance, and operational status.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Python (FastAPI)",
        "LangChain",
        "LLM",
        "Vector Embeddings",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/Sidney-Filho/OpsAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gadoAI.png",
      video:
        "",
    },
    {
      title: "React E-commerce",
      href: "https://e-commerce-react-1.vercel.app/",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "E-commerce Platform (In Development)A modern online shopping platform currently under development, featuring product catalog, cart management system, and user authentication interface. The project demonstrates full-stack development skills with a focus on responsive design and user experience. Core functionalities are being refined and integrated for production readiness.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "PHP",
      ],
      links: [
        {
          type: "Website",
          href: "https://e-commerce-react-1.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ecommerce.png",
      video:
        "",
    },
    {
      title: "React To-Do List",
      href: "https://todo-list-react-02.vercel.app/",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "TodoList Application A task management app built with React featuring full CRUD operations. Users can create, read, update, and delete tasks with a clean and intuitive interface.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://todo-list-react-02.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/todo.png",
      video:
        "",
    },
  ],
} as const;
