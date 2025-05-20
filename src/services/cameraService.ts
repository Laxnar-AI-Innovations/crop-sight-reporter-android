
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

export const takePicture = async (): Promise<Photo | null> => {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      promptLabelHeader: 'Take a Crop Photo',
      promptLabelPicture: 'Take Photo',
      width: 1024,
      height: 1024,
    });
    
    return image;
  } catch (error) {
    console.error('Camera error:', error);
    return null;
  }
};

export const base64toBlob = (base64Data: string, contentType = 'image/jpeg'): Blob => {
  const byteCharacters = atob(base64Data);
  const byteArrays = [];
  
  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  
  return new Blob(byteArrays, { type: contentType });
};
