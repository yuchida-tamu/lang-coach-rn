declare module '@env' {
  export const API_URL: string;
  export const API_KEY: string;
  export const APP_NAME: string;
  export const APP_ENV: 'development' | 'production';
  export const ENABLE_ANALYTICS: string;
  export interface AppConfig {
    apiUrl: string;
    enableAnalytics: boolean;
    eas: {
      projectId: string;
    };
  }
}

// Extend ExpoConfig
declare module 'expo-constants' {
  interface Constants {
    expoConfig: {
      extra: AppConfig;
    };
  }
  const constants: Constants;
  export default constants;
}
