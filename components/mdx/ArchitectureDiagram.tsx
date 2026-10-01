'use client';

import React, { useState } from 'react';
import { Database, Server, Smartphone, ShieldCheck, PlayCircle, Radio, Sparkles, CheckCircle2, Utensils, Cpu } from 'lucide-react';

export function ArchitectureDiagram() {
  const [mode, setMode] = useState<'record' | 'test'>('record');
  const [lens, setLens] = useState<'tech' | 'human'>('human');

  return (
    <div className="my-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/90 dark:to-slate-950 p-5 sm:p-7 shadow-lg transition-all">
      
      {/* Top Header with Dual Toggles */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Mental Model
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            How Keploy Works: Record vs. Test
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Switch between the <span className="font-semibold text-purple-600 dark:text-purple-400">Plain English Analogy</span> and the <span className="font-semibold text-blue-600 dark:text-blue-400">Engineering View</span>.
          </p>
        </div>

        {/* Control Controls Group */}
        <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
          {/* Lens Switcher: Human vs Tech */}
          <div className="inline-flex p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setLens('human')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                lens === 'human'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Analogy (Story)</span>
            </button>
            <button
              type="button"
              onClick={() => setLens('tech')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                lens === 'tech'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Engineers View</span>
            </button>
          </div>

          {/* Mode Switcher: Record vs Test */}
          <div className="inline-flex p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setMode('record')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                mode === 'record'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Record Mode</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('test')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                mode === 'test'
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>Test Mode (No DB!)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Diagram Canvas */}
      <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/70 p-5 sm:p-7 backdrop-blur-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10 items-stretch">
          
          {/* Node 1: Client / Customer */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-center shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              {mode === 'record' ? (
                lens === 'human' ? <Utensils className="w-6 h-6 text-purple-500" /> : <Smartphone className="w-6 h-6" />
              ) : (
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              )}
            </div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-1">
              {lens === 'human'
                ? (mode === 'record' ? 'The Dinner Customer' : 'The Restaurant Inspector')
                : (mode === 'record' ? 'HTTP Client' : 'Keploy Replay Engine')}
            </span>
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {lens === 'human'
                ? (mode === 'record' ? 'Orders pasta dinner' : 'Re-orders exact same dish')
                : (mode === 'record' ? 'cURL / Postman (:8080)' : 'Replays recorded HTTP')}
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {lens === 'human'
                ? (mode === 'record'
                    ? 'A real user places an order. They expect a delicious meal and receipt.'
                    : 'The inspector verifies the chef still produces the exact same meal.')
                : (mode === 'record'
                    ? 'Sends real HTTP POST /url with JSON payload.'
                    : 'Replays the saved HTTP request with exact headers and timestamps.')}
            </p>
          </div>

          {/* Node 2: Go App / Chef */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-orange-500/40 bg-orange-50/30 dark:bg-orange-950/20 text-center shadow-sm relative">
            <span className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider">
              {lens === 'human' ? 'Zero Code Changes' : 'eBPF Intercepted'}
            </span>
            <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
              <Server className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-orange-500 mb-1">
              {lens === 'human' ? 'The Kitchen Chef' : 'Go Gin Application'}
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {lens === 'human' ? 'Cooks recipe normally' : 'Gin API Server (:8080)'}
            </h4>
            <div className="mt-3 p-2.5 rounded-xl bg-orange-500/10 text-orange-900 dark:text-orange-200 text-xs w-full text-left font-mono">
              {lens === 'human' ? (
                <>
                  💡 Chef has no clue Keploy exists. Chef just cooks and reaches into the pantry!
                </>
              ) : (
                <>
                  • Ingress: HTTP on port :8080
                  <br />
                  • Egress: TCP socket to MongoDB :27017
                </>
              )}
            </div>
          </div>

          {/* Node 3: Database / Pantry */}
          <div className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all text-center shadow-xs ${
            mode === 'record'
              ? 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80'
              : 'border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20'
          }`}>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${
              mode === 'record'
                ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                : 'bg-emerald-500/15 text-emerald-500'
            }`}>
              <Database className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-1">
              {lens === 'human'
                ? (mode === 'record' ? 'The Real Grocery Pantry' : 'Keploy Stunt Double')
                : (mode === 'record' ? 'Live MongoDB (:27017)' : 'Virtual Mock Engine')}
            </span>
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {lens === 'human'
                ? (mode === 'record' ? 'Pantry is open & stocked' : 'Pantry is LOCKED / SHUT!')
                : (mode === 'record' ? 'MongoDB stores document' : 'mocks.yaml served directly')}
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {lens === 'human'
                ? (mode === 'record'
                    ? 'Chef grabs salt & tomato. Keploy writes down the exact pinch size.'
                    : 'The pantry is closed! Keploy hands the chef pre-measured spice packets.')
                : (mode === 'record'
                    ? 'MongoDB handles query; Keploy records raw wire protocol response.'
                    : 'MongoDB container is STOPPED. Keploy answers TCP sockets with recorded BSON.')}
            </p>
          </div>

        </div>

        {/* Narrative Banner below diagram */}
        <div className={`mt-6 p-4.5 rounded-2xl border text-xs sm:text-sm leading-relaxed transition-all ${
          mode === 'record'
            ? 'border-orange-500/30 bg-orange-500/5 text-slate-800 dark:text-orange-100'
            : 'border-emerald-500/30 bg-emerald-500/5 text-slate-800 dark:text-emerald-100'
        }`}>
          {lens === 'human' ? (
            mode === 'record' ? (
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-orange-600 dark:text-orange-400">The Secret Recipe Scribe:</strong> In Record Mode, you simply use your application like normal. Keploy acts like an invisible assistant standing behind the chef, quietly recording what ingredients were used and what was served. You get automated tests without writing a single line of test code!
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-emerald-600 dark:text-emerald-400">The Kitchen Stunt Double:</strong> In Test Mode, we literally lock the pantry door (shut off MongoDB). When the chef reaches for ingredients, Keploy hands over the exact recorded ingredients in milliseconds. The recipe cooks identically, proving your code works even when the database is completely offline!
                </div>
              </div>
            )
          ) : (
            mode === 'record' ? (
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
            )
          )}
        </div>
      </div>
    </div>
  );
}
