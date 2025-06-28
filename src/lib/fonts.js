import { Inter, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const halTimezone = localFont({
  src: [
    {
      path: '../fonts/HAL Timezone Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/HAL Timezone Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-hal-timezone',
});

export const neueHaasDisplay = localFont({
  src: [
    {
      path: '../fonts/Neue Haas Display Roman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Neue Haas Display Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Neue Haas Display Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas-display',
});

export const abcRomMono = localFont({
  src: [
    {
      path: '../fonts/ABCROMMono-Regular-Trial.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-abc-rom-mono',
});
