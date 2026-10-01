"use client";

import React, { useState } from "react";

export function Tab({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export function Tabs({ children }: { children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child)
  ) as React.ReactElement<{ label?: string }>[];

  const [activeIndex, setActiveIndex] = useState(0);

  if (childrenArray.length === 0) return null;

  return (
    <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm overflow-hidden">
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/90 px-3 pt-2 gap-1.5 overflow-x-auto">
        {childrenArray.map((child, idx) => {
          const label = child.props.label || `Tab ${idx + 1}`;
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              type="button"
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-t-xl transition-all whitespace-nowrap border-b-2 ${
                isActive
                  ? "bg-white dark:bg-slate-950 text-orange-600 dark:text-orange-400 border-orange-500 shadow-xs font-semibold"
                  : "text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="p-4 sm:p-5">{childrenArray[activeIndex]}</div>
    </div>
  );
}
