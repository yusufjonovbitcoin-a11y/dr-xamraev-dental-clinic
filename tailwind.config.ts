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
        blue: {
          50: '#ecfdf9', 100: '#d0f7ee', 200: '#a5ecdf', 300: '#70dacb',
          400: '#3bbfaf', 500: '#169b8e', 600: '#0b7c73', 700: '#0a635d',
          800: '#0d4f4b', 900: '#0d423f', 950: '#062725',
        },
        brand: {
          50: '#ecfdf9', 100: '#d0f7ee', 200: '#a5ecdf', 300: '#70dacb',
          400: '#3bbfaf', 500: '#169b8e', 600: '#0b7c73', 700: '#0a635d',
          800: '#0d4f4b', 900: '#0d423f',
        },
        navy: {
          800: '#18313b',
          900: '#102932',
          950: '#081b22',
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
        'premium': '0 24px 70px -32px rgba(8, 27, 34, 0.28)',
        'glow': '0 0 40px rgba(11, 124, 115, 0.22)',
        'glass': '0 8px 32px 0 rgba(11, 19, 41, 0.06)',
      }
    },
  },
  plugins: [],
};
export default config;
