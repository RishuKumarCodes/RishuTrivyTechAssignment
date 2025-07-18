import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const { width: screenWidth } = Dimensions.get('window');

const WaveLine = () => {
  return (
    <Svg width={screenWidth} height={34} viewBox="0 0 360 34" fill="none">
      <Path
        opacity="0.8"
        d="M0 33C140.577 -9.22761 219.414 -10.1035 360 33"
        stroke="url(#paint0_linear_7671_5)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_7671_5"
          x1="180"
          y1="1"
          x2="180"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default WaveLine;
