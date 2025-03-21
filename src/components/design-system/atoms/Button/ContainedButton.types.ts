import { PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'inverse';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ContainedButtonProps extends Omit<PressableProps, 'children'> {
  /**
   * Text to display inside the button
   */
  label: string;

  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size variant of the button
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback for when the button is pressed
   */
  onPress: () => void;
}
