
import React from 'react';
import { Leaf, Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EmptyState: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center h-full py-16 px-4 text-center">
      <div className="bg-green-100 p-6 rounded-full mb-6">
        <Leaf className="h-12 w-12 text-cropGreen" />
      </div>
      <h2 className="text-2xl font-bold mb-2">{t('analyzeCrops')}</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        {t('takePhoto')}
      </p>
      <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 max-w-xs">
        <Camera className="h-6 w-6 mr-2 text-gray-500" />
        <p className="text-gray-500 text-sm">{t('tapCamera')}</p>
      </div>
    </div>
  );
};

export default EmptyState;
