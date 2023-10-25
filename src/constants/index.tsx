import {Dimensions} from 'react-native';
import {FontFamilies, fontweights} from 'types';

import COLORS from './colors';
import IMAGES from './images';
import STORE from './store';

export const scaleFontSize = (size: number) => {
  const {width, height} = Dimensions.get('window');
  const baseWidth = 375; // iPhone 6 size
  const baseHeight = 667; // iPhone 6 size

  const scaleWidth = width / baseWidth;
  const scaleHeight = height / baseHeight;
  const scale = Math.min(scaleWidth, scaleHeight);

  return Math.ceil(size * scale);
};

export const fontWeight = {
  bold: '700' as fontweights,
  demiBold: '600' as fontweights,
  medium: '500' as fontweights,
  regular: '400' as fontweights,
};

export const fontFamilies = {
  regular: 'Poppins' as FontFamilies,
  bold: 'Poppins-Bold' as FontFamilies,
  extraBold: 'Poppins-ExtraBold' as FontFamilies,
  extraLight: 'Poppins-ExtraLight' as FontFamilies,
  light: 'Poppins-Light' as FontFamilies,
  medium: 'Poppins-Medium' as FontFamilies,
  semiBold: 'Poppins-SemiBold' as FontFamilies,
  thin: 'Poppins-Thin' as FontFamilies,
};

const constants = {
  images: IMAGES,
  colors: COLORS,
  store: STORE,
};
export const colors = COLORS;
export const images = IMAGES;
export const store = STORE;
export default constants;
