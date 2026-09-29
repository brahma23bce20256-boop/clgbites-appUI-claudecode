'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IMG } from '@/lib/config';
import { ParallaxImage } from '../Parallax';

export default function VijayawadaLeap() {
  return (
    <section className="relative bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-chilli" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted">Chapter 04 · The Leap</span>
            </div>
            <h2 className="font-display text-5xl leading-[0.95] text-ivory md:text-6xl">
              Then Mandadam
              <br />
              wasn&rsquo;t enough.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          {/* wide shot */}
          <div className="md:col-span-8">
            <ParallaxImage
              src={IMG.vijayawada}
              alt="Vijayawada at dusk — kadhai smoke and neon reflecting on wet asphalt."
              className="aspect-[16/10] w-full rounded-2xl"
              intensity={0.3}
              overlay={
                <>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory md:bottom-10 md:left-10 md:right-10">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.35em] text-muted">Vijayawada</div>
                      <div className="mt-1 font-display text-2xl md:text-4xl">The city of victory</div>
                    </div>
                    <div className="rounded-full border border-ivory/20 bg-ivory/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-ivory backdrop-blur">
                      25 km · one way
                    </div>
                  </div>
                </>
              }
            />
          </div>

          {/* close-up + pull quote */}
          <div className="flex flex-col gap-6 md:col-span-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src={IMG.restaurant}
                alt="Ultra close-up — a hand pressing biryani rice down into a foil box, ghee catching the light."
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-ivory/10 bg-surface p-6 md:p-8"
            >
              <div className="font-display text-3xl leading-tight text-ivory md:text-4xl">
                &ldquo;Risk lenidey,
                <br />
                <span className="text-chilli">rusk ledu.</span>&rdquo;
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">
                — an old dialogue, a new turning point
              </div>
            </motion.blockquote>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-3xl text-center text-base leading-relaxed text-muted md:text-lg"
        >
          25 km each way. Three restaurants to start. A promise that the taste worth queueing
          for in the city would now arrive at your hostel door — for the same ten rupees.
        </motion.p>
      </div>
    </section>
  );
}
