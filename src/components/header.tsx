'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';
import { navItems, personalData } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6', className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : 'border-b border-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline tracking-tighter">{personalData.name}</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
        </div>
        <div className="md:hidden flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="p-6">
                <Link href="/" className="flex items-center gap-2 mb-8">
                  <Code className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">{personalData.name}</span>
                </Link>
                <NavLinks className="flex-col items-start space-y-4" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
