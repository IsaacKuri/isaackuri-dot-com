// src/partials/Header.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header({ language, toggleLanguage }: { language: 'en' | 'es'; toggleLanguage: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="flex justify-between items-center py-6 border-b border-gray-200">
      <div>
        <h1 className="text-3xl font-bold">Isaac Kuri</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Full Stack · DevOps · Cybersecurity · Embedded Systems
        </p>
      </div>
      <div className="flex gap-2 print:hidden">
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="px-2 py-1 border rounded text-sm"
        >
          {resolvedTheme === 'dark' ? '🌞 Light' : '🌙 Dark'}
        </button>
        <button onClick={toggleLanguage} className="px-2 py-1 border rounded text-sm">
          {language === 'en' ? '🇪🇸 Español' : '🇺🇸 English'}
        </button>
      </div>
    </header>
  );
}
