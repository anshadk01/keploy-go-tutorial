"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal as TerminalIcon } from "lucide-react";

interface TerminalBlockProps {
  command: string;
  output?: string[];
  title?: string;
}

export function TerminalBlock({
  command,
  output = [],
  title = "bash",
}: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command", err);
    }
  };

  return (
    <div className="my-5 rounded-2xl border border-slate-800 bg-[#0d1117] text-slate-200 shadow-xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 font-sans font-medium flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-slate-500" />
            {title}
          </span>
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-all text-xs"
          title="Copy command"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Command & Output */}
      <div className="p-4 sm:p-5 overflow-x-auto space-y-2">
        <div className="flex items-start gap-2.5 text-orange-400 font-semibold selection:bg-orange-500/30 selection:text-white">
          <span className="text-emerald-400 select-none">$</span>
          <span className="text-slate-100">{command}</span>
        </div>

        {output.length > 0 && (
          <div className="pt-2 text-slate-300 space-y-1 border-t border-slate-800/60 font-mono text-[12px] sm:text-[13px] leading-relaxed">
            {output.map((line, idx) => {
              const isKeployHighlight = line.includes("keploy") || line.includes("test-set") || line.includes("PASSED");
              const isSuccess = line.includes("200 OK") || line.includes("201 Created") || line.includes("PASSED");
              const isWarning = line.includes("WARN") || line.includes("sudo");
              
              let textColor = "text-slate-400";
              if (isSuccess) textColor = "text-emerald-400";
              else if (isKeployHighlight) textColor = "text-orange-300 font-medium";
              else if (isWarning) textColor = "text-amber-400";

              return (
                <div key={idx} className={`${textColor} whitespace-pre`}>
                  {line}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
