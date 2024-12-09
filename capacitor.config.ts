import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www',
  ios: {
    path: '/Users/ionic-cloud-team/builds/lemgabet12/testios', // Custom iOS build path
  },
};

export default config;
