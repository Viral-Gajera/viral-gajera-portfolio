import Header from '@/components/header';
import Footer from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';
import { EducationSection } from '@/components/sections/education';
import { AchievementsSection } from '@/components/sections/achievements';
import { CertificationsSection } from '@/components/sections/certifications';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 sm:py-32">
          <div className="flex flex-col gap-24 md:gap-32">
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <AchievementsSection />
            <CertificationsSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
