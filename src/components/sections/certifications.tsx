import { certifications, sectionIcons } from '@/lib/portfolio-data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" title="Certifications" icon={sectionIcons.certifications}>
      <Card>
        <CardContent className="p-6">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-3">
                <BadgeCheck className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
