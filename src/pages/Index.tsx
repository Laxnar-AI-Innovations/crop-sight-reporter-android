
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

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<CropDetectionResult | null>(null);

  const handleCapture = async () => {
    try {
      setIsLoading(true);
      
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
        toast.info('No crop conditions detected.');
      } else {
        toast.success('Analysis complete!');
      }
    } catch (error) {
      console.error('Capture error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow overflow-auto">
        {isLoading ? (
          <LoadingState />
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
