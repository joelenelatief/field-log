'use client';

import { halTimezone, neueHaasDisplay } from '@/lib/fonts';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const AboutSection: React.FC = () => {
  // Create a ref for the divider line only
  const dividerLineRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  // Animation effect that runs on component mount
  useEffect(() => {
    // Animate the divider line
    if (dividerLineRef.current) {
      gsap.set(dividerLineRef.current, { width: 0 });
      gsap.to(dividerLineRef.current, {
        width: '100%',
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.3,
      });
    }

    // Animate just the border, not the opacity of the section
    if (borderRef.current) {
      // Create a separate element for the border animation
      const borderElement = document.createElement('div');
      borderElement.style.position = 'absolute';
      borderElement.style.top = '0';
      borderElement.style.right = '0';
      borderElement.style.bottom = '0';
      borderElement.style.width = '1px';
      borderElement.style.backgroundColor = 'black';
      borderElement.style.opacity = '0.2';
      borderElement.style.transform = 'scaleY(0)';
      borderElement.style.transformOrigin = 'top';

      // Append it to the section
      borderRef.current.appendChild(borderElement);

      // Animate it
      gsap.to(borderElement, {
        scaleY: 1,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.5,
      });
    }
  }, []);

  return (
    <section
      ref={borderRef}
      className="border-opacity-20 relative ml-4 min-h-screen bg-[#F6F7EF] pr-8 max-md:my-10"
    >
      <div className="font-hal flex items-center gap-1 py-6">
        <span
          className={`font-extrabold text-black/70 ${neueHaasDisplay.className}`}
        >
          FIELD
        </span>
        <div ref={dividerLineRef} className="h-px max-w-[60px] bg-black/70" />
        <span
          className={`font-extrabold text-black/70 ${neueHaasDisplay.className}`}
        >
          LOG
        </span>
      </div>
      <article className="mb-8 text-sm leading-4 tracking-tight text-zinc-500">
        <p className="mb-4">
          FIELD LOG is a curated chronicle of Latin American textile artisans—a
          reimagined directory where craft meets contemporary design. This
          edition explores eight &quot;talleres&quot; texile artisan workshops
          across Perú and Colombia, where tradition is not preserved but
          evolved—woven, stitched, and sculpted into the present.
        </p>
        <p className="mb-4">
          Annick and Pedro spent a year getting to know and, vetting artisans
          who work with leather, alpaca, crochet, telar weaving, and more,
          preserving and pushing the boundaries of their craft. More than places
          of production, these workshops embody generational skill, cultural
          resilience, and pure artistry.
        </p>
        <p>
          This book is not just an archive; it is an invitation to immerse in
          textile craft and artistry as it exists today.
        </p>
      </article>
      <div className="text-xs">
        <div className="mb-2.5">
          <span
            className={`font-bold text-black/70 ${neueHaasDisplay.className}`}
          >
            Founder + Chief Creative Officer:
          </span>
          <br />
          <span className={`text-black/50 italic ${halTimezone.className}`}>
            Annick Maria Saralegui Bedoya
          </span>
        </div>
        <div className="mb-2.5">
          <span
            className={`font-bold text-black/70 ${neueHaasDisplay.className}`}
          >
            Lead Creative Director + Photographer:
          </span>
          <br />
          <span className={`text-black/50 italic ${halTimezone.className}`}>
            Pedro Pablo Uribe Arenas
          </span>
        </div>
      </div>
    </section>
  );
};
