'use client';

import { motion } from 'framer-motion';
import CountUp from '../CountUp';

const days = [
  { day: 'Day 01', amount: 30, note: 'One order. One friend. A start.' },
  { day: 'Day 02', amount: 180, note: 'Word travelled two floors down.' },
  { day: 'Day 03', amount: 530, note: 'The block found us.' },
  { day: 'Day 04', amount: 1000, note: 'A four-digit day. We stopped counting for money.' },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-40">
      {/* Bright glowing orange wash — brand color, softly diffused */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_55%_at_15%_0%,rgba(255,122,26,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.18),transparent_70%)] blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-saffron" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted">Chapter 02 · The Ledger</span>
            </div>
            <h2 className="font-display text-5xl leading-[0.95] text-ivory md:text-6xl">
              We started for
              <br />
              <span className="text-saffron">the money.</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted md:block">
            The first four days of ClgBites. WhatsApp orders. Hand-written totals. A slow curve
            that suddenly wasn&rsquo;t slow.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {days.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col justify-between rounded-2xl border border-ivory/10 bg-surface p-5 md:p-8"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted">{d.day}</div>
              <div className="mt-8 md:mt-12">
                <div className="font-display text-4xl leading-none text-ivory md:text-6xl">
                  <CountUp to={d.amount} prefix="₹" duration={1400 + i * 200} />
                </div>
                <div className="mt-3 h-px w-8 bg-chilli" />
                <p className="mt-3 text-xs leading-relaxed text-muted md:text-sm">{d.note}</p>
              </div>
              <div className="pointer-events-none absolute right-4 top-4 font-display text-3xl text-ivory/5 md:text-5xl">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl leading-tight text-ivory md:mt-20 md:text-4xl"
        >
          Then the numbers stopped being the point.{' '}
          <span className="text-muted">A business had started building itself around us.</span>
        </motion.p>
      </div>
    </section>
  );
}
