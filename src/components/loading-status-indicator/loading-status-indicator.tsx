import React, { useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import convertColorToRGB from '../../helpers/convert-lottie-color-to-rgb';
import type { LoadingStatusIndicatorProps } from './interfaces';
import useGetLoaderJSON from './lottie/loader';
import useGetLoaderErrorJSON from './lottie/loader-error';
import useGetLoaderSuccessJSON from './lottie/loader-success';
import useDynamicStyles from './styles';

const LoadingStatusIndicator: React.FC<LoadingStatusIndicatorProps> = ({
  size = 54,
  isLoading = true,
  isSuccess = false,
  isFailed = false,
  contentContainerStyle,
  loaderColor = [0, 0, 0],
  errorColor = [0, 0, 0],
  successColor = [0, 0, 0],
}) => {
  const styles = useDynamicStyles({ size });
  const loaderRef = useRef<LottieView>(null);
  const loaderSuccessRef = useRef<LottieView>(null);
  const loaderFailedRef = useRef<LottieView>(null);

  const loaderJSON = useGetLoaderJSON(convertColorToRGB(loaderColor));
  const loaderErrorJSON = useGetLoaderErrorJSON(convertColorToRGB(errorColor));
  const loaderSuccessJSON = useGetLoaderSuccessJSON(
    convertColorToRGB(successColor)
  );

  React.useEffect(() => {
    loaderRef.current?.play();
  }, [isLoading]);

  React.useEffect(() => {
    if (isSuccess) {
      loaderSuccessRef.current?.play();
    } else {
      loaderSuccessRef.current?.reset();
    }
  }, [isSuccess]);

  React.useEffect(() => {
    if (isFailed) {
      loaderFailedRef.current?.play();
    } else {
      loaderFailedRef.current?.reset();
    }
  }, [isFailed]);

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <View style={styles.iconContainer}>
        <LottieView ref={loaderRef} style={styles.loader} source={loaderJSON} />
      </View>
      <View style={styles.iconContainer}>
        <LottieView
          loop={false}
          ref={loaderFailedRef}
          style={styles.loader}
          source={loaderErrorJSON}
        />
      </View>
      <View style={styles.iconContainer}>
        <LottieView
          loop={false}
          ref={loaderSuccessRef}
          style={styles.loader}
          source={loaderSuccessJSON}
        />
      </View>
    </View>
  );
};

export default LoadingStatusIndicator;
