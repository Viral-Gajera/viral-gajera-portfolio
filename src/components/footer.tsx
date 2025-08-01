import { personalData } from '@/lib/portfolio-data';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
