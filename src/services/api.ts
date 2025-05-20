import axios from 'axios';
import { CropDetectionResult } from '@/types';

// Point at your Localtunnel URL (forwards to localhost:8000)
const API_URL = 'https://cafricrop.loca.lt';

export const analyzeCropImage = async (
  imageBlob: Blob
): Promise<CropDetectionResult> => {
  try {
    const formData = new FormData();
    formData.append('img', imageBlob, 'crop_image.jpg');

    console.log('Sending image to API:', API_URL);
    const response = await axios.post(`${API_URL}/predict`, formData, {
      headers: {
        // 1) Use the same custom UA as in Capacitor
        'User-Agent': 'CropDoctor-App/1.0',
        // 2) Instruct Localtunnel to bypass the reminder page
        'Bypass-Tunnel-Reminder': 'true',
        'Content-Type': 'multipart/form-data'
      },
      timeout: 30000
    });

    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error analyzing crop image:', error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 511) {
        throw new Error(
          'Network authentication required. Please check your connection or try on a different network.'
        );
      }
      if (error.code === 'ECONNABORTED') {
        throw new Error('Connection timed out. Please try again later.');
      }
      if (status === 404) {
        throw new Error('API endpoint not found. Please check the URL.');
      }
      if (status === 401) {
        throw new Error(
          'Authentication failed. Ensure your User-Agent header is set correctly.'
        );
      }
    }

    throw new Error('Failed to analyze image. Please try again later.');
  }
};
