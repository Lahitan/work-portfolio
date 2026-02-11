import Link from 'next/link';
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden ">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xs opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xs opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-40 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xs opacity-60 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground/90">
          Frontend Developer focused on <br /> clear, accessible, real-world web
          experiences
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto font-sans text-foreground/80">
          I build and improve production-ready websites using React, Next.js,
          and thoughtful UX writing, so users understand what to do, and teams
          can ship with confidence.
        </p>

        <p className="mt-6 text-sm md:text-lg max-w-xl mx-auto font-sans text-foreground/80 bg-foreground/10 rounded-lg p-4">
          Open to remote roles: Frontend Developer · Website Developer · UX /
          Technical Writer
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="#projects"
            className="px-6 py-3 rounded-xl bg-[#D6C8FF] text-foreground font-sans font-medium shadow-md hover:bg-[#9e80fb] hover:text-white transition"
          >
            View selected work
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl bg-transperent border-2 border-[#D6C8FF] text-foreground font-sans font-medium shadow-md hover:bg-[#9e80fb] hover:text-white transition"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
