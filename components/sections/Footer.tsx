'use client';

import Logo from '../Logo';

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-10">
        <div className="flex items-center gap-4">
          <Logo height={44} />
          <div>
            <div className="font-display text-2xl tracking-tight text-ivory">
              Clg<span className="text-chilli">Bites</span>
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-muted">
              Made in Mandadam · Delivered from Vijayawada
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
          <a href="mailto:hello@clgbites.app" className="cursor-pointer hover:text-ivory transition-colors">
            hello@clgbites.app
          </a>
          <span aria-hidden="true">·</span>
          <span>VIT-AP hostellers only</span>
          <span aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} ClgBites</span>
        </div>
      </div>
    </footer>
  );
}
