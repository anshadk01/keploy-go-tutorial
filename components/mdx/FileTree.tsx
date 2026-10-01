'use client';

import React, { useState } from 'react';
import { FolderOpen, FileText, Check, Copy } from 'lucide-react';

export function FileTree() {
  const [selectedFile, setSelectedFile] = useState<'test1' | 'mocks' | 'config'>('test1');
  const [copied, setCopied] = useState(false);

  const fileContents = {
    test1: {
      path: 'keploy/test-set-0/tests/test-1.yaml',
      desc: 'Real Keploy v2 HTTP test artifact. Contains recorded request payload, expected response, status 200, and automatic noise filters for body.ts and header.Date.',
      content: `version: api.keploy.io/v1beta1
kind: Http
name: test-1
spec:
  metadata: {}
  req:
    method: POST
    proto_major: 1
    proto_minor: 1
    url: http://localhost:8080/url
    header:
      Accept: '*/*'
      Content-Type: application/json
      Host: localhost:8080
      User-Agent: curl/7.88.1
    body: |-
      {
        "url": "https://google.com"
      }
    timestamp: 2024-06-21T09:54:45.17856559+05:30
  resp:
    status_code: 200
    header:
      Content-Type: application/json; charset=utf-8
      Date: Fri, 21 Jun 2024 04:24:45 GMT
    body: '{"ts":1718943885198315028,"url":"http://localhost:8080/Lhr4BWAi"}'
    status_message: OK
    proto_major: 0
    proto_minor: 0
    timestamp: 2024-06-21T09:54:47.258858256+05:30
  objects: []
  assertions:
    noise:
      body.ts: []
      header.Date: []
  created: 1718943887
curl: |-
  curl --request POST \
    --url http://localhost:8080/url \
    --header 'Content-Type: application/json' \
    --data '{"url": "https://google.com"}'`,
    },
    mocks: {
      path: 'keploy/test-set-0/mocks.yaml',
      desc: 'Real Keploy v2 MongoDB egress mock artifact. Captures binary wire protocol OpMsg (opcode 2013) interactions between mongo-go-driver and MongoDB server.',
      content: `version: api.keploy.io/v1beta1
kind: Mongo
name: mock-1
spec:
  metadata:
    operation: '{ OpMsg flags: 0, sections: [{ SectionSingle msg: {"update":"url-shortener","ordered":true,"writeConcern":{"w":"majority"},"$db":"keploy"} }, { SectionSingle identifier: updates , msgs: [ {"q":{"_id":"Lhr4BWAi"},"u":{"$set":{"_id":"Lhr4BWAi","url":"https://google.com"}},"upsert":true} ] }] }'
  requests:
    - header:
        length: 301
        requestId: 5
        responseTo: 0
        Opcode: 2013
      message:
        flagBits: 0
        sections:
          - '{ SectionSingle msg: {"update":"url-shortener","ordered":true,"$db":"keploy"} }'
          - '{ SectionSingle identifier: updates , msgs: [ {"q":{"_id":"Lhr4BWAi"},"u":{"$set":{"url":"https://google.com"}},"upsert":true} ] }'
        checksum: 0
      read_delay: 37290
  responses:
    - header:
        length: 112
        requestId: 10
        responseTo: 5
        Opcode: 2013
      message:
        flagBits: 0
        documents:
          - '{"n":{"$numberInt":"1"},"nModified":{"$numberInt":"0"},"upserted":[{"index":{"$numberInt":"0"},"_id":"Lhr4BWAi"}],"ok":{"$numberDouble":"1.0"}}'
      read_delay: 15402
  created: 1718943885`,
    },
    config: {
      path: 'keploy.yml',
      desc: 'Keploy configuration file configuring global test delays, port filters, and container networks.',
      content: `test:
  path: "./keploy"
  appCmd: "go run main.go handler.go"
  delay: 10
  port: 8080
  ignoreOrdering: true
  passThrough: []
record:
  path: "./keploy"
  filters: []`,
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
                    onClick={() => setSelectedFile('test1')}
                    className={`flex items-center gap-1.5 w-full text-left px-2 py-1.5 rounded-lg transition-all ${
                      selectedFile === 'test1'
                        ? 'bg-orange-500/15 text-orange-600 dark:text-orange-400 font-semibold ring-1 ring-orange-500/30'
                        : 'hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                    <span>test-1.yaml</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedFile('mocks')}
                  className={`flex items-center gap-1.5 w-full text-left px-2 py-1.5 rounded-lg transition-all ${
                    selectedFile === 'mocks'
                      ? 'bg-orange-500/15 text-orange-600 dark:text-orange-400 font-semibold ring-1 ring-orange-500/30'
                      : 'hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400'
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
                onClick={() => setSelectedFile('config')}
                className={`flex items-center gap-1.5 w-full text-left px-2 py-1.5 rounded-lg transition-all ${
                  selectedFile === 'config'
                    ? 'bg-orange-500/15 text-orange-600 dark:text-orange-400 font-semibold ring-1 ring-orange-500/30'
                    : 'hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400'
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
