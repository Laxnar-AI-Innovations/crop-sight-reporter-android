
import React from 'react';
import { Leaf, Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EmptyState: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] py-8 px-4 text-center">
      <div className="bg-green-100 p-4 rounded-full mb-4">
        <Leaf className="h-8 w-8 text-cropGreen" />
      </div>
      <h2 className="text-xl font-bold mb-2">{t('analyzeCrops')}</h2>
      <p className="text-muted-foreground text-sm max-w-[280px] mb-6">
        {t('takePhoto')}
      </p>
      <div className="flex items-center justify-center bg-gray-100 rounded-lg p-3 max-w-[220px]">
        <Camera className="h-5 w-5 mr-2 text-gray-500" />
        <p className="text-gray-500 text-xs">{t('tapCamera')}</p>
      </div>
    </div>
  );
};

export default EmptyState;
