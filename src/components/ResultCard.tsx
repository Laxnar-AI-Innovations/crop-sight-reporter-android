
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Detection } from '@/types';
import { extractConditionFromLabel, formatConfidencePercentage, getConditionColor } from '@/utils/formatUtils';
import { Progress } from '@/components/ui/progress';

interface ResultCardProps {
  detection: Detection;
}

const ResultCard: React.FC<ResultCardProps> = ({ detection }) => {
  const { crop, condition } = extractConditionFromLabel(detection.label);
  const confidencePercentage = formatConfidencePercentage(detection.confidence);
  const conditionColor = getConditionColor(condition);
  
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-cropGreen-dark">{crop}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${conditionColor}`}>
            {condition}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Confidence</span>
              <span className="text-sm font-bold">{confidencePercentage}</span>
            </div>
            <Progress className="h-2" value={detection.confidence * 100} />
          </div>
          
          <div className="border-t pt-3 text-sm text-muted-foreground">
            <p className="flex justify-between">
              <span>Detection area:</span>
              <span>{detection.bbox[2].toFixed(0)} × {detection.bbox[3].toFixed(0)}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
