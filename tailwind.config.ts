import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0F',
        surface: '#14141B',
        surface2: '#1D1D26',
        ivory: '#F8F5EE',
        // Brand orange — brighter and glowing, not the muted logo bg.
        // `chilli` and `chilliDark` keep their names so component classes still work.
        chilli: '#FF7A1A',       // bright glowing orange (primary accent)
        chilliDark: '#E85A0C',   // hover / pressed
        chilliGlow: '#FFB86B',   // soft outer glow
        saffron: '#F5B027',      // warm secondary
        muted: '#A8A29E',
        mutedDark: '#78716C',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
