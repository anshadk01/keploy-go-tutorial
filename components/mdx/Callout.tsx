"use client";

import React from "react";
import { Info, Lightbulb, AlertTriangle, Sparkles, CheckCircle2 } from "lucide-react";

interface CalloutProps {
  type?: "info" | "tip" | "warning" | "aha" | "success";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = {
    info: {
      container: "border-blue-500/30 bg-blue-50/70 dark:bg-blue-950/25 text-blue-950 dark:text-blue-100",
      badge: "text-blue-700 dark:text-blue-300 font-semibold",
      border: "border-l-4 border-l-blue-500",
      icon: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />,
      defaultTitle: "Documentation Note",
    },
    tip: {
      container: "border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-950/25 text-emerald-950 dark:text-emerald-100",
      badge: "text-emerald-700 dark:text-emerald-300 font-semibold",
      border: "border-l-4 border-l-emerald-500",
      icon: <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      defaultTitle: "DevRel Pro Tip",
    },
    warning: {
      container: "border-amber-500/30 bg-amber-50/70 dark:bg-amber-950/25 text-amber-950 dark:text-amber-100",
      badge: "text-amber-700 dark:text-amber-300 font-semibold",
      border: "border-l-4 border-l-amber-500",
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />,
      defaultTitle: "Important Requirement",
    },
    aha: {
      container: "border-orange-500/40 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent text-slate-900 dark:text-orange-50 shadow-sm ring-1 ring-orange-500/20",
      badge: "text-orange-600 dark:text-orange-300 font-bold",
      border: "border-l-4 border-l-orange-500",
      icon: <Sparkles className="w-5 h-5 text-orange-500 dark:text-orange-400 shrink-0 animate-pulse" />,
      defaultTitle: 'The "A-Ha!" Moment',
    },
    success: {
      container: "border-teal-500/30 bg-teal-50/70 dark:bg-teal-950/25 text-teal-950 dark:text-teal-100",
      badge: "text-teal-700 dark:text-teal-300 font-semibold",
      border: "border-l-4 border-l-teal-500",
      icon: <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />,
      defaultTitle: "Verification Success",
    },
  }[type];

  return (
    <div className={`my-6 rounded-2xl border p-4.5 sm:p-5 ${styles.container} ${styles.border} transition-all`}>
      <div className="flex items-center gap-2.5 mb-2.5">
        {styles.icon}
        <span className={`text-xs uppercase tracking-wider ${styles.badge}`}>
          {title || styles.defaultTitle}
        </span>
      </div>
      <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 [&>p]:my-1.5 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:ml-5 [&>ul]:space-y-1 [&>code]:bg-black/5 dark:[&>code]:bg-white/10 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-xs [&>code]:font-mono">
        {children}
      </div>
    </div>
  );
}
