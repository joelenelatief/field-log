import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppLayout from '@/components/Layout';
import { inter, robotoMono, halTimezone, neueHaasDisplay } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Field Log',
  description: 'A curated chronicle of Latin American textile artisans',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${neueHaasDisplay.variable} ${halTimezone.variable}`}
    >
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
