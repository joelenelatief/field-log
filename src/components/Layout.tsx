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
      {/* Fixed Header */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-[#F6F7EF]">
        <Header />
      </div>

      <div className="flex pt-[60px]">
        {/* Fixed Left Sidebar - Hidden on mobile for shop, about, and home pages */}
        <div
          className={`fixed top-[60px] bottom-0 left-0 w-80 overflow-y-auto border-r border-black bg-[#F6F7EF] p-8 ${
            isShopOrAbout || isHomePage ? 'max-lg:hidden' : ''
          }`}
        >
          <AboutSection />
        </div>

        {/* Main Content Area */}
        <main
          className={`flex-1 bg-[#F6F7EF] ${isShopOrAbout || isHomePage ? 'lg:ml-80' : ''}`}
        >
          {children}

          {/* About Section at Bottom for Home Page on Mobile */}
          {isHomePage && (
            <div className="border-t border-gray-300 bg-[#F6F7EF] sm:p-8 lg:hidden">
              <AboutSection showFooter={true} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
