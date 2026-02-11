import { useState } from 'react';

export default function TechJourney() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-6  font-sans text-foreground leading-relaxed">
      {/* Always visible part */}
      <p>
        I am <strong>TAWAKALITU OMOLOJA</strong>, I’m a frontend developer with
        a strong interest in usability, accessibility, and clear communication.
        I work primarily with{' '}
        <strong> React, Next.js, Tailwind CSS, and modern JavaScript</strong> to
        build responsive, accessible websites and small web applications.
      </p>
      <p>
        I’m especially drawn to projects where clarity matters, forms,
        onboarding flows, content-heavy pages, and user-facing interactions.
      </p>
      Alongside development, I write about frontend concepts and accessibility,
      which helps me think carefully about how users experience interfaces, not
      just how they’re implemented. I work comfortably in remote teams, value
      clear documentation and feedback, and enjoy improving existing products as
      much as building new ones.
      <p></p>
      {/* Expandable content */}
      {expanded && (
        <>
          <p>
            Today, I see myself as a lifelong learner, always eager to improve,
            collaborate, and share knowledge. For me, tech isn&apos;t just a
            career; it&apos;s a craft I continue to refine.
          </p>

          {/* Highlight Skills */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-xl shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Technical Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>HTML, CSS, Tailwind CSS</li>
                <li>JavaScript, TypeScript</li>
                <li>React, Next.js</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Beyond Code
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Project Management</li>
                <li>Collaboration & Mentorship</li>
                <li>Continuous Learning</li>
                <li>Personal Development Advocacy</li>
              </ul>
            </div>
          </div>
        </>
      )}
      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[#FF6B6B] font-semibold hover:underline"
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}
