import Link from 'next/link';
import Image from 'next/image';
import { projects, sectionIcons } from '@/lib/portfolio-data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Projects" icon={sectionIcons.projects}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.slug} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              <CardDescription>{project.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-video overflow-hidden rounded-md mb-4 border">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                  data-ai-hint="project showcase"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link href={`/projects/${project.slug}`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="flex-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
