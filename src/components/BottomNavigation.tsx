
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Info, BookOpen, Library } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-20 mobile-safe-bottom">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className="flex flex-col items-center justify-center w-1/4 py-1">
          <Home 
            className={`h-6 w-6 ${currentPath === '/' ? 'text-cropGreen' : 'text-gray-500'}`}
          />
          <span className={`text-xs mt-1 ${currentPath === '/' ? 'text-cropGreen font-medium' : 'text-gray-500'}`}>
            {t('home')}
          </span>
        </Link>
        
        <Link to="/about" className="flex flex-col items-center justify-center w-1/4 py-1">
          <Info 
            className={`h-6 w-6 ${currentPath === '/about' ? 'text-cropGreen' : 'text-gray-500'}`}
          />
          <span className={`text-xs mt-1 ${currentPath === '/about' ? 'text-cropGreen font-medium' : 'text-gray-500'}`}>
            {t('about')}
          </span>
        </Link>
        
        <Link to="/treatments" className="flex flex-col items-center justify-center w-1/4 py-1">
          <BookOpen 
            className={`h-6 w-6 ${currentPath === '/treatments' ? 'text-cropGreen' : 'text-gray-500'}`}
          />
          <span className={`text-xs mt-1 ${currentPath === '/treatments' ? 'text-cropGreen font-medium' : 'text-gray-500'}`}>
            {t('treatments')}
          </span>
        </Link>
        
        <Link to="/library" className="flex flex-col items-center justify-center w-1/4 py-1">
          <Library 
            className={`h-6 w-6 ${currentPath === '/library' ? 'text-cropGreen' : 'text-gray-500'}`}
          />
          <span className={`text-xs mt-1 ${currentPath === '/library' ? 'text-cropGreen font-medium' : 'text-gray-500'}`}>
            {t('library')}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
