import React from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { getButtonStyles } from './ContainedButton.styles';
import { ContainedButtonProps } from './ContainedButton.types';

export const ContainedButton: React.FC<ContainedButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onPress,
  style,
  ...props
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
      {...props}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};
