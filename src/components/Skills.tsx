'use client';

import { useMemo, useState } from 'react';
import {
  Code2,
  Paintbrush,
  Terminal,
  Layout,
  FileDown,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

type SkillGroup = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
};

export default function Skills() {
  const groups: SkillGroup[] = useMemo(
    () => [
      {
        key: 'frontend',
        title: 'Frontend Fundamentals',
        description: 'Clean UI, and predictable component structure.',
        icon: <Code2 className="w-6 h-6" />,
        items: [
          'React, Next.js',
          'JavaScript (ES6+), basic TypeScript',
          'Tailwind CSS, responsive layout',
        ],
      },
      {
        key: 'UX & Accessibility',
        title: 'UX thinking & Accessibility',
        description:
          'Building real pages, that is accessible and user-friendly.',
        icon: <Layout className="w-6 h-6" />,
        items: [
          'Semantic HTML and ARIA basics',
          'Accessible forms & components',
          'UX writing for interfaces',
        ],
      },
      {
        key: 'Workflow',
        title: 'Work flow Implementation',
        description: 'Implementing consistent workflows and UI patterns.',
        icon: <Paintbrush className="w-6 h-6" />,
        items: [
          'Git & GitHub',
          'Figma handoff',
          'Remote collaboration best practices',
        ],
      },
      {
        key: 'seo',
        title: 'Performance & Technical SEO',
        description:
          'Shipping pages that load fast and communicate clearly to search engines.',
        icon: <Sparkles className="w-6 h-6" />,
        items: [
          'Core Web Vitals awareness (LCP/CLS basics)',
          'Metadata, titles, descriptions, canonical basics',
          'Image optimization + sensible loading',
        ],
      },
    ],
    [],
  );

  const [activeKey, setActiveKey] = useState(groups[0]?.key ?? 'frontend');
  const active = groups.find((g) => g.key === activeKey) ?? groups[0];

  return (
    <section id="skills" className="px-6 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-heading font-bold text-[#4A4A4A]">
            Skills
          </h2>
          <p className="mt-3 text-base text-[#4A4A4A]/80 max-w-2xl mx-auto">
            I focus on shipping clear, accessible UI — and communicating
            decisions so teams can move fast.
          </p>
        </div>

        {/* Product-like layout */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-6">
          {/* Left: tabs */}
          <div className="rounded-2xl border border-black/5 bg-[#FAF9F6] p-3 shadow-sm">
            <div className="grid gap-2">
              {groups.map((g) => {
                const isActive = g.key === activeKey;
                return (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => setActiveKey(g.key)}
                    className={[
                      'w-full text-left rounded-xl p-4 transition',
                      'border border-transparent',
                      isActive
                        ? 'bg-white shadow-sm border-black/10'
                        : 'hover:bg-white/60',
                    ].join(' ')}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={[
                          'inline-flex items-center justify-center rounded-xl w-10 h-10',
                          isActive
                            ? 'bg-[#E85C5C]/10 text-[#E85C5C]'
                            : 'bg-black/5 text-[#4A4A4A]',
                        ].join(' ')}
                      >
                        {g.icon}
                      </span>
                      <div>
                        <p className="font-semibold text-[#4A4A4A]">
                          {g.title}
                        </p>
                        <p className="text-sm text-[#4A4A4A]/70">
                          {g.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: details */}
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-[#4A4A4A]">
                  {active.title}
                </h3>
                <p className="mt-2 text-[#4A4A4A]/75">{active.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-[#4A4A4A]/80 mb-3">
                What I can do
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {active.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[#4A4A4A]/85"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#E85C5C]" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA row */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-sm text-[#4A4A4A]/75">
                Want the full overview? Download my CV.
              </div>

              <Link
                href="/Frontend Developer Tawakalitu Omoloja.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E85C5C] text-white font-medium shadow-sm hover:shadow-md transition"
              >
                <FileDown className="w-5 h-5" />
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
