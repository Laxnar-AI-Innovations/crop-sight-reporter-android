import axios from 'axios';
import { CropDetectionResult } from '@/types';

// Use your Localtunnel subdomain here
const API_URL = 'https://cafricrop.loca.lt';  // Localtunnel URL :contentReference[oaicite:7]{index=7}

export const analyzeCropImage = async (
  imageBlob: Blob
): Promise<CropDetectionResult> => {
  try {
    const formData = new FormData();
    formData.append('img', imageBlob, 'crop_image.jpg');

    console.log('Sending image to API:', API_URL);
    const response = await axios.post(`${API_URL}/predict`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // Custom User-Agent to bypass Localtunnel reminder :contentReference[oaicite:8]{index=8}
        'User-Agent': 'CropDoctor-App/1.0'
      },
      timeout: 30000
    });

    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error analyzing crop image:', error);

    if (axios.isAxiosError(error) && error.response?.status === 511) {
      throw new Error(
        'Network authentication required. Please check your connection.'
      );
    }
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      throw new Error('Connection timed out. Please try again later.');
    }
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('API endpoint not found. Please check the URL.');
    }
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error(
        'Authentication failed. Ensure your User-Agent header is set correctly.'
      );
    }

    throw new Error('Failed to analyze image. Please try again later.');
  }
};
