'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IMG } from '@/lib/config';

export default function EightyParcels() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['20%', '-10%']);

  return (
    <section
      ref={ref}
      className="relative h-[110vh] w-full overflow-hidden bg-ink md:h-[120vh]"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-x-0 -top-[15%] h-[130%] will-change-transform"
      >
        <Image
          src={IMG.parcels}
          alt="A delivery rider stopped under a sodium streetlamp, four paper bags balanced on the tank."
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/10 to-ink/60" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 will-change-transform md:px-10"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-10 bg-chilli" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted">Chapter 03 · The Night</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[15vw] leading-[0.9] text-ivory md:text-[9vw]"
        >
          <span className="text-chilli">80</span> parcels.
          <br />
          One night.
        </motion.h2>
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="md:col-span-6 md:col-start-1 text-base leading-relaxed text-ivory/85 md:text-lg"
          >
            Four restaurants in Mandadam. Eighty biryanis to move before they went cold. We
            mixed up two orders. We were late to twelve. It should have been the night that
            ended it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="md:col-span-5 md:col-start-8 text-base leading-relaxed text-muted md:text-lg"
          >
            Nobody scolded us. They sat down with us instead and said,{' '}
            <span className="text-ivory">&ldquo;keep it up.&rdquo;</span> That was the night the
            website was born. Half the chaos, gone by morning.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
