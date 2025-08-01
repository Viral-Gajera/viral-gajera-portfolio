import { achievements, sectionIcons } from '@/lib/portfolio-data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" title="Achievements" icon={sectionIcons.achievements}>
      <Card>
        <CardContent className="p-6">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <Star className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground/90">{achievement.description}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
