import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

type SectionWrapperProps = {
  id: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, title, icon: Icon, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('scroll-mt-20', className)}>
      <div className="mb-8 flex items-center gap-3">
        {/* <Icon className="h-8 w-8 text-primary" /> */}
        <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
