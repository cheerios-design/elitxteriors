import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-slate-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 text-slate-800">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mb-3 text-slate-700">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-slate-600 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc text-slate-600">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal text-slate-600">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-500 pl-4 my-6 italic text-slate-700">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-emerald-700">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    ...components,
  };
}
