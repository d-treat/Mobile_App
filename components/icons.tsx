import React from 'react';
import { Image, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Icon: React.FC<IconProps> = ({ name, }) => {
  const iconSource: ImageSourcePropType = getIconSource(name);

  return (
    <Image
      source={iconSource}
    //   style={[{ width: size, height: size, tintColor: color }]}
    />
  );
};

// Function to map icon names to their corresponding image sources
const getIconSource = (name: string): ImageSourcePropType => {
  switch (name) {
    case 'line':
      return require('../assets/Line.png');
    case 'settings':
      return require('../assets/Line.png');
    // Add more cases for other icons
    default:
      return require('../assets/Line.png');
  }
};

export default Icon;
