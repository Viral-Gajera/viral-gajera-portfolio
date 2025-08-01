export type NavItem = {
  title: string;
  href: string;
};

export type PersonalData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  links: {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
};

export type WorkExperience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  longDescription: string;
};

export type Education = {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
};

export type Skill = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type Achievement = {
  description: string;
};

export type Certification = {
  title: string;
  issuer: string;
};
