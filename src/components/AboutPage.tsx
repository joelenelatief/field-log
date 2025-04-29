'use client';

import * as React from 'react';
import { halTimezone, neueHaasDisplay } from '@/lib/fonts';
import { CustomCursor } from './CustomCursor';
import { useEffect } from 'react';

const MANIFESTO = [
  'If you’re here for craft,',
  'start with respect.',
  'If you’re here for speed,',
  'you’re in the wrong book.',
  'If you want to connect with an artisan - ',
  'contact us for an introduction.',
  'Come with curiosity. ',
  'Come with care.',
  'Come with  patience. ',
  'Each taller, is not just a place of production. ',
  'Each taller, is a world.',
  'a culture.',
  'a community.',
  'We are observers, learning from the field.',
  'We are listeners.',
  'We are Field-Log.',
];

const ROMAN_NUMBERS = [
  'i.',
  'ii.',
  'iii.',
  'iv.',
  'v.',
  'vi.',
  'vii.',
  'viii.',
  'ix.',
  'x.',
  'xi.',
  'xii.',
  'xiii.',
  'xiv.',
  'xv.',
  'xvi.',
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    const textSpans = document.querySelectorAll<HTMLSpanElement>(
      '.manifesto-text-container'
    );
    const paths = document.querySelectorAll<SVGPathElement>(
      '.manifesto-underline-path'
    );

    if (textSpans.length !== paths.length) {
      console.error('Mismatch between text spans and SVG paths.');
      return;
    }

    const setupLineAnimation = (
      textSpan: HTMLSpanElement,
      path: SVGPathElement
    ) => {
      const svgElement = path.closest('svg');
      if (!svgElement) return;

      const textWidth = textSpan.offsetWidth;

      svgElement.setAttribute('viewBox', `0 0 ${textWidth} 9`);

      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length + 2}`;
    };

    textSpans.forEach((span, index) => {
      const path = paths[index];
      if (path) {
        requestAnimationFrame(() => setupLineAnimation(span, path));
      }
    });

    const handleResize = () => {
      textSpans.forEach((span, index) => {
        const path = paths[index];
        if (path) {
          requestAnimationFrame(() => {
            const svgElement = path.closest('svg');
            if (!svgElement) return;

            const textWidth = span.offsetWidth;

            svgElement.setAttribute('viewBox', `0 0 ${textWidth} 9`);

            const length = path.getTotalLength();

            path.style.strokeDasharray = `${length}`;
            if (
              Math.abs(parseFloat(path.style.strokeDashoffset || '0')) > 0.1
            ) {
              path.style.strokeDashoffset = `${length + 2}`;
            }
          });
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* <CustomCursor /> */}
      <div className="p-10">
        <div className="flex items-center justify-center gap-2">
          <h1
            className={`text-center text-4xl font-bold text-neutral-700 ${neueHaasDisplay.className}`}
          >
            ABOUT FIELD LOG.
          </h1>
          <h1
            className={`${halTimezone.className} border-b-2 border-neutral-500 text-4xl font-thin text-neutral-700 italic`}
          >
            Contact us
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p
            className={`mb-8 ${halTimezone.className} text-xl font-thin text-neutral-500 italic`}
          >
            Who we are, our values and how to work with us.
          </p>
          <div className="flex w-full flex-col gap-8 rounded-lg bg-[#EBEDDFE5] p-8 md:flex-row md:gap-16">
            <div
              className={`flex-1 border-r border-neutral-300 p-8 text-sm text-neutral-700 ${halTimezone.className}`}
            >
              <div>
                <p className="mb-4">
                  Eating the Last of the Wild is my interpretation of a lifetime
                  spent wandering in wild places, and the work being done by so
                  many to piece together a resilient fabric of nature from pole
                  to pole. It is part memoir, and part assessment of what has
                  worked, and what has not, and what we must now do to continue
                  on through a changing climate, a diminishing nature, and a
                  fragile balance of health and livelihoods.
                </p>
                <p className="mb-4">
                  The stories shared follow my journeys through many of the
                  earth's wildest places, and then use these experiences to
                  frame the story of our work to keep nature resilient.
                  Collectively, the stories provide a first person view through
                  the window of nature based solutions to show how conservation
                  happens, and why it is more essential than ever to get us
                  through our technologically obsessed twenty-first century, and
                  far beyond. stories shared follow my journeys through many of
                  the earth's wildest places, and then use these experiences to
                  frame the story of our work to keep nature resilient.
                  Collectively, the stories provide a first person view through
                  the window of nature based solutions to show how conservation
                  happens, and why it is more essential than ever to get us.
                </p>
              </div>
              <div className="mt-8 text-center text-lg italic">
                " Eating the Last of the Wild, is a wonderful collection of
                essays reflecting on his lifetime of work with nature
                conservation. "
              </div>
            </div>
            <div className="flex-1">
              <div className="flex w-full items-start justify-between md:items-center">
                <div className="mt-24 flex flex-col items-center justify-center">
                  <div className="text-left">
                    {ROMAN_NUMBERS.map((number, index) => (
                      <p
                        key={index}
                        className={`${halTimezone.className} mb-2 text-sm font-thin text-neutral-400 italic`}
                      >
                        {number}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="pr-12 text-center">
                  <div>
                    <div className="mb-2 text-center text-xl font-bold text-neutral-700">
                      MANIFESTO
                    </div>
                    <div
                      className={`${halTimezone.className} text-md mb-8 text-center text-neutral-400 italic`}
                    >
                      (How to work with us)
                    </div>
                  </div>
                  {MANIFESTO.map((line, index) => (
                    <p
                      key={index}
                      className={`${halTimezone.className} mb-2 text-sm font-thin text-neutral-800 italic`}
                    >
                      <span className="manifesto-text-container group relative inline-block pb-1 whitespace-nowrap">
                        {line}
                        <span className="absolute bottom-0 left-0 h-[9px] w-full overflow-visible">
                          <svg
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ position: 'absolute', left: 0, top: 0 }}
                          >
                            <path
                              className="manifesto-underline-path"
                              d="M1.5 6.3723C12.3448 6.3723 23.3948 7.53627 33.6257 4.38829C39.7107 2.51597 44.8112 1.8447 51.2782 1.8447C58.0232 1.8447 62.1375 6.3723 69 6.3723C76.1516 6.3723 85.6278 4.84859 92.4845 6.3723C97.1078 7.3997 103.051 6.42317 107.797 6.42317C110.693 6.42317 113.749 6.62632 116.038 4.79527C116.682 4.2804 120.923 2.76039 121.787 2.76039C126.77 2.76039 131.288 5.77501 135.98 7.33886"
                              stroke="black"
                              strokeOpacity={0.3}
                              strokeWidth="1"
                              strokeLinecap="round"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
