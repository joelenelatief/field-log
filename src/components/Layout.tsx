import React from 'react';
import Header from './Header';
import { AboutSection } from './AboutSection';

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F6F7EF]">
      {/* Grid now contains both sidebar and main content (with header) */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Sidebar Column */}
        {/* Reinstate responsive classes and column span */}
        <AboutSection />

        {/* Main Content Column */}
        {/* Reinstate responsive classes and column span */}
        <div className="col-span-1 md:col-span-4">
          {/* Place Header here, above the children */}
          <Header />
          {/* Render the page content below the header */}
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
