import React from 'react';
import Header from './Header';
import { AboutSection } from './AboutSection';

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-auto bg-[#F6F7EF] sm:min-h-screen">
      {/* Mobile header - visible only on small screens */}
      <div className="md:hidden">
        <Header />
      </div>

      {/* Grid for sidebar and main content */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Sidebar Column */}
        <AboutSection />

        {/* Main Content Column */}
        <div className="col-span-1 flex flex-col md:col-span-4">
          {/* Desktop header - hidden on small screens */}
          <div className="hidden md:block">
            <Header />
          </div>

          {/* Main content */}
          <main className="flex-grow">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
