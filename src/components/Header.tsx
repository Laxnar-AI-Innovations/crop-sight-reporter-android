
import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="bg-cropGreen p-4 shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-white" />
          <Link to="/" className="text-xl font-bold text-white">Crop Doctor</Link>
        </div>
        
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
