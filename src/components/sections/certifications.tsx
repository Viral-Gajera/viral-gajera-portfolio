
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { certifications, sectionIcons } from '@/lib/portfolio-data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { BadgeCheck, ExternalLink, Eye } from 'lucide-react';

export function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SectionWrapper id="certifications" title="Certifications" icon={sectionIcons.certifications}>
      <Card>
        <CardContent className="p-6">
          <ul className="space-y-6">
            {certifications.map((cert, index) => (
              <li key={index} className="flex flex-col sm:flex-row items-start gap-4">
                <BadgeCheck className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                <div className="flex-grow">
                  <h4 className="font-semibold">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-4">
                    {cert.verificationUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Verify
                        </a>
                      </Button>
                    )}
                    {cert.imageUrl && (
                      <Button variant="outline" size="sm" onClick={() => setSelectedImage(cert.imageUrl!)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Certificate
                      </Button>
                    )}
                  </div>
                </div>
                {cert.imageUrl && (
                   <div className="w-full sm:w-40 flex-shrink-0">
                     <Image
                      src={cert.imageUrl}
                      alt={`${cert.title} certificate`}
                      width={200}
                      height={150}
                      className="w-full h-auto rounded-md border object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => setSelectedImage(cert.imageUrl!)}
                      data-ai-hint="certificate document"
                    />
                   </div>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2 sm:p-4">
           <DialogTitle className="sr-only">Certificate Image</DialogTitle>
           <div className="w-full flex items-center justify-center">
               <Image
                  src={selectedImage || ''}
                  alt="Expanded certificate image"
                  width={1200}
                  height={800}
                  className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
                />
            </div>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
