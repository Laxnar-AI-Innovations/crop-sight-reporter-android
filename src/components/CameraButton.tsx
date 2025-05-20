
import React from 'react';
import { Button } from "@/components/ui/button";
import { Images } from 'lucide-react';

interface CameraButtonProps {
  onCapture: () => void;
  isLoading: boolean;
}

const CameraButton: React.FC<CameraButtonProps> = ({ onCapture, isLoading }) => {
  return (
    <div className="fixed bottom-24 left-0 right-0 z-10 flex justify-center mx-auto" style={{ maxWidth: '448px' }}>
      <Button 
        onClick={onCapture} 
        disabled={isLoading}
        size="lg" 
        className="rounded-full h-16 w-16 p-0 bg-cropGreen hover:bg-cropGreen-dark shadow-lg transition-all duration-200"
      >
        {isLoading ? (
          <div className="h-8 w-8 rounded-full border-4 border-white border-t-transparent animate-spin" />
        ) : (
          <Images className="h-8 w-8" />
        )}
      </Button>
    </div>
  );
};

export default CameraButton;
