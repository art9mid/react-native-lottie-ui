import type { ViewStyle } from 'react-native';

import type { LottieColor } from '../../helpers/convert-lottie-color-to-rgb';

export interface LoadingStatusIndicatorProps {
  // Height and width of the loader icons. Default: 54px.
  size?: number;

  // Indicates if the loading animation should be played. Default: true.
  isLoading?: boolean;

  // Indicates if the success animation should be played. Default: false.
  isSuccess?: boolean;

  // Indicates if the failure animation should be played. Default: false.
  isFailed?: boolean;

  // Style to apply to the container of the loading indicator. Default: undefined.
  contentContainerStyle?: ViewStyle;

  // Color of the loader in RGB format. Default: [0, 0, 0].
  loaderColor?: LottieColor;

  // Color to indicate error state in RGB format. Default: [0, 0, 0].
  errorColor?: LottieColor;

  // Color to indicate success state in RGB format. Default: [0, 0, 0].
  successColor?: LottieColor;
}
