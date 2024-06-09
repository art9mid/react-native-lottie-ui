import type { LottieViewProps } from 'lottie-react-native';

import type { LottieColor } from '../../helpers/convert-lottie-color-to-rgb';

export interface HeartToggleButtonProps
  extends Omit<LottieViewProps, 'ref' | 'loop' | 'source'> {
  // Indicates if the heart animation should be in its active state. Default is false.
  isActive?: boolean;

  // Color of the heart in its default (inactive) state. Should be an array of RGB values. Default is [147, 147, 147].
  color?: LottieColor;

  // Color of the heart in its active state. Should be an array of RGB values. Default is [207, 6, 6].
  activeColor?: LottieColor;
}
