'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { IMG } from '@/lib/config';

export default function Vision() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-x-0 -top-[10%] h-[130%] will-change-transform"
      >
        <Image
          src={IMG.vision}
          alt="Two students at a hostel corridor window, phones lit, the corridor lights already dim — the end of a chapter."
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_60%,transparent,rgba(11,11,15,0.9))]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-chilli" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted">Chapter 06 · Still ahead</span>
            <div className="h-px w-10 bg-chilli" />
          </div>
          <h2 className="font-display text-[13vw] leading-[0.9] text-ivory md:text-[8vw]">
            It was all
            <br />
            <span className="text-chilli">a dream</span>
            <br />
            for me.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            We started for the money. We stayed for the calls at 1 a.m. from students who
            forgot to eat. For the restaurants who took a chance on two kids from Mandadam.
            For the version of this that we haven&rsquo;t built yet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
