
import axios from 'axios';
import { CropDetectionResult } from '@/types';

const API_URL = 'https://cropdoctor.loca.lt';

export const analyzeCropImage = async (imageBlob: Blob): Promise<CropDetectionResult> => {
  try {
    const formData = new FormData();
    formData.append('image', imageBlob, 'crop_image.jpg');

    console.log('Sending image to API:', API_URL);
    const response = await axios.post(`${API_URL}/analyze`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error analyzing crop image:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
