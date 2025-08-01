import { workExperience, sectionIcons } from '@/lib/portfolio-data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Work Experience" icon={sectionIcons.experience}>
      <div className="relative flex flex-col gap-8 before:absolute before:left-[1.1rem] before:top-4 before:h-full before:w-[2px] before:bg-border md:before:left-10">
        {workExperience.map((job, index) => (
          <Card key={index} className="pl-12 md:pl-16 relative">
            <div className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border-2 border-primary md:h-10 md:w-10">
              <sectionIcons.experience className="h-4 w-4 text-primary md:h-5 md:w-5" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{job.role}</CardTitle>
              <CardDescription className="font-medium">
                <span className='font-bold' >{job.company}</span> • {job.location}
              </CardDescription>
              <p className="text-sm text-muted-foreground">{job.duration}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {job.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/90">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
