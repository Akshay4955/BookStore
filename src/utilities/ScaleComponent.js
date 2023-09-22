import {Dimensions} from 'react-native';

const assumeHeight = 760;
const assumeWidth = 360;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const scaleHeight = size => (height / assumeHeight) * size;

export const scaleWidth = size => (width / assumeWidth) * size;

export const scaleSize = size =>
  (width / assumeWidth) * (height / assumeHeight) * size;
