'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useRef } from 'react';

type ParallaxImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  intensity?: number; // 0 = still, 1 = strong parallax
  overlay?: ReactNode;
  priority?: boolean;
};

/** Full-bleed background image that translates slower than the scroll. */
export function ParallaxImage({
  src,
  alt,
  className = '',
  intensity = 0.25,
  overlay,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const shift = intensity * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`-${shift / 2}%`, `${shift / 2}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[15%] h-[130%] will-change-transform">
        <Image
          src={src as string}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {overlay}
    </div>
  );
}

/** Parallax the children (foreground text) upward as user scrolls into view. */
export function ParallaxFore({
  children,
  intensity = 0.15,
  className = '',
}: {
  children: ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const shift = intensity * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`${shift / 2}%`, `-${shift / 2}%`]);
  return (
    <motion.div ref={ref} style={{ y }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  );
}

export function useSectionProgress(): { ref: React.RefObject<HTMLDivElement | null>; scrollYProgress: MotionValue<number> } {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  return { ref, scrollYProgress };
}
