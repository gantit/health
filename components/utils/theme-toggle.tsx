'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export function ThemeToggle(): JSX.Element {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex size-4 items-center justify-center">
      <Button
        variant="ghost"
        className="hover:bg-transparent"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <Icons.sun
          className="size-4 rotate-0 scale-100 text-black transition-all dark:-rotate-90 dark:scale-0"
          aria-hidden="true"
        />
        <Icons.moon
          className="absolute size-4 rotate-90 scale-0 text-white transition-all dark:rotate-0 dark:scale-100"
          aria-hidden="true"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
