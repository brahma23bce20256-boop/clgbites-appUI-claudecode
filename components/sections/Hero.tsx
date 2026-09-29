'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { IMG, PLAY_STORE_URL } from '@/lib/config';
import Logo from '../Logo';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const foreY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-x-0 -top-[10%] h-[130%] will-change-transform"
      >
        <Image
          src={IMG.hero}
          alt="A brass tray of Vijayawada biryani, steam rising into a warm rim of light."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </motion.div>

      {/* Bright glowing orange stage light — the brand color pulled from the logo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-1/4 z-[1] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.55),rgba(255,122,26,0.15)_45%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[15%] bottom-[-10%] z-[1] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(255,184,107,0.35),transparent_70%)] blur-3xl"
      />

      {/* Top brand bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="pointer-events-auto flex items-center gap-3"
        >
          <Logo height={44} />
          <span className="font-display text-xl tracking-tight text-ivory md:text-2xl">
            Clg<span className="text-chilli">Bites</span>
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="hidden text-[10px] uppercase tracking-[0.4em] text-muted md:block"
        >
          Est. Mandadam · VIT-AP
        </motion.div>
      </div>

      {/* Center foreground — pt reserves header space so nothing can push
          up under the logo/wordmark on shorter viewports. */}
      <motion.div
        style={{ y: foreY, opacity: fadeOut }}
        className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-20 pt-28 will-change-transform md:px-16 md:pb-24 md:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.75, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-ivory/15 bg-ivory/5 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-chilli" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Live in Mandadam · Serving VIT-AP hostels
            </span>
          </div>
          <h1 className="font-display text-[12vw] leading-[0.92] text-ivory md:text-[5.6vw]">
            Vijayawada,
            <br />
            <span className="text-chilli">on your</span> hostel
            <br />
            doorstep.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
            ClgBites is the food delivery app built for VIT-AP students who are tired of paying
            more in fees than in food. <span className="text-ivory">₹10 delivery.</span> No
            platform fee. No GST games. Just the city of victory, boxed and brought home.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-chilli px-6 py-4 text-ink shadow-[0_20px_60px_-8px_rgba(255,122,26,0.75)] ring-1 ring-chilliDark transition-all duration-200 hover:bg-chilliDark hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <svg viewBox="0 0 512 512" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                />
              </svg>
              <span className="text-sm font-semibold tracking-tight md:text-base">Get on Google Play</span>
            </a>
            <a
              href="#story"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-ivory/20 bg-ivory/5 px-6 py-4 text-ivory backdrop-blur transition-colors duration-200 hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
            >
              <span className="text-sm font-medium tracking-tight md:text-base">Read our story</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue — hidden on mobile (sticky CTA is prominent there) and
          positioned left of the fixed Play Store pill so they never collide. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-ivory/40"
        />
      </motion.div>
    </section>
  );
}
