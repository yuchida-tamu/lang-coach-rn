import React from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { getButtonStyles } from './ContainedButton.styles';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'inverse';
type ButtonSize = 'small' | 'medium' | 'large';

type ContainedButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;

  onPress: () => void;
};

export const ContainedButton: React.FC<ContainedButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  onPress,
}) => {
  const styles = getButtonStyles(variant, size, disabled);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.8 : 1,
        },
        style as StyleProp<ViewStyle>,
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};
