'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMG } from '@/lib/config';
import { ParallaxImage } from '../Parallax';

const fees = [
  { label: 'Food', amount: '₹120', muted: false },
  { label: 'Delivery', amount: '₹42', muted: true },
  { label: 'Platform fee', amount: '₹18', muted: true },
  { label: 'GST on the fees', amount: '₹11', muted: true },
  { label: 'Tip prompt', amount: '₹15', muted: true },
];

export default function Problem() {
  return (
    <section id="story" className="relative bg-ink py-24 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        {/* Left: chapter meta + juxtaposition receipt */}
        <div className="md:col-span-5">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-10 bg-chilli" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted">Chapter 01 · The Bill</span>
          </div>
          <h2 className="font-display text-5xl leading-[0.95] text-ivory md:text-6xl">
            Your food costs
            <br />
            <span className="text-chilli">less than</span> your bill.
          </h2>
          <p className="mt-6 max-w-md text-base text-muted md:text-lg">
            Every hosteller has seen this. A ₹120 order becomes ₹206 by the time it hits the
            gate. Delivery, platform, GST, a guilt-tip. Money you didn&rsquo;t come to college
            to spend.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 rounded-2xl border border-ivory/10 bg-surface p-6 md:p-8"
          >
            <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted">
              <span>Typical bill · elsewhere</span>
              <span>Hostel · Mandadam</span>
            </div>
            <ul className="divide-y divide-ivory/5">
              {fees.map((f) => (
                <li key={f.label} className="flex items-center justify-between py-3">
                  <span className={`text-sm ${f.muted ? 'text-muted line-through' : 'text-ivory'}`}>
                    {f.label}
                  </span>
                  <span className={`font-display text-lg ${f.muted ? 'text-muted line-through' : 'text-ivory'}`}>
                    {f.amount}
                  </span>
                </li>
              ))}
              <li className="flex items-center justify-between border-t border-ivory/15 pt-4">
                <span className="text-xs uppercase tracking-widest text-muted">You paid</span>
                <span className="font-display text-3xl text-ivory line-through">₹206</span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl bg-chilli/10 p-4 ring-1 ring-chilli/30">
              <div className="text-[10px] uppercase tracking-[0.3em] text-chilli">With ClgBites</div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="font-display text-3xl text-ivory">₹130</span>
                <span className="text-xs text-muted">₹120 food · ₹10 delivery · nothing else</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: single-image storytelling — decisive moment / hidden detail */}
        <div className="md:col-span-7">
          <ParallaxImage
            src={IMG.problem}
            alt="A student's palm counting out coins in the low light of a hostel hallway."
            className="aspect-[4/5] w-full rounded-2xl md:aspect-[3/4]"
            intensity={0.35}
            overlay={
              <>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                  <p className="max-w-sm text-sm leading-relaxed text-ivory/90 md:text-base">
                    &ldquo;My wallet was lighter than the bag they handed me.&rdquo;
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted">
                    — A hosteller, September
                  </p>
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
