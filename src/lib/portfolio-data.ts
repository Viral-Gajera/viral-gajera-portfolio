import type {
  PersonalData,
  WorkExperience,
  Project,
  Education,
  Skill,
  Achievement,
  Certification,
  NavItem,
} from "@/types";
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
  Lightbulb,
  Twitter,
} from "lucide-react";
import { TechIcons } from "@/components/icons";

export const navItems: NavItem[] = [
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Education", href: "#education" },
];

export const personalData: PersonalData = {
  name: "Viral Gajera",
  title: "Software Engineer & Full Stack Web Developer",
  email: "viral.gajera218@gmail.com",
  phone: "+91 9714040515",
  location: "Rajkot, Gujarat, India",
  profilePicture: "/profile-picture-2.jpeg",
  links: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/gajera-viral",
      icon: Linkedin,
    },
    { label: "GitHub", href: "https://github.com/Viral-Gajera", icon: Github },
    {
      label: "X",
      href: "https://x.com/ViralGajera218",
      icon: TechIcons.Twitter,
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/viral_gajera/",
      icon: TechIcons.LeetCode,
    },
  ],
};

export const workExperience: WorkExperience[] = [
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    duration: "January 2025 - Present",
    location: "Gandhinagar, Gujarat, India",
    description: [
      "Developing and enhancing Brandshub, a bespoke B2B software for Marks & Spencer, to streamline issue and ticket resolution with their vendors.",
      "Utilizing Next.js and TailwindCSS to build a modern, performant, and user-friendly interface for a seamless client experience.",
      "Collaborating in an agile environment to translate client requirements into robust features, improving efficiency and communication between M&S and its partners.",
    ],
  },
  {
    company: "ThoughtI, Inc",
    role: "Full Stack Developer",
    duration: "March 2024 - June 2024",
    location: "Remote (United States)",
    description: [
      "Worked in 'Neurex', Healthcare Software to boost efficiency and achieve operational excellence.",
      "Utilized React.js, Redux, Node.js, and TailwindCSS to build efficient healthcare management software.",
    ],
  },
  {
    company: "Infosys",
    role: "Angular Developer Intern",
    duration: "April 2024 - June 2024",
    location: "Remote (Bangalore)",
    description: [
      "Team Lead & Top Contributor, overseeing and contributing to the application's development progress.",
      "Built a seeker application helping Farmers, Students, and Learners to access information.",
      "Used Angular, Beckn Protocol, and Tailwind to deliver multimedia content (images, videos, PDFs, etc.).",
      "Integrated voice input functionality for multiple languages.",
    ],
  },
  {
    company: "Analytics Valley Technology",
    role: "React.js Developer Intern",
    duration: "May 2023 - August 2023",
    location: "Remote (Bangalore)",
    description: [
      "Developed Analytics Valley Website from scratch with 100% individual contribution.",
      "Worked on Orarega CRM frontend and API integration, contributing 90% to its development.",
      "Contributed to CRM projects like Diyan Paper Mill CRM and AV Order Management.",
    ],
  },
  {
    company: "DevTown Community",
    role: "MERN Stack Developer Intern",
    duration: "October 2022 - January 2023",
    location: "Remote (Bangalore)",
    description: [
      "Mentored by an Infosys engineer, gaining hands-on experience in scalable web app development.",
      "Built projects like Tasky Application and BookMyShow Frontend using React.js, Node.js, and TailwindCSS.",
    ],
  },
];

export const projects: Project[] = [];

export const education: Education[] = [
  {
    institution: "Marwadi University, Rajkot",
    degree: "B.Tech in Computer Engineering",
    duration: "April 2020 - May 2024",
    grade: "CGPA: 9.8/10",
  },
  {
    institution: "The School of Science, Rajkot",
    degree: "XII (HSC)",
    duration: "April 2018 - March 2020",
    grade: "Percentile: 98.70/100",
  },
  {
    institution: "Noble School, Rajkot",
    degree: "X (SSC)",
    duration: "April 2016 - March 2018",
    grade: "Percentile: 99.17/100",
  },
];

export const skills = {
  "Frameworks & Libraries": [
    { name: "React.js & Next.js", level: 95 },
    { name: "Redux & Redux Toolkit", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Angular (Basic)", level: 80 },
  ],
  Languages: [
    { name: "JavaScript & TypeScript", level: 95 },
    { name: "Java", level: 85 },
    { name: "HTML5 & CSS3", level: 98 },
    { name: "SQL", level: 80 },
  ],
  Databases: [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 75 },
  ],
  "DevOps & Cloud Platform": [
    { name: "Microsoft Azure", level: 80 },
    { name: "Docker", level: 80 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 95 },
    { name: "Figma", level: 95 },
  ],
};

export const achievements: Achievement[] = [
  {
    description:
      "Secured Government of Gujarat funding for GlucoSense - Non-Invasive Glucose Monitoring System.",
  },
  {
    description:
      "Top-ranked Computer Engineering graduate at Marwadi University with a 9.86 CGPA.",
  },
  {
    description:
      "Finalist (Top 25) out of 4335 teams in the L&T Technology Services Hackathon, 6th Edition.",
  },
  { description: "Achieved a global ranking under 740,000 on LeetCode." },
];

export const certifications: Certification[] = [
  {
    title: "Azure Fundamental (AZ-900)",
    issuer: "Microsoft Certified",
    verificationUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/viralpatel-4559/1B2B4C80E551F312?sharingId=966DF490D90E60CD",
    imageUrl:
      "https://github.com/Viral-Gajera/Viral-Gajera/blob/main/certificates/azure_fundamental.jpeg?raw=true",
  },
  {
    title: "Github Action (GH-200)",
    issuer: "Microsoft Certified",
    verificationUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/ViralGajera-7568/EE108039AE39D182?sharingId=3EC1E760DF459441",
    imageUrl:
      "https://github.com/Viral-Gajera/Viral-Gajera/blob/main/certificates/gh-200_github_actions.png?raw=true",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Certified",
    verificationUrl: "https://www.credly.com/badges/your-badge-id",
    imageUrl:
      "https://github.com/Viral-Gajera/Viral-Gajera/blob/main/certificates/sql_oracle_certificate.png?raw=true",
  },
  {
    title: "Angular Developer",
    issuer: "Infosys Certified",
    verificationUrl: undefined,
    imageUrl:
      "https://github.com/Viral-Gajera/Viral-Gajera/blob/main/certificates/angular_infosys_certificate.png?raw=true",
  },
  {
    title: "The Complete JavaScript Course",
    issuer: "Udemy",
    verificationUrl: "https://www.udemy.com/certificate/your-cert-id/",
    imageUrl:
      "https://github.com/Viral-Gajera/Viral-Gajera/blob/main/certificates/javascript_udemy_course.png?raw=true",
  },
];

export const sectionIcons = {
  experience: Briefcase,
  projects: Lightbulb,
  skills: Star,
  education: GraduationCap,
  achievements: Award,
  certifications: ShieldCheck,
};
