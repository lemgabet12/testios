import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www',
  ios: {
    // Custom iOS build path
    path: 'ios', // This assumes you have the 'ios' folder in the root of your project
  },
};

export default config;
