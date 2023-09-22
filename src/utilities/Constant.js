import {scaleHeight, scaleWidth, scaleSize} from './ScaleComponent';

export const Color = {
  backgroundColor: '#ffffff',
  data_color: '#A03037',
  black: '#0A0102',
  image_Backgorund: '#F5F5F5',
  //   activeBackgorundColor: '#5A667D',
  //   activeTintColor: '#A0B0D0',
  //   inActiveTintColor: '#D6DCE6',
  //   mediumColor: '#27292E',
  lightColor: '#9D9D9D',
  borderColor: '#E2E2E2',

  //   error: 'red',
};

export const borderWidth = {
  verySmall: 0.5,
  //   small: 0.9,
  //   medium: 2,
  //   large: 10,
  //   extralarge: 50,
};

export const margin = {
  verySmall: 5,
  small: 8,
  medium: 12,
  large: 22,
  //   modalMargin: 40,
  item_no: 27,
  extralarge: 100,
  //   headerMargin: 220,
  //   footerMargin: 320,
};
export const width = {
  //   verySmall: scaleWidth(25),
  //   small: scaleWidth(70),
  medium: scaleWidth(110),
  imageWidth: scaleWidth(100),
  BookCard: scaleWidth(158),
  //   large: scaleWidth(240),
  //   label: scaleWidth(300),
  extralarge: scaleWidth(370),
  full: scaleWidth(410),
};
export const height = {
  //   verysmall: scaleHeight(25),
  //   modalButton: scaleHeight(35),
  small: scaleHeight(40),
  //   profilePic: scaleHeight(70),
  //   medium: scaleHeight(60),
  //   large: scaleHeight(90),
  imageHeight: scaleHeight(125),
  imageContainerHeight: scaleHeight(150),
  BookCard: scaleHeight(270),
  //   modalHeight: scaleHeight(350),
  //   extralarge: scaleHeight(800),
};

export const borderRadius = {
  small: 6,
  //   large: 24,
  //   extralarge: 28,
};

export const fontSize = {
  author: scaleSize(10),
  verySmall: scaleSize(12),
  price: scaleSize(14),
  small: scaleSize(16),
  //   medium: scaleSize(20),
  //   large: scaleSize(24),
  //   extralarge: scaleSize(40),
};

export const padding = {
  small: 5,
  //   medium: 15,
};
