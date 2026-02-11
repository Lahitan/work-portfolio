// app/case-studies/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  role: string;
  stack: string[];
  focus: string;
  liveUrl?: string;
  repoUrl?: string;

  problem: string[];
  approach: string[];
  decisions: string[];
  outcome: string[];

  // Optional extras
  lessons?: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'interactive-credit-card',
    title: 'Interactive Credit Card',
    subtitle:
      'A real-time form experience with clearer feedback and accessible structure.',
    coverImage: '/project-images/interactive card.PNG',
    role: 'Design + Frontend build',
    stack: ['React', 'JavaScript', 'CSS'],
    focus: 'Forms • UX writing • Accessibility',
    liveUrl: 'https://interactive-assignment.netlify.app/',

    problem: [
      'Many forms fail because users only see errors after clicking submit.',
      'This leads to confusion, repeated attempts, and frustration—especially on mobile.',
      'I wanted to explore how validation timing and copy can reduce form friction.',
    ],
    approach: [
      'Built a credit card form that updates in real-time as users type.',
      'Added progressive validation and formatting to guide input early.',
      'Kept interaction patterns predictable with clear focus states and labels.',
    ],
    decisions: [
      'Validate during input (not only on submit) to reduce “error stacking.”',
      'Use short, specific, human error messages instead of generic warnings.',
      'Treat accessibility as baseline: labels, tab order, and focus states.',
    ],
    outcome: [
      'The form feels guided rather than reactive.',
      'This project strengthened my thinking around feedback timing, error copy, and accessible interaction patterns.',
    ],
    lessons: [
      'Small UX writing changes can meaningfully reduce user uncertainty.',
      'Validation timing is a UX decision—not just a technical one.',
    ],
  },
  {
    slug: 'web-fleet',
    title: 'Web Fleet Website',
    subtitle:
      'A calm, structured marketing-style site designed for scanning and clarity.',
    coverImage: '/project-images/web-fleet.PNG',
    role: 'Frontend build',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    focus: 'Information hierarchy • Layout system • Component reuse',
    liveUrl: 'https://web-fleet-app.netlify.app/',

    problem: [
      'Many marketing/portfolio sites look polished but feel difficult to scan.',
      'Inconsistent hierarchy and spacing can make content feel noisy and unclear.',
      'I wanted to build a layout that prioritizes readability and structure.',
    ],
    approach: [
      'Created a simple layout system with consistent spacing and typography.',
      'Structured sections to be reusable and easy to extend.',
      'Kept visuals calm so content and hierarchy do the work.',
    ],
    decisions: [
      'Define a spacing + type rhythm so every section feels consistent.',
      'Use reusable section wrappers to reduce repetition and improve maintainability.',
      'Prioritize clarity over heavy animation or decorative UI.',
    ],
    outcome: [
      'The result is a clean layout that supports quick reading and navigation.',
      'This project improved my layout-system thinking, component reuse patterns, and content hierarchy decisions.',
    ],
  },
  {
    slug: 'insta-spot',
    title: 'Insta Spot',
    subtitle:
      'A small app-like UI exploring state, interaction, and predictable flows.',
    coverImage: '/project-images/insta-spot.PNG',
    role: 'Frontend build',
    stack: ['React', 'JavaScript', 'CSS'],
    focus: 'UI state • Interaction flow • Empty states',
    liveUrl: 'https://insta-spot-assignment.netlify.app/',

    problem: [
      'Small “app” projects often break down when UI state isn’t structured well.',
      'Without clear interaction patterns and empty states, apps feel confusing.',
      'I wanted to practice building a predictable flow without backend complexity.',
    ],
    approach: [
      'Structured UI into clear sections with consistent interaction patterns.',
      'Managed app state carefully so components remain understandable.',
      'Added empty states so users always know what to do next.',
    ],
    decisions: [
      'Separate UI presentation from state logic to keep components readable.',
      'Design empty states intentionally to guide users (not blank screens).',
      'Standardize UI patterns (buttons, spacing, cards) to reduce cognitive load.',
    ],
    outcome: [
      'The interface feels structured and predictable even as a small app.',
      'This strengthened my ability to manage UI state and build flows beyond static pages.',
    ],
  },
];

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Top nav */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#work"
            className="text-sm text-foreground/70 hover:underline"
          >
            ← Back to selected work
          </Link>

          {cs.liveUrl ? (
            <Link
              href={cs.liveUrl}
              target="_blank"
              className="text-sm text-foreground/70 hover:text-foreground transition"
            >
              View live ↗
            </Link>
          ) : null}
        </div>

        {/* Header */}
        <header className="mt-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            {cs.title}
          </h1>
          <p className="mt-3 text-foreground/70 max-w-2xl">{cs.subtitle}</p>

          {/* Quick facts */}
          <section className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-black/5 border border-black/5">
              <p className="text-xs text-foreground/70">Role</p>
              <p className="mt-1 font-medium text-foreground">{cs.role}</p>
            </div>
            <div className="p-4 rounded-2xl bg-black/5 border border-black/5">
              <p className="text-xs text-foreground/70">Stack</p>
              <p className="mt-1 font-medium text-foreground">
                {cs.stack.join(' · ')}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black/5 border border-black/5">
              <p className="text-xs text-foreground/70">Focus</p>
              <p className="mt-1 font-medium text-foreground">{cs.focus}</p>
            </div>
          </section>
        </header>

        {/* Cover */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm">
          <Image
            src={cs.coverImage}
            alt={`${cs.title} screenshot`}
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Body */}
        <section className="mt-12 space-y-12">
          <Section title="The problem" items={cs.problem} />
          <Section title="What I built / approach" items={cs.approach} />
          <Section title="Key decisions" items={cs.decisions} />
          <Section title="Outcome" items={cs.outcome} />

          {cs.lessons?.length ? (
            <Section title="What I learned" items={cs.lessons} />
          ) : null}

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            {cs.liveUrl ? (
              <Link
                href={cs.liveUrl}
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#FF6B6B] text-white font-medium shadow-sm hover:shadow-md transition"
              >
                View live project ↗
              </Link>
            ) : null}

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-black/10 text-foreground hover:bg-black/5 transition"
            >
              Contact me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((text) => (
          <li
            key={text}
            className="flex gap-3 text-foreground/75 leading-relaxed"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-[#FF6B6B]" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
