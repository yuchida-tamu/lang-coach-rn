import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { ButtonSize, ButtonVariant } from './ContainedButton.types';

export const getButtonStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'medium',
  disabled: boolean = false,
) => {
  const baseStyles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: disabled ? colors.button.disabled : colors.button[variant],
      borderRadius: 4,
      justifyContent: 'center',
      opacity: disabled ? 0.5 : 1,
      ...getSizeStyles(size),
    },
    text: {
      color: disabled
        ? colors.text.onDisabled
        : variant === 'inverse'
          ? colors.text.onInverse
          : colors.text.onPrimary,
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
    },
  });

  return baseStyles;
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return {
        paddingVertical: 2,
        paddingHorizontal: 4,
      };
    case 'large':
      return {
        paddingVertical: 6,
        paddingHorizontal: 12,
      };
    case 'medium':
    default:
      return {
        paddingVertical: 4,
        paddingHorizontal: 8,
      };
  }
};
