import { inter, robotoMono, neueHaasDisplay } from '@/lib/fonts';
import './globals.css';

export const metadata = {
  title: 'Field Log',
  description: 'Field Log Application',
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
