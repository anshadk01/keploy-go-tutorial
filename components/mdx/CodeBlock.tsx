"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, FileCode } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div className="my-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-950 text-slate-100 shadow-md overflow-hidden group">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 text-xs">
        <div className="flex items-center gap-2 text-slate-400 font-mono">
          {filename ? (
            <>
              <FileCode className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-slate-200 font-medium">{filename}</span>
            </>
          ) : (
            <>
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
              <span className="uppercase tracking-wider text-[11px] text-slate-400">
                {language}
              </span>
            </>
          )}
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-all text-xs"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content with horizontal scroll */}
      <div className="p-4 overflow-x-auto text-[13px] sm:text-sm font-mono leading-relaxed selection:bg-orange-500/30 selection:text-white">
        <pre className="m-0 p-0 font-mono">
          <code>
            {lines.map((line, idx) => (
              <div key={idx} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right select-none text-slate-600 text-xs w-8">
                    {idx + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
