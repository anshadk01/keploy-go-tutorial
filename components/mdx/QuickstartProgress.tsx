'use client';

import React, { useState } from 'react';
import { CheckCircle2, Circle, Trophy, RotateCcw } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  detail: string;
}

const steps: Step[] = [
  {
    id: 'step1',
    title: '1. Prerequisites & Validation',
    detail: 'Verify Go 1.20+, Docker daemon, and Keploy v2.x CLI installation.',
  },
  {
    id: 'step2',
    title: '2. Setup Gin + MongoDB App',
    detail: 'Clone samples-go/gin-mongo and run MongoDB 6.0 container on port 27017.',
  },
  {
    id: 'step3',
    title: '3. Record API Traffic',
    detail: 'Execute keploy record to capture real HTTP POST /url requests and MongoDB BSON wire calls.',
  },
  {
    id: 'step4',
    title: '4. Inspect YAML & Mocks',
    detail: 'Examine test-1.yaml for HTTP contracts/noise filters and mocks.yaml for database virtualization.',
  },
  {
    id: 'step5',
    title: '5. Stop MongoDB & Replay Tests',
    detail: 'Turn off the MongoDB container and execute keploy test --delay 10 to witness hermetic test passes.',
  },
  {
    id: 'step6',
    title: '6. Test Regression Detection',
    detail: 'Introduce an intentional bug in handler.go to observe Keploy automatically catch the failure diff.',
  },
];

export function QuickstartProgress() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({
    step1: true,
  });

  const toggleStep = (id: string) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const count = Object.values(completed).filter(Boolean).length;
  const percentage = Math.round((count / steps.length) * 100);

  const resetAll = () => {
    setCompleted({});
  };

  return (
    <div className="my-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-orange-50/20 dark:from-slate-900/90 dark:via-slate-900/40 dark:to-orange-950/20 p-5 sm:p-7 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-500 mb-1">
            <Trophy className="w-4 h-4" />
            Interactive Quickstart Checklist
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Track Your Quickstart Progress
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xl font-black text-orange-500">{percentage}%</span>
            <span className="text-xs text-slate-500 block font-medium">Completed</span>
          </div>
          <button
            onClick={resetAll}
            type="button"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-xs"
            title="Reset checklist"
            aria-label="Reset tutorial checklist"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Steps List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {steps.map((step) => {
          const isDone = !!completed[step.id];
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => toggleStep(step.id)}
              className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all ${
                isDone
                  ? 'border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                )}
              </div>
              <div>
                <h4 className={`text-xs sm:text-sm font-semibold ${
                  isDone ? 'text-emerald-900 dark:text-emerald-200' : 'text-slate-800 dark:text-slate-200'
                }`}>
                  {step.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                  {step.detail}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {percentage === 100 && (
        <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/30 flex items-center gap-3 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-semibold">
          <Trophy className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>Congratulations! You have completed the entire Keploy Go Gin + MongoDB zero-code testing workflow.</span>
        </div>
      )}
    </div>
  );
}
