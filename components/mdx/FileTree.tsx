"use client";

import React, { useState } from "react";
import { FolderOpen, FileText, Check, Copy } from "lucide-react";

export function FileTree() {
  const [selectedFile, setSelectedFile] = useState<"test1" | "mocks" | "config">("test1");
  const [copied, setCopied] = useState(false);

  const fileContents = {
    test1: {
      path: "keploy/test-set-0/tests/test-1.yaml",
      desc: "Stores the captured HTTP request payload, headers, and expected response body & status code.",
      content: `version: api.keploy.io/v1beta1
kind: Http
name: test-1
spec:
  metadata: {}
  req:
    method: POST
    proto_major: 1
    proto_minor: 1
    url: /url
    header:
      Content-Type: application/json
    body: '{"url":"https://keploy.io"}'
    timestamp: 2026-10-01T12:00:00Z
  resp:
    status_code: 201
    header:
      Content-Type: application/json; charset=utf-8
    body: '{"short_url":"http://localhost:8080/xyz123"}'
    status_message: Created
  objects: []
  assertions:
    noise:
      - header.Date
  created: 1727784000`,
    },
    mocks: {
      path: "keploy/test-set-0/mocks.yaml",
      desc: "Stores the exact MongoDB wire-protocol commands and documents returned by the database.",
      content: `version: api.keploy.io/v1beta1
kind: Mongo
name: mock-0
spec:
  metadata:
    type: config
  requests:
    - header:
        length: 85
        request_id: 12
        response_to: 0
        op_code: 2013
      message:
        insert: urls
        documents:
          - original_url: https://keploy.io
            short_url: xyz123
  responses:
    - header:
        length: 45
        request_id: 204
        response_to: 12
        op_code: 2013
      message:
        n: 1
        ok: 1`,
    },
    config: {
      path: "keploy.yml",
      desc: "Top-level configuration for Keploy test timeouts, ports, and noise patterns.",
      content: `test:
  path: "./keploy"
  appCmd: "go run main.go"
  delay: 5
  port: 8080
  ignoreOrdering: true
  passThrough: []`,
    },
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fileContents[selectedFile].content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
        
        {/* Left Column: Interactive Tree */}
        <div className="md:col-span-5 p-4 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Generated Artifacts Explorer
          </div>

          <div className="font-mono text-xs space-y-1 select-none">
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold py-1">
              <FolderOpen className="w-4 h-4 text-amber-500" />
              <span>keploy/</span>
            </div>

            <div className="pl-4 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold py-1">
                <FolderOpen className="w-4 h-4 text-amber-500" />
                <span>test-set-0/</span>
              </div>

              <div className="pl-4 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 py-1">
                  <FolderOpen className="w-3.5 h-3.5 text-amber-500/80" />
                  <span>tests/</span>
                </div>

                <div className="pl-4">
                  <button
                    type="button"
                    onClick={() => setSelectedFile("test1")}
                    className={`flex items-center gap-1.5 w-full text-left px-2 py-1.5 rounded-lg transition-all ${
                      selectedFile === "test1"
                        ? "bg-orange-500/15 text-orange-600 dark:text-orange-400 font-semibold ring-1 ring-orange-500/30"
                        : "hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                    <span>test-1.yaml</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedFile("mocks")}
                  className={`flex items-center gap-1.5 w-full text-left px-2 py-1.5 rounded-lg transition-all ${
                    selectedFile === "mocks"
                      ? "bg-orange-500/15 text-orange-600 dark:text-orange-400 font-semibold ring-1 ring-orange-500/30"
                      : "hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-purple-500" />
                  <span>mocks.yaml</span>
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedFile("config")}
                className={`flex items-center gap-1.5 w-full text-left px-2 py-1.5 rounded-lg transition-all ${
                  selectedFile === "config"
                    ? "bg-orange-500/15 text-orange-600 dark:text-orange-400 font-semibold ring-1 ring-orange-500/30"
                    : "hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400"
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-emerald-500" />
                <span>keploy.yml</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: File Content Preview */}
        <div className="md:col-span-7 flex flex-col bg-slate-950 text-slate-200">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
            <span className="font-mono text-slate-300 font-medium truncate">
              {fileContents[selectedFile].path}
            </span>
            <button
              onClick={handleCopy}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/60 text-[11px] text-slate-400">
            {fileContents[selectedFile].desc}
          </div>

          <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed flex-1">
            <pre className="m-0 p-0 text-amber-200/90 whitespace-pre">
              {fileContents[selectedFile].content}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}
