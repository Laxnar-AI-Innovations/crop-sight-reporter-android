
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.58e57c59ebc344c58db3c91df5576d72',
  appName: 'Crop Doctor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://58e57c59-ebc3-44c5-8db3-c91df5576d72.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Camera: {
      presentationStyle: 'fullscreen',
      // Set permissions for Android
      permissions: ['android.permission.CAMERA']
    }
  }
};

export default config;
