import { education, sectionIcons } from '@/lib/portfolio-data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export function EducationSection() {
  return (
    <SectionWrapper id="education" title="Education" icon={sectionIcons.education}>
      <div className="flex flex-col gap-4">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{edu.institution}</CardTitle>
              <CardDescription>{edu.degree}</CardDescription>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{edu.duration}</span>
                <span>{edu.grade}</span>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
