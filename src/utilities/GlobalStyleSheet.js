import {StyleSheet} from 'react-native';
import * as Constant from './Constant';

const GlobalStylesheet = () => {
  return StyleSheet.create({
    screen_container: {
      flex: 1,
      backgroundColor: Constant.Color.backgroundColor,
    },
    home_header: {
      flexDirection: 'row',
      height: Constant.height.small,
      width: Constant.width.full,
      marginTop: Constant.margin.large,
      padding: Constant.padding.small,
      alignItems: 'center',
      borderRadius: Constant.borderRadius.small,
    },
    wishlist_header: {
      flexDirection: 'row',
      height: Constant.height.small,
      width: Constant.width.full,
      padding: Constant.padding.small,
      alignItems: 'center',
      borderRadius: Constant.borderRadius.small,
    },
    header_icon: {
      marginLeft: Constant.margin.large,
      color: Constant.Color.data_color,
    },
    home_text: {
      fontFamily: 'Lato',
      fontSize: Constant.fontSize.medium,
      marginLeft: Constant.margin.large,
      color: Constant.Color.black,
    },
    home_text_box: {
      flexDirection: 'row',
    },
    items_no: {
      fontFamily: 'Lato',
      fontWeight: '500',
      fontSize: Constant.fontSize.verySmall,
      color: Constant.Color.lightColor,
      marginLeft: Constant.margin.small,
      marginTop: Constant.margin.small,
    },
    books: {
      flexDirection: 'row',
    },
    backIcon: {
      marginTop: Constant.margin.large,
      marginLeft: Constant.margin.large,
    },
  });
};

export default GlobalStylesheet;
