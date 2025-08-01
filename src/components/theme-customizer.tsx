
'use client';

import { useState, useEffect } from 'react';
import { Settings, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type Theme = {
  '--background': string;
  '--foreground': string;
  '--card': string;
  '--card-foreground': string;
  '--popover': string;
  '--popover-foreground': string;
  '--primary': string;
  '--primary-foreground': string;
  '--secondary': string;
  '--secondary-foreground': string;
  '--muted': string;
  '--muted-foreground': string;
  '--accent': string;
  '--accent-foreground': string;
  '--accent-dark': string;
  '--destructive': string;
  '--destructive-foreground': string;
  '--border': string;
  '--input': string;
  '--ring': string;
};

const defaultTheme: Theme = {
  '--background': '214 25% 95%',
  '--foreground': '224 71.4% 4.1%',
  '--card': '0 0% 100%',
  '--card-foreground': '224 71.4% 4.1%',
  '--popover': '0 0% 100%',
  '--popover-foreground': '224 71.4% 4.1%',
  '--primary': '211 98% 73%',
  '--primary-foreground': '224 71.4% 4.1%',
  '--secondary': '210 40% 96.1%',
  '--secondary-foreground': '222.2 47.4% 11.2%',
  '--muted': '210 40% 96.1%',
  '--muted-foreground': '215.4 16.3% 46.9%',
  '--accent': '283 11% 63%',
  '--accent-foreground': '0 0% 100%',
  '--accent-dark': '215 28% 17%',
  '--destructive': '0 84.2% 60.2%',
  '--destructive-foreground': '0 0% 98%',
  '--border': '214.3 31.8% 91.4%',
  '--input': '214.3 31.8% 91.4%',
  '--ring': '211 98% 73%',
};

function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHsl(hex: string): string {
    let r = 0, g = 0, b = 0;
    if (hex.length == 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length == 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    return `${h} ${s}% ${l}%`;
}


export function ThemeCustomizer() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      const root = document.documentElement;
      Object.entries(theme).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
      localStorage.setItem('app-theme', JSON.stringify(theme));
    }
  }, [theme, isMounted]);

  const handleColorChange = (variable: keyof Theme, value: string) => {
    const hslValue = hexToHsl(value);
    setTheme(prev => ({ ...prev, [variable]: hslValue }));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
  }

  if (!isMounted) {
    return null;
  }
  
  const ColorInput = ({ name, variable }: { name: string; variable: keyof Theme }) => {
    const hslString = theme[variable] || '0 0% 0%';
    const [h, s, l] = hslString.split(' ').map(val => parseFloat(val.replace('%', '')));
    const hexColor = hslToHex(h, s, l);

    return (
        <div className="flex items-center justify-between">
            <Label htmlFor={variable}>{name}</Label>
            <div onPointerDown={(e) => e.stopPropagation()}>
              <Input
                  id={variable}
                  type="color"
                  value={hexColor}
                  onChange={(e) => handleColorChange(variable, e.target.value)}
                  className="w-24 p-1 h-10"
              />
            </div>
        </div>
    )
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Customize Theme</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Palette /> Customize Theme
          </DialogTitle>
          <DialogDescription>
            Adjust the colors to personalize your experience. Your theme is saved automatically.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 pr-2 max-h-[450px] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <ColorInput name="Background" variable="--background" />
              <ColorInput name="Foreground" variable="--foreground" />
              <ColorInput name="Primary" variable="--primary" />
              <ColorInput name="Primary Foreground" variable="--primary-foreground" />
              <ColorInput name="Secondary" variable="--secondary" />
              <ColorInput name="Accent" variable="--accent" />
              <ColorInput name="Accent Dark" variable="--accent-dark" />
              <ColorInput name="Destructive" variable="--destructive" />
              <ColorInput name="Card" variable="--card" />
              <ColorInput name="Border" variable="--border" />
              <ColorInput name="Input" variable="--input" />
              <ColorInput name="Ring" variable="--ring" />
            </div>
        </div>
        <Button variant="outline" onClick={resetTheme}>Reset to Default</Button>
      </DialogContent>
    </Dialog>
  );
}
