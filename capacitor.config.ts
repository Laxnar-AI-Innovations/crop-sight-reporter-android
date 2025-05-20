
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cropdoctor.app',
  appName: 'Crop Doctor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    // Use the API URL for local development but will use bundled files on real devices
    url: 'https://be18-2409-40e3-103b-10ab-cc05-cca5-9342-a404.ngrok-free.app',
    cleartext: true
  },
  plugins: {
    Camera: {
      presentationStyle: 'fullscreen',
      permissions: ['android.permission.CAMERA']
    },
    // Enable the Capacitor HTTP plugin for external API calls
    CapacitorHttp: {
      enabled: true
    }
  },
  android: {
    // Append a custom, non-browser User-Agent for API calls
    appendUserAgent: 'CropDoctor-App/1.0',
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
    // Whitelist the API host for in-app navigation
    allowNavigation: [
      'localhost', 
      '127.0.0.1', 
      'cafricrop.loca.lt',
      'be18-2409-40e3-103b-10ab-cc05-cca5-9342-a404.ngrok-free.app'
    ],
    // Add Android-specific permissions
    permissions: [
      "android.permission.INTERNET",
      "android.permission.READ_EXTERNAL_STORAGE",
      "android.permission.WRITE_EXTERNAL_STORAGE"
    ]
  }
};

export default config;
