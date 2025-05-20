
import React from 'react';
import BottomNavigation from './BottomNavigation';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showHeader = true 
}) => {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white">
      {showHeader && <Header />}
      <main className="flex-grow overflow-y-auto overflow-x-hidden w-full pb-24 px-4">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;
