
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
    },
    // Add network permissions to make external API calls
    CapacitorHttp: {
      enabled: true
    }
  },
  android: {
    appendUserAgent: 'CropDoctor/1.0',
    // Allow cleartext traffic to various domains
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
    // Explicitly allow connections to localhost and the API domains
    allowNavigation: ['localhost', '127.0.0.1', '6d69-2409-40e3-3a-d305-8d73-955d-248f-d325.ngrok-free.app', 'par-firms-job-combines.trycloudflare.com', 'laxnarcropdoctor.loca.lt', '6ae2-2409-40e3-103b-10ab-cc05-cca5-9342-a404.ngrok-free.app', 'cafricrop.loca.lt']
  }
};

export default config;
