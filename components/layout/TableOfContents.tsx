'use client';

import React from 'react';
import { AlignLeft, ArrowUp } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
}

const tocItems: TocItem[] = [
  { id: 'overview', title: '1. The Go Testing Dilemma' },
  { id: 'mental-model', title: '2. Architecture & eBPF' },
  { id: 'prerequisites', title: '3. Prerequisites & Validation' },
  { id: 'sample-app', title: '4. Setup Gin + MongoDB App' },
  { id: 'record-mode', title: '5. Record Mode & Traffic' },
  { id: 'inspect-artifacts', title: '6. Inspect Real YAML & Mocks' },
  { id: 'stop-mongo', title: '7. Stop MongoDB Container' },
  { id: 'replay-tests', title: '8. Replay Tests (No DB!)' },
  { id: 'test-regression', title: '9. Catch Real Regressions' },
  { id: 'aha-moments', title: '10. "A-Ha!" Moments' },
  { id: 'troubleshooting', title: '11. Troubleshooting Guide' },
  { id: 'cicd-integration', title: '12. CI/CD & GitHub Actions' },
];

export function TableOfContents({ activeId }: { activeId: string }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-24 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xs space-y-4">
        
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          <AlignLeft className="w-3.5 h-3.5 text-orange-500" />
          <span>On This Page</span>
        </div>

        <nav className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left text-xs py-1.5 px-2 rounded-lg transition-all ${
                  isActive
                    ? 'font-semibold text-orange-600 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-400/10'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </nav>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </div>
  );
}
