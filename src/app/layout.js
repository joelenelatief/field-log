import { inter, robotoMono, neueHaasDisplay } from '@/lib/fonts';
import './globals.css';

export const metadata = {
  title: 'Field Log',
  description: 'Field Log Application',
  icons: {
    icon: '/favicon.png', // Reference the path to your favicon in public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`cursor-none ${inter.variable} ${robotoMono.variable} ${neueHaasDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
