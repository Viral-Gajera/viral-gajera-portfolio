import Link from 'next/link';
import { personalData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center scroll-mt-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
          {personalData.name}
        </h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl text-primary">
          {personalData.title}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          {personalData.location}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <a href={`mailto:${personalData.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              {personalData.email}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:${personalData.phone.replace(/\s/g, '')}`}>
              <Phone className="mr-2 h-4 w-4" />
              {personalData.phone}
            </a>
          </Button>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {personalData.links.map((link) => (
            <Button asChild key={link.href} variant="ghost" size="icon">
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-6 w-6" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
