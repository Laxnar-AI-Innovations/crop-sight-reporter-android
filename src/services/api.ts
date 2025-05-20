import axios from 'axios';
import { CropDetectionResult } from '@/types';

// Point at your Localtunnel URL
const API_URL = 'https://cafricrop.loca.lt';  // ← FIXED subdomain :contentReference[oaicite:1]{index=1}

export const analyzeCropImage = async (
  imageBlob: Blob
): Promise<CropDetectionResult> => {
  try {
    const formData = new FormData();
    formData.append('img', imageBlob, 'crop_image.jpg');

    console.log('Sending image to API:', API_URL);
    const response = await axios.post(`${API_URL}/predict`, formData, {
      headers: {
        // 1) Non-browser User-Agent to signal API client :contentReference[oaicite:2]{index=2}
        'User-Agent': 'CropDoctor-App/1.0',
        // 2) Bypass header so Localtunnel skips the reminder :contentReference[oaicite:3]{index=3}
        'Bypass-Tunnel-Reminder': 'true',
        'Content-Type': 'multipart/form-data',
      },
      timeout: 30000,
    });

    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error analyzing crop image:', error);

    // You can keep your existing error-handling branches
    if (axios.isAxiosError(error) && error.response?.status === 511) {
      throw new Error(
        'Network authentication required. Please check your connection or try on a different network.'
      );
    }
    // …etc.
    throw error;
  }
};
