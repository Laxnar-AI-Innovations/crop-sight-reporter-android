
import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    // Stage 0: Show company logo
    // Stage 1: Transition background color
    // Stage 2: Show app name with leaf
    // Stage 3: Fade out and call onComplete
    
    const timer1 = setTimeout(() => setAnimationStage(1), 1500);
    const timer2 = setTimeout(() => setAnimationStage(2), 3000);
    const timer3 = setTimeout(() => setAnimationStage(3), 4500);
    const timer4 = setTimeout(() => onComplete(), 5500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);
  
  return (
    <div 
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-colors duration-1500 ease-in-out ${
        animationStage < 1 ? 'bg-navy' : 'bg-cropGreen'
      }`}
    >
      {/* Company Logo */}
      <div 
        className={`transition-all duration-1000 ease-in-out ${
          animationStage >= 2 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
      >
        <img 
          src="/lovable-uploads/9c97ef2b-dcb7-4b29-92ed-e29581d617d0.png" 
          alt="Laxnar AI Innovations" 
          className="w-64 h-auto mb-8" 
        />
      </div>
      
      {/* App Name with Leaf Icon */}
      <div 
        className={`flex flex-col items-center transition-all duration-1000 ease-in-out ${
          animationStage < 2 ? 'opacity-0 translate-y-10' : 
          animationStage === 2 ? 'opacity-100 translate-y-0' : 
          'opacity-0 translate-y-0'
        }`}
      >
        <Leaf className="h-12 w-12 text-white mb-4" />
        <h1 className="text-3xl font-bold text-white">Crop Doctor</h1>
      </div>
      
      {/* Final fade out overlay */}
      <div 
        className={`absolute inset-0 bg-white transition-opacity duration-1000 ${
          animationStage === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
      />
    </div>
  );
};

export default SplashScreen;
