import React from 'react';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
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
        <h3
          className={`mb-3 text-sm font-semibold text-black ${neueHaasDisplay.className}`}
        >
          BUY THE BOOK
        </h3>
      </div>
    </div>
  );
};

export default AboutSection;
