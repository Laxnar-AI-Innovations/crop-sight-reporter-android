
import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="bg-cropGreen p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-white" />
          <Link to="/" className="text-xl font-bold text-white">Crop Doctor</Link>
        </div>
        
        <div className="flex items-center">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(
                  "px-4 py-2 text-white hover:text-white/80 transition-colors"
                )}>
                  {t('home')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={cn(
                  "px-4 py-2 text-white hover:text-white/80 transition-colors"
                )}>
                  {t('about')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/treatments" className={cn(
                  "px-4 py-2 text-white hover:text-white/80 transition-colors"
                )}>
                  {t('treatments')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/library" className={cn(
                  "px-4 py-2 text-white hover:text-white/80 transition-colors"
                )}>
                  {t('library')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
