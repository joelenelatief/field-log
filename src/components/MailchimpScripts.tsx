'use client';

import { useEffect } from 'react';

// Extend Window interface for Mailchimp and jQuery
interface WindowWithMailchimp extends Window {
  jQuery?: {
    noConflict: (removeAll?: boolean) => unknown;
  };
  fnames?: string[];
  ftypes?: string[];
  $mcj?: unknown;
}

export default function MailchimpScripts() {
  useEffect(() => {
    // Check if scripts are already loaded
    if (document.querySelector('script[src*="mc-validate.js"]')) {
      return;
    }

    // Load Mailchimp validation script
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    
    script.onload = () => {
      // Wait a bit for jQuery to be available, then initialize
      const initMailchimp = () => {
        const win = window as WindowWithMailchimp;
        if (typeof window !== 'undefined' && win.jQuery) {
          const jQueryObj = win.jQuery;
          // Initialize Mailchimp field types
          win.fnames = [];
          win.ftypes = [];
          win.fnames[0] = 'EMAIL';
          win.ftypes[0] = 'email';
          win.fnames[1] = 'FNAME';
          win.ftypes[1] = 'text';
          win.fnames[2] = 'LNAME';
          win.ftypes[2] = 'text';
          win.fnames[3] = 'ADDRESS';
          win.ftypes[3] = 'address';
          win.fnames[4] = 'PHONE';
          win.ftypes[4] = 'phone';
          win.fnames[5] = 'BIRTHDAY';
          win.ftypes[5] = 'birthday';
          win.fnames[6] = 'COMPANY';
          win.ftypes[6] = 'text';
          // Set up jQuery noConflict
          win.$mcj = jQueryObj.noConflict(true);
        } else {
          // Retry if jQuery not yet available
          setTimeout(initMailchimp, 100);
        }
      };
      initMailchimp();
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}

