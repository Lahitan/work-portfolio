'use client';

import Link from 'next/link';
import Image from 'next/image';

type Project = {
  title: string;
  tagline: string;
  image: string;
  stack: string[];
  role: string;
  problem: string;
  decisions: string[];
  outcome: string;
  caseStudySlug: string; // internal page
  liveUrl: string; // external
  repoUrl?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Interactive Credit Card',
      tagline:
        'A form experience that updates in real-time with clear feedback.',
      image: '/project-images/interactive card.PNG',
      stack: ['React', 'CSS', 'Accessibility'],
      role: 'Design + Frontend build',
      problem: 'Many forms fail because users only see errors after submit.',
      decisions: [
        'Validate as users type (not only on submit)',
        'Use clear, human error messages',
        'Keep focus states and labels accessible',
      ],
      outcome: 'A smoother form flow that’s easier to complete and understand.',
      caseStudySlug: '/case-studies/interactive-credit-card',
      liveUrl: 'https://interactive-assignment.netlify.app/',
    },
    {
      title: 'Web Fleet Website',
      tagline: 'A clean marketing-style site with consistent UI and structure.',
      image: '/project-images/web-fleet.PNG',
      stack: ['Next.js', 'Tailwind', 'TypeScript'],
      role: 'Frontend build',
      problem:
        'Portfolio sites often look polished but lack structure and clarity.',
      decisions: [
        'Use a consistent layout + spacing system',
        'Organize content for scan-friendly reading',
        'Keep components reusable and easy to extend',
      ],
      outcome:
        'A clear, calm layout that supports quick scanning and navigation.',
      caseStudySlug: '/case-studies/web-fleet',
      liveUrl: 'https://web-fleet-app.netlify.app/',
    },
    {
      title: 'Pleasure Park',
      tagline: 'A content-heavy page layout with visual hierarchy and flow.',
      image: '/project-images/plesure park.PNG',
      stack: ['HTML', 'CSS', 'JavaScript'],
      role: 'Frontend build',
      problem: 'Content pages can feel busy without clear hierarchy.',
      decisions: [
        'Create strong section structure with headings',
        'Use spacing and contrast to guide attention',
        'Make interactive elements obvious and consistent',
      ],
      outcome: 'A page that feels lively but still easy to navigate.',
      caseStudySlug: '/case-studies/pleasure-park',
      liveUrl: 'https://pleasure-park.netlify.app',
    },
  ];

  return (
    <section id="work" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Selected Work
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            A few projects where I focused on clarity, usability, and clean
            implementation — not just visuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="bg-white dark:bg-foreground/10 rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="p-6 text-left">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-black/5 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{p.tagline}</p>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Role</p>
                    <p className="text-foreground/70">{p.role}</p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">Problem</p>
                    <p className="text-foreground/70">{p.problem}</p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">Key decisions</p>
                    <ul className="mt-2 space-y-2">
                      {p.decisions.slice(0, 3).map((d) => (
                        <li key={d} className="flex gap-2 text-foreground/70">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF6B6B]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-foreground">Outcome</p>
                    <p className="text-foreground/70">{p.outcome}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={p.caseStudySlug}
                    className="inline-flex items-center text-[#FF6B6B] font-medium hover:underline"
                  >
                    Read case study →
                  </Link>

                  <Link
                    href={p.liveUrl}
                    target="_blank"
                    className="text-sm text-foreground/70 hover:text-foreground transition"
                  >
                    Live ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-foreground/70">
          Looking for code samples? I can share repos on request.
        </p>
      </div>
    </section>
  );
}
