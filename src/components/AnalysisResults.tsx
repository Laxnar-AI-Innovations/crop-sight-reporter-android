
import React from 'react';
import { CropDetectionResult } from '@/types';
import ResultCard from './ResultCard';
import { Clock } from 'lucide-react';

interface AnalysisResultsProps {
  result: CropDetectionResult | null;
  imagePreview: string | null;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ result, imagePreview }) => {
  if (!result || !imagePreview) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 pt-4 pb-24">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Analysis Results</h2>
        <p className="text-muted-foreground text-sm flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>Processed in {(result.inference_ms / 1000).toFixed(2)}s</span>
        </p>
      </div>
      
      <div className="mb-6">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img 
            src={imagePreview} 
            alt="Analyzed crop" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Detected Conditions ({result.count})</h3>
        {result.detections.length === 0 ? (
          <div className="p-6 text-center bg-gray-50 rounded-lg">
            <p className="text-muted-foreground">No conditions detected.</p>
          </div>
        ) : (
          result.detections.map((detection, index) => (
            <ResultCard key={index} detection={detection} />
          ))
        )}
      </div>
    </div>
  );
};

export default AnalysisResults;
