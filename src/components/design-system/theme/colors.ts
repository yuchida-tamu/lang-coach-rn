export const colors = {
  button: {
    primary: '#E17564',
    secondary: '#BE3144',
    tertiary: '#767676',
    disabled: '#DEDEDE',
    inverse: '#FFFFFF',
  },
  text: {
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onTertiary: '#FFFFFF',
    onDisabled: '#A1A1A1',
    onInverse: '#000000',
  },
} as const;

export type Colors = typeof colors;
