import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.58e57c59ebc344c58db3c91df5576d72',
  appName: 'Crop Doctor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    // Load your app from the Localtunnel endpoint
    url: 'https://cafricrop.loca.lt',
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
    // Append a custom, non-browser User-Agent so Localtunnel skips its reminder page
    appendUserAgent: 'CropDoctor-App/1.0',
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
    // Whitelist the Localtunnel host for in-app navigation
    allowNavigation: ['localhost', '127.0.0.1', 'cafricrop.loca.lt']
  }
};

export default config;
