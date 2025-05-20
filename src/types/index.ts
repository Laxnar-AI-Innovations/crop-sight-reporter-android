
export interface CropDetectionResult {
  count: number;
  detections: Detection[];
  inference_ms: number;
}

export interface Detection {
  label: string;
  confidence: number;
  bbox: [number, number, number, number];
}

export interface AnalysisResult {
  id: string;
  imageUrl: string;
  timestamp: string;
  result: CropDetectionResult;
}
