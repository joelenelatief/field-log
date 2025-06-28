import type { Metadata } from 'next';
import './globals.css';
import AppLayout from '@/components/Layout';
import {
  inter,
  robotoMono,
  halTimezone,
  neueHaasDisplay,
  abcRomMono,
} from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Field Log',
  description: 'Documenting history, craft, and heritage through storytelling',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${neueHaasDisplay.variable} ${halTimezone.variable} ${abcRomMono.variable}`}
    >
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
