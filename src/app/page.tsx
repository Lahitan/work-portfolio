import Hero from '@/components/Hero';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Blogs from '@/components/Blogs';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CertificateShowcase from '@/components/certificateShowcase';
import HowIWork from '@/components/HowIWork';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Explore the portfolio of Omoloja Tawakalitu – Frontend Developer skilled in React, Tailwind, and Firebase. View projects, read blogs, and get in touch for collaborations.',
  openGraph: {
    title: 'Omoloja Tawakalitu – Frontend Developer',
    description:
      'Building beautiful, fast, and accessible websites using React & Tailwind CSS.',
    url: 'https://tawakalitu-omoloja-portfolio.vercel.app',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="certificates">
        <CertificateShowcase />
      </section>
      <section id="how-i-work">
        <HowIWork />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
