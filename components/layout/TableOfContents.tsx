"use client";

import React, { useEffect, useState } from "react";
import { AlignLeft, ArrowUp } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const tocItems: TocItem[] = [
  { id: "overview", title: "1. Overview & Testing Dilemma", level: 2 },
  { id: "mental-model", title: "2. The Mental Model & Architecture", level: 2 },
  { id: "prerequisites", title: "3. Prerequisites & Installation", level: 2 },
  { id: "sample-app", title: "4. The Go Gin + Mongo App", level: 2 },
  { id: "record-mode", title: "5. Step 1: Recording Test Cases", level: 2 },
  { id: "inspecting-artifacts", title: "6. Step 2: Under the Hood (YAML)", level: 2 },
  { id: "replay-tests", title: "7. Step 3: Replaying Without Mongo", level: 2 },
  { id: "aha-moments", title: '8. "A-Ha!" Moments & Gotchas', level: 2 },
  { id: "cicd-integration", title: "9. CI/CD Pipeline Integration", level: 2 },
  { id: "cheat-sheet", title: "10. DevRel Cheat Sheet", level: 2 },
];

export function TableOfContents({ activeId }: { activeId: string }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-24 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xs space-y-4">
        
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          <AlignLeft className="w-3.5 h-3.5 text-orange-500" />
          <span>On This Page</span>
        </div>

        <nav className="space-y-1">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left text-xs py-1.5 px-2 rounded-lg transition-all ${
                  isActive
                    ? "font-semibold text-orange-600 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-400/10"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
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
