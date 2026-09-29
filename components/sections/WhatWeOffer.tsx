'use client';

import { motion } from 'framer-motion';

const items = [
  {
    tag: '01',
    title: '₹10 delivery',
    body: 'Flat. Non-negotiable. It costs the same to bring you dinner as it does to bring you a chai.',
    accent: 'chilli',
  },
  {
    tag: '02',
    title: 'No platform fee',
    body: 'We don’t skim a rupee off the top for the privilege of pressing a button.',
    accent: 'saffron',
  },
  {
    tag: '03',
    title: 'No GST games',
    body: 'The tax is on the food, not on the fees stacked on the food. It is that simple.',
    accent: 'chilli',
  },
  {
    tag: '04',
    title: 'Mandadam + Vijayawada',
    body: 'Kitchens next door and the ones 25 km away. One app, both worlds.',
    accent: 'saffron',
  },
  {
    tag: '05',
    title: 'Made by hostellers',
    body: 'Built here in the same block you’re ordering from. Feedback reaches us in under a minute.',
    accent: 'chilli',
  },
  {
    tag: '06',
    title: 'Word-of-mouth pricing',
    body: 'More orders means more restaurants sign on. You bring the volume, we bring the range.',
    accent: 'saffron',
  },
];

export default function WhatWeOffer() {
  return (
    <section className="relative bg-surface py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 md:mb-20">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-chilli" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted">Chapter 05 · What you get</span>
          </div>
          <h2 className="max-w-3xl font-display text-5xl leading-[0.95] text-ivory md:text-6xl">
            The whole promise, in
            <br />
            <span className="text-chilli">six honest lines.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-ivory/10 bg-ink p-6 transition-colors duration-300 hover:border-ivory/25 md:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted">{it.tag}</div>
                <div className={`h-2 w-2 rounded-full ${it.accent === 'chilli' ? 'bg-chilli' : 'bg-saffron'}`} />
              </div>
              <h3 className="mt-10 font-display text-3xl leading-tight text-ivory md:text-4xl">
                {it.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{it.body}</p>
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30 ${
                  it.accent === 'chilli' ? 'bg-chilli' : 'bg-saffron'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
