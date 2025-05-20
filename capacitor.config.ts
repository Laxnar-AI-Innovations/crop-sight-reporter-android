import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.58e57c59ebc344c58db3c91df5576d72',
  appName: 'Crop Doctor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://cafricrop.loca.lt',        // Point to your Localtunnel URL :contentReference[oaicite:1]{index=1}
    cleartext: true
  },
  plugins: {
    Camera: {
      presentationStyle: 'fullscreen',
      permissions: ['android.permission.CAMERA']
    },
    CapacitorHttp: {
      enabled: true
    }
  },
  android: {
    // Append a custom User-Agent so Localtunnel sees a non-browser client :contentReference[oaicite:2]{index=2}
    appendUserAgent: 'CropDoctor-App/1.0',
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
    // Whitelist your Localtunnel host for in-app navigation :contentReference[oaicite:3]{index=3}
    allowNavigation: ['localhost', '127.0.0.1', 'cafricrop.loca.lt']
  }
};

export default config;
