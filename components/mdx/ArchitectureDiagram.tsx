"use client";

import React, { useState } from "react";
import { Database, Server, Smartphone, ShieldCheck, PlayCircle, Radio, Sparkles, CheckCircle2 } from "lucide-react";

export function ArchitectureDiagram() {
  const [mode, setMode] = useState<"record" | "test">("record");

  return (
    <div className="my-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/90 dark:to-slate-950 p-5 sm:p-7 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Mental Model
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            How Keploy Works: Record vs. Test
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Click each mode below to see how traffic is captured during recording and mocked during replay.
          </p>
        </div>

        {/* Toggle Mode Buttons */}
        <div className="inline-flex p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 shrink-0 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setMode("record")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              mode === "record"
                ? "bg-orange-500 text-white shadow-md"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Radio className="w-4 h-4" />
            1. Record Mode
          </button>
          <button
            type="button"
            onClick={() => setMode("test")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              mode === "test"
                ? "bg-emerald-500 text-white shadow-md"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <PlayCircle className="w-4 h-4" />
            2. Test Mode (No DB!)
          </button>
        </div>
      </div>

      {/* Diagram Canvas */}
      <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/70 p-5 sm:p-7 backdrop-blur-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10 items-stretch">
          
          {/* Node 1: Client / Keploy Replayer */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-center shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              {mode === "record" ? (
                <Smartphone className="w-6 h-6" />
              ) : (
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              )}
            </div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-1">
              {mode === "record" ? "HTTP Client" : "Keploy Test Runner"}
            </span>
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {mode === "record" ? "cURL / Postman / Frontend" : "Keploy Replay Engine"}
            </h4>
            <p className="text-xs text-slate-500 mt-2">
              {mode === "record"
                ? "Sends user requests (POST /url with URL data)"
                : "Replays recorded requests with identical HTTP payload & headers"}
            </p>
          </div>

          {/* Node 2: Go Gin Application */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-orange-500/40 bg-orange-50/30 dark:bg-orange-950/20 text-center shadow-sm relative">
            <span className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider">
              Zero Code Changes
            </span>
            <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
              <Server className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-orange-500 mb-1">
              Your Go Application
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Gin REST API (:8080)
            </h4>
            <div className="mt-3 p-2 rounded-xl bg-orange-500/10 text-orange-800 dark:text-orange-300 text-xs w-full text-left font-mono">
              eBPF / Proxy intercepts:
              <br />
              • Ingress HTTP (:8080)
              <br />
              • Egress Mongo TCP (:27017)
            </div>
          </div>

          {/* Node 3: Database / Mocks */}
          <div className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all text-center shadow-xs ${
            mode === "record"
              ? "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80"
              : "border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20"
          }`}>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${
              mode === "record"
                ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                : "bg-emerald-500/15 text-emerald-500"
            }`}>
              <Database className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-1">
              {mode === "record" ? "Live Database" : "Virtual Keploy Mock Engine"}
            </span>
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {mode === "record" ? "MongoDB (:27017)" : "Auto-Generated mocks.yaml"}
            </h4>
            <p className="text-xs text-slate-500 mt-2">
              {mode === "record"
                ? "Executes query; Keploy records binary wire protocol response."
                : "MongoDB is NOT RUNNING! Keploy serves the exact recorded DB response."}
            </p>
          </div>

        </div>

        {/* Narrative Banner below diagram */}
        <div className={`mt-6 p-4 rounded-xl border text-xs sm:text-sm leading-relaxed transition-all ${
          mode === "record"
            ? "border-orange-500/30 bg-orange-500/5 text-slate-800 dark:text-orange-100"
            : "border-emerald-500/30 bg-emerald-500/5 text-slate-800 dark:text-emerald-100"
        }`}>
          {mode === "record" ? (
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-orange-600 dark:text-orange-400">Record Phase:</strong> You start your app wrapped with <code className="px-1.5 py-0.5 rounded bg-orange-500/10 font-mono text-xs">keploy record</code>. When you send sample HTTP requests, Keploy non-invasively listens to outgoing TCP traffic directed to MongoDB and persists both the HTTP test case (<code className="font-mono text-xs">test-1.yaml</code>) and the database mock (<code className="font-mono text-xs">mocks.yaml</code>).
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-emerald-600 dark:text-emerald-400">Hermetic Test Phase:</strong> Stop MongoDB (<code className="font-mono text-xs">docker stop mongo</code>). Run <code className="px-1.5 py-0.5 rounded bg-emerald-500/10 font-mono text-xs">keploy test</code>. Keploy boots the Go app, replays the recorded HTTP call, and when the Go MongoDB driver connects to port 27017, Keploy answers with the recorded mock data. Your test suite runs in seconds, 100% isolated, with 0 dependencies!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
