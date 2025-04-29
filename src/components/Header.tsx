import * as React from 'react';
import Link from 'next/link';
import { neueHaasDisplay } from '@/lib/fonts';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between border-b border-black p-5 text-black">
      <nav className="flex gap-8">
        <Link
          href="/"
          className={`text-md font-bold ${neueHaasDisplay.className} text-black/70`}
        >
          HOME
        </Link>
        <Link
          href="/about"
          className={`text-md font-bold ${neueHaasDisplay.className} text-black/70`}
        >
          ABOUT US
        </Link>
        <Link
          href="/shop"
          className={`text-md font-bold ${neueHaasDisplay.className} text-black/70`}
        >
          SHOP ALL
        </Link>
      </nav>
    </header>
  );
};

export default Header;
