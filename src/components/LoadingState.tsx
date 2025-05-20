
import React from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LoadingState: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] py-8 px-4">
      <Loader2 className="h-10 w-10 text-cropGreen animate-spin mb-4" />
      <h3 className="text-lg font-medium mb-2">{t('analyzing')}</h3>
      <p className="text-muted-foreground text-center text-sm max-w-[90%] mx-auto">
        {t('aiExamining')}
      </p>
    </div>
  );
};

export default LoadingState;
