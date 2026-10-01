'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 w-[104px] h-[34px] animate-pulse" />
    );
  }

  return (
    <div
      role="group"
      aria-label="Theme selector"
      className="flex items-center gap-1 p-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-xs text-slate-500 dark:text-slate-400 shadow-xs"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-label="Switch to light mode"
        title="Light mode"
        className={`p-1.5 rounded-lg transition-all ${
          theme === 'light'
            ? 'bg-white text-amber-500 shadow-xs ring-1 ring-slate-200 dark:ring-0 font-medium'
            : 'hover:text-slate-900 dark:hover:text-slate-100'
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-label="Switch to dark mode"
        title="Dark mode"
        className={`p-1.5 rounded-lg transition-all ${
          theme === 'dark'
            ? 'bg-slate-800 text-orange-400 shadow-xs ring-1 ring-slate-700 font-medium'
            : 'hover:text-slate-900 dark:hover:text-slate-100'
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('system')}
        aria-label="Switch to system default mode"
        title="System default"
        className={`p-1.5 rounded-lg transition-all ${
          theme === 'system'
            ? 'bg-white dark:bg-slate-800 text-blue-500 shadow-xs ring-1 ring-slate-200 dark:ring-slate-700 font-medium'
            : 'hover:text-slate-900 dark:hover:text-slate-100'
        }`}
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
}
