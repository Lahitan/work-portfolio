'use client';

import { MessageSquare, ListChecks, Sparkles, Handshake } from 'lucide-react';

const howIWork = [
  {
    icon: <MessageSquare className="w-8 h-8 text-[#FF6B6B]" />,
    title: 'Clear communication',
    description:
      'I share progress early, ask good questions, and keep updates simple — so there are no surprises.',
    bullets: [
      'Async-friendly updates',
      'Writes clear notes',
      'Flags risks early',
    ],
  },
  {
    icon: <ListChecks className="w-8 h-8 text-[#FF6B6B]" />,
    title: 'User-first execution',
    description:
      'I build interfaces that are understandable and accessible, especially forms and content-heavy pages.',
    bullets: [
      'Accessible UI patterns',
      'Helpful empty/error states',
      'Mobile-first layout',
    ],
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#FF6B6B]" />,
    title: 'Quality and polish',
    description:
      'I care about clean components, consistent styling, and small details that make products feel reliable.',
    bullets: [
      'Reusable components',
      'Consistent spacing/type',
      'Clean states + edge cases',
    ],
  },
  {
    icon: <Handshake className="w-8 h-8 text-[#FF6B6B]" />,
    title: 'Team collaboration',
    description:
      'I work well with designers and engineers — translating requirements into shippable UI with feedback loops.',
    bullets: [
      'Figma → implementation',
      'Iterative reviews',
      'Owns tasks end-to-end',
    ],
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="px-6 py-20 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            How I Work
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Remote-friendly, user-focused, and easy to collaborate with. I care
            about clarity in both UI and communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howIWork.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition hover:-translate-y-1 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FF6B6B]/10">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {item.title}
              </h3>

              <p className="text-foreground/70 leading-relaxed mb-5">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF6B6B]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Optional mini CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-foreground/70">
            Want a quick overview of my experience and projects?
          </p>
          <a
            href="#contact"
            className="inline-flex mt-3 items-center justify-center px-6 py-3 rounded-xl bg-[#FF6B6B] text-white font-medium shadow-md hover:shadow-lg transition"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
