'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

/**
 * 1.5s intro shown once per page load.
 * Plays /public/intro.mp4 (the ClgBites login animation).
 * If the video fails to load, the branded FallbackSplash renders in its place.
 */
const USE_VIDEO = true;
const DURATION_MS = 1500;

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [videoOk, setVideoOk] = useState(USE_VIDEO);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    const t = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.style.overflow = '';
    }, DURATION_MS);
    return () => {
      window.clearTimeout(t);
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink"
          aria-hidden="true"
        >
          {videoOk ? (
            <>
              {/* Bright glowing orange halo behind the centered video */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[85vmin] w-[85vmin] max-h-[720px] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.35),rgba(255,122,26,0.1)_45%,transparent_70%)] blur-3xl"
              />
              {/* Video is centered, contained (no crop), and responsive on every device */}
              <div className="relative z-10 flex items-center justify-center px-6">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onError={() => setVideoOk(false)}
                  className="h-auto max-h-[80vh] w-auto max-w-[88vw] rounded-2xl object-contain shadow-[0_30px_80px_-15px_rgba(255,122,26,0.55)] ring-1 ring-ivory/10 sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[640px] xl:max-w-[720px]"
                >
                  <source src="/intro.mp4" type="video/mp4" />
                </video>
              </div>
            </>
          ) : (
            <FallbackSplash />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FallbackSplash() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Bright glowing orange halo behind the logo — the brand color, brought forward */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[520px] max-w-[520px] -translate-x-1/2 -translate-y-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.55),rgba(255,122,26,0.15)_45%,transparent_70%)] blur-3xl"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <Image
          src="/clgbites-logo.png"
          alt=""
          width={220}
          height={130}
          priority
          className="h-auto w-[52vw] max-w-[280px] rounded-2xl shadow-[0_20px_80px_-10px_rgba(255,122,26,0.6)]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative mt-6 text-[10px] uppercase tracking-[0.5em] text-muted md:text-xs"
      >
        Vijayawada · Mandadam · VIT-AP
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformOrigin: 'left center' }}
        className="relative mt-6 h-[2px] w-40 bg-chilli md:w-56"
      />
    </div>
  );
}
