import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0066ff',
          700: '#0052cc',
          800: '#003d99',
          900: '#002966',
        },
        navy: {
          800: '#11192e',
          900: '#0b1329',
          950: '#060a17',
        },
        surface: {
          light: '#f8fafc',
          subtle: '#f1f5f9',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 102, 255, 0.08), 0 20px 40px -15px rgba(11, 19, 41, 0.05)',
        'glow': '0 0 40px rgba(0, 102, 255, 0.25)',
        'glass': '0 8px 32px 0 rgba(11, 19, 41, 0.06)',
      }
    },
  },
  plugins: [],
};
export default config;
