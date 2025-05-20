
import React, { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import CameraButton from '@/components/CameraButton';
import EmptyState from '@/components/EmptyState';
import LoadingState from '@/components/LoadingState';
import AnalysisResults from '@/components/AnalysisResults';
import { CropDetectionResult } from '@/types';
import { takePicture, base64toBlob } from '@/services/cameraService';
import { analyzeCropImage } from '@/services/api';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<CropDetectionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleCapture = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Capture photo using Capacitor Camera
      const photo = await takePicture();
      
      if (!photo || !photo.base64String) {
        toast.error('Failed to capture image.');
        setIsLoading(false);
        return;
      }
      
      // Create image preview
      const imageDataUrl = `data:image/jpeg;base64,${photo.base64String}`;
      setImagePreview(imageDataUrl);
      
      // Convert base64 to blob for API submission
      const imageBlob = base64toBlob(photo.base64String);
      
      // Send the image to the API for analysis
      const result = await analyzeCropImage(imageBlob);
      setAnalysisResult(result);
      
      // Show appropriate toast based on result
      if (result.detections.length === 0) {
        toast.info(t('noConditions'));
      } else {
        toast.success('Analysis complete!');
      }
    } catch (error) {
      console.error('Capture error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An error occurred. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
      // Keep the image preview even if analysis failed
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <Header />
      
      <main className="flex-grow overflow-y-auto overflow-x-hidden w-full pb-28">
        {isLoading ? (
          <LoadingState />
        ) : error && imagePreview ? (
          <div className="w-full px-4 pt-4 pb-24">
            <div className="mb-6">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img 
                  src={imagePreview} 
                  alt="Captured crop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <Alert variant="destructive" className="my-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            
            <p className="text-center text-muted-foreground mt-2">
              {t('tryAgain')}
            </p>
          </div>
        ) : analysisResult && imagePreview ? (
          <AnalysisResults result={analysisResult} imagePreview={imagePreview} />
        ) : (
          <EmptyState />
        )}
      </main>
      
      <CameraButton onCapture={handleCapture} isLoading={isLoading} />
    </div>
  );
};

export default Index;
