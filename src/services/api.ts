
import axios from 'axios';
import { CropDetectionResult } from '@/types';

const API_URL = 'https://cropdoctor.local.lt';

export const analyzeCropImage = async (imageBlob: Blob): Promise<CropDetectionResult> => {
  try {
    const formData = new FormData();
    formData.append('img', imageBlob, 'crop_image.jpg');

    console.log('Sending image to API:', API_URL);
    const response = await axios.post(`${API_URL}/predict`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 30000, // Add a reasonable timeout
    });

    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error analyzing crop image:', error);
    
    if (axios.isAxiosError(error) && error.response?.status === 511) {
      throw new Error('Network authentication required. Please check your internet connection or try on a different network.');
    }
    
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      throw new Error('Connection timed out. Please try again later.');
    }
    
    // Show more specific error message when possible
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('API endpoint not found. Please check your connection or try again later.');
    }
    
    throw new Error('Failed to analyze image. Please try again later.');
  }
};
