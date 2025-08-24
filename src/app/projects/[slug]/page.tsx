"use client";

import { notFound } from "next/navigation";
import { projects } from "@/lib/portfolio-data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import ProjectGallery from "./project-gallery";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProjectPage({ params }: PageProps) {
  const router = useRouter();
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Project Details`;

      const metaDescription = document.querySelector(
        "meta[name='description']"
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", project.shortDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = project.shortDescription;
        document.head.appendChild(meta);
      }
    } else {
      document.title = "Project Not Found";
    }
  }, [project]);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min`-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-2">
                {project.title}
              </h1>
              <Button variant={"outline"} onClick={() => router.back()}>
                <ArrowLeft />
                Back
              </Button>
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
