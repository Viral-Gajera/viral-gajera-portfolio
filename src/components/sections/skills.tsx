import { skills, sectionIcons } from '@/lib/portfolio-data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills" icon={sectionIcons.skills}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
            <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
              {skill.icon && <skill.icon className="h-10 w-10 text-primary" />}
              <p className="text-sm font-medium text-center">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
