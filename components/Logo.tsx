import Image from 'next/image';

type Props = {
  /** Rendered height in px. Width auto-scales to the logo's aspect ratio. */
  height?: number;
  className?: string;
  glow?: boolean;
};

// Intrinsic aspect ratio of clgbites-logo.png (≈ 504 × 270).
const LOGO_ASPECT = 504 / 270;

/**
 * ClgBites brand mark — displayed at the logo's true aspect ratio with
 * object-contain so the full "C" + "B" are always visible, no cropping.
 */
export default function Logo({ height = 40, className = '', glow = true }: Props) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {glow && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -m-2 rounded-2xl bg-[radial-gradient(circle,rgba(255,122,26,0.5),transparent_65%)] blur-md"
        />
      )}
      <span
        className="relative overflow-hidden rounded-2xl ring-2 ring-chilli/60"
        style={{ width, height }}
      >
        <Image
          src="/clgbites-logo.png"
          alt="ClgBites logo"
          fill
          sizes={`${width}px`}
          className="object-contain"
          priority
        />
      </span>
    </div>
  );
}
