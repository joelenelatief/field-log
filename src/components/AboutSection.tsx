import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';

interface AboutSectionProps {
  className?: string;
  showFooter?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  className = '',
  showFooter = false,
}) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Mobile Image - Only visible on mobile */}
      <div className="mb-6 block lg:hidden">
        <Image
          src="/images/field_log_book.png"
          alt="Field Log Book"
          width={400}
          height={300}
          className="h-auto w-full rounded-sm object-cover"
          priority
        />
      </div>

      {/* Company Description */}
      <div>
        <p
          className={`text-sm leading-relaxed text-gray-800 ${neueHaasDisplay.className}`}
        >
          <span className="font-semibold text-black">FIELD LOG </span>
          {'  '}
          develop projects that honor culture, history, craft, and heritage
          through storytelling — our mediums being:{' '}
        </p>
        <ul className="mt-4 ml-4 list-disc space-y-2 text-xs text-gray-700">
          <li>
            <span className={`italic ${halTimezone.className}`}>voice</span>{' '}
            (conversation, oral history, interviews)
          </li>
          <li>
            <span className={`italic ${halTimezone.className}`}>words</span>{' '}
            (essays, brand writing, editorial)
          </li>
          <li>
            <span className={`italic ${halTimezone.className}`}>images</span>{' '}
            (photography, video, visual documentation)
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <span
          className={`mb-3 text-sm font-semibold text-black italic ${halTimezone.className}`}
        >
          Our services:{' '}
        </span>
        <p className="text-xs leading-relaxed text-gray-700">
          concept + strategy / brand identity / photography (digital + film) /
          art direction / editorial design / film production
        </p>
        <p className="mt-3 text-xs text-gray-700">
          Reach out to{' '}
          <a href="mailto:hello@field-log.com" className="underline">
            hello@field-log.com
          </a>{' '}
          to work with us.
        </p>
      </div>

      {/* Field Log Book Section */}
      <div>
        <h3
          className={`mb-3 text-sm font-semibold text-black ${neueHaasDisplay.className}`}
        >
          FIELDLOG 01: THE BOOK
        </h3>
        <p className="text-xs leading-relaxed text-gray-700">
          <span className="font-bold">FIELD LOG</span> is a curated chronicle of
          Latin American textile artisans—a reimagined directory where craft
          meets contemporary design. This edition explores eight
          &lsquo;talleres&rsquo; textile artisan workshops across Perú and
          Colombia, where tradition is not preserved but evolved—woven,
          stitched, and sculpted into the present.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-gray-700">
          Annick and Pedro spent a year getting to know and, vetting artisans
          who work with leather, alpaca, crochet, telar weaving, and more,
          preserving and pushing the boundaries of their craft. More than places
          of production, these workshops embody generational skill, cultural
          resilience, and pure artistry.
        </p>
      </div>

      {/* Buy the Book Section */}
      <div>
        <Link href="/shop/2">
          <button
            className={`cursor-none border-2 border-black bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white ${neueHaasDisplay.className}`}
          >
            BUY THE BOOK
          </button>
        </Link>
      </div>

      {/* Footer - Only shown when showFooter is true */}
      {showFooter && (
        <div className="mt-8 border-t border-gray-300 pt-8">
          <div className="flex flex-col space-y-2 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <span className={neueHaasDisplay.className}>FIELD LOG LLC</span>
            <span className={neueHaasDisplay.className}>
              ESTABLISHED c. 2025
            </span>
            <a
              href="https://instagram.com/fieldlog"
              className={`transition-colors hover:text-gray-700 ${neueHaasDisplay.className}`}
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
