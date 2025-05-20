
import axios from 'axios';
import { CropDetectionResult } from '../types';
import { toast } from 'sonner';

const API_URL = "https://cropdoctor.loca.lt";

export const analyzeCropImage = async (imageFile: Blob): Promise<CropDetectionResult> => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await axios.post(`${API_URL}/analyze`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error analyzing crop image:', error);
    toast.error('Failed to analyze image. Please try again.');
    throw error;
  }
};
