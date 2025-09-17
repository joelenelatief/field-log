'use client';
import React, { useState } from 'react';
import { neueHaasDisplay, abcRomMono, halTimezone } from '@/lib/fonts';

interface NewsletterSignupProps {
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('u', '2891fcc7cdf1cd165d0de4b78');
      formData.append('id', 'fa64c5ebc3');
      formData.append('f_id', '005e1de1f0');
      // Honeypot field to prevent spam
      formData.append('b_2891fcc7cdf1cd165d0de4b78_fa64c5ebc3', '');

      await fetch(
        'https://field-log.us16.list-manage.com/subscribe/post?u=2891fcc7cdf1cd165d0de4b78&id=fa64c5ebc3&f_id=005e1de1f0',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors', // Required for Mailchimp
        }
      );

      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      console.error(error);
      setMessage('There was an error subscribing to the newsletter.');
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`border-t border-gray-200 bg-[#F6F7EF] px-8 py-12 ${className}`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2
            className={`mb-4 text-2xl font-bold text-black italic ${halTimezone.className}`}
          >
            [STAY CONNECTED]
          </h2>
          <p
            className={`mx-auto max-w-2xl text-gray-600 ${abcRomMono.className}`}
          >
            Sign up for updates on new releases, stories from the field, and
            exclusive content.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className={`w-full border-2 border-black bg-white px-4 py-3 text-black placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none ${abcRomMono.className}`}
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className={`border-2 border-black bg-black px-8 py-3 font-bold text-white transition-all duration-200 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50 ${neueHaasDisplay.className}`}
            >
              {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </button>
          </div>

          {message && (
            <div
              className={`mt-4 text-center text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-gray-600'} ${abcRomMono.className}`}
            >
              {message}
            </div>
          )}
        </form>

        <div className="mt-8 text-center">
          <p className={`text-xs text-gray-500 ${abcRomMono.className}`}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
