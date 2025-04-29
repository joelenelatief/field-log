import { halTimezone, neueHaasDisplay } from '@/lib/fonts';
import * as React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="ml-4 min-h-screen max-w-[250px] border-r border-black bg-[#F6F7EF] pr-4 max-md:my-10">
      <div className="font-hal flex items-center gap-2 py-6">
        <span
          className={`font-bold text-black/70 ${neueHaasDisplay.className}`}
        >
          FIELD
        </span>
        <div className="h-px w-full max-w-[80px] bg-black/70" />
        <span
          className={`font-bold text-black/70 ${neueHaasDisplay.className}`}
        >
          LOG
        </span>
      </div>
      <article className="mb-8 text-xs leading-4 tracking-tight text-zinc-500">
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
