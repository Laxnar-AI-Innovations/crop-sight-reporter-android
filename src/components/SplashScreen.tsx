
import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    // Stage 0: Show company logo
    // Stage 1: Transition background color
    // Stage 2: Show app name with leaf (right after logo fades)
    // Stage 3: Fade out and call onComplete
    
    const timer1 = setTimeout(() => setAnimationStage(1), 1500);
    // Logo fadeout completes at around 2.5s (1.5s + 1s duration)
    const timer2 = setTimeout(() => setAnimationStage(2), 2500); 
    const timer3 = setTimeout(() => setAnimationStage(3), 4000);
    const timer4 = setTimeout(() => onComplete(), 5000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);
  
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white">
      <div 
        className="fixed inset-0 flex flex-col items-center justify-center z-50 transition-colors duration-1500 ease-in-out max-w-md mx-auto"
        style={{ 
          backgroundColor: animationStage < 1 ? '#ffffff' : '#4caf50'
        }}
      >
        {/* Company Logo with white background */}
        <div 
          className={`transition-all duration-1000 ease-in-out bg-white p-6 rounded-xl shadow-lg ${
            animationStage >= 1 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <img 
            src="/lovable-uploads/9c97ef2b-dcb7-4b29-92ed-e29581d617d0.png" 
            alt="Laxnar AI Innovations" 
            className="w-64 h-auto" 
          />
        </div>
        
        {/* App Name with Leaf Icon - positioned higher on the screen */}
        <div 
          className={`flex flex-col items-center transition-all duration-1000 ease-in-out absolute ${
            animationStage < 2 ? 'opacity-0 translate-y-10' : 
            animationStage === 2 ? 'opacity-100 translate-y-0 animate-fade-in' : 
            'opacity-0 translate-y-0'
          }`}
          style={{ top: '40%', transform: 'translateY(-50%)' }}
        >
          <Leaf className="h-12 w-12 text-white mb-4" />
          <h1 className="text-3xl font-bold text-white">Crop Doctor</h1>
        </div>
        
        {/* Final fade out overlay */}
        <div 
          className={`absolute inset-0 bg-white transition-opacity duration-1000 max-w-md mx-auto ${
            animationStage === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
        />
      </div>
    </div>
  );
};

export default SplashScreen;
