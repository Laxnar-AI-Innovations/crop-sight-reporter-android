
import React from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LoadingState: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center h-full py-16 px-4">
      <Loader2 className="h-12 w-12 text-cropGreen animate-spin mb-4" />
      <h3 className="text-xl font-medium mb-2">{t('analyzing')}</h3>
      <p className="text-muted-foreground text-center max-w-md">
        {t('aiExamining')}
      </p>
    </div>
  );
};

export default LoadingState;
