import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sidney Costa Filho",
  initials: "SCF",
  url: "https://dillion.io",
  location: "Braga, Portugal",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
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
    ".NET",
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
    email: "hello@example.com",
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
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
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
      title: "React E-commerce",
      href: "https://e-commerce-react-1.vercel.app/",
      dates: "Nov 2024 - Dez 2024",
      active: true,
      description:
        "",
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
  ],
} as const;
