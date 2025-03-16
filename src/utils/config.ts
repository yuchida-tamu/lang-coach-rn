import Constants from 'expo-constants';

export const getConfig = () => {
  if (!Constants.expoConfig?.extra) {
    throw new Error('Config not found');
  }

  return Constants.expoConfig.extra;
};
