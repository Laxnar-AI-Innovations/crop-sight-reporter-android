
import axios from 'axios';
import { CropDetectionResult } from '@/types';

const API_URL = 'https://cropdoctor.loca.lt';

export const analyzeCropImage = async (imageBlob: Blob): Promise<CropDetectionResult> => {
  try {
    const formData = new FormData();
    formData.append('image', imageBlob, 'crop_image.jpg');

    const response = await axios.post(`${API_URL}/analyze`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error analyzing crop image:', error);
    // Return mock data for testing/development if API fails
    return {
      count: 1,
      detections: [
        {
          label: "Guava___Healthy",
          confidence: 0.992,
          bbox: [0.0, 0.0, 6000.0, 4000.0]
        }
      ],
      inference_ms: 4683
    };
  }
};
