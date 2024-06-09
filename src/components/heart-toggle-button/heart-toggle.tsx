import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';

import convertColorToRGB from '../../helpers/convert-lottie-color-to-rgb';
import type { HeartToggleButtonProps } from './interfaces';
import useGetHeartJSON from './lottie/heart';

const HeartToggle: React.FC<HeartToggleButtonProps> = ({
  isActive,
  color = [147, 147, 147],
  activeColor = [207, 6, 6],
  ...restProps
}) => {
  const heartRef = useRef<LottieView>(null);

  const heartJSON = useGetHeartJSON({
    color: convertColorToRGB(color),
    activeColor: convertColorToRGB(activeColor),
  });

  React.useEffect(() => {
    if (isActive) {
      heartRef.current?.play(40, 144);
    } else {
      heartRef.current?.play(0, 0);
    }
  }, [isActive]);

  return (
    <LottieView
      ref={heartRef}
      loop={false}
      source={heartJSON}
      speed={1}
      {...restProps}
    />
  );
};

export default HeartToggle;
