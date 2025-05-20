
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16 px-4">
      <Loader2 className="h-12 w-12 text-cropGreen animate-spin mb-4" />
      <h3 className="text-xl font-medium mb-2">Analyzing your crop...</h3>
      <p className="text-muted-foreground text-center max-w-md">
        Our AI is examining your plant for diseases, deficiencies, and overall health.
      </p>
    </div>
  );
};

export default LoadingState;
