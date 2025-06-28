import React from 'react';
import Header from './Header';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F6F7EF]">
      <Header />
      <div className="flex">
        {/* Left Sidebar - Now on every page */}
        <div className="w-80 overflow-y-auto border-r border-black bg-[#F6F7EF] p-8">
          <div className="space-y-8">
            {/* Company Description */}
            <div>
              <p
                className={`text-sm leading-relaxed text-gray-800 ${neueHaasDisplay.className}`}
              >
                <span className="font-semibold text-black">FIELD LOG </span>
                {'  '}
                documents history, craft, and heritage through storytelling —
                for mediums being:{' '}
              </p>
              <ul className="mt-4 ml-4 list-disc space-y-2 text-xs text-gray-700">
                <li>
                  <span className={`italic ${halTimezone.className}`}>
                    data
                  </span>{' '}
                  (documentation, oral history, reviews)
                </li>
                <li>
                  <span className={`italic ${halTimezone.className}`}>
                    email
                  </span>{' '}
                  (essays, brand writing, editorial)
                </li>
                <li>
                  <span className={`italic ${halTimezone.className}`}>
                    images
                  </span>{' '}
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
                concept + strategy / brand identity / photography (digital +
                film) / art direction / editorial design / film production
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
                FIELD LOG 01: THE BOOK
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                <span className="font-bold">FIELD LOG</span> is a curated
                chronicle of Latin American craft meets contemporary design.
                This edition explores eight &lsquo;talleres&rsquo; local artisan
                workshops across Perú and Colombia, where tradition is not
                preserved but embodied, not frozen in time but carried into the
                present.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-gray-700">
                Annick and Pedro spent a year getting to know and, vetting
                artisans who work with leather, alpaca, crochet, tula weaving,
                and wood carving, exploring the cultural boundaries of their
                craft. More than places of production, these workshops embody
                generational skill, cultural resilience, and pure artistry.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 bg-[#F6F7EF]">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
