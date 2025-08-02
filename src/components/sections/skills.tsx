import { skills, sectionIcons } from '@/lib/portfolio-data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills" icon={sectionIcons.skills}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(skills).map(([category, skillList]) => (
        <Card key={category} className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <CardTitle className="font-headline text-2xl">{category}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {skillList.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  {/* <Badge variant="outline">{skill.level}%</Badge> */}
                </div>
                {/* <Progress value={skill.level} aria-label={`${skill.name} proficiency`} /> */}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
    </SectionWrapper>
  );
}
