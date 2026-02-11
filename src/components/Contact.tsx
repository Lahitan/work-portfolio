'use client';

import { useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Status = '' | 'SUCCESS' | 'ERROR';

export default function Contact() {
  const formId = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [status, setStatus] = useState<Status>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // simple client-side validation message
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg('');

    const form = e.currentTarget;

    // ✅ Basic client-side checks (helps UX + a11y)
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name) {
      setErrorMsg('Please enter your name.');
      nameRef.current?.focus();
      return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      emailRef.current?.focus();
      return;
    }
    if (!message) {
      setErrorMsg('Please enter a message.');
      messageRef.current?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xyzdooog', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch {
      setStatus('ERROR');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 4000);
    }
  }

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const messageId = `${formId}-message`;
  const helpId = `${formId}-help`;
  const errorId = `${formId}-error`;

  return (
    <section className="px-6 py-16 text-center relative" id="contact">
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
        Contact
      </h2>
      <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
        If you’re hiring for a remote frontend role (or need UX/technical
        writing support), send me a message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-foreground/10 p-8 rounded-2xl shadow-md space-y-6 text-left"
        aria-describedby={helpId}
        noValidate
      >
        <p id={helpId} className="text-sm text-foreground/70">
          Fields marked with <span aria-hidden="true">*</span> are required.
        </p>

        {/* ✅ Inline error region (announced) */}
        {errorMsg && (
          <div
            id={errorId}
            role="alert"
            className="rounded-xl border border-red-600/20 bg-red-50 p-4 text-red-900"
          >
            {errorMsg}
          </div>
        )}

        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor={nameId}
            className="block text-sm font-medium text-foreground"
          >
            Name{' '}
            <span className="text-[#FF6B6B]" aria-hidden="true">
              *
            </span>
          </label>
          <input
            ref={nameRef}
            id={nameId}
            type="text"
            name="name"
            autoComplete="name"
            required
            aria-invalid={Boolean(
              errorMsg && errorMsg.toLowerCase().includes('name'),
            )}
            aria-describedby={errorMsg ? errorId : helpId}
            className="w-full px-4 py-3 border border-black/10 rounded-lg bg-white dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B]"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor={emailId}
            className="block text-sm font-medium text-foreground"
          >
            Email{' '}
            <span className="text-[#FF6B6B]" aria-hidden="true">
              *
            </span>
          </label>
          <input
            ref={emailRef}
            id={emailId}
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(
              errorMsg && errorMsg.toLowerCase().includes('email'),
            )}
            aria-describedby={errorMsg ? errorId : helpId}
            className="w-full px-4 py-3 border border-black/10 rounded-lg bg-white dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B]"
            placeholder="you@example.com"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor={messageId}
            className="block text-sm font-medium text-foreground"
          >
            Message{' '}
            <span className="text-[#FF6B6B]" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            ref={messageRef}
            id={messageId}
            name="message"
            required
            rows={5}
            aria-invalid={Boolean(
              errorMsg && errorMsg.toLowerCase().includes('message'),
            )}
            aria-describedby={errorMsg ? errorId : helpId}
            className="w-full px-4 py-3 border border-black/10 rounded-lg bg-white dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B]"
            placeholder="Tell me about the role, product, and timeline."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={[
            'w-full md:w-1/2 py-3 rounded-lg font-semibold transition',
            'focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:ring-offset-2',
            isSubmitting
              ? 'bg-[#E85C5C]/60 text-white cursor-not-allowed'
              : 'bg-[#E85C5C] text-white hover:bg-[#e55b5b] cursor-pointer',
          ].join(' ')}
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      {/* ✅ Toast: make it screen-reader friendly */}
      <AnimatePresence>
        {status && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.35 }}
            className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-lg text-white font-medium ${
              status === 'SUCCESS' ? 'bg-green-800' : 'bg-red-800'
            }`}
            role="status"
            aria-live="polite"
          >
            {status === 'SUCCESS'
              ? 'Message sent successfully.'
              : 'Something went wrong. Please try again.'}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
