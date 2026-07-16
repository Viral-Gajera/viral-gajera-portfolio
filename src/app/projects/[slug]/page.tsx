import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjects } from "@/lib/projects/loader";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import ProjectGallery from "./project-gallery";
import BackButton from "./back-button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <BackButton />
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.category.map((cat) => (
                <Badge key={cat} variant="default" className="text-sm">
                  {cat}
                </Badge>
              ))}
            </div>

            <ProjectGallery images={project.images} />

            <div className="my-12">
              <h2 className="text-2xl font-bold mb-4">About this project</h2>
              <div className="prose prose-blue dark:prose-invert max-w-none text-foreground/90">
                {project.longDescription.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
              {project.liveUrl && (
                <Button asChild variant="outline">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
