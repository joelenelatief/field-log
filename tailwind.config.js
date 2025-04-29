/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        display: ['var(--font-neue-haas-display)'],
        hal: ['var(--font-hal-timezone)'],
      },
      colors: {
        'log-background': '#F6F7EF',
        'field-background': '#F6F7EF',
      },
    },
  },
  plugins: [],
};
