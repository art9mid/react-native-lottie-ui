import React from 'react';
import { StyleSheet } from 'react-native';

interface ILoadingStatusIndicatorPropsStyles {
  size: number;
}

const useDynamicStyles = ({ size }: ILoadingStatusIndicatorPropsStyles) => {
  return React.useMemo(() => {
    return StyleSheet.create({
      container: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: size,
        height: size,
      },
      iconContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
      },
      loader: {
        width: '100%',
        height: '100%',
      },
    });
  }, [size]);
};

export default useDynamicStyles;
