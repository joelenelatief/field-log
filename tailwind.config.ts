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
        field: {
          primary: '#1A1A1A',
          secondary: '#F5F5F5',
          accent: '#FFD700',
          text: '#333333',
          background: '#F6F7EF',
        },
        log: {
          primary: '#2C2C2C',
          secondary: '#E5E5E5',
          accent: '#FFA500',
          text: '#444444',
          background: '#F6F7EF',
        },
      },
    },
  },
  plugins: [],
};

export default config;
