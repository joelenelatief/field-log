'use client';

import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isShopOrAbout =
    pathname.startsWith('/shop') || pathname.startsWith('/about');

  return (
    <div className="min-h-screen bg-[#F6F7EF]">
      <Header />
      <div className="flex">
        {/* Left Sidebar - Hidden on mobile for shop, about, and home pages */}
        <div
          className={`block w-80 overflow-y-auto border-r border-black bg-[#F6F7EF] p-8 ${
            isShopOrAbout || isHomePage ? 'max-lg:hidden' : ''
          }`}
        >
          <AboutSection />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 bg-[#F6F7EF]">
          {children}

          {/* About Section at Bottom for Home Page on Mobile */}
          {isHomePage && (
            <div className="block border-t border-gray-300 bg-[#F6F7EF] p-8 lg:hidden">
              <AboutSection />

              {/* Footer for Mobile */}
              <div className="mt-8 border-t border-gray-300 pt-8">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>FIELD LOG LLC</span>
                  <span>ESTABLISHED c. 2025.</span>
                  <a href="#" className="underline">
                    INSTAGRAM
                  </a>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
