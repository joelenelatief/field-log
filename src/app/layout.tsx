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
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          async
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function($) {
                window.fnames = new Array(); 
                window.ftypes = new Array();
                fnames[0]='EMAIL';
                ftypes[0]='email';
                fnames[1]='FNAME';
                ftypes[1]='text';
                fnames[2]='LNAME';
                ftypes[2]='text';
                fnames[3]='ADDRESS';
                ftypes[3]='address';
                fnames[4]='PHONE';
                ftypes[4]='phone';
                fnames[5]='BIRTHDAY';
                ftypes[5]='birthday';
                fnames[6]='COMPANY';
                ftypes[6]='text';
              }(jQuery));
              var $mcj = jQuery.noConflict(true);
            `,
          }}
        />
      </body>
    </html>
  );
}
