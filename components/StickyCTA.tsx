'use client';

import { motion } from 'framer-motion';
import { PLAY_STORE_URL } from '@/lib/config';

export default function StickyCTA() {
  return (
    <motion.a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="group fixed bottom-4 right-4 z-[60] flex cursor-pointer items-center gap-3 rounded-full bg-ivory px-5 py-3 text-ink shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] ring-1 ring-black/10 transition-colors duration-200 hover:bg-chilli hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chilli focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:bottom-6 md:right-6 md:px-6 md:py-4"
      aria-label="Download ClgBites on the Google Play Store"
    >
      <svg viewBox="0 0 512 512" className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-medium tracking-[0.2em] opacity-70">GET IT ON</span>
        <span className="text-sm font-semibold tracking-tight md:text-base">Google Play</span>
      </div>
    </motion.a>
  );
}
