import type {
  PersonalData,
  WorkExperience,
  Project,
  Education,
  Skill,
  Achievement,
  Certification,
  NavItem,
} from '@/types';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Link as LinkIcon,
  BookUser,
  ShieldCheck,
  Star,
  Award,
  GraduationCap,
  Briefcase,
  Lightbulb
} from 'lucide-react';
import { TechIcons } from '@/components/icons';

export const navItems: NavItem[] = [
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Education', href: '#education' },
];

export const personalData: PersonalData = {
  name: 'Viral Gajera',
  title: 'Software Engineer & Full Stack Web Developer',
  email: 'viral.gajera218@gmail.com',
  phone: '+91 9714040515',
  location: 'Rajkot, Gujarat, India',
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/gajera-viral', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/Viral-Gajera', icon: Github },
    { label: 'LeetCode', href: 'https://leetcode.com/viral_gajera', icon: Code },
  ],
};

export const workExperience: WorkExperience[] = [
  {
    company: 'ThoughtI, Inc',
    role: 'Full Stack Developer',
    duration: 'March 2024 – June 2024',
    location: 'Remote (United States)',
    description: [
      "Worked in ‘Neurex’, Healthcare Software to boost efficiency and achieve operational excellence.",
      "Utilized React.js, Redux, Node.js, and TailwindCSS to build efficient healthcare management software."
    ],
  },
  {
    company: 'Infosys',
    role: 'Angular Developer Intern',
    duration: 'April 2024 – June 2024',
    location: 'Remote (Bangalore)',
    description: [
      "Team Lead & Top Contributor, overseeing and contributing to the application's development progress.",
      "Built a seeker application helping Farmers, Students, and Learners to access information.",
      "Used Angular, Beckn Protocol, and Tailwind to deliver multimedia content (images, videos, PDFs, etc.).",
      "Integrated voice input functionality for multiple languages."
    ],
  },
  {
    company: 'Analytics Valley Technology',
    role: 'React.js Developer Intern',
    duration: 'May 2023 – August 2023',
    location: 'Remote (Bangalore)',
    description: [
      "Developed Analytics Valley Website from scratch with 100% individual contribution.",
      "Worked on Orarega CRM frontend and API integration, contributing 90% to its development.",
      "Contributed to CRM projects like Diyan Paper Mill CRM and AV Order Management."
    ],
  },
  {
    company: 'DevTown Community',
    role: 'MERN Stack Developer Intern',
    duration: 'October 2022 – January 2023',
    location: 'Remote (Bangalore)',
    description: [
      "Mentored by an Infosys engineer, gaining hands-on experience in scalable web app development.",
      "Built projects like Tasky Application and BookMyShow Frontend using React.js, Node.js, and TailwindCSS."
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'glucosesense',
    title: 'GlucoSense',
    category: 'Team Project',
    shortDescription: 'A non-invasive glucose monitoring system using machine learning to analyze PPG signals.',
    techStack: ['React.js', 'React Native', 'Electron.js', 'TailwindCSS', 'Flask', 'SQL'],
    githubUrl: 'https://github.com/Viral-Gajera/gluco-sense/',
    liveUrl: 'https://github.com/Viral-Gajera/gluco-sense/',
    images: ['https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png'],
    longDescription: `GlucoSense is a groundbreaking ML-based system designed to measure glucose levels non-invasively, specifically for diabetic patients. The project involved a comprehensive development cycle, from hardware integration to software application development.
    We integrated a PPG (Photoplethysmography) sensor to capture blood volume changes and a Bluetooth module for wireless data transmission, achieving a stable 16Hz data transfer frequency. The backend, built with Flask, processes this data using a trained machine learning model to predict glucose levels.
    The user interface was developed across multiple platforms: a React.js web app for easy access, a React Native mobile app for on-the-go monitoring, and an Electron.js desktop application for comprehensive data analysis. This full-stack approach ensured a seamless user experience across devices. The project was recognized with funding from the Government of Gujarat, highlighting its innovation and potential impact.`
  },
  {
    slug: 'tasky-app',
    title: 'Tasky Application',
    category: 'Personal Project',
    shortDescription: 'A modern task management application to organize and track daily tasks and to-dos.',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    githubUrl: 'https://github.com/Viral-Gajera',
    images: ['https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png'],
    longDescription: `Tasky is a full-stack MERN application that provides a clean and intuitive interface for task management. Users can create, update, delete, and categorize tasks. The application features a persistent backend built with Node.js and Express, connected to a MongoDB database to store user data. The frontend is built with React.js and styled with TailwindCSS for a responsive and modern design.`
  },
  {
    slug: 'bookmyshow-clone',
    title: 'BookMyShow Frontend',
    category: 'Personal Project',
    shortDescription: 'A responsive frontend clone of the popular movie ticket booking website, BookMyShow.',
    techStack: ['React.js', 'TailwindCSS', 'API Integration'],
    githubUrl: 'https://github.com/Viral-Gajera',
    images: ['https://placehold.co/1200x800.png'],
    longDescription: `This project is a detailed frontend implementation of the BookMyShow website. It focuses on replicating the user interface and user experience of browsing movies, viewing details, and the seat selection process. Built with React.js and styled with TailwindCSS, the project consumes a mock movie data API to dynamically render content. It demonstrates strong skills in component-based architecture and responsive design.`
  },
];

export const education: Education[] = [
  {
    institution: 'Marwadi University, Rajkot',
    degree: 'B.Tech in Computer Engineering',
    duration: 'April 2020 – May 2024',
    grade: 'CGPA: 9.8/10',
  },
  {
    institution: 'The School of Science, Rajkot',
    degree: 'XII (HSC)',
    duration: 'April 2018 – March 2020',
    grade: 'Percentile: 98.70/100',
  },
  {
    institution: 'Noble School, Rajkot',
    degree: 'X (SSC)',
    duration: 'April 2016 – March 2018',
    grade: 'Percentile: 99.17/100',
  },
];

export const skills: Skill[] = [
  { name: 'React.js', icon: TechIcons.React },
  { name: 'Next.js', icon: TechIcons.Nextjs },
  { name: 'Node.js', icon: TechIcons.Nodejs },
  { name: 'Angular', icon: TechIcons.Angular },
  { name: 'Redux', icon: TechIcons.Redux },
  { name: 'TypeScript', icon: TechIcons.Typescript },
  { name: 'JavaScript', icon: TechIcons.Javascript },
  { name: 'TailwindCSS', icon: TechIcons.Tailwind },
  { name: 'MongoDB', icon: TechIcons.Mongodb },
  { name: 'SQL', icon: TechIcons.Database },
  { name: 'HTML', icon: TechIcons.Html5 },
  { name: 'CSS', icon: TechIcons.Css3 },
  { name: 'Java', icon: TechIcons.Java },
  { name: 'Git', icon: TechIcons.Git },
  { name: 'GitHub', icon: Github },
  { name: 'Figma', icon: TechIcons.Figma },
];

export const achievements: Achievement[] = [
  { description: 'Secured Government of Gujarat funding for GlucoSense – Non-Invasive Glucose Monitoring System.' },
  { description: 'Top-ranked Computer Engineering graduate at Marwadi University with a 9.86 CGPA.' },
  { description: 'Finalist (Top 25) out of 4335 teams in the L&T Technology Services Hackathon, 6th Edition.' },
  { description: 'Achieved a global ranking under 740,000 on LeetCode.' },
];

export const certifications: Certification[] = [
  { title: 'Database Programming with SQL', issuer: 'Oracle Certified' },
  { title: 'Angular Developer', issuer: 'Infosys Certified' },
  { title: 'The Complete JavaScript Course', issuer: 'Udemy' },
];


export const sectionIcons = {
  experience: Briefcase,
  projects: Lightbulb,
  skills: Star,
  education: GraduationCap,
  achievements: Award,
  certifications: ShieldCheck
}
