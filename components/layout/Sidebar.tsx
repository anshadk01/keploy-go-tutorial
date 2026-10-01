"use client";

import React from "react";
import {
  Compass,
  Layers,
  Terminal,
  FileCode2,
  Radio,
  FileSearch,
  PlayCircle,
  Lightbulb,
  Workflow,
  CheckCircle,
  X,
  ExternalLink,
} from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeId: string;
}

const navSections = [
  {
    title: "Getting Started",
    links: [
      { id: "overview", label: "Overview & The Testing Pain", icon: Compass },
      { id: "mental-model", label: "Mental Model & Architecture", icon: Layers },
      { id: "prerequisites", label: "Prerequisites & Installation", icon: Terminal },
    ],
  },
  {
    title: "Quickstart Tutorial",
    links: [
      { id: "sample-app", label: "The Go Gin + Mongo App", icon: FileCode2 },
      { id: "record-mode", label: "Step 1: Record Mode", icon: Radio },
      { id: "inspecting-artifacts", label: "Step 2: Inspecting Artifacts", icon: FileSearch },
      { id: "replay-tests", label: "Step 3: Replay Without DB", icon: PlayCircle },
    ],
  },
  {
    title: "Deep Dive & Production",
    links: [
      { id: "aha-moments", label: '"A-Ha!" Moments & Gotchas', icon: Lightbulb },
      { id: "cicd-integration", label: "CI/CD & GitHub Actions", icon: Workflow },
      { id: "cheat-sheet", label: "Summary & CLI Cheat Sheet", icon: CheckCircle },
    ],
  },
];

export function Sidebar({ sidebarOpen, setSidebarOpen, activeId }: SidebarProps) {
  const handleLinkClick = (id: string) => {
    setSidebarOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 bg-white/95 dark:bg-slate-950/95 border-r border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md overflow-y-auto transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 sm:p-5 space-y-6">
          
          {/* Quick Info Box */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20 text-xs">
            <div className="font-semibold text-orange-600 dark:text-orange-400 mb-1 flex items-center justify-between">
              <span>Go Quickstart</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-orange-500/20 font-mono">
                Gin + Mongo
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              Step-by-step tutorial on zero-code hermetic regression testing for Go APIs.
            </p>
          </div>

          {/* Navigation Links Grouped */}
          {navSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-1.5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3">
                {section.title}
              </h4>
              <nav className="space-y-0.5">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeId === link.id;

                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? "bg-orange-500/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400 font-semibold"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-900/60"
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${
                        isActive ? "text-orange-500" : "text-slate-400 group-hover:text-slate-600"
                      }`} />
                      <span className="truncate">{link.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          ))}

          {/* Community & Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <a
              href="https://keploy.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <span>Keploy Official Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/keploy/samples-go"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <span>Go Quickstart Sample Repo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </aside>
    </>
  );
}
