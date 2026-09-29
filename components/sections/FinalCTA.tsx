'use client';

import { motion } from 'framer-motion';
import { PLAY_STORE_URL } from '@/lib/config';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-48">
      {/* Bright glowing orange stage light — the brand color, brought forward. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_65%_at_50%_50%,rgba(255,122,26,0.38),rgba(255,122,26,0.08)_45%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_35%_at_50%_45%,rgba(255,184,107,0.35),transparent_70%)] mix-blend-screen" />
      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 text-[10px] uppercase tracking-[0.4em] text-muted">
            The rest of the story writes itself
          </div>
          <h2 className="font-display text-[14vw] leading-[0.9] text-ivory md:text-[8vw]">
            Bring
            <br />
            <span className="text-chilli">the city home.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-muted md:text-lg">
            One tap installs the app that VIT-AP hostellers built for themselves.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-ivory px-7 py-5 text-ink shadow-[0_25px_60px_-15px_rgba(248,245,238,0.4)] ring-1 ring-black/10 transition-colors duration-200 hover:bg-chilli hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chilli focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <svg viewBox="0 0 512 512" className="h-6 w-6" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                />
              </svg>
              <div className="flex flex-col leading-none text-left">
                <span className="text-[10px] font-medium tracking-[0.2em] opacity-70">GET IT ON</span>
                <span className="text-base font-semibold tracking-tight md:text-lg">Google Play</span>
              </div>
            </a>
            <a
              href="mailto:hello@clgbites.app"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ivory/20 bg-ivory/5 px-7 py-5 text-ivory backdrop-blur transition-colors duration-200 hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
            >
              <span className="text-sm font-medium tracking-tight md:text-base">Ask, question, suggest</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
