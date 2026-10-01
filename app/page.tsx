'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { TableOfContents } from '@/components/layout/TableOfContents';
import TutorialContent from '@/content/tutorial.mdx';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    const sectionIds = [
      'overview',
      'mental-model',
      'prerequisites',
      'sample-app',
      'record-mode',
      'inspect-artifacts',
      'stop-mongo',
      'replay-tests',
      'test-regression',
      'aha-moments',
      'troubleshooting',
      'cicd-integration',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Navbar */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex pt-4 sm:pt-6">
        
        {/* Left Navigation Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeId={activeId}
        />

        {/* Center Content Column */}
        <main className="flex-1 min-w-0 lg:pl-72 xl:pr-10 py-4 sm:py-6 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* MDX Document Render */}
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <TutorialContent />
            </article>

            {/* End of article Callout / Footer Banner */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Ready to supercharge your Go tests?
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-md">
                    Explore the official Keploy docs or run Keploy on your microservices with zero test code.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="https://keploy.io/docs/quickstart/quickstart-go"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 transition-all hover:scale-102"
                  >
                    <span>Read Keploy Docs</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Credits & Navigation */}
            <footer className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
              <div className="flex items-center gap-1.5">
                <span>Created for the</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  Keploy DevRel Candidate Assignment
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/keploy/keploy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://keploy.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Keploy.io</span>
                </a>
              </div>
            </footer>
          </div>
        </main>

        {/* Right Sticky Table of Contents (Desktop Only) */}
        <TableOfContents activeId={activeId} />
      </div>
    </div>
  );
}
