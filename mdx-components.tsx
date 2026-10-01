import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { TerminalBlock } from "@/components/mdx/TerminalBlock";
import { ArchitectureDiagram } from "@/components/mdx/ArchitectureDiagram";
import { Tabs, Tab } from "@/components/mdx/Tabs";
import { FileTree } from "@/components/mdx/FileTree";
import { QuickstartProgress } from "@/components/mdx/QuickstartProgress";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom MDX widgets
    Callout,
    CodeBlock,
    TerminalBlock,
    ArchitectureDiagram,
    Tabs,
    Tab,
    FileTree,
    QuickstartProgress,

    // HTML Element Mappings for pristine typography
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ id, children }) => (
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-12 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800 scroll-mt-24 group flex items-center justify-between"
      >
        <span>{children}</span>
        {id && (
          <a
            href={`#${id}`}
            className="opacity-0 group-hover:opacity-100 text-orange-500 text-sm ml-2 transition-opacity"
            aria-label="Link to section"
          >
            #
          </a>
        )}
      </h2>
    ),
    h3: ({ id, children }) => (
      <h3
        id={id}
        className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-8 mb-3 scroll-mt-24"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 text-slate-700 dark:text-slate-300 my-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 space-y-2 text-slate-700 dark:text-slate-300 my-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 space-y-2 text-slate-700 dark:text-slate-300 my-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-7 text-slate-700 dark:text-slate-300">
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900 dark:text-white">
        {children}
      </strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500 pl-4 py-1 italic my-4 text-slate-600 dark:text-slate-400 bg-orange-50/30 dark:bg-orange-950/10 rounded-r-xl">
        {children}
      </blockquote>
    ),
    hr: () => (
      <hr className="my-8 border-slate-200 dark:border-slate-800" />
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-left text-sm">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 bg-slate-100 dark:bg-slate-900 font-semibold text-slate-900 dark:text-white">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 border-t border-slate-200 dark:border-slate-800/60 text-slate-700 dark:text-slate-300">
        {children}
      </td>
    ),
    ...components,
  };
}
