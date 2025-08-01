import Image from 'next/image';
import Link from 'next/link';
import { personalData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 flex flex-col items-start gap-4 md:order-1">
          <h1 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Hi, I&apos;m {personalData.name}
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
            {personalData.title}
          </h2>
          <p className="max-w-md text-base text-muted-foreground">
            I specialize in creating high-quality, responsive web applications.
            Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#experience">
                My Resume <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
           <div className="mt-4 flex gap-4">
            {personalData.links.map((link) => (
              <Button asChild key={link.href} variant="outline" size="icon">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="order-1 flex items-center justify-center md:justify-end md:order-2">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-foreground/10 shadow-lg md:h-80 md:w-80">
            <Image
              src="/profile-photo.jpg"
              alt={personalData.name}
              fill
              className="object-cover"
              priority
              data-ai-hint="profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
