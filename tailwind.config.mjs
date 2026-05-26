/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // アラカク カラーパレット
        'ak-red': '#C0392B',
        'ak-dark': '#1a1a2e',
        'ak-darker': '#0f0f1a',
        'ak-gold': '#D4AC0D',
        'ak-silver': '#BDC3C7',
        'ak-accent': '#E74C3C',
      },
      fontFamily: {
        'heading': ['"Noto Sans JP"', 'sans-serif'],
        'body': ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
